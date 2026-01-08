/***************************************************
 * data.js
 * Aquí registras:
 * 1) El BACKEND_URL de Apps Script (para guardar firma)
 * 2) Los pacientes (tokens únicos)
 * 3) Los 6 documentos (5 PDFs + 1 Historia Clínica editable)
 ***************************************************/

// ✅ PASO A: pega aquí la URL de tu Apps Script (cuando lo creemos)
const BACKEND_URL = "https://script.google.com/macros/s/AKfycbygICnYmnRo91EG_RWAdE8ZfzNe2FviFOj9YWcyH4_jfDcpHlhWcnFNAPQk8wo5uAghRQ/exec";

// ✅ PASO B: aquí registras pacientes
// Cada paciente tiene un TOKEN (único)
// Su link será:
// https://TUUSUARIO.github.io/portal-consentimientos/?t=TOKEN

const PATIENTS = {

  // ✅ EJEMPLO DE PACIENTE (DEMO)
  "DEMO123456": {
    name: "Paciente Demo",
    docs: [

      // ✅ 5 DOCUMENTOS PDF (solo lectura + firma)
      {
        title: "Indicación Check UP",
        type: "pdf",
        url: "https://drive.google.com/file/d/1x2hJTXTJJ21BqvlPrcO1fFziQzyfP7U3/preview",
        signed: false
      },
      // ✅ 6° DOCUMENTO = HISTORIA CLÍNICA (editable dentro del portal)
      {
        title: "Historia Clínica Check Up",
        type: "form",
        signed: false
      }
      { title: "Aviso de Privacidad", type: "form", template: "aviso_privacidad", signed: false },
{ title: "Consentimiento Mastografía", type: "form", template: "consentimiento_masto", signed: false },
{ title: "Consentimiento Recto", type: "form", template: "consentimiento_recto", signed: false },
{ title: "Historia Clínica Check Up", type: "form", template: "historia_clinica", signed: false }
    ]
  }

  /***************************************************
   * ✅ AGREGAR MÁS PACIENTES (COPIAS ESTE BLOQUE)
   ***************************************************
  
  "TOKEN123ABC": {
    name: "Juan Pérez",
    docs: [
      { title: "Consentimiento General", type:"pdf", url:"https://drive.google.com/file/d/ID_PDF1/preview", signed:false },
      { title: "Aviso de Privacidad", type:"pdf", url:"https://drive.google.com/file/d/ID_PDF2/preview", signed:false },
      { title: "Consentimiento Anestesia", type:"pdf", url:"https://drive.google.com/file/d/ID_PDF3/preview", signed:false },
      { title: "Consentimiento Cirugía", type:"pdf", url:"https://drive.google.com/file/d/ID_PDF4/preview", signed:false },
      { title: "Alta Voluntaria", type:"pdf", url:"https://drive.google.com/file/d/ID_PDF5/preview", signed:false },
      { title: "Historia Clínica Check Up", type:"form", signed:false }
    ]
  }

  ***************************************************/
};
