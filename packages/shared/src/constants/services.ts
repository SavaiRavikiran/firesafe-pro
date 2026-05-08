export const SERVICE_CATALOG = [
  { code: "OFFLINE_AUDIT", name: "Offline Fire Audit", priceInr: 5900, notes: "+ TADA" },
  { code: "TRAINING_A", name: "Training Type A", priceInr: 0, notes: "Quoted based on scope" },
  { code: "FIRE_LOAD", name: "Fire Load Calculation", priceInr: 41300, notes: "Fixed price" },
  { code: "HYDRAULIC", name: "Hydraulic Calculations", priceInr: 29500, notes: "Per alarm valve" },
  { code: "BOQ_BOM", name: "BOQ/BOM & Estimation", priceInr: 29500, notes: "Per alarm valve" },
  { code: "CONSULTATION", name: "Project Consultation", priceInr: 0, notes: "3% of project value" }
] as const;
