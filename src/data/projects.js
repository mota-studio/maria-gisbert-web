
import proyectosOriginales from './proyectos-maria.json';

// Convierte las imágenes de WordPress a rutas locales.
// También acepta imágenes que ya tienen la ruta definitiva.
function convertirRutaImagen(imagen) {
  if (!imagen) return '';

  // Si ya es una ruta local, la dejamos como está.
  if (imagen.startsWith('/images/')) {
    return imagen;
  }

  // Si es una URL antigua de WordPress, la convertimos.
  if (imagen.startsWith('http://') || imagen.startsWith('https://')) {
    const url = new URL(imagen);
    const ruta = url.pathname.split('/wp-content/uploads/')[1];

    if (ruta) {
      return `/images/projects/${decodeURIComponent(ruta)}`;
    }
  }

  return imagen;
}

// Obtiene el slug, tanto de URLs originales como de rutas locales.
function obtenerSlug(proyecto) {
  if (proyecto.slug) return proyecto.slug;

  if (!proyecto.enlace) return '';

  const ruta = new URL(proyecto.enlace, 'http://localhost').pathname;

  return ruta.split('/').filter(Boolean).pop() || '';
}

// Datos de proyectos para Astro.
export const projects = proyectosOriginales.map((proyecto) => ({
  title: proyecto.titulo,
  description: proyecto.descripcion,
  image: convertirRutaImagen(proyecto.imagen),
  slug: obtenerSlug(proyecto),
  categories: proyecto.categorias || [],
  titles: proyecto.titulos || {},
  descriptions: proyecto.descripciones || {}
}));
