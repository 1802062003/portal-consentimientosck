/***************************************************
 * data.js
 * Aquí registras:
 * 1) El BACKEND_URL de Apps Script (para guardar firma)
 * 2) Los pacientes (tokens únicos)
 * 3) Los documentos (PDF o formularios dentro del portal)
 ***************************************************/

// ✅ URL de tu Apps Script Web App
const BACKEND_URL = "https://script.google.com/macros/s/AKfycbygICnYmnRo91EG_RWAdE8ZfzNe2FviFOj9YWcyH4_jfDcpHlhWcnFNAPQk8wo5uAghRQ/exec";

// ✅ Registro de pacientes (tokens únicos)
const PATIENTS = {

  // ✅ EJEMPLO DE PACIENTE (DEMO)
  "DEMO123456": {
    name: "Paciente Demo",
    docs: [

      // ✅ Documento PDF (solo lectura)
      {
        title: "Indicación Check UP",
        type: "pdf",
        url: "https://drive.google.com/file/d/1x2hJTXTJJ21BqvlPrcO1fFziQzyfP7U3/preview",
        signed: false
      },

      // ✅ Formularios dentro del portal
      { title: "Aviso de Privacidad", type: "form", template: "aviso_privacidad", signed: false },
      { title: "Consentimiento Mastografía", type: "form", template: "consentimiento_masto", signed: false },
      { title: "Consentimiento Recto", type: "form", template: "consentimiento_recto", signed: false },
      { title: "Historia Clínica Check Up", type: "form", template: "historia_clinica", signed: false }
    ]
  }

  /***************************************************
   * ✅ PARA AGREGAR MÁS PACIENTES:
   * Copia el bloque de abajo y pégalo después del DEMO
   ***************************************************

  ,

  "TOKEN123ABC": {
    name: "Juan Pérez",
    docs: [
      { title: "Indicación Check UP", type: "pdf", url: "https://drive.google.com/file/d/ID/preview", signed: false },
      { title: "Aviso de Privacidad", type: "form", template: "aviso_privacidad", signed: false },
      { title: "Consentimiento Mastografía", type: "form", template: "consentimiento_masto", signed: false },
      { title: "Consentimiento Recto", type: "form", template: "consentimiento_recto", signed: false },
      { title: "Historia Clínica Check Up", type: "form", template: "historia_clinica", signed: false }
    ]
  }

  ***************************************************/
};
