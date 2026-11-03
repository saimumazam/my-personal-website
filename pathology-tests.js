const pathologyTests = [
  {sl:14, code:"441", name:"Absolute Neutrophil Count", category:"Routine", vials:"EDTA", days:0, mrp:200, extra:""},
  {sl:15, code:"24", name:"ACE (Angiotensin Converting Enzyme)", category:"Special", vials:"CLOT", days:2, mrp:1100, extra:""},
  {sl:16, code:"1712", name:"Acetylcholine Receptor (ACHR) Binding Antibody", category:"Special", vials:"CLOT", days:3, mrp:2700, extra:""},
  {sl:17, code:"306", name:"ACTH (Adrenocorticoprotic Hormone)", category:"Special", vials:"EDTA", days:1, mrp:1600, extra:""},
  {sl:18, code:"2001", name:"ACTIN", category:"Special", vials:"TISSUE", days:10, mrp:1900, extra:""},
  {sl:19, code:"351", name:"ADA (Adenosine Deaminase Activity)", category:"Routine", vials:"CLOT", days:0, mrp:650, extra:""},
  {sl:23, code:"370", name:"AFB (Z-N Stain)", category:"Routine", vials:"Container", days:1, mrp:350, extra:""},
  {sl:39, code:"550", name:"AFP (Alpha Feto Protein)", category:"Routine", vials:"CLOT", days:0, mrp:900, extra:""},
  {sl:41, code:"61", name:"Albumin (Serum)", category:"Routine", vials:"CLOT", days:0, mrp:180, extra:""},
  {sl:45, code:"22", name:"Aldolase", category:"Special", vials:"CLOT", days:4, mrp:800, extra:""},
  {sl:46, code:"132", name:"Aldosterone", category:"Special", vials:"EDTA", days:7, mrp:1800, extra:""},
  {sl:50, code:"350", name:"Allergy (Blood)", category:"Special", vials:"CLOT", days:12, mrp:2400, extra:""},
  {sl:67, code:"23", name:"ALP (Alkaline Phosphatase)", category:"Routine", vials:"CLOT", days:0, mrp:220, extra:""}
];

function renderPathologyTests(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const columns = [
    ["sl", "Sl #"],
    ["code", "Test Code"],
    ["name", "Test Name"],
    ["category", "Category"],
    ["vials", "Vials"],
    ["days", "Report Days"],
    ["mrp", "MRP"],
    ["extra", "Extra"]
  ];

  const table = document.createElement("table");
  table.className = "pathology-test-table";

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  columns.forEach(([, label]) => {
    const th = document.createElement("th");
    th.textContent = label;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  pathologyTests.forEach((test, index) => {
    const tr = document.createElement("tr");

    columns.forEach(([key]) => {
      const td = document.createElement("td");

      if (key === "extra") {
        const input = document.createElement("input");
        input.type = "text";
        input.className = "pathology-extra-input";
        input.value = test.extra;
        input.dataset.row = index;
        td.appendChild(input);
      } else {
        td.textContent = test[key];
      }

      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  target.replaceChildren(table);
    }
