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
      texto: 'Correa D. (2020). <em>Impuestos en Colombia</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-p6FCB0p3o0&t=268s',
    },
    {
      texto:
        'Actualícese Video (2021). <em>Nueva reforma tributaria de los colombianos: novedades</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=f2y8vKfyh0Q',
    },
  ],
  glosario: [
    {
      termino: 'Estatuto tributario (E.T.)',
      significado:
        'El estatuto tributario es considerado la máxima autoridad en materia de impuestos en Colombia, allí se reflejan la gran mayoría de normas tanto formales, como de fondo relacionadas con el recaudo tributario.',
    },
    {
      termino: 'ICA',
      significado:
        'También conocido como Impuesto de Industria y Comercio es una obligación municipal que se genera a partir de la ejecución de labores de industria, comercio o servicios generados en Bogotá o cualquier ciudad del país donde aplique, en las que directa o indirectamente se desarrollan de manera continua o eventual, con o sin establecimiento comercial.',
    },
    {
      termino: 'Persona natural',
      significado:
        'La persona natural se puede entender como aquel ser humano que desea desempeñar y ejercer obligaciones a título personal. Tomando en cuenta la manera como se constituye la empresa. Así, asume todas y cada una de las obligaciones que a futuro se le vayan a presentar.',
    },
    {
      termino: 'Persona jurídica',
      significado:
        'Una persona jurídica es una organización o grupo de personas naturales a la que la ley reconoce personalidad independiente y diferenciada de la de cada uno de sus miembros o componentes, capaz de ejercer derechos y contraer obligaciones, y de ser representada judicial y extrajudicialmente.',
    },
    {
      termino: 'RUT',
      significado:
        'Quiere decir registro único tributario, y se convierte en el documento de identificación de los contribuyentes.',
    },
    {
      termino: 'Régimen',
      significado:
        'Son características establecidas para la explicación de la tributación.',
    },
    {
      termino: 'Sanción',
      significado:
        'Es una multa monetaria para el desacato de las obligaciones tributarias.',
    },
  ],
  referencias: [
    {
      referencia:
        '<em>Ley 590 de 2000. Por la cual se dictan disposiciones para promover el desarrollo de las micro, pequeñas y medianas empresa</em>. Función pública (2000). 10 de julio de 2000. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=12672#:~:text=Cr%C3%A9ase%20el%20Fondo%20Colombiano%20de,es%20la%20financiaci%C3%B3n%20de%20proyectos%2C',
    },
    {
      referencia: 'Dian. (2021). <em>Formularios e instructivos</em>. ',
      link:
        'https://www.dian.gov.co/atencionciudadano/formulariosinstructivos/Paginas/default.aspx',
    },
    {
      referencia:
        'Decreto ley 624 de 1989. [Presidente de la República de Colombia]. Por el cual se expide el Estatuto Tributario de los impuestos administrados por la Dirección General de Impuesto Nacionales. Marzo 30 de 1989. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6533#:~:texto=Determina%20el%20impuesto%20sobre%20la,fiducia%20mercantil%20y%20de%20trabajo',
    },
    {
      referencia:
        'Decreto 1625 de 2016. [Presidente de la República de Colombia]. Por medio del cual se expide el Decreto Único Reglamentario en materia tributaria. Octubre 11 de 2016. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=83233',
    },
    {
      referencia:
        '<em>Decreto 1415 de 2018</em>. [Presidente de la República de Colombia]. Por el cual se modifica parcialmente el Capítulo 2 Título 1 Parte 6 del Libro 1 del Decreto 1625 de 2016 Único Reglamentario en Materia Tributaria. Agosto 3 de 2018. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=87868',
    },
    {
      referencia:
        'Garzón Giraldo & asociados. (2018). <em>Cinco Aspectos Clave Que Todo Contador Debe Conocer Sobre Impuestos</em>. ',
      link:
        'https://garzongiraldo.com.co/5-aspectos-clave-que-todo-contador-debe-conocer-sobre-impuestos/',
    },
    {
      referencia:
        '<em>Decreto 957 de 2.019</em>. [Ministerio de Comercio, Industria y Turismo]. Por el cual se adiciona el capítulo 13 al Título 1 de la Parte 2 del Libro 2 del Decreto 1074 de 2015, Decreto Único del Sector Comercio, Industria y Turismo y se reglamenta el artículo 2° de la Ley 590 de 2000, modificado por el artículo 43 de la Ley 1450 de 2011. ',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20957%20DEL%2005%20DE%20JUNIO%20DE%202019.pdf',
    },
    {
      referencia: 'Procolombia. (2022). <em>Impuestos en Colombia</em>. ',
      link:
        'https://investincolombia.com.co/es/como-invertir/impuestos-en-colombia',
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
        nombre: 'Silvia Milena Sequeda Cárdenas',
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
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mayerly Pérez Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Maria Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
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
