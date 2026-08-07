"use client";

import { useState, useRef, useCallback, type FC } from "react";
import { Code2, Undo2, Maximize2, ChevronDown, Copy, Trash, ArrowLeft} from "lucide-react";
import Link from "next/link";

const LANGUAGES = ["Xml", "Property", "Yaml"] as const;
type Language = (typeof LANGUAGES)[number];

interface CursorPosition {
  line: number;
  col: number;
}

interface CodeEditorFieldProps {
  defaultLanguage?: Language;
}

const CodeEditorField: FC<CodeEditorFieldProps> = ({ defaultLanguage = "Property" }) => {
  const [code, setCode] = useState<string>("");
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [langOpen, setLangOpen] = useState<boolean>(false);
  const [cursor, setCursor] = useState<CursorPosition>({ line: 1, col: 1 });
  const [saved, setSaved] = useState<boolean>(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const updateCursor = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    const pos = el.selectionStart;
    const before = el.value.slice(0, pos);
    const lines = before.split("\n");
    setCursor({ line: lines.length, col: lines[lines.length - 1].length + 1 });
  }, []);

  const lineCount = Math.max(code.split("\n").length, 1);

  return (
    <div className="flex flex-col w-full h-[620px] bg-white text-primary border sm:not-last:border-r-0  overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center p-2 justify-between border-b bg-white text-sm text-primary shrink-0">
        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-1 cursor-pointer px-3 py-2  bg-primary  duration-300 border-r text-white"
            >
              {language}
              <ChevronDown
                size={12}
                className={`transition-transform duration-300 ${langOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>
            {langOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 w-32 bg-white cursor-pointer border shadow-lg">
                {LANGUAGES.map((l) => (
                  <div
                    key={l}
                    onClick={() => {
                      setLanguage(l);
                      setLangOpen(false);
                    }}
                    className="px-3 py-1.5 hover:bg-stone-100 text-primary"
                  >
                    {l}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500 ">
          <Copy size={15} className="cursor-pointer hover:text-primary duration-200" />
          <Trash size={15} className="cursor-pointer hover:text-primary duration-200" />
          <Undo2 size={15} className="cursor-pointer hover:text-primary duration-200" />
        </div>
      </div>

      {/* Code area - fixed height, scrolls internally instead of growing */}
      <div className="relative z-20 flex flex-1 px-3 min-h-0 overflow-y-auto scroll-smooth ">
        <textarea
          ref={textareaRef}
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            setSaved(false);
          }}
          onKeyUp={updateCursor}
          onClick={updateCursor}
          onSelect={updateCursor}
          spellCheck={true}
          wrap="ture"
          className="flex-1 resize-none bg-transparent outline-none border-none text-primary text-sm font-mono leading-6 pt-3 pb-3 pr-4"
        />
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-3 py-1 border-t bg-white text-muted font-sans shrink-0">
        <span className="text-xs">
          Ln {cursor.line}, Col {cursor.col}
        </span>
      </div>
    </div>
  );
};

const InputField: FC = () => {
  return (
    <section >
      <div className="relative w-full flex flex-col md:flex-row  gap-4 sm:gap-0">
          <CodeEditorField
            defaultLanguage="Property"
          />
          <CodeEditorField
            defaultLanguage="Yaml"
          />
      </div>
      <div className="flex justify-between py-2 bg-white">
        <div className="flex text-sm text-primary">
            <p className='flex gap-1 mt-4 text-muted items-center text-sm'>
              Want to learn more about configuration file formats? You can find out official resources
            </p>
        </div>
         <div>
            <Link
               href="/"
               className='flex gap-1 mt-4 text-primary items-center hover:underline text-sm'
            >
            Back
            </Link>
         </div>
      </div>
    </section>
  );
};

export default InputField;

