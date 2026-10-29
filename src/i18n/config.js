
export const idiomas = ['es', 'en', 'fr', 'ca'];

export function obtenerIdioma(pathname) {
  const segmento = pathname.split('/').filter(Boolean)[0];
  return idiomas.includes(segmento) ? segmento : 'es';
}

export function quitarIdioma(pathname) {
  const partes = pathname.split('/').filter(Boolean);

  if (idiomas.includes(partes[0]) && partes[0] !== 'es') {
    partes.shift();
  }

  return partes.length ? `/${partes.join('/')}/` : '/';
}

export function rutaIdioma(pathname, idioma) {
  const ruta = quitarIdioma(pathname);
  return idioma === 'es' ? ruta : `/${idioma}${ruta}`;
}
