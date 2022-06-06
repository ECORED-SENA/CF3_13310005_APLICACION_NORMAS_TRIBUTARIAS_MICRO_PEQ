<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Evasión tributaria

    .row.align-items-center
      .col-lg-5.mb-4.mb-lg-0
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema4/img1.png', style="max-width: 504px").m-auto
      .col-lg-7
        .cajon-b.color-secundario.p-3.mb-5
          p(style="position: relative; z-index: 1;").mb-4 Este concepto hace alusión a la práctica que pueden llegar a realizar los contribuyentes para evitar la responsabilidad tributaria de pagar impuestos. Estas maniobras se consideran ilegales, pues de una u otra manera no se estaría cumpliendo con la normatividad vigente en la materia.
          p En otras palabras, la evasión tributaria es conjunto de omisiones o actividades encaminadas a disminuir de manera parcial o definitiva el valor de los impuestos que corresponde a las personas naturales o jurídicas pagar de manera legal; de otra parte, Colombia es considerado como uno de los 25 países con mayor evasión tributaria del mundo.

    p.mb-4 En el siguiente cuadro comparativo, se extraen los conceptos de dos tipos de evasión tributaria:

    .titulo-quinto.color-acento-contenido.mt-5
      h4 Conceptos

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-5.bg-color5.mb-4.mb-lg-0.me-0.me-lg-4
        .p-5
          figure.mb-4
            img(src='@/assets/curso/tema4/img2.svg', style="width: 100px")
          h3 Elusión tributaria
          p El contribuyente, sea este micro o pequeña empresa, o cualquier otra persona jurídica, evita que surja la responsabilidad tributaria. La elusión tributaria hace énfasis a los comportamientos del contribuyente para evitar pagar impuestos; dichas estrategias las permite la misma legislación o también se aprovechan de los vacíos normativos de esta.

      .col-lg-5.bg-color6
        .p-5
          figure.mb-4
            img(src='@/assets/curso/tema4/img3.svg', style="width: 100px")
          h3 Evasión tributaria
          p En esta la obligación tributaria del contribuyente nace o está presente. Por ejemplo, es cuando un comerciante contribuyente que trabaja con productos gravados con IVA, decide no facturar la totalidad de sus ventas para que no exceda el límite establecido por la ley y así, continuar siendo no responsable de IVA.

    p Con estas prácticas, los contribuyentes evaden las obligaciones fiscales y aprovechan este dinero impago, como consecuencia de estos actos, aumenta la carga fiscal, la desigualdad y el desequilibrio en las finanzas públicas del Estado.


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
