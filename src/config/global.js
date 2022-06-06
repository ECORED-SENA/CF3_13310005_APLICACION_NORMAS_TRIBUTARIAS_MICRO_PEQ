export default {
  global: {
    componenteFormativo:
      'La micro y pequeña empresa y el régimen sancionatorio',
    descripcionCurso:
      'En este documento se dan a conocer cuáles son las posibles sanciones vigentes para aquellos responsables tributarios que incumplan con normativas e impuestos declarados, o que debieron declararse, ante los entes pertinentes a los casos. Adicionalmente, trataremos los beneficios y alivios a los cuales se pueden acoger los contribuyentes en determinados casos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
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
        titulo: 'Régimen sancionatorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Principios del régimen sancionatorio en tributarios',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Sanciones tributarias',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Normatividad vigente en sanciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Alivios y beneficios tributarios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Evasión tributaria',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
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
      texto:
        'Actualícese video. (2021). Régimen sancionatorio por la omisión de activos, defraudación fiscal o evasión tributaria.',
      tipo: 'Video',
      link: 'https://youtu.be/aYtRE_jKpxo',
    },
    {
      texto:
        'Actualícese video. (2.021). Beneficios tributarios que incentivan la formalización empresarial.',
      tipo: 'Video',
      link: 'https://youtu.be/b6ycvna_S-s',
    },
    {
      texto: 'Escuela de Trabajo Social UCR. (2018). Evasión y elusión fiscal.',
      tipo: 'Video',
      link: 'https://youtu.be/tT1XjDztXQ8',
    },
    {
      texto:
        'Contabilidad y finanzas online. (2.015). Qué es la evasión y elusión de impuestos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VEfOZrcrCmQ',
    },
  ],
  glosario: [
    {
      termino: 'Activos',
      significado:
        'recurso con valor que una persona natural o jurídica posee con la intención de que genere un beneficio económico futuro.',
    },
    {
      termino: 'Bases gravables',
      significado:
        'valor sobre el cual se debe calcular un impuesto, puede ser IVA, renta, entre otros.',
    },
    {
      termino: 'Contribuyente',
      significado:
        'persona física o jurídica que debe cumplir con las obligaciones tributarias impuestas por la normativa tributaria.',
    },
    {
      termino: 'Deducción fiscal',
      significado:
        'disminución de los impuestos que un contribuyente solicita, de conformidad con las autorizaciones mencionadas en la ley.',
    },
    {
      termino: 'DIAN',
      significado:
        'Dirección de Impuestos y Aduanas Nacionales (DIAN), es una entidad adscrita al Ministerio de Hacienda, establecida como una Unidad Administrativa Especial, mediante Decreto 2117 de 1992, mediante el cual se fusionaron la Dirección de Impuestos Nacionales (DIN) con la Dirección de Aduanas Nacionales (DAN).',
    },
    {
      termino: 'Estatuto Tributario',
      significado:
        'conjunto de normas que regulan la mayoría de los aspectos formales y sustanciales del recaudo de impuestos en Colombia, que corresponde al Decreto 624 de 1989.',
    },
    {
      termino: 'Exención fiscal',
      significado:
        'derecho por el cual un hecho por el que debía pagarse un impuesto queda exonerado del mismo. Así, el contribuyente queda liberado de ese tributo de manera parcial o total por mandato de la ley.',
    },
    {
      termino: 'Multa',
      significado:
        'sanción pecuniaria (en dinero o especies) que se aplica cuando un individuo u organización infringe alguna ley o normativa.',
    },
    {
      termino: 'Retenciones',
      significado:
        'cantidad de dinero que un pagador descuenta del importe total de una factura de compra de servicios profesionales, nóminas de trabajadores y otras operaciones a título de anticipo de impuesto, que la ley exige para las partes.',
    },
    {
      termino: 'Sanción',
      significado:
        'pena que establece una ley o norma para quien la viole o la incumpla.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (2000). Ley 599 de 2000. Por medio de la cual se expide el Código Penal. (De la omisión de activos, la defraudación y la promoción de estructuras de evasión tributaria. Capítulo 12).',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0599_2000_pr017.html',
    },
    {
      referencia:
        'Congreso de Colombia. (2016). Ley 1819 de 2016. Por medio de la cual se adopta una reforma tributaria estructural, se fortalecen los mecanismos para la lucha contra la evasión y la elusión fiscal, y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=79140',
    },
    {
      referencia: 'DIAN. (2022). Beneficios tributarios y aduaneros.',
      link:
        'https://www.dian.gov.co/impuestos/reformatributaria/beneficiostributarios/Paginas/Beneficios-Tributarios.aspx',
    },
    {
      referencia: 'Gerencie.com. (2022). Sanciones tributarias.',
      link: 'https://www.gerencie.com/sanciones-tributarias.html',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1989). Decreto Ley 624 de 1989. Por el cual se expide el Estatuto Tributario de los impuestos administrados por la Dirección General de Impuesto Nacionales.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6533#:~:text=Determina%20el%20impuesto%20sobre%20la,fiducia%20mercantil%20y%20de%20trabajo',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2022). Decreto 1625. Por medio del cual se expide el Decreto Único Reglamentario en materia tributaria.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=83233',
    },
    {
      referencia:
        'Salazar, C. (2021). Los cinco beneficios tributarios para las Pyme aprobados en la Ley de Inversión Social. La República. ',
      link:
        'https://www.larepublica.co/economia/los-cinco-beneficios-tributarios-para-las-pyme-aprobados-en-la-ley-de-inversion-social-3251467 ',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jair Yovanny Castro Morales',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario la Granja, Espinal - Regional Tolima',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesora metodológica',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro: 'Centro de diseño y metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Julian Ramirez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lizeth Karina Manchego',
        cargo: 'Desarrollo front-end',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Emilsen Alfonso Bautista',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
