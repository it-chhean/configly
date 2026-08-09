import * as yaml from "js-yaml";
import { XMLParser, XMLBuilder } from "fast-xml-parser";

export type FormatLanguage = "Property" | "Yaml" | "Xml";

/**
 * Parses a string value into boolean, number, or raw string.
 */
function parseValue(val: string): any {
  const trimmed = val.trim();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (trimmed === "null") return null;
  if (!isNaN(Number(trimmed)) && trimmed !== "") {
    return Number(trimmed);
  }
  // Remove wrapping quotes if present
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

/**
 * Sets nested object property using array of path segments.
 * e.g., ['server', 'port'] -> obj.server.port = 8080
 */
function setDeepProperty(obj: Record<string, any>, path: string[], value: any) {
  let current = obj;
  for (let i = 0; i < path.length; i++) {
    const key = path[i];
    if (i === path.length - 1) {
      current[key] = value;
    } else {
      if (!current[key] || typeof current[key] !== "object" || Array.isArray(current[key])) {
        current[key] = {};
      }
      current = current[key];
    }
  }
}

/**
 * Parses Java/Spring-style .properties text into a nested JS object.
 */
export function parseProperties(input: string): Record<string, any> {
  const result: Record<string, any> = {};
  const lines = input.split(/\r?\n/);

  for (let line of lines) {
    line = line.trim();
    // Skip empty lines or comment lines
    if (!line || line.startsWith("#") || line.startsWith("!")) {
      continue;
    }

    // Split on first = or : separator
    const sepIndex = line.search(/[:=]/);
    if (sepIndex === -1) continue;

    const rawKey = line.slice(0, sepIndex).trim();
    const rawVal = line.slice(sepIndex + 1).trim();

    if (!rawKey) continue;

    const keySegments = rawKey.split(".").map((s) => s.trim()).filter(Boolean);
    const parsedVal = parseValue(rawVal);

    setDeepProperty(result, keySegments, parsedVal);
  }

  return result;
}

/**
 * Flattens a nested JS Object into dot-notation property key-values.
 */
export function flattenObject(
  obj: any,
  prefix = "",
  result: Record<string, any> = {}
): Record<string, any> {
  if (obj === null || obj === undefined) return result;

  if (typeof obj !== "object" || obj instanceof Date) {
    result[prefix] = obj;
    return result;
  }

  if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      flattenObject(item, `${prefix}[${index}]`, result);
    });
    return result;
  }

  for (const [key, val] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (val !== null && typeof val === "object" && !Array.isArray(val)) {
      flattenObject(val, newKey, result);
    } else if (Array.isArray(val)) {
      val.forEach((item, idx) => {
        if (typeof item === "object") {
          flattenObject(item, `${newKey}[${idx}]`, result);
        } else {
          result[`${newKey}[${idx}]`] = item;
        }
      });
    } else {
      result[newKey] = val;
    }
  }

  return result;
}

/**
 * Converts Properties string to YAML string.
 */
export function propertiesToYaml(propertiesText: string): string {
  const obj = parseProperties(propertiesText);
  if (Object.keys(obj).length === 0) return "";
  return yaml.dump(obj, { indent: 2, lineWidth: -1, noRefs: true });
}

/**
 * Converts YAML string to Properties string.
 */
export function yamlToProperties(yamlText: string): string {
  if (!yamlText.trim()) return "";
  const loaded = yaml.load(yamlText);
  if (!loaded || typeof loaded !== "object") return "";

  const flat = flattenObject(loaded);
  return Object.entries(flat)
    .map(([k, v]) => `${k}=${v}`)
    .join("\n");
}

/**
 * Converts XML string to JS Object.
 */
export function parseXml(xmlText: string): Record<string, any> {
  if (!xmlText.trim()) return {};
  const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_" });
  return parser.parse(xmlText);
}

/**
 * Converts JS Object to XML string.
 */
export function objectToXml(obj: Record<string, any>, rootTag = "configuration"): string {
  const builder = new XMLBuilder({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    format: true,
    indentBy: "  ",
  });
  // Wrap in root tag if not already wrapped
  const payload = Object.keys(obj).length === 1 ? obj : { [rootTag]: obj };
  return `<?xml version="1.0" encoding="UTF-8"?>\n` + builder.build(payload);
}

/**
 * Main converter handler supporting Property, Yaml, and Xml formats.
 */
export function convertFormat(
  input: string,
  fromLang: FormatLanguage,
  toLang: FormatLanguage
): { success: boolean; result: string; error?: string } {
  const trimmed = input.trim();
  if (!trimmed) {
    return { success: true, result: "" };
  }

  if (fromLang === toLang) {
    return { success: true, result: input };
  }

  try {
    let parsedObj: Record<string, any> = {};

    // 1. Parse input to JS object
    if (fromLang === "Property") {
      parsedObj = parseProperties(input);
    } else if (fromLang === "Yaml") {
      const loaded = yaml.load(input);
      if (loaded && typeof loaded === "object") {
        parsedObj = loaded as Record<string, any>;
      } else {
        return { success: false, result: "", error: "Invalid YAML structure" };
      }
    } else if (fromLang === "Xml") {
      parsedObj = parseXml(input);
    }

    // 2. Format JS object to target format
    let output = "";
    if (toLang === "Yaml") {
      output = yaml.dump(parsedObj, { indent: 2, lineWidth: -1, noRefs: true });
    } else if (toLang === "Property") {
      const flat = flattenObject(parsedObj);
      output = Object.entries(flat)
        .map(([k, v]) => `${k}=${v}`)
        .join("\n");
    } else if (toLang === "Xml") {
      output = objectToXml(parsedObj);
    }

    return { success: true, result: output.trim() };
  } catch (err: any) {
    return {
      success: false,
      result: "",
      error: err.message || "Failed to convert input string format.",
    };
  }
}
