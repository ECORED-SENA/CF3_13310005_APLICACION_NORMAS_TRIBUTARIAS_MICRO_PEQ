<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Normatividad vigente en sanciones

    .row.align-items-center.justify-content-between.mb-4(data-aos="fade-right")
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/img1.png').m-auto
      .col-lg-8
        .bloque-texto-a__texto.p-4
          p El Congreso de la República es la entidad que reglamenta el tema en materia tributaria a nivel general y, además, establece las sanciones.

    p.mb-5(data-aos="fade-left") Sin embargo, ante los múltiples escenarios tributarios a los que se puede enfrentar una micro o pequeña empresa, esta puede tributar tanto en los municipios, como a nivel del Gobierno nacional. Además, la reglamentación más referenciada en materia de sanciones tributarias es la que figura en el Decreto 624 del 30 de marzo de 1989 (Estatuto Tributario), expedido por el Ministerio de Hacienda y Crédito Público, y en donde se establece el “estatuto tributario de los impuestos administrados por la Dirección General de Impuestos Nacionales”.

    p.mb-5(data-aos="fade-right") Mediante el siguiente enlace, se amplía la información sobre el Decreto 624 de 1989:

    .row.justify-content-center.mb-0(data-aos="zoom-in-up")
      .col-lg-10
        .p-5.bg-color4
          .row.align-items-center
            .col-lg-8
              h4 Decreto-Ley 624 de 1989
              p A continuación, podrá consultar el decreto por el cual se expide el Estatuto Tributario Nacional.
            .col-lg-4.d-flex.justify-content-center
              a.boton.color-acento-contenido.texto-blanco(href="downloads/Decreto_Ley_624_de_1989.pdf" target="_blank" type="application/pdf")
                span Descargar pdf
                i.fas.fa-download(style="color: #EF9F14 !important")

    .row.justify-content-center.mt-2(data-aos="fade-left")
      .col-lg-10

        .d-flex.mb-5.px-0
          .col-lg-9
            .cajon.p-4.me-0.me-lg-2.bg-vainilla
              p Es importante recordar que el Estatuto Tributario se ha venido actualizando con el pasar de los gobiernos, así es que, de una u otra forma, se han ampliado o derogado artículos y se siguen generando cambios permanentes en el tema de impuestos en general, y en especial lo que compete en este segmento que es el tema sancionatorio.
          .col-lg-3.d-none.d-lg-flex.align-items-center.justify-content-center.bg-celeste
            img(src="@/assets/curso/tema2/icon-2.svg", style="max-width: 125px;")

    p.mb-1(data-aos="fade-right")
      strong.texto-primario Las más reciente actualización es:

    .hr-primario

    LineaTiempoE.color-acento-contenido.my-5(data-aos="zoom-in-up")
      .row(titulo="Las leyes 1607 de 2012 y 1819 de 2016, y el Decreto Único Reglamentario 1625 de 2016." subtitulo="")
        .col-lg-9
          .row.align-items-start
            .col-auto.mx-4
              img(src='@/assets/curso/tema2/icon-3.svg', style="max-width: 71px").m-auto
            .col
              p En este compilado de normas del Estatuto Tributario, figura en el libro V lo relacionado con el “procedimiento tributario”, aquí se tratan las reglamentaciones sancionatorias aplicables a las micro y pequeñas empresas y demás personas jurídicas, así como también a las personas naturales responsables de los tributos en Colombia que, teniendo cualquier responsabilidad de tributar en Colombia como en renta, IVA, retención en la fuente, etc., no lo hubiere hecho de manera correcta y oportuna, se verán involucradas en sanciones tanto de tipo monetario e incluso de tipo legal.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    modal1: false,
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
