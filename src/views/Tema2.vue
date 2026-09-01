<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Protocolos de comunicación digital
    p.mb-4(data-aos="fade-down") La comunicación digital en los museos requiere criterios que orienten la producción, publicación y gestión de los contenidos difundidos en los diferentes medios y plataformas. Para ello, los protocolos de comunicación establecen pautas que favorecen la coherencia institucional, la calidad de la información, el uso adecuado del lenguaje y la interacción respetuosa con los públicos.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-0(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Estos protocolos también contribuyen a organizar aspectos como la revisión de contenidos, la asignación de responsabilidades, los tiempos de publicación y la atención de las interacciones en línea. Su aplicación fortalece la identidad institucional y promueve una comunicación ética, clara y alineada con los objetivos de divulgación y valoración del patrimonio cultural.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Sentido y función de los protocolos
    p.mb-4(data-aos="fade-down") Los protocolos de comunicación digital son orientaciones que permiten organizar la forma en que una institución produce, revisa, publica y responde contenidos en medios digitales. En el caso de los museos, estos protocolos ayudan a mantener coherencia entre la misión institucional, el lenguaje usado, la identidad visual, los tiempos de publicación y la relación con los públicos.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-10.col-12
        .cajon.C03.p-4.h-100.w-100.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-8.col-12.order-lg-1.order-2
              p.mb-4(data-aos="fade-down") Un protocolo no debe entenderse como un documento rígido que limita la creatividad. Su función es ofrecer criterios comunes para que las personas responsables de la comunicación sepan cómo actuar ante situaciones frecuentes. Por ejemplo, puede establecer cómo se revisan las fuentes antes de publicar, quién aprueba las imágenes, cómo se citan los recursos, qué tono se usa para responder comentarios, cómo se manejan errores de información o qué hacer cuando aparece una discusión sensible.  
              p.mb-0(data-aos="fade-down") En campañas digitales patrimoniales, los protocolos son especialmente importantes porque los contenidos pueden involucrar memorias, comunidades, derechos culturales, imágenes de personas, obras protegidas o información sensible sobre bienes patrimoniales. La falta de orientación puede llevar a publicaciones imprecisas, uso indebido de recursos o respuestas inadecuadas ante el público.
            .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/t2/img02.svg', alt='')
        p.mb-0(data-aos="fade-down") El protocolo también favorece la coherencia y continuidad. Si una campaña es gestionada por varias personas, todas deben reconocer las mismas pautas de lenguaje, estilo y revisión. Esto evita cambios bruscos en el tono y mantiene una presencia institucional más sólida.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Estructura de un protocolo de comunicación digital
    p.mb-4(data-aos="fade-down") Un protocolo de comunicación digital puede organizarse en varios componentes:
    .row.bg09.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      LineaTiempoE.color-acento-contenido
        .row(titulo="1")
          .col-lg-9.mb-4.mb-lg-0.order-lg-2.order-2
            h4(data-aos="fade-down") El primer componente corresponde a la identidad institucional.
            p.mb-0(data-aos="fade-down") Este componente reúne la misión, los valores, el tono de comunicación y los criterios visuales que orientan la presencia del museo en los medios digitales. Además, debe reflejar su función cultural y educativa en todas las publicaciones.
          .col-lg-auto.col-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/t2/img03.svg', alt='')
        .row(titulo="2")
          .col-lg-9.mb-4.mb-lg-0.order-lg-2.order-2
            h4(data-aos="fade-down") El segundo componente corresponde al lenguaje.
            p.mb-0(data-aos="fade-down") Allí se definen criterios como claridad, respeto, inclusión, precisión y adaptación al público. El lenguaje de una campaña cultural debe evitar expresiones demasiado técnicas cuando el público no está familiarizado con ellas. También debe evitar frases ambiguas, exageradas o descontextualizadas.
          .col-lg-auto.col-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/t2/img04.svg', alt='')
        .row(titulo="3")
          .col-lg-9.mb-4.mb-lg-0.order-lg-2.order-2
            h4(data-aos="fade-down") El tercer componente es la revisión de contenidos.
            p.mb-0(data-aos="fade-down") Antes de publicar, se debe verificar la exactitud de los datos, la pertinencia de las imágenes, la calidad de los textos, el cumplimiento de derechos de autor, la existencia de autorizaciones cuando aparezcan personas y la accesibilidad básica de la pieza.
          .col-lg-auto.col-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/t2/img05.svg', alt='')
        .row(titulo="4")
          .col-lg-9.mb-4.mb-lg-0.order-lg-2.order-2
            h4(data-aos="fade-down") El cuarto componente corresponde a los tiempos de publicación y respuesta.
            p.mb-0(data-aos="fade-down") La campaña debe definir cuándo se publica cada contenido y en qué plazo se responderán consultas o comentarios. Aunque los tiempos pueden variar, la institución debe evitar dejar preguntas sin atención cuando estas se relacionan con actividades, acceso a recursos o información cultural.
          .col-lg-auto.col-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/t2/img06.svg', alt='')
        .row(titulo="5")
          .col-lg-9.mb-4.mb-lg-0.order-lg-2.order-2
            h4(data-aos="fade-down") El quinto componente es la gestión de interacciones.
            p.mb-0(data-aos="fade-down") En este apartado se establecen criterios para responder comentarios, agradecer aportes, corregir información, moderar mensajes ofensivos o remitir consultas a otras áreas del museo. Esta gestión contribuye a mantener espacios digitales respetuosos y educativos.
          .col-lg-auto.col-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/t2/img07.svg', alt='')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") En síntesis, los principales componentes que conforman un protocolo de comunicación digital y la función que desempeña cada uno dentro de una campaña se presentan en la siguiente tabla:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          span Componentes básicos de un protocolo de comunicación digital
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Componente del protocolo
                th(data-aos="fade-down")(style= "width: 70%") Función dentro de la campaña
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Identidad institucional.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Define la misión, valores, tono visual y criterios de reconocimiento del museo en medios digitales.
              tr
                td(data-aos="fade-down") Lenguaje y tono.
                td(data-aos="fade-down") Orienta la forma de redactar mensajes claros, respetuosos y adecuados al público objetivo.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Revisión de contenidos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Permite verificar datos, imágenes, textos, accesibilidad, fuentes y autorizaciones antes de publicar.
              tr
                td(data-aos="fade-down") Tiempos de publicación y respuesta.
                td(data-aos="fade-down") Establece cuándo se publican los contenidos y en qué plazo se atienden consultas o comentarios.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Gestión de interacciones.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Define cómo responder preguntas, agradecer aportes, corregir información y moderar comentarios.
              tr
                td(data-aos="fade-down") Responsables de publicación.
                td(data-aos="fade-down") Indica quién crea, revisa, aprueba, programa y publica cada contenido.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Lenguaje institucional y tono comunicativo
    p.mb-4(data-aos="fade-down") El lenguaje de una campaña digital debe ser claro, respetuoso y adecuado al público. En el ámbito museal, el reto consiste en comunicar contenidos culturales sin caer en tecnicismos innecesarios ni en simplificaciones que empobrezcan el significado del patrimonio.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-1.order-2
        .cajon.C04.p-4.h-100.w-100
          p(data-aos="fade-down") Un lenguaje claro no significa superficial, significa que la información se presenta de manera comprensible, ordenada y contextualizada. Por ejemplo, en lugar de usar términos especializados sin explicación, la campaña puede introducirlos con ejemplos o descripciones sencillas. Si se habla de conservación, curaduría, mediación o patrimonio inmaterial, conviene explicar el concepto dentro del contexto de la publicación.
          p.mb-0(data-aos="fade-down") El tono comunicativo debe corresponder con la identidad del museo y la intención de la campaña. Puede ser cercano, educativo, reflexivo o invitacional, pero siempre debe mantener respeto por el patrimonio y por las personas. La comunicación cultural no debe usar expresiones que ridiculicen, estereotipen o reduzcan las prácticas culturales de una comunidad.
      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t2/img08.jpg', alt='')
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") El tono también influye en la participación del público. Una pregunta bien formulada puede invitar a compartir recuerdos o interpretaciones; una instrucción confusa puede limitar la interacción. Por eso, cada publicación debe revisar si el texto acompaña de forma adecuada la imagen, el video o el audio.
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Netiqueta institucional
    p.mb-4(data-aos="fade-down") La netiqueta se refiere a normas de comportamiento respetuoso en internet. En campañas digitales de museos, la netiqueta orienta tanto la forma en que la institución se expresa como la manera en que modera las interacciones de los usuarios.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") Aplicar netiqueta implica saludar cuando corresponda, responder con cortesía, evitar confrontaciones innecesarias, reconocer aportes del público, no usar lenguaje ofensivo y promover conversaciones respetuosas. También implica actuar frente a comentarios discriminatorios, agresivos o que difundan información falsa.
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-6.col-12.order-lg-2.order-2
          .row.mb-4
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t2/img10.svg', alt='')
          p.mb-5(data-aos="fade-down") Shea (1994) fue una de las autoras que sistematizó reglas básicas de comportamiento en internet bajo el concepto de netiqueta. Aunque los entornos digitales han cambiado desde entonces, el principio central de que la comunicación en línea requiere respeto por las otras personas y cuidado frente a los efectos de lo que se publica sigue vigente.
          p.mb-0(data-aos="fade-down") En una campaña digital patrimonial, la netiqueta tiene una dimensión cultural. Los públicos pueden interpretar el patrimonio desde experiencias diversas. La institución debe promover conversaciones donde esas miradas puedan expresarse sin afectar la dignidad de otras personas ni distorsionar información sensible.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t2/img09.jpg', alt='')
</template>
<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
