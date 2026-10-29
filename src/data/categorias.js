
import { projects } from './projects.js';

/* ==========================================
   MARÍA GISBERT — CATEGORÍAS
========================================== */

/**
 * Orden original de los proyectos en WordPress.
 * Un proyecto puede pertenecer a varias categorías.
 */

const categoriasSlugs = {
  infografias: [
    'habitar',
    'vi-porcelanosa',
    'i-matimex',
    'trans-hitos-2017',
    'dentalart',
    'proyecto-bus',
    'sarch-mini-yacht',
    'proyecto-st-f',
    'proyecto-ramnath',
    'proyecto-t',
    'proyecto-eskom',
    'proyecto-39',
    'proyecto-hn',
    'proyecto-st',
    'fit',
    'colegio-estepona',
    'auditorio',
    'proyecto-ic',
    'proyecto-naves-cross',
    'proyecto-mc',
    'proyecto-e',
    'colegio-almassora',
    'plateaux',
    'sva-al-qualaa',
    'sliding-concurso-roca-09',
    'tbo-concurso-gandia-blasco-11',
    'viii-concurso-ivvsa'
  ],

  arquitectura: [
    'habitar',
    'vi-porcelanosa',
    'i-matimex',
    'trans-hitos-2017',
    'dentalart',
    'proyecto-st',
    'fit',
    'proyecto-e',
    'colegio-almassora',
    'plateaux',
    'sva-al-qualaa',
    'viii-concurso-ivvsa'
  ],
  
  disenoGrafico: [
    'palabras-acolchadas',
    'cte-xv-semana-de-la-tecnologia',
    'master',
    'own-space',
    'madrid-olimpica-20'
  ],

  mobiliario: [
    'sliding-concurso-roca-09',
    'slot-concurso-puertas-san-rafael-12',
    'tbo-concurso-gandia-blasco-11'
  ]
};

/* ==========================================
   OBTENER PROYECTOS POR CATEGORÍA
========================================== */

/**
 * Busca los proyectos por slug y conserva
 * el orden definido en cada categoría.
 *
 * @param {string[]} slugs
 * @returns {(typeof projects)[number][]}
 */
function obtenerProyectos(slugs) {
  return slugs.map((slug) => {
    const proyecto = projects.find(
      (project) => project.slug === slug
    );

    if (!proyecto) {
      throw new Error(
        `Proyecto no encontrado: ${slug}`
      );
    }

    return proyecto;
  });
}

/* ==========================================
   EXPORTACIÓN DE CATEGORÍAS
========================================== */

export const infografias = obtenerProyectos(
  categoriasSlugs.infografias
);

export const arquitectura = obtenerProyectos(
  categoriasSlugs.arquitectura
);

export const disenoGrafico = obtenerProyectos(
  categoriasSlugs.disenoGrafico
);

export const mobiliario = obtenerProyectos(
  categoriasSlugs.mobiliario
);