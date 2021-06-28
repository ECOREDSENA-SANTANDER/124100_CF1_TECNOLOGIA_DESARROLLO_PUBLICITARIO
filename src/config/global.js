export default {
  global: {
    componenteFormativo: 'Investigación Publicitaria',
    descripcionCurso:
      'La investigación publicitaria, es un brazo de la investigación de mercados; si bien, esta tiene todos los componentes para el desarrollo de un completo diagnóstico de una empresa a nivel publicitario, se hace indispensable referir los datos e información que a nivel de comunicación y promoción requiere una empresa para el desarrollo de las estrategias que atañen esta materia.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Antecedentes de investigación de mercados',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Variables del mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '¿Qué es una variable del mercado?',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Variables externas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Variables internas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Recolección de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de investigación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Fuentes de información',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Técnicas de recolección de información',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Matrices de diagnóstico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Matriz de Ansoff',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Matriz BCG',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Matriz de competitividad',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Matriz DOFA',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Proceso de investigación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Identificación del problema',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Metodología',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Recolección de datos',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Análisis de información',
            hash: 't_5_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.5',
            titulo: 'Conclusiones',
            hash: 't_5_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.6',
            titulo: 'Estrategias',
            hash: 't_5_6',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
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
  referencias: [
    {
      referencia:
        'Kotler, P. & Armstrong, G. (2003). Fundamentos de Mercadotecnia. McGraw Hill. Mauborgne, R., &.',
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
        'Pastor, F., Guijarro, J., Espinosa, P. y Sánchez. A. (2003). Técnico en Publicidad. Cultural SA.',
    },
    {
      referencia:
        'Prieto, J. E (2013). Investigación de Mercados. Ecoe Ediciones.',
    },
    {
      referencia:
        'Vilajoana, A., Jiménez, M., González, Z. y Vila, J. (2014). ¿Cómo diseñar una campaña de publicidad? Editorial UOC.',
    },
  ],
  glosario: [
    {
      termino: 'DOFA',
      significado:
        'es un instrumento de diagnóstico empresarial que nos permite aprovechar las fortalezas y oportunidades para vencer las debilidades y evitar las amenazas.',
    },
    {
      termino: 'Base de datos',
      significado:
        'es un compendio de información ordenada y almacenada de acuerdo a un conjunto de datos.',
    },
    {
      termino: 'Benchmarking',
      significado:
        'medición y comparación de las operaciones o los procesos internos de la organización con otras empresas que realizan procesos similares.',
    },
    {
      termino: 'Brainstorming',
      significado:
        'también llamada tormenta de ideas, todo un clásico en las técnicas grupales para generar ideas.',
    },
    {
      termino: 'Competencia',
      significado:
        'empresas que fabrican y comercializan productos o servicios que satisfacen las mismas necesidades de una organización en particular.',
    },
    {
      termino: 'Eyetracking',
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
  complementario: [
    {
      texto:
        'Merino, M. J. y Pintado, T. (2015). La investigación de mercados, claves para conocer los insights del consumidor.',
      tipo: 'Libro Biblioteca SENA',
      link: 'https://cutt.ly/iyR0A0n',
    },
    {
      texto: 'Prieto, J. E (2013). Investigación de Mercados.',
      tipo: 'Libro Biblioteca SENA',
      link: 'https://cutt.ly/UyR0LfW',
    },
    {
      texto:
        'Vilajoana, A., Jiménez, M., González, Z. y Vila, J. (2014). ¿Cómo diseñar una campaña de publicidad?',
      tipo: 'Libro Biblioteca SENA',
      link: 'https://cutt.ly/PyR0VJB',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
