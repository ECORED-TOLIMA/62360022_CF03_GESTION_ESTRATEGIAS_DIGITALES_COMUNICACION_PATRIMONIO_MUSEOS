export default {
  global: {
    Name: 'Campañas digitales para museos: ética y difusión',
    Description:
      'Este componente aborda los fundamentos para diseñar, producir, publicar y evaluar campañas digitales orientadas a la divulgación del patrimonio cultural desde los museos. Desarrolla protocolos de comunicación, edición de contenidos, selección de plataformas, planificación de publicaciones y criterios éticos para la gestión responsable de la información, con el fin de implementar estrategias de comunicación dirigidas al público objetivo.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Campañas digitales para la divulgación del patrimonio cultural',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de campaña digital en museos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Objetivos de una campaña digital cultural',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Público objetivo, audiencias y mensaje central',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Estructura general de una campaña digital',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Protocolos de comunicación digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Sentido y función de los protocolos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estructura de un protocolo de comunicación digital',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Lenguaje institucional y tono comunicativo',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Netiqueta institucional',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ética y normativa en campañas digitales para museos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Comunicación ética del patrimonio',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Derechos de autor y licencias',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Protección de datos personales y derecho de imagen',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Accesibilidad digital como responsabilidad comunicativa',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Técnicas de edición de contenido digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Edición de textos para campañas culturales',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Edición de imágenes e infografías',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Edición de audio y video',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Selección y uso de herramientas digitales para campañas',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Plataformas digitales: configuración, calendario y restricciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Selección de plataformas',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Configuración de espacios digitales',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Calendario de publicaciones de campaña',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Restricciones y normas de plataformas',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Difusión y seguimiento de la campaña digital',
        desarrolloContenidos: true,
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/62360022_CF03_CFA.pdf',
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
  glosario: [
    {
      termino: 'Accesibilidad digital',
      significado:
        'Condiciones que facilitan el acceso universal a contenidos y servicios digitales.',
    },
    {
      termino: 'Alcance',
      significado: 'Cantidad de personas que visualizan un contenido digital.',
    },
    {
      termino: 'Automatización',
      significado:
        'Programación de tareas digitales para ejecutarse sin intervención constante.',
    },
    {
      termino: 'Calendario de publicaciones',
      significado:
        'Herramienta de planificación que organiza las fechas, horarios, plataformas, formatos, responsables y objetivos de los contenidos que se publicarán durante una campaña digital.',
    },
    {
      termino: 'Campaña digital',
      significado:
        'Conjunto de acciones comunicativas planificadas para alcanzar objetivos específicos en entornos digitales.',
    },
    {
      termino: '<em>Caption</em>',
      significado: 'Texto de acompañamiento de una publicación digital.',
    },
    {
      termino: 'Contenido digital',
      significado:
        'Recurso informativo creado en formatos como texto, imagen, audio o video.',
    },
    {
      termino: 'Datos personales',
      significado:
        'Información que permite identificar o hacer identificable a una persona.',
    },
    {
      termino: 'Entorno simulado',
      significado:
        'Espacio de práctica que representa una plataforma digital real sin publicar en canales oficiales, utilizado para diseñar, visualizar y evaluar contenidos antes de su difusión definitiva.',
    },
    {
      termino: 'Interacción',
      significado:
        'Acción realizada por el público frente a un contenido, como comentar, compartir, reaccionar o preguntar.',
    },
    {
      termino: 'Licencia de uso',
      significado:
        'Autorización que establece condiciones para utilizar una obra digital.',
    },
    {
      termino: 'Llamado a la acción',
      significado:
        'Mensaje que invita al público a realizar una acción específica, como comentar, compartir, registrarse, consultar un recurso o participar en una actividad.',
    },
    {
      termino: 'Mensaje central',
      significado:
        'Idea principal que da unidad a los contenidos de una campaña.',
    },
    {
      termino: 'Métrica digital',
      significado: 'Dato utilizado para evaluar el desempeño de una campaña.',
    },
    {
      termino: 'Público objetivo',
      significado:
        'Grupo de personas al que se dirige una estrategia de comunicación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (2012). <em>Ley 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales</em>.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia:
        'Creative Commons. (s. f.). <em>Creative Commons Licenses</em>.',
      link: 'https://creativecommons.org/share-your-work/use-remix/cc-licenses/',
    },
    {
      referencia:
        'Dirección Nacional de Derecho de Autor. (s. f.). <em>DNDA</em>.',
      link: 'https://www.derechodeautor.gov.co/es',
    },
    {
      referencia:
        'Kotler, N., Kotler, P. & Kotler, W. I. (2008). <em>Museum marketing and strategy: Designing missions, building audiences, generating revenue and resources</em> (2.ª ed.). Jossey-Bass.',
    },
    {
      referencia:
        'Macnamara, J. (2018). <em>Evaluating public communication: Exploring new models, standards, and best practice</em>. Routledge.',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura. (s. f.). <em>Cultura: protegiendo nuestro patrimonio y fomentando la creatividad</em>.',
      link: 'https://www.unesco.org/es/culture',
    },
    {
      referencia: 'Shea, V. (1994). <em>Netiquette</em>. Albion Books.',
    },
    {
      referencia:
        'World Wide Web Consortium. (2024). <em>Web Content Accessibility Guidelines (WCAG) 2.2</em>.',
      link: 'https://www.w3.org/TR/WCAG22/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Dorian Sully Munera Rua',
          cargo: 'Experta temática',
          centro:
            'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
