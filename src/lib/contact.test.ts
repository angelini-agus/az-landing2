import { describe, it, expect } from 'vitest';
import { isValidEmail, validateContactForm } from './contact';

describe('isValidEmail', () => {
  it('accepts a well-formed email', () => {
    expect(isValidEmail('admin@edificio.com')).toBe(true);
  });

  it('rejects missing @', () => {
    expect(isValidEmail('adminedificio.com')).toBe(false);
  });

  it('rejects missing domain', () => {
    expect(isValidEmail('admin@')).toBe(false);
  });

  it('rejects missing TLD', () => {
    expect(isValidEmail('admin@edificio')).toBe(false);
  });

  it('rejects whitespace padding', () => {
    expect(isValidEmail(' admin@edificio.com ')).toBe(false);
  });

  it('accepts a subdomain email', () => {
    expect(isValidEmail('contacto@sub.edificio.com')).toBe(true);
  });
});

describe('validateContactForm', () => {
  const valid = {
    nombre: 'Juan Pérez',
    email: 'admin@edificio.com',
    institucion: 'Consorcio Av. Libertador 1400',
    tipoEspacio: 'consorcio',
  };

  it('returns no errors for a fully valid form', () => {
    expect(validateContactForm(valid)).toEqual([]);
  });

  it('flags an empty nombre', () => {
    const errors = validateContactForm({ ...valid, nombre: '   ' });
    expect(errors).toContainEqual({ field: 'nombre', message: 'Ingresá tu nombre y apellido.' });
  });

  it('flags an empty email', () => {
    const errors = validateContactForm({ ...valid, email: '' });
    expect(errors).toContainEqual({ field: 'email', message: 'Ingresá tu email de contacto.' });
  });

  it('flags a malformed email', () => {
    const errors = validateContactForm({ ...valid, email: 'no-es-un-mail' });
    expect(errors).toContainEqual({ field: 'email', message: 'El email no tiene un formato válido.' });
  });

  it('flags an empty institucion', () => {
    const errors = validateContactForm({ ...valid, institucion: '' });
    expect(errors).toContainEqual({ field: 'institucion', message: 'Ingresá el nombre de tu institución o edificio.' });
  });

  it('flags a missing tipoEspacio', () => {
    const errors = validateContactForm({ ...valid, tipoEspacio: '' });
    expect(errors).toContainEqual({ field: 'tipoEspacio', message: 'Seleccioná el tipo de espacio.' });
  });

  it('returns every error when all fields are invalid', () => {
    const errors = validateContactForm({
      nombre: '',
      email: 'mal',
      institucion: '',
      tipoEspacio: '',
    });
    expect(errors).toHaveLength(4);
    expect(errors.map((e) => e.field)).toEqual(['nombre', 'email', 'institucion', 'tipoEspacio']);
  });
});