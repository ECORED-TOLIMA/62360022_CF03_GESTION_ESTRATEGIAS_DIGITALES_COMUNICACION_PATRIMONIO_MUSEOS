<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo desarrolla los fundamentos para el diseño, producción, publicación y seguimiento de campañas digitales orientadas a la divulgación del patrimonio cultural desde los museos. Aborda la planificación de campañas, los protocolos de comunicación, los principios éticos y normativos, así como las técnicas de edición de contenidos digitales en diferentes formatos, considerando criterios de accesibilidad, derechos de autor y protección de datos personales.
    p.mb-4 Posteriormente, profundiza en la selección y configuración de plataformas digitales, la elaboración de calendarios de publicaciones, las restricciones y normas de los diferentes canales, y el seguimiento de las campañas mediante el análisis de la interacción y los resultados obtenidos. De esta manera, promueve la gestión de estrategias de comunicación digital planificadas, responsables y orientadas a fortalecer la divulgación y apropiación social del patrimonio cultural. 
    .row.justify-content-center
      .col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un mapa conceptual que organiza los principales temas relacionados con el diseño y la gestión de campañas digitales para la divulgación del patrimonio cultural. Inicia con la planificación de campañas y sus elementos fundamentales, continúa con los protocolos de comunicación digital y los principios éticos y normativos que orientan la difusión responsable de los contenidos, incorpora las técnicas de edición y el uso de herramientas digitales, y aborda la selección y gestión de plataformas, la planificación de publicaciones y las restricciones de los canales digitales. Finalmente, integra la difusión y el seguimiento de las campañas como procesos orientados a evaluar resultados y fortalecer la mejora continua de la comunicación cultural.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
</template>
<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass"></style>
