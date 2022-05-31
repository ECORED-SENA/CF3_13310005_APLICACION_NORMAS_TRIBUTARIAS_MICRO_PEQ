<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Información confidencial
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema4/img1.png', style="width: 450px").m-auto
      .col-lg-8.mb-4.mb-lg-0
        p.mb-0 La DIAN es la encargada de la recolección de todos los datos personales e información financiera pertinente para el recaudo de impuesto. Promoviendo el uso y aprovechamiento de las tecnologías de la información, implementa un Sistema de Gestión de seguridad y privacidad de la información, con el fin de preservar la confidencialidad, integridad, disponibilidad de la información y la protección de los datos personales de los ciudadanos, usuarios internos y externos y las empresas.
      .col-lg-9.mb-4.mb-lg-0
        p.mb-0 #[b La Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (UAE-DIAN)] es la encargada internamente de ejecutar la seguridad y privacidad de la información en el desarrollo de cada procedimiento que se realice.
      .col-lg-3
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema4/img1.svg', style="width: 190px").m-auto
    .row.justify-content-center
      .col-lg-10.bg-color4
        .p-5
          .row
            .col-lg-7.mb-4.mb-lg-0
              p #[b En el presente enlace podrá consultar el sitio web de la DIAN, para mayor información.]
            .col-lg-5.d-flex.justify-content-center
              a.boton.color-acento-contenido.texto-blanco(href="https://www.dian.gov.co/" target="_blank" type="application/pdf")
                span Ir al sitio web
                i.fas.fa-link(style="color: #EF9F14 !important")



</template>

<script>
export default {
  name: 'Tema4',
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
