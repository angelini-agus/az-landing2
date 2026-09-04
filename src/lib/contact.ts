// Pure validation logic for the contact form (ContactSection.astro).
// Kept framework-free so it can be unit tested with Vitest.

export interface ContactFormValues {
  nombre: string;
  email: string;
  institucion: string;
  tipoEspacio: string;
}

export interface ContactFieldError {
  field: 'nombre' | 'email' | 'institucion' | 'tipoEspacio';
  message: string;
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateContactForm(values: ContactFormValues): ContactFieldError[] {
  const errors: ContactFieldError[] = [];

  if (!values.nombre.trim()) {
    errors.push({ field: 'nombre', message: 'Ingresá tu nombre y apellido.' });
  }

  const email = values.email.trim();
  if (!email) {
    errors.push({ field: 'email', message: 'Ingresá tu email de contacto.' });
  } else if (!isValidEmail(email)) {
    errors.push({ field: 'email', message: 'El email no tiene un formato válido.' });
  }

  if (!values.institucion.trim()) {
    errors.push({ field: 'institucion', message: 'Ingresá el nombre de tu institución o edificio.' });
  }

  if (!values.tipoEspacio) {
    errors.push({ field: 'tipoEspacio', message: 'Seleccioná el tipo de espacio.' });
  }

  return errors;
}