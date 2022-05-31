<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Otras disposiciones tributarias
    .row.align-items-center
      .col-lg-5.mb-4.mb-lg-0
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema3/img1.png', style="width: 400px").m-auto
      .col-lg-7
        .dual-txt-deco2
          p(style="position: relative; z-index: 1;") El sistema tributario es la estructura legal en la materia, que rige la relación entre el Estado y los demás actores del universo fiscal colombiano. Es decir que es allí donde se establecen las reglas del juego para que todos los contribuyentes tengan en claro las repercusiones monetarias que se podrían asumir a la hora de emprender formal o incluso informalmente un negocio, pues es claro que hoy en día mediante los mecanismos de control y de recepción de información de la DIAN, se hace cada vez más difícil incurrir en la evasión de impuestos, y con las instrucciones cada vez más rigurosas para poder contratar con un cliente y que a vez este pueda deducir de sus declaraciones tributarias los costos o gastos procedentes, se ha conseguido de manera paulatina el entendimiento de la importancia por parte de los emprendedores de formalizar nuestros negocios, pues son cada vez más las ventajas que las desventajas, pues como ya se ha manifestado, el hecho de ser informal no le exime de convertirse en declarante, en cambio conformando las empresas de acuerdo a la ley, se pueden acceder a beneficios del mismo gobierno como auxilios, convenios, participar en licitaciones, entre otros, y ya con el sector privado se abre la baraja de clientes potenciales para el negocio y se fortalece el good will.
    #t_3_1.pt-5
    .titulo-segundo.color-secundario
      h2 3.1 Tipos de impuestos
    p.mb-5 Los impuestos son una carga o tributo que deben pagar los contribuyentes, bien sean personas naturales o personas jurídicas (sociedades nacionales), entendiéndose estas personas jurídicas como las que han sido constituidas en Colombia, o que el domicilio principal o sede, sea en este país. Estos se hacen responsables del pago de impuestos con base en los ingresos, patrimonio o ganancias ocasionales que se reciban en el país o en el exterior, calculados todos ellos teniendo en cuenta la base gravable definida para cada tributo.
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-5.bg-color5.mb-4.mb-lg-0.me-0.me-lg-4
        .p-5
          figure.mb-4
            img(src='@/assets/curso/tema3/img1.svg', style="width: 100px")
          h3 Impuestos nacionales y tarifas
          p En este documento ya se han detallado ampliamente los impuestos que aplican en el territorio nacional. A continuación, se mostrarán algunas de las tarifas de los mencionados tributos:
          a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
            span Ver Tabla
            i.fas.fa-search-plus(style="color: #EF9F14")
            .indicador--click(v-if="mostrarIndicador")
      .col-lg-5.bg-color6
        .p-5
          figure.mb-4
            img(src='@/assets/curso/tema3/img1.svg', style="width: 100px")
          h3 Impuestos territoriales y tarifas
          p Las entidades territoriales, como los departamentos y municipios, están regulados desde las asambleas departamentales y los concejos municipales, pero siempre en armonía con el marco normativo nacional. Aunque en estos casos, resulta más difícil manifestar tarifas o porcentajes de impuestos generales en cada entidad territorial, a continuación, se expresan algunas de ellas.
          a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
            span Ver Tabla
            i.fas.fa-search-plus(style="color: #EF9F14")
            .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-12
          .tabla-b.color-acento-contenido
            .tabla-b__header
              p.mb-0 Tarifas de impuestos nacionales
            table
              caption Nota. Procolombia (2022).
              tr(style="background-color: #F5C573")
                th Impuesto
                th Tarifa
              tr
                td Renta
                td
                  p 31%
                  p Usuarios zona franca: 20%
              tr
                td Tributación de dividendos
                td 10%
              tr
                td Ganancia ocasional
                td 10%
              tr
                td Gravamen a los Movimientos Financieros (GMF)
                td 0.4% por operación
              tr
                td Impuesto al valor agregado (IVA)
                td
                  p Tarifa general: 19%
                  p Tarifas especiales: 0% y 5%
              tr
                td Impuesto al consumo
                td Tarifas: 2%, 4%, 8% y 16%
    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center
        .col-12
          .tabla-b.color-acento-contenido
            .tabla-b__header
              p.mb-0 Tarifas de impuestos departamentales y municipales
            table
              caption Nota. Procolombia (2022).
              tr(style="background-color: #F5C573")
                th Impuesto
                th Tarifa
              tr
                td Impuesto de Industria y Comercio
                td Entre 0,2% y 1% de los ingresos
              tr
                td Impuesto predial
                td Entre 0,5% y 1,6%
              tr
                td Impuesto de registro
                td Del 0,1% al 1%
    .separador.mb-5
    #t_3_2
    .titulo-segundo.color-secundario
      h2 3.2 Tipos de informes técnicos
    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5(data-aos="zoom-in-up")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p Actualmente en las empresas existen varios tipos de informes financieros, desde muy técnicos y específicos cuando se requiere conocer algo puntual de la compañía, hasta informes generales que permiten conocer los múltiples aspectos financieros y contables de la empresa. Hoy en día juegan un papel sumamente importante los #[i softwares] contables que permiten una información financiera oportuna que coadyuva en una adecuada toma de decisiones. Por este motivo los informes financieros resultan ser de mucha utilidad para los administradores.
    p.mb-5 Para efectos del presente curso se tratarán dos de los más importantes, el balance general o estado de situación financiera y el estado de resultados.
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-4.bg-color5.mb-4.mb-lg-0.me-0.me-lg-4
        .p-5
          figure.mb-4
            img(src='@/assets/curso/tema3/img2.svg', style="width: 100px")
          h3 Estado de cambios en la situación financiera
          p Es el estado financiero de propósito general en el cual se puede identificar las actividades de inversión y/o de financiación de la compañía. Lo conforman los activos, pasivos y el patrimonio.
      .col-lg-4.bg-color6
        .p-5
          figure.mb-4
            img(src='@/assets/curso/tema3/img3.svg', style="width: 100px")
          h3 Estado de resultados
          p Estado financiero también conocido como pérdidas y ganancias, como su nombre lo indica, refleja el resultado económico del período anual, es decir, muestra la utilidad o pérdida que la micro o pequeña empresa tuvo durante el período gravable.
    .separador.mb-5
    #t_3_3
    .titulo-segundo.color-secundario
      h2 3.3 Tributos aduaneros
    .row.bg-color7
      .px-5.pt-5
        .row(style="margin-bottom: 300px;")
          .col-lg-8.bg-color8
            .p-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema3/img4.svg', style="width: 100px")
                .col
                  p.mb-0 Los impuestos aduaneros son impuestos que gravan la comercialización internacional de mercancías. En la práctica es considerado un impuesto indirecto debido a que la totalidad del tributo o parte de este, termina cancelándolo el consumidor final del producto.
    .row.justify-content-center(style="position: relative; top: -36px")
      .col-lg-8
        TabsC.color-primario
          .py-3.py-md-4(titulo="Aranceles")
            .row
              .col-12
                .p-4
                  p Los aranceles son tributos que se imponen a un bien o servicio que atraviesa la frontera de un país. Quizás el arancel más reconocido en Colombia es el arancel sobre las importaciones. Es decir que en Colombia se cobraría este impuesto por la venta de un bien o servicio que venga del exterior dentro del territorio colombiano.
          .py-3.py-md-4(titulo="Tipos de aranceles")
            .row
              .col-12
                .p-4
                  .row.align-items-start.mb-3
                    .col-auto
                      figure
                        img(src='@/assets/curso/tema3/img5.svg', style="width: 30px").m-auto
                    .col
                      p.mb-0 #[b Arancel ad-valorem]: se calcula como un porcentaje del valor de la importación.
                  .row.align-items-start.mb-3
                    .col-auto
                      figure
                        img(src='@/assets/curso/tema3/img6.svg', style="width: 30px").m-auto
                    .col
                      p.mb-0 #[b Arancel específico]: se calcula como una determinada cantidad de unidades monetarias por unidad de volumen de importación.
                  .row.align-items-start
                    .col-auto
                      figure
                        img(src='@/assets/curso/tema3/img7.svg', style="width: 30px").m-auto
                    .col
                      p.mb-0 #[b Arancel mixto]: es que está compuesto por un arancel ad-valorem y un arancel específico.
          .py-3.py-md-4(titulo="Partida arancelaria")
            .row
              .col-12
                .p-4
                  p Es el acto administrativo de carácter obligatorio que expide la DIAN, de oficio a solicitud de cualquier interesado, cada producto tiene un código numérico de 10 dígitos para facilitar su identificación en cualquier parte del mundo, de conformidad con la nomenclatura arancelaria vigente para nuestro país. Esta partida arancelaria, se convierte en el documento idóneo para soportar la declaración aduanera de importación.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    modal1: false,
    modal2: false,
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
