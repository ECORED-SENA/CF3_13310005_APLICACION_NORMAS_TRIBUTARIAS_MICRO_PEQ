<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Normatividad vigente en sanciones

    .row.align-items-center.justify-content-between.mb-4
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/img1.png').m-auto
      .col-lg-8
        .bloque-texto-a__texto.p-4
          p El Congreso de la República es la entidad que reglamenta el tema en materia tributaria a nivel general y, además, establece las sanciones.

    p.mb-5 Sin embargo, ante los múltiples escenarios tributarios a los que se puede enfrentar una micro o pequeña empresa, esta puede tributar tanto en los municipios, como a nivel del Gobierno nacional. Además, la reglamentación más referenciada en materia de sanciones tributarias es la que figura en el Decreto 624 del 30 de marzo de 1989 (Estatuto Tributario), expedido por el Ministerio de Hacienda y Crédito Público, y en donde se establece el “estatuto tributario de los impuestos administrados por la Dirección General de Impuestos Nacionales”.

    p.mb-5 Mediante el siguiente enlace, se amplía la información sobre el Decreto 624 de 1989:

    .row.justify-content-center.mb-0
      .col-lg-10.bg-color4
        .p-5
          .row.align-items-center
            .col-lg-8
              h3 Decreto-Ley 624 de 1989
              p A continuación, podrá consultar el decreto por el cual se expide el Estatuto Tributario Nacional.
            .col-lg-4.d-flex.justify-content-center
              a.boton.color-acento-contenido.texto-blanco(href="/downloads/Decreto_Ley_624_de_1989.pdf" target="_blank" type="application/pdf")
                span Descargar pdf
                i.fas.fa-download(style="color: #EF9F14 !important")


    .row.justify-content-center.mb-5.mt-2
      .col-lg-10.px-0
        .row.justify-content-center.align-items-center.px-0
          .col-lg-9.col-md
            .cajon.bg-vainilla.p-4
              p.p-3 Es importante recordar que el Estatuto Tributario se ha venido actualizando con el pasar de los gobiernos, así es que, de una u otra forma, se han ampliado o derogado artículos y se siguen generando cambios permanentes en el tema de impuestos en general, y en especial lo que compete en este segmento que es el tema sancionatorio.
          .col-lg-3(style="padding-left: 0;").d-none.d-sm-none.d-md-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img2.svg').m-auto

    #t_2_1.pt-5
    .titulo-segundo.color-secundario
      h2 2.1 Estatuto tributario
    p El estatuto tributario en nuestro país es considerado como una norma de máxima autoridad en materia de impuestos, esto quiere decir, que es allí donde se reflejan la gran mayoría de normas tanto formales, como de fondo relacionadas con el recaudo tributario.
    .row
      .col-lg-9
        p #[span.txt-deco1 Desde el decreto 624 de marzo 30 de 1989] en donde el Ministerio de Hacienda y Crédito Público expide el “estatuto tributario de los impuestos administrados por la dirección general de impuestos nacionales”, hasta la fecha de manera permanente, ante los cambios económicos y las mismas necesidades de ajustar esas reglas establecidas, el gobierno nacional ha venido tanto derogando artículos como creando algunos otros. Hoy en día el estatuto tributario compila en orden cronológico las leyes tributarias vigentes a nivel nacional.
      .col-lg-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img1.svg', style="width: 250px").m-auto
    .row
      .col-1
      .col-lg-5
          h3.mt-5.txt-deco2 Este estatuto presenta la siguiente estructura:
      .col-12
        LineaTiempoE.color-acento-contenido.my-5
          .row(titulo="Título preliminar" subtitulo="")
            .col-lg-9
              .row.align-items-center
                .col-auto.mx-4
                  figure
                    img(src='@/assets/curso/tema2/img2.svg', style="width: 100px").m-auto
                .col
                  p En este espacio se define y se caracterizan los compromisos tributarios de los contribuyentes.
          .row(titulo="Libro I - Impuesto de renta y complementarios" subtitulo="")
            .col-lg-9
              .row.align-items-center
                .col-auto.mx-4
                  figure
                    img(src='@/assets/curso/tema2/img3.svg', style="width: 100px").m-auto
                .col
                  p Este libro está dedicado al tema del impuesto de renta y complementarios, a partir de allí se reglamenta el manejo tributario de los ingresos, costos, gastos o deducciones, entre otros temas.
          .row(titulo="Libro II - Retención en la fuente" subtitulo="")
            .col-lg-9
              .row.align-items-center
                .col-auto.mx-4
                  figure
                    img(src='@/assets/curso/tema2/img3.svg', style="width: 100px").m-auto
                .col
                  p Este libro segundo enfatiza sobre la retención en la fuente o anticipo de renta. Aquí se reglamentan conceptos, quienes son agentes de retención en la fuente, tarifas, y otros temas relacionados con la materia.
          .row(titulo="Libro III - Impuestos sobre las ventas" subtitulo="")
            .col-lg-9
              .row.align-items-center
                .col-auto.mx-4
                  figure
                    img(src='@/assets/curso/tema2/img3.svg', style="width: 100px").m-auto
                .col
                  p Este libro trata sobre el IVA y todo lo relacionado con el hecho generador del impuesto, las tarifas, base gravable, responsables y no responsables del impuesto, bienes y servicios gravados, exentos y excluidos, y otros conceptos importantes.
          .row(titulo="Libro IV - Impuesto de timbre nacional" subtitulo="")
            .col-lg-9
              .row.align-items-center
                .col-auto.mx-4
                  figure
                    img(src='@/assets/curso/tema2/img3.svg', style="width: 100px").m-auto
                .col
                  p Este libro hacía referencia al impuesto de timbre, el cual quedó derogado por medio de la ley 2152 del año 2021.
          .row(titulo="Libro V - Procedimiento tributario" subtitulo="")
            .col-lg-9
              .row.align-items-center
                .col-auto.mx-4
                  figure
                    img(src='@/assets/curso/tema2/img3.svg', style="width: 100px").m-auto
                .col
                  p En este capítulo se detalla el régimen sancionatorio que se aplicará a las personas naturales o jurídicas que, teniendo cualquier obligación tributaria con el Estado, no la cumpliera, viéndose involucrada en sanciones tanto de tipo pecuniarias como de tipo legal.
          .row(titulo="Libro VI - Gravamen a los movimientos financieros" subtitulo="")
            .col-lg-9
              .row.align-items-center
                .col-auto.mx-4
                  figure
                    img(src='@/assets/curso/tema2/img3.svg', style="width: 100px").m-auto
                .col
                  p Aquí se encontrará todo lo relacionado con el 4x1000 el cual se recauda en cabeza del sector financiero, adicionalmente se encontrará regulación sobre base gravable, tarifa, exenciones, entre otros temas.
          .row(titulo="Libro VII – (Art. 882 al 898) ECE Y CHC" subtitulo="")
            .col-lg-9
              .row.align-items-center
                .col-auto.mx-4
                  figure
                    img(src='@/assets/curso/tema2/img3.svg', style="width: 100px").m-auto
                .col
                  p Este libro séptimo hace referencia principalmente al régimen de entidades controladas desde el exterior.
    p.mb-5 Con el siguiente video, se amplia información sobre el procedimiento tributario en este país:
    .row.justify-content-center.mb-5
      .col-lg-8.bg-color4
        .p-5
          .row.align-items-center
            .col-lg-8
              h3 Procedimiento tributario
              p A continuación, se encontrará la información sobre las obligaciones formales contempladas en el libro 5 del Estatuto Tributario - Declaraciones tributarias
            .col-lg-4.d-flex.justify-content-center
              a.boton.color-acento-contenido.texto-blanco(href="https://www.youtube.com/watch?v=74x5Lp_1vAo" target="_blank" type="application/pdf")
                span Ver Video
                i.fas.fa-video(style="color: #EF9F14 !important")
    .separador.mb-5
    #t_2_2
    .titulo-segundo.color-secundario
      h2 2.2 Decreto único reglamentario 1625 de 2016
    .row.align-items-center.mb-5
      .col-lg-9.mb-4.mb-lg-0
        p.mb-0 Este decreto surge ante la necesidad estatal de racionalizar y simplificar el ordenamiento jurídico tributario en busca de la eficiencia económica del recaudo de impuestos en nuestro país. Antes de la expedición del decreto único reglamentario, era habitual encontrar normas que regulan la materia, pero que en algunos casos entre sí podrían generar controversia al interpretarse y aplicarse o que incluso podrían estar derogadas y aun se pretendían aplicar por parte de los contribuyentes. Por tal motivo, el gobierno nacional incorpora en un solo cuerpo normativo las reglamentaciones vigentes con el propósito de tener un mejor entendimiento y conseguir un mejor conocimiento para todos los actores involucrados en el sistema fiscal colombiano.
      .col-lg-3
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema2/img4.svg', style="width: 450px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-8.bg-color4
        .p-5
          .row.align-items-center
            .col-lg-8
              h3 Decreto 1625 de 2016
              p En el presente enlace, se podrá consultar con mayor detalle la información contenida en el presente decreto.
            .col-lg-4.d-flex.justify-content-center
              a.boton.color-acento-contenido.texto-blanco(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=83233" target="_blank" type="application/pdf")
                span Ver Decreto
                i.fas.fa-link(style="color: #EF9F14 !important")
    .separador.mb-5
    #t_2_3
    .titulo-segundo.color-secundario
      h2 2.3. Otras normas del orden nacional y municipal
    p.mb-5 Adicional al estatuto tributario y del decreto único reglamentario, se debe estar informado de otros compromisos fiscales que pueden ser un poco más específicos incluso para cada sector de la economía o para cada caso en particular, y que son de igual manera de carácter obligatorio para los contribuyentes. Por ejemplo, del orden nacional se encuentra la renta activos en el exterior, la cual es una declaración que se debe presentar cada año por parte de las personas naturales o jurídicas que posean activos fuera del territorio nacional, dicha responsabilidad está consagrada en el artículo 42 de la ley 1739 del 2014.
    .row.align-items-center.mb-5
      .col-lg-5.mb-5.mb-lg-0
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img5.svg', style="width: 400px").m-auto
      .col-lg-7
        .cajon.color-primario.p-5.mb-4
          p Así mismo, en los departamentos y en los municipios existen otras regulaciones fiscales como el caso del impuesto de industria y comercio, que en la práctica está determinado porque cada municipio crea sus propias tarifas y en ese sentido las micro y pequeñas empresas deben indagar sobre estos temas en los territorios donde pretenda realizar la comercialización de sus bienes y servicios.
    .separador.mb-5
    #t_2_4
    .titulo-segundo.color-secundario
      h2 2.4. Otras responsabilidades tributarias
    p.mb-5 Este es otro tema igual que el anteriormente expuesto, en donde los micro y pequeños emprendedores, deben tener pleno conocimiento para cumplir con dichas responsabilidades adicionales y no asumir riesgos de posibles multas o sanciones. Es aquí donde se encuentra la responsabilidad de reportar la información exógena de las empresas ante la DIAN. En algunos municipios del territorio nacional también se regulan estos reportes de carácter obligatorio, por ello es muy importante conocer los acuerdos municipales en donde se desarrollará el objeto social.
    .titulo-sexto.color-acento-contenido.mb-5
      p.mb-0 #[b Figura 2.] Medios magnéticos
    figure(data-aos="zoom-in-up")
      img(src='@/assets/curso/tema2/img1.png', style="width: 1200px").m-auto
    p.mb-5.ms-3 Nota. SENA (2022).
    .row.justify-content-center.mb-5
      .col-lg-8
        p.text-center #[b Adicionalmente en el marco normativo de las empresas se tienen otras responsabilidades tributarias un poco más formales que a continuación se detallarán.]
    .row.justify-content-center
      .col-lg-8
        TabsB.color-acento-contenido.mb-5
          .py-4.py-md-5(titulo="Registro único tributario" :icono="require('@/assets/curso/tema2/img6.svg')")
            .row
              .col-12
                p A partir del registro de las micro y pequeñas empresas en las cámaras de comercio de cada domicilio, nace la responsabilidad de realizar la inscripción en el registro único tributario (RUT), este documento es reconocido como la cédula tributaria de las personas naturales o jurídicas. La última regulación en la materia se dio el 3 de agosto del 2018 por parte del Ministerio de Hacienda y Crédito Público mediante el decreto 1415.
                .row.align-items-center.mb-4
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema2/img2.png', style="width: 260px").m-auto
                  .col
                    p.mb-0 Hoy en día este trámite se puede realizar de manera presencial en la sucursal de la DIAN de cada localidad, como también de manera virtual ingresando a www.dian.gov.co seleccionando la opción de asignación de citas, allí se continúa el proceso para cumplir con este registro.
                p.mb-4 A continuación, se encontrará mayor información sobre el concepto, responsabilidad y clasificación del Registro Único Tributario.
                a.boton.color-acento-contenido.texto-blanco(href="https://www.youtube.com/watch?v=Ltgyaxh0ga0" target="_blank" type="application/pdf")
                  span Ver Video
                  i.fas.fa-video(style="color: #EF9F14 !important")
          .py-4.py-md-5(titulo="Soportes e información contable" :icono="require('@/assets/curso/tema2/img7.svg')")
            .row
              .col-12
                p Todo emprendedor por sí mismo debería llevar la contabilidad de su micro o pequeña empresa, esto con fines administrativos en donde la información financiera le proporciona la materia prima para tomar decisiones administrativas en busca de potenciar sus fortalezas, identificar sus debilidades y poder desde la administración de las empresas entrar a tomar decisiones que permitan obtener los mejores resultados económicos posibles.
                .row.align-items-end.mb-4
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema2/img8.svg', style="width: 260px").m-auto
                  .col
                    p Ahora bien, desde el punto de vista legal el artículo 19 del Código de Comercio manifiesta que están obligados a llevar la contabilidad todo aquel que sea considerado comerciante en Colombia, sea esta persona natural o jurídica. Adicionalmente el artículo 772 del estatuto tributario presenta que todo aquel que pretenda aportar su contabilidad como medio de prueba fiscal para todos sus efectos, lo debe realizar de conformidad con el marco regulatorio permitido en Colombia, que son las normas internacionales de información financiera (NIIF).
                    p.mb-0 El mismo código de comercio explica que los comerciantes son aquellas personas naturales o jurídicas que se dediquen profesionalmente a realizar actividades consideradas por la ley como mercantiles. En cuanto los actos mercantiles el artículo 20 del código del comercio expresamente señala estas actividades.
                p #[b A continuación, se ilustran algunos de los soportes que resultan ser los más comunes en el manejo de la contabilidad de las micro y pequeñas empresas (Ver soportes contables):]
                p.mb-5 Para poder documentar la contabilidad de las micro y pequeñas empresas se hace necesario llevar los soportes adecuados de conformidad con la norma contable que se deben conservar en debida forma. En especial la norma del artículo 617 del Estatuto Tributario que regula lo que tiene que ver con las facturas que deben realizar las personas naturales o jurídicas obligadas a ello. Pero el formalismo de los soportes no tiene que ver sólo con las facturas, se supone que todo registro contable resulta de un documento soporte que da origen al movimiento contable, por ejemplo, los extractos bancarios, la factura electrónica, el documento equivalente, las declaraciones tributarias, recibos de caja menor, etc.
                a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                  span Ver soportes contables
                  i.fas.fa-search-plus(style="color: #EF9F14")
                  .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center
        .col-10
          SlyderA
            .row.justify-content-center
              .col-12

                figure.mb-4
                  img(src='@/assets/curso/tema2/img3.png', style="width: 360px").m-auto
                p.text-center.txt-deco3 #[b Factura comercial de venta]
            .row.justify-content-center
              .col-11
                figure.mb-4
                  img(src='@/assets/curso/tema2/img4.png', style="width: 600px").m-auto
                p.text-center.txt-deco3 #[b Factura electrónica]
            .row.justify-content-center
              .col-11
                figure.mb-4
                  img(src='@/assets/curso/tema2/img5.png', style="width: 600px").m-auto
                p.text-center.txt-deco3 #[b Factura o documento equivalente a la factura de venta]
            .row.justify-content-center
              .col-11
                figure.mb-4
                  img(src='@/assets/curso/tema2/img6.png', style="width: 600px").m-auto
                p.text-center.txt-deco3 #[b Comprobante de egreso o comprobante de pago]
            .row.justify-content-center
              .col-11
                figure.mb-4
                  img(src='@/assets/curso/tema2/img7.png', style="width: 600px").m-auto
                p.text-center.txt-deco3 #[b Comprobante de ingreso o comprobante de caja]
            .row.justify-content-center
              .col-11
                figure.mb-4
                  img(src='@/assets/curso/tema2/img8.png', style="width: 400px").m-auto
                p.text-center.txt-deco3 #[b Comprobante de venta con tarjetas de crédito]
            .row.justify-content-center
              .col-11
                figure.mb-4
                  img(src='@/assets/curso/tema2/img9.png', style="width: 600px").m-auto
                p.text-center.txt-deco3 #[b Nómina]
            .row.justify-content-center
              .col-11
                figure.mb-4
                  img(src='@/assets/curso/tema2/img10.png', style="width: 600px").m-auto
                p.text-center.txt-deco3 #[b Planilla de liquidación de aportes fiscales]
            .row.justify-content-center
              .col-11
                figure.mb-4
                  img(src='@/assets/curso/tema2/img11.png', style="width: 400px").m-auto
                p.text-center.txt-deco3 #[b Declaración de renta, IVA, Rete fuente, CREE, etc.]
            .row.justify-content-center
              .col-11
                figure.mb-4
                  img(src='@/assets/curso/tema2/img12.png', style="width: 400px").m-auto
                p.text-center.txt-deco3 #[b Recibo de transferencia de fondos electrónicos]
            .row.justify-content-center
              .col-11
                figure.mb-4
                  img(src='@/assets/curso/tema2/img13.png', style="width: 400px").m-auto
                p.text-center.txt-deco3 #[b Recibo de pago interbancario]
            .row.justify-content-center
              .col-11
                figure.mb-4
                  img(src='@/assets/curso/tema2/img14.png', style="width: 250px").m-auto
                p.text-center.txt-deco3 #[b Comprobante de pago con tarjeta de crédito]
            .row.justify-content-center
              .col-11
                figure.mb-4
                  img(src='@/assets/curso/tema2/img15.png', style="width: 600px").m-auto
                p.text-center.txt-deco3 #[b Extractos bancarios]
            .row.justify-content-center
              .col-11
                figure.mb-4
                  img(src='@/assets/curso/tema2/img16.png', style="width: 600px").m-auto
                p.text-center.txt-deco3 #[b Recibos de caja menor]
            .row.justify-content-center
              .col-11
                figure.mb-4
                  img(src='@/assets/curso/tema2/img17.png', style="width: 400px").m-auto
                p.text-center.txt-deco3 #[b Notas débito y notas crédito]
            .row.justify-content-center
              .col-11
                figure.mb-4
                  img(src='@/assets/curso/tema2/img18.png', style="width: 600px").m-auto
                p.text-center.txt-deco3 #[b Notas de contabilidad (Registros de ajustes y de NIIF)]
            .row.justify-content-center
              .col-11
                figure.mb-4
                  img(src='@/assets/curso/tema2/img19.png', style="width: 600px").m-auto
                p.text-center.txt-deco3 #[b Comprobante de contabilidad]
            .row.justify-content-center
              .col-11
                figure.mb-4
                  img(src='@/assets/curso/tema2/img20.png', style="width: 600px").m-auto
                p.text-center.txt-deco3 #[b Consignaciones bancarias]
          p.mb-0 Nota. SENA (2022).

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
