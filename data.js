// ================================
// CONFIGURACIÓN GENERAL
// ================================
const BACKEND_URL = "https://script.google.com/macros/s/AKfycbygICnYmnRo91EG_RWAdE8ZfzNe2FviFOj9YWcyH4_jfDcpHlhWcnFNAPQk8wo5uAghRQ/exec";

// ================================
// PACIENTES (TOKENS)
// ================================
const PATIENTS = {
  "DEMO123456": {
    name: "Paciente Demo",
    docs: [
      {
        title: "Indicación Check UP",
        type: "pdf",
        url: "https://drive.google.com/file/d/1x2hJTXTJJ21BqvlPrcO1fFziQzyfP7U3/preview",
        signed: false
      },
      { title: "Aviso de Privacidad", type: "form", template: "aviso_privacidad", signed: false },
      { title: "Consentimiento Mastografía", type: "form", template: "consentimiento_masto", signed: false },
      { title: "Consentimiento Recto", type: "form", template: "consentimiento_recto", signed: false },
      { title: "Historia Clínica Check Up", type: "form", template: "historia_clinica", signed: false }
    ]
  }
};
