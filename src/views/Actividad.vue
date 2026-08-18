<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  </template>
<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> fortalecer la comprensión de los conceptos relacionados con la planeación, publicación y seguimiento de campañas digitales para la divulgación del patrimonio cultural desde los museos, de acuerdo con los protocolos de comunicación, los criterios éticos y las características de los entornos digitales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué diferencia principalmente una campaña digital de una publicación aislada en redes sociales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que una campaña digital solo se publica en sitios <em>web</em> institucionales y no puede difundirse mediante redes sociales u otras plataformas digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que una campaña digital responde a una estrategia con objetivo, público, mensaje y secuencia de contenidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Que una campaña digital no requiere planificación previa porque las publicaciones pueden realizarse de manera espontánea.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que una campaña digital debe usar siempre videos extensos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado correctamente que una campaña digital requiere una planificación estratégica con objetivos, público, mensaje y una secuencia organizada de contenidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes elementos debe definirse primero para orientar las decisiones de una campaña digital cultural?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color de fondo de todas las publicaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cantidad exacta de comentarios esperados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El tipo de letra que se usará en cada imagen.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El objetivo de comunicación de la campaña.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Ha reconocido que el objetivo de comunicación orienta las decisiones y el desarrollo de una campaña digital cultural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'En una campaña digital para museos, ¿qué función cumple el mensaje central?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Dar unidad a las piezas y orientar la idea principal que se desea comunicar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reemplazar todos los textos de acompañamiento de las publicaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Definir únicamente el horario en que se publicarán los contenidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar el presupuesto técnico de la campaña.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Ha identificado que el mensaje central aporta coherencia y unidad a todas las piezas que conforman la campaña.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué debe incluir un protocolo de comunicación digital para apoyar la publicación de contenidos en un museo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el listado de programas de diseño que se usarán.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Únicamente los nombres de las personas que visitan el museo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Criterios sobre lenguaje, revisión de contenidos, tiempos de respuesta e interacción con el público.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Una lista de contraseñas, usuarios y configuraciones necesarias para ingresar a las plataformas digitales institucionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido que un protocolo de comunicación digital establece criterios para publicar contenidos de manera organizada y coherente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué práctica corresponde a la netiqueta institucional en una campaña digital?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Responder únicamente los comentarios positivos del público.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mantener un lenguaje respetuoso, moderar interacciones ofensivas y favorecer conversaciones adecuadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar todos los comentarios que planteen preguntas sobre el contenido para evitar generar nuevas conversaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Publicar mensajes sin revisar su tono ni su intención comunicativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Ha identificado que la netiqueta institucional favorece una comunicación respetuosa y una adecuada interacción con las audiencias.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es una acción adecuada para mejorar la accesibilidad de una campaña digital de museo?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Usar textos pequeños para incluir más información en cada publicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evitar descripciones para que la imagen se interprete libremente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Publicar videos sin subtítulos para simplificar la edición.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Incluir subtítulos, textos legibles, descripciones alternativas y buen contraste visual.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Ha reconocido que la accesibilidad permite que más personas puedan comprender y acceder a los contenidos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué se debe revisar al editar imágenes e infografías para una campaña patrimonial?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La claridad, pertinencia, legibilidad, contexto y relación con el mensaje de la campaña.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Solo que la imagen tenga muchos efectos visuales y elementos gráficos que llamen la atención del público.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que el diseño oculte detalles para hacerlo más abstracto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que la infografía tenga la mayor cantidad posible de texto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado los aspectos que deben revisarse para que las imágenes e infografías comuniquen el patrimonio de forma clara y pertinente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué criterio debe orientar la selección de herramientas digitales para crear piezas de campaña?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Elegir siempre la herramienta más compleja disponible para obtener resultados visualmente más elaborados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Usar únicamente aplicaciones de pago.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Seleccionar herramientas acordes con el objetivo, los formatos, las capacidades del equipo y la claridad del resultado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Cambiar de herramienta en cada publicación para variar el proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Ha reconocido que las herramientas digitales deben seleccionarse según los objetivos de la campaña y las necesidades de producción de contenidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la función principal del calendario de publicaciones de campaña?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir la revisión de los contenidos antes de publicarlos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar fechas, plataformas, formatos, objetivos, responsables, interacción esperada y seguimiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de definir un público objetivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Registrar únicamente las contraseñas de las redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Ha identificado la función del calendario de publicaciones como herramienta para planificar y organizar la difusión de la campaña.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué aspecto debe considerarse en la valoración de resultados de una campaña digital cultural?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Solo el número de publicaciones realizadas durante toda la campaña digital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Únicamente la cantidad de colores usados en las piezas gráficas para mantener uniformidad visual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo el número de personas que trabajan en el museo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las métricas básicas y aspectos cualitativos como claridad del mensaje, pertinencia del contenido e interacción con el público.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido que la valoración de una campaña debe considerar tanto las métricas como la calidad de las interacciones y la pertinencia de los contenidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué beneficio ofrece una campaña digital planificada para la divulgación del patrimonio cultural?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite comunicar mensajes sin definir objetivos y modificar la estrategia durante la publicación de los contenidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilita la organización de contenidos coherentes con el público y el propósito de comunicación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reduce la necesidad de utilizar plataformas digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limita la interacción con las audiencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Ha identificado que una campaña digital planificada facilita la organización de contenidos coherentes con el propósito de divulgación y las características del público.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Por qué es importante identificar correctamente el público objetivo antes de publicar contenidos digitales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque permite publicar el mismo contenido en todas las plataformas sin realizar adaptaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque permite seleccionar contenidos, formatos y mensajes adecuados para la audiencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Porque elimina la necesidad de planificar la campaña.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque garantiza automáticamente el éxito de la publicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Ha reconocido la importancia de identificar el público objetivo para adaptar los contenidos, formatos y mensajes de la campaña.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué característica debe tener una pieza comunicativa efectiva en una campaña digital cultural?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contener exclusivamente textos extensos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ser clara, comprensible y coherente con el mensaje de la campaña.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Utilizar la mayor cantidad posible de efectos visuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Presentar información sin relación con el patrimonio cultural.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado que una pieza comunicativa efectiva debe ser clara, comprensible y coherente con el mensaje de la campaña.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué aspecto favorece la coherencia entre las piezas de una campaña digital?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modificar el mensaje principal en cada publicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener un mensaje central común en todas las piezas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Utilizar plataformas diferentes sin planificación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambiar permanentemente el público objetivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Ha reconocido que mantener un mensaje central favorece la coherencia entre todas las publicaciones de la campaña digital.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es una buena práctica al utilizar imágenes de patrimonio cultural en medios digitales?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Publicarlas sin identificar su procedencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Editar libremente cualquier imagen encontrada en internet.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Verificar autorizaciones, reconocer las fuentes y respetar su contexto cultural.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Eliminar toda referencia a las comunidades relacionadas con el patrimonio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Ha identificado una buena práctica para el uso responsable de imágenes patrimoniales, respetando las autorizaciones, las fuentes y su contexto cultural.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué busca promover la accesibilidad en los contenidos digitales?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La reducción del número de usuarios que pueden consultar los contenidos publicados por la institución.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que diferentes personas puedan acceder y comprender la información publicada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La utilización exclusiva de videos como único formato de comunicación digital en la campaña.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La eliminación de recursos visuales en las publicaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido que la accesibilidad busca facilitar el acceso y la comprensión de los contenidos por parte de públicos diversos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Por qué es importante revisar los contenidos antes de publicarlos?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque ayuda a detectar errores de redacción, verificar la información y comprobar que el contenido cumpla los criterios definidos para la campaña.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque permite garantizar claridad, pertinencia y coherencia con los objetivos de comunicación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Porque elimina la necesidad de realizar seguimiento posterior.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque incrementa automáticamente la cantidad de seguidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Ha identificado que la revisión previa de los contenidos contribuye a garantizar su claridad, pertinencia y coherencia antes de la publicación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es una evidencia válida de publicación o simulación de publicación dentro de una campaña digital?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un documento administrativo interno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una captura de pantalla, enlace o registro de la publicación realizada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un listado de materiales, programas y recursos utilizados durante el diseño de las piezas comunicativas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un certificado de asistencia a una capacitación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Ha reconocido cuáles son las evidencias adecuadas para demostrar la publicación o simulación de una campaña digital.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué permite analizar la valoración de resultados de una campaña digital?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente la cantidad de publicaciones realizadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo los recursos visuales utilizados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El alcance de los objetivos y la respuesta de las audiencias.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exclusivamente los costos de producción de las piezas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado que la valoración de resultados permite analizar el cumplimiento de los objetivos y la respuesta de las audiencias.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué aspecto refleja una comunicación digital responsable en la divulgación del patrimonio cultural?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La publicación de contenidos sin verificar su contexto, procedencia o relación con el patrimonio cultural divulgado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La reproducción de información sin citar fuentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La eliminación de la participación del público en los espacios de interacción digital de la campaña.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El respeto por la diversidad cultural, la normativa vigente y los principios éticos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Ha reconocido que una comunicación digital responsable se fundamenta en el respeto por la diversidad cultural, la normativa vigente y los principios éticos en la divulgación del patrimonio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
