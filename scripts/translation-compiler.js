import fs from "fs";
import path from "path";
import xlsx from "xlsx";
import { fileURLToPath } from "url";

// __dirname y __filename en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// === CONFIG ===
const INPUT_DIR = path.resolve(__dirname, "../public");
const OUTPUT_DIR = path.resolve(__dirname, "../src/languages");

function convertExcelToJson(fileName) {
  const excelPath = path.join(INPUT_DIR, fileName);

  if (!fs.existsSync(excelPath)) {
    console.error("❌ No se encontró el archivo:", excelPath);
    process.exit(1);
  }

  const workbook = xlsx.readFile(excelPath);

  const en = {};
  const es = {};
  const pt = {};

  workbook.SheetNames.forEach((sheetName) => {
    const sheet = workbook.Sheets[sheetName];
    const rows = xlsx.utils.sheet_to_json(sheet, { header: 1, defval: "" });

    const enSheet = {};
    const esSheet = {};
    const ptSheet = {};

    rows.forEach((row) => {
      const key = row[0]?.toString().trim();
      const enValue = row[1]?.toString().trim() || "";
      const esValue = row[2]?.toString().trim() || "";
      const ptValue = row[3]?.toString().trim() || "";

      if (key) {
        enSheet[key] = enValue;
        esSheet[key] = esValue;
        ptSheet[key] = ptValue;
      }
    });

    en[sheetName] = enSheet;
    es[sheetName] = esSheet;
    pt[sheetName] = ptSheet;
  });

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  fs.writeFileSync(path.join(OUTPUT_DIR, "en.json"), JSON.stringify(en, null, 2), "utf-8");
  fs.writeFileSync(path.join(OUTPUT_DIR, "es.json"), JSON.stringify(es, null, 2), "utf-8");
  fs.writeFileSync(path.join(OUTPUT_DIR, "pt.json"), JSON.stringify(pt, null, 2), "utf-8");

  console.log("✅ Archivos generados en:", OUTPUT_DIR);
}

// === RUN ===
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("❌ Debes pasar el nombre del archivo Excel (ej: game-rules.xlsx)");
  process.exit(1);
}

convertExcelToJson(args[0]);
