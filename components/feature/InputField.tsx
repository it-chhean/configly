"use client";

import { useState, useRef, useCallback, useEffect, type FC } from "react";
import {
  ChevronDown,
  Copy,
  Trash,
  Check,
  Download,
  Sparkles,
  ArrowRightLeft,
  AlertCircle,
  FileCode2,
} from "lucide-react";
import Link from "next/link";
import { convertFormat, type FormatLanguage } from "@/lib/converter";

const LANGUAGES: FormatLanguage[] = ["Property", "Yaml", "Xml"];

const SAMPLE_PROPERTIES = `# Server Configuration
server.port=8080
server.host=127.0.0.1
server.servlet.context-path=/api/v1

# Application Details
spring.application.name=converter-service
spring.profiles.active=development

# Database Settings
spring.datasource.url=jdbc:postgresql://localhost:5432/converter_db
spring.datasource.username=dbadmin
spring.datasource.password=secret_password
spring.datasource.hikari.maximum-pool-size=10

# Application Features
app.features.auto-save=true
app.features.max-upload-size=50`;

interface CursorPosition {
  line: number;
  col: number;
}

const InputField: FC = () => {
  const [inputCode, setInputCode] = useState<string>(SAMPLE_PROPERTIES);
  const [outputCode, setOutputCode] = useState<string>("");
  const [fromLang, setFromLang] = useState<FormatLanguage>("Property");
  const [toLang, setToLang] = useState<FormatLanguage>("Yaml");
  const [fromLangOpen, setFromLangOpen] = useState<boolean>(false);
  const [toLangOpen, setToLangOpen] = useState<boolean>(false);

  const [inputCursor, setInputCursor] = useState<CursorPosition>({ line: 1, col: 1 });
  const [outputCursor, setOutputCursor] = useState<CursorPosition>({ line: 1, col: 1 });
  const [copied, setCopied] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const inputTextareaRef = useRef<HTMLTextAreaElement>(null);
  const outputTextareaRef = useRef<HTMLTextAreaElement>(null);

  // Perform format conversion whenever inputCode, fromLang, or toLang changes
  useEffect(() => {
    if (!inputCode.trim()) {
      setOutputCode("");
      setErrorMsg(null);
      return;
    }

    const { success, result, error } = convertFormat(inputCode, fromLang, toLang);
    if (success) {
      setOutputCode(result);
      setErrorMsg(null);
    } else {
      setErrorMsg(error || "Conversion error");
    }
  }, [inputCode, fromLang, toLang]);

  const updateCursorPosition = useCallback(
    (ref: React.RefObject<HTMLTextAreaElement | null>, setCursor: (pos: CursorPosition) => void) => {
      const el = ref.current;
      if (!el) return;
      const pos = el.selectionStart;
      const before = el.value.slice(0, pos);
      const lines = before.split("\n");
      setCursor({ line: lines.length, col: lines[lines.length - 1].length + 1 });
    },
    []
  );

  const handleCopyOutput = async () => {
    if (!outputCode) return;
    try {
      await navigator.clipboard.writeText(outputCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is blocked
      const textArea = document.createElement("textarea");
      textArea.value = outputCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (!outputCode) return;
    const extMap: Record<FormatLanguage, string> = {
      Property: "properties",
      Yaml: "yaml",
      Xml: "xml",
    };
    const blob = new Blob([outputCode], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `config.${extMap[toLang]}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSwapLanguages = () => {
    const prevFrom = fromLang;
    const prevTo = toLang;
    setFromLang(prevTo);
    setToLang(prevFrom);
    if (outputCode) {
      setInputCode(outputCode);
    }
  };

  const handleLoadSample = () => {
    if (fromLang === "Property") {
      setInputCode(SAMPLE_PROPERTIES);
    } else if (fromLang === "Yaml") {
      setInputCode(
        `server:\n  port: 8080\n  host: 127.0.0.1\nspring:\n  application:\n    name: converter-service`
      );
    } else {
      setInputCode(
        `<?xml version="1.0" encoding="UTF-8"?>\n<configuration>\n  <server>\n    <port>8080</port>\n  </server>\n</configuration>`
      );
    }
  };

  const inputLineCount = Math.max(inputCode.split("\n").length, 1);
  const outputLineCount = Math.max(outputCode.split("\n").length, 1);

  return (
    <section className="w-full">
      {/* Top action bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 ">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleSwapLanguages}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-700  transition-colors"
            title="Swap source and target languages"
          >
            <ArrowRightLeft size={14} />
            Swap ({fromLang} ↔ {toLang})
          </button>
        </div>
        {errorMsg && (
          <div className="flex items-center gap-1.5 text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded">
            <AlertCircle size={14} />
            {errorMsg}
          </div>
        )}
      </div>

      {/* Editors Container */}
      <div className="relative w-full flex flex-col lg:flex-row gap-4 lg:gap-0 border border overflow-hidden bg-white">
        {/* Left Panel: Input Editor */}
        <div className="flex flex-col flex-1 h-[580px] bg-white text-primary border-b lg:border-b-0 lg:border-r overflow-hidden">
          {/* Toolbar */}
          <div className="flex items-center justify-between p-2 px-3 border-b border-stone-200 bg-white text-sm text-primary shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted mr-1">
                Source:
              </span>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setFromLangOpen((o) => !o);
                    setToLangOpen(false);
                  }}
                  className="flex items-center gap-1 cursor-pointer px-3 py-1.5 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  {fromLang}
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${fromLangOpen ? "rotate-180" : "rotate-0"}`}
                  />
                </button>
                {fromLangOpen && (
                  <div className="absolute left-0 top-full z-50 mt-1 w-32 bg-white cursor-pointer border border-stone-200 rounded shadow-lg py-1">
                    {LANGUAGES.map((l) => (
                      <div
                        key={l}
                        onClick={() => {
                          setFromLang(l);
                          setFromLangOpen(false);
                        }}
                        className={`px-3 py-1.5 text-xs hover:bg-stone-50 text-primary ${
                          fromLang === l ? "bg-stone-100" : ""
                        }`}
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3 ">
              <button
                type="button"
                onClick={() => setInputCode("")}
                className="hover:text-primary  teztransition-colors p-1 text-primary/75 cursor-pointer"
                title="Clear input"
              >
                <Trash size={15} />
              </button>
            </div>
          </div>

          {/* Textarea Area */}
          <div className="relative z-10 flex flex-1 px-3 min-h-0 overflow-y-auto bg-white">
            <textarea
              ref={inputTextareaRef}
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              onKeyUp={() => updateCursorPosition(inputTextareaRef, setInputCursor)}
              onClick={() => updateCursorPosition(inputTextareaRef, setInputCursor)}
              onSelect={() => updateCursorPosition(inputTextareaRef, setInputCursor)}
              spellCheck={false}
              wrap="soft"
              placeholder={`Paste or type your ${fromLang} configuration here...`}
              className="flex-1 resize-none outline-none border-none text-primary text-sm font-mono leading-6 pt-3 pb-3 pr-4 placeholder:text-stone-400"
            />
          </div>

          {/* Input Status bar */}
          <div className="flex items-center justify-between px-3 py-1.5 border-t bg-white text-stone-500 font-sans text-xs shrink-0">
            <span>
              Ln {inputCursor.line}, Col {inputCursor.col}
            </span>
            <span>{inputLineCount} lines</span>
          </div>
        </div>

        {/* Right Panel: Output Editor */}
        <div className="flex flex-col flex-1 h-[580px] bg-white text-muted overflow-hidden">
          {/* Output Toolbar */}
          <div className="flex items-center justify-between p-2 px-3 border-b bg-white text-sm text-primary shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted mr-1">
                Target:
              </span>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setToLangOpen((o) => !o);
                    setFromLangOpen(false);
                  }}
                  className="flex items-center gap-1 cursor-pointer px-3 py-1.5 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  {toLang}
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${toLangOpen ? "rotate-180" : "rotate-0"}`}
                  />
                </button>
                {toLangOpen && (
                  <div className="absolute left-0 top-full z-50 mt-1 w-32 bg-white cursor-pointer border rounded shadow-lg py-1 ">
                    {LANGUAGES.map((l) => (
                      <div
                        key={l}
                        onClick={() => {
                          setToLang(l);
                          setToLangOpen(false);
                        }}
                        className={`px-3 py-1.5 text-xs hover:bg-stone-50 text-primary ${
                          toLang === l ? "bg-stone-100" : ""
                        }`}
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleCopyOutput}
                disabled={!outputCode}
                className="flex items-center gap-1 hover:text-primary transition-colors p-1 text-primary/75 cursor-pointer"
                title="Copy to clipboard"
              >
                {copied ? (
                  <span className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
                    <Check size={14} /> Copied!
                  </span>
                ) : (
                  <Copy size={15} />
                )}
              </button>
              <button
                type="button"
                onClick={handleDownload}
                disabled={!outputCode}
                className="hover:text-primary transition-colors p-1 text-primary/75 cursor-pointer"
                title="Download formatted file"
              >
                <Download size={15} />
              </button>
            </div>
          </div>

          {/* Output Area */}
          <div className="relative z-10 flex flex-1 px-3 min-h-0 overflow-y-auto bg-white">
            <textarea
              ref={outputTextareaRef}
              value={outputCode}
              readOnly
              onKeyUp={() => updateCursorPosition(outputTextareaRef, setOutputCursor)}
              onClick={() => updateCursorPosition(outputTextareaRef, setOutputCursor)}
              onSelect={() => updateCursorPosition(outputTextareaRef, setOutputCursor)}
              wrap="soft"
              placeholder={`Converted ${toLang} output will appear here...`}
              className="flex-1 resize-none outline-none border-none text-primary text-sm font-mono leading-6 pt-3 pb-3 pr-4 placeholder:text-stone-400"
            />
          </div>

          {/* Output Status bar */}
          <div className="flex items-center justify-between px-3 py-1.5 border-t bg-white text-muted font-sans text-xs shrink-0">
            <span>
              Ln {outputCursor.line}, Col {outputCursor.col}
            </span>
            <div className="flex items-center gap-2">
              <FileCode2 size={13} className="text-muted" />
              <span>{outputLineCount} lines</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer reference links */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2 bg-white gap-2">
        <div className="flex text-sm text-primary">
          <p className="flex gap-1 mt-2 text-muted items-center text-xs sm:text-sm">
            Want to learn more about configuration file formats? You can find official resources.
          </p>
        </div>
        <div>
          <Link
            href="/"
            className="flex gap-1 mt-2 text-primary items-center hover:underline text-xs sm:text-sm font-medium"
          >
            Back
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InputField;