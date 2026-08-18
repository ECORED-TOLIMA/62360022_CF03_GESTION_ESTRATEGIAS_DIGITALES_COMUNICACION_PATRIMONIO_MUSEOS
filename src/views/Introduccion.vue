<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4(data-aos="fade-down") La comunicación digital ha transformado la manera en que los museos y las instituciones culturales se relacionan con sus públicos. Las campañas digitales permiten organizar mensajes, recursos visuales, contenidos audiovisuales, publicaciones sonoras y espacios de interacción para divulgar el patrimonio cultural de forma planificada. Una campaña de divulgación digital no se limita a publicar piezas aisladas en redes sociales; implica definir un propósito, seleccionar un público, construir un mensaje central, adaptar los contenidos a diferentes plataformas y cuidar que la información publicada sea clara, verificable y respetuosa con los valores culturales que representa.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") En los entornos digitales, la comunicación museal amplía las posibilidades de acceso a contenidos culturales mediante campañas orientadas a la divulgación, la educación y la participación de diferentes públicos.
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12
        p.mb-0.text-center(data-aos="fade-down") El diseño de campañas digitales para museos integra criterios desde diferentes puntos de vista:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C01.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/intro/img01.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center Comunicativo 
            p Es necesario definir qué se quiere decir, a quién se dirige el mensaje y en qué canales se publicará.
          .col-xl.col-lg-6.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/intro/img02.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center Pedagógico
            p Los contenidos deben facilitar la comprensión y el aprendizaje del patrimonio cultural por parte de los diferentes públicos.
          .col-xl.col-lg-6.tarjeta.tarjeta--C03.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/intro/img03.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center Técnico
            p Las piezas deben adaptarse a los formatos, tiempos y restricciones de cada plataforma.
          .col-xl.col-lg-6.tarjeta.tarjeta--C04.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/intro/img04.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center Ético y legal
            p Se deben respetar los derechos de autor, la protección de datos personales, el derecho de imagen, la diversidad cultural y las normas de convivencia digital.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/intro/img05.jpg', alt='Imagen decorativa')
      .col.col-lg-5.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Este componente formativo desarrolla los fundamentos necesarios para la planificación, producción, edición, publicación y difusión de una campaña digital sobre patrimonio cultural en el ámbito museal. Se abordan los protocolos de comunicación digital, las técnicas de edición de contenido, los tipos de publicaciones, la configuración y uso de plataformas, los calendarios de publicación, las restricciones de los canales y los criterios éticos que orientan la divulgación responsable del patrimonio.
        p.mb-0(data-aos="fade-down") Por lo anterior y para comprender la importancia del contenido y contextualizarse con la temática a tratar, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>
<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
