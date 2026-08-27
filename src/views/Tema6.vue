<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Difusión y seguimiento de la campaña digital
    p.mb-4(data-aos="fade-down") La difusión de una campaña digital comprende la publicación de los contenidos planificados y el seguimiento de la respuesta generada por las audiencias. Esta etapa permite verificar si los materiales fueron adaptados correctamente a las plataformas seleccionadas, si mantienen coherencia con el mensaje central de la campaña y si responden a los objetivos de comunicación definidos durante la planeación.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t6/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Antes de publicar, es importante revisar que cada pieza se encuentre aprobada, que el texto de acompañamiento sea claro, que el formato corresponda al canal seleccionado y que se hayan aplicado los criterios de accesibilidad, derechos de autor y protocolo institucional. Estas verificaciones aportan en la reducción de errores y favorecen una comunicación más organizada y consistente.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Una vez iniciada la difusión, se hace necesario realizar seguimiento a los contenidos publicados. En este proceso se identifican el comportamiento de la campaña y las oportunidades de mejora. Para ello pueden analizarse aspectos como:
    .row.justify-content-center.mb-4(data-aos="flip-down")
      .col-xl-3.col-lg-6.col-md-6.mb-4.mb-xl-0.d-flex
        .crd.crd--grayGrad.w-100
          .bottomCircle.mb-4
            img(src="@/assets/curso/temas/t6/img02.svg", alt="").img70
          h4 Visualizaciones y alcance
          p.mb-0 Indican el número de personas que tuvieron contacto con los contenidos de la campaña.
      .col-xl-3.col-lg-6.col-md-6.mb-4.mb-xl-0.d-flex
        .crd.crd--grayGrad.w-100
          .bottomCircle.mb-4
            img(src="@/assets/curso/temas/t6/img03.svg", alt="").img70
          h4 Interacciones
          p.mb-0 Muestran acciones como reacciones, comentarios, compartidos, respuestas o participación en actividades relacionadas con la campaña.
      .col-xl-3.col-lg-6.col-md-6.mb-4.mb-xl-0.d-flex
        .crd.crd--grayGrad.w-100
          .bottomCircle.mb-4
            img(src="@/assets/curso/temas/t6/img04.svg", alt="").img70
          h4 Consultas y participación del público
          p.mb-0 Evidencian los temas que despiertan mayor interés y las necesidades de información que surgen durante la difusión.
      .col-xl-3.col-lg-6.col-md-6.mb-4.mb-xl-0.d-flex
        .crd.crd--grayGrad.w-100
          .bottomCircle.mb-4
            img(src="@/assets/curso/temas/t6/img05.svg", alt="").img70
          h4 Claridad y pertinencia de los contenidos
          p.mb-0 Permiten analizar si los mensajes fueron comprendidos por las audiencias y si responden adecuadamente a los objetivos de divulgación previstos.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-12
        p.mb-4(data-aos="fade-down") En las campañas culturales, la valoración no debe centrarse únicamente en datos numéricos. También es importante considerar la calidad de las interacciones, el interés generado en torno al patrimonio y la capacidad de los contenidos para promover comprensión, reflexión o participación.
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") El seguimiento proporciona información útil para ajustar formatos, mejorar mensajes, seleccionar de manera más adecuada las plataformas y optimizar futuras acciones de comunicación. De esta manera, la difusión y el seguimiento se convierten en procesos complementarios para la mejora continua de las campañas digitales en museos e instituciones culturales.
        p.mb-0(data-aos="fade-down") Para sintetizar los aspectos desarrollados en este tema, la siguiente figura presenta un esquema general del proceso de difusión y seguimiento de una campaña digital, destacando las principales acciones que permiten publicar los contenidos, monitorear la respuesta de las audiencias y obtener información para la mejora continua de las estrategias de comunicación en museos:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Proceso de difusión y seguimiento de una campaña digital para museos
      .row.justify-content-center
        .col-12
          figure.desktop
            img(src='@/assets/curso/temas/t6/img06.svg', alt='Figura 3 que contiene un esquema del proceso de difusión y seguimiento de una campaña digital para museos. La imagen muestra las etapas de preparación, difusión, seguimiento y análisis para la mejora continua, junto con los principales aspectos que se evalúan durante la campaña: visualizaciones y alcance, interacciones, consultas y participación del público, y claridad y pertinencia de los contenidos.')
      .col-12.mb-0
        figure.movil
          img.mb-4(src='@/assets/curso/temas/t6/img07.svg', alt='Figura 3 que contiene un esquema del proceso de difusión y seguimiento de una campaña digital para museos. La imagen muestra las etapas de preparación, difusión, seguimiento y análisis para la mejora continua, junto con los principales aspectos que se evalúan durante la campaña: visualizaciones y alcance, interacciones, consultas y participación del público, y claridad y pertinencia de los contenidos.')
          .col-auto
            a.anexo.mb-5(:href="obtenerLink('/downloads/Figura_3_Proceso_difusión_seguimiento_campaña_digital_museos.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/bullets/icono-pdf.svg")
              .anexo__texto
                p Anexo. Proceso de difusión y seguimiento de una campaña digital para museos.
</template>
<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
