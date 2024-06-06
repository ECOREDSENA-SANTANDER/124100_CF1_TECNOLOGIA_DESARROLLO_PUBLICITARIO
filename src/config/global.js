export default {
  global: {
    componenteFormativo: 'Investigación publicitaria',
    descripcionCurso:
      'La investigación publicitaria es una rama especializada de la investigación de mercados que se enfoca específicamente en recopilar y analizar datos e información relevante para la comunicación y promoción de una empresa. Este tipo de investigación es crucial para desarrollar estrategias efectivas de publicidad, pues permite realizar un diagnóstico detallado y orientado a mejorar las actividades publicitarias de la empresa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',

        numero: '1',
        titulo: 'Antecedentes de la investigación de mercados',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',

        numero: '2',
        titulo: 'Variables del mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: '¿Qué es una variable del mercado?',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Variables externas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Variables internas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',

        numero: '3',
        titulo: 'Recolección de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de investigación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Fuentes de información',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Técnicas de recolección de información',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',

        numero: '4',
        titulo: 'Matrices de diagnóstico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Matriz de <i>Ansoff</i>',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Matriz <i>BCG</i>',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Matriz de competitividad',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Matriz <i>DOFA</i>',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',

        numero: '5',
        titulo: 'Proceso de investigación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Identificación del problema',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Metodología',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Recolección de datos',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Análisis de información',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Conclusiones',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Estrategias',
            hash: 't_5_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia:
        'Merino, M. J. y Pintado, T. (2015). La investigación de mercados, claves para conocer los insights del consumidor.',
      tipo: 'Libro Biblioteca SENA',
      link: 'https://cutt.ly/iyR0A0n',
    },
    {
      tema: '',
      referencia: 'Prieto, J. E. (2013). Investigación de Mercados.',
      tipo: 'Libro Biblioteca SENA',
      link: 'https://cutt.ly/UyR0LfW',
    },
    {
      tema: '',
      referencia:
        'Vilajoana, A., Jiménez, M., González, Z. y Vila, J. (2014). ¿Cómo diseñar una campaña de publicidad?',
      tipo: 'Libro Biblioteca SENA',
      link: 'https://cutt.ly/PyR0VJB',
    },
  ],
  glosario: [
    {
      termino: '<i>DOFA</i>',
      significado:
        'es un instrumento de diagnóstico empresarial que nos permite aprovechar las fortalezas y oportunidades para vencer las debilidades y evitar las amenazas.',
    },
    {
      termino: 'Base de datos',
      significado:
        'es un compendio de información ordenada y almacenada de acuerdo a un conjunto de datos.',
    },
    {
      termino: '<i>Benchmarking</i>',
      significado:
        'medición y comparación de las operaciones o los procesos internos de la organización con otras empresas que realizan procesos similares.',
    },
    {
      termino: '<i>Brainstorming</i>',
      significado:
        'también llamada tormenta de ideas, todo un clásico en las técnicas grupales para generar ideas.',
    },
    {
      termino: 'Competencia',
      significado:
        'empresas que fabrican y comercializan productos o servicios que satisfacen las mismas necesidades de una organización en particular.',
    },
    {
      termino: '<i>Eyetracking</i>',
      significado:
        'se encarga de extraerle información al usuario, por medio del análisis de sus movimientos oculares. ',
    },
    {
      termino: 'Fuentes de información',
      significado:
        'son todos aquellos recursos que contienen datos relevantes para un tema específico. Se dividen en dos: primarias y secundarias.',
    },
    {
      termino: 'Necesidad',
      significado:
        'la sensación de carencia física, fisiológica o psicológica común de todas las personas que conforman el mercado.',
    },
    {
      termino: 'Nicho de mercado',
      significado:
        'es un grupo reducido (de personas, empresas u organizaciones), con necesidades y/o deseos específicos, también puede estar conformado por una pequeña zona geográfica o un grupo de empresas.',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'es el lugar que ocupa un producto en la mente de los consumidores. También es la percepción que tienen los consumidores o usuarios de un producto o servicio. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Kotler, P. & Armstrong, G. (2003). Fundamentos de Mercadotecnia. McGraw Hill.',
    },
    {
      referencia: 'Kotler, P. & Armstrong, G. (2012). Marketing. Pearson.',
    },
    {
      referencia:
        'Merino, M. J. y Pintado, T. (2015). La investigación de mercados, claves para conocer los insights del consumidor. Esic editorial.',
    },
    {
      referencia:
        'Pastor, F., Guijarro, J., Espinosa, P. y Sánchez. A. (2003). Técnico en Publicidad. Cultural S.A.',
    },
    {
      referencia:
        'Prieto, J. E. (2013). Investigación de Mercados. Ecoe Ediciones.',
    },
    {
      referencia:
        'Vilajoana, A., Jiménez, M., González, Z. y Vila, J. (2014). ¿Cómo diseñar una campaña de publicidad? Editorial UOC.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor Metodológico y Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'Manuel Augusto Arias López',
          cargo: 'Instructor - Experto Temático',
          centro: 'Regional Quindío - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología ',
        },
        {
          nombre: 'Julieth Paola Vital López',
          cargo: 'Evaluadora Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria y la Comunicación Gráfica ',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>Full-Stack</i>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y Productora Multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora Para Contenidos Inclusivos y Accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
