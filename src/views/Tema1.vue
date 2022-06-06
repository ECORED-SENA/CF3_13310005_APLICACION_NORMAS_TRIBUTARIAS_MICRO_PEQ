<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Régimen sancionatorio

    .bloque-texto-a.color-secundario.p-4.p-md-4.mb-5(data-aos="zoom-in-up")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img1.svg', style="width: 250px").m-auto
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p En relación con el régimen sancionatorio vigente en Colombia en materia fiscal, este tiene que ver con las sanciones que se fijan para todos aquellos contribuyentes u obligados a declarar o a reportar información entre otras responsabilidades fiscales, en caso de que estos actores del sistema incurran en infracción a la norma serán penalizados o sancionados. Es decir, que si la persona natural o jurídica no cumple con sus compromisos adquiridos ante el Estado o ante los entes departamentales o municipales, según sea el caso, se verá involucrada en causal de multa o sanción.

    p.mb-5(data-aos="fade-right") El conocimiento sobre este tema resulta de suprema importancia para los emprendedores, y si eventualmente no se tiene conocimiento o claridad en estos aspectos, la recomendación es contratar una asesoría o consultoría, de tal forma que las micro y pequeñas empresas disminuyan la posibilidad de sanciones. Otro aspecto clave al momento de diligenciar las declaraciones tributarias, es revisar con mucho cuidado los cálculos que se deben realizar o liquidar en materia de impuestos de conformidad con lo establecido en los distintos ordenamientos fiscales tanto nacionales como territoriales.

    .row.m-0.align-items-center.justify-content-center.my-5(data-aos="zoom-in-up")
      .col-lg-7.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img2.png').m-auto


    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-8.bg-color4
        .p-5
          .row.align-items-center
            .col-lg-8
              h3 Procedimiento sancionatorio
              p En el siguiente video se observará el proceso sancionatorio, sanciones que se establecen para cada tipo de actuación frente al incumplimiento de las obligaciones formales contempladas en el libro 5 del Estatuto Tributario (sanción por extemporaneidad, por no declarar y otras sanciones), así como los procesos de determinación y las etapas en la formación de los actos mediante los cuales se determina el tributo e imponen las sanciones entre otros.
            .col-lg-4.d-flex.justify-content-center
              a.boton.color-acento-contenido.texto-blanco(href="https://www.youtube.com/watch?v=5KxzRQ5uO8U" target="_blank" type="application/pdf")
                span Ver Video
                i.fas.fa-video(style="color: #EF9F14 !important")

    p.mb-5 El régimen sancionatorio en Colombia consta de principios y sanciones tributarias, el primero es la base para tener en cuenta la aplicación de las sanciones:

    #t_1_1
      .titulo-segundo.color-secundario
        h2 1.1 Principios del régimen sancionatorio en tributarios
    p.mb-5 Este régimen sancionatorio en Colombia debe determinar la carga de impuestos con base fundamental en los principios establecidos para conseguir una justicia tributaria.

    .row.bg-color1.mb-4
      .col-12.py-5
        .row.justify-content-center
          .col-10
            p.mb-4 Como primera medida, la Constitución Política de Colombia de 1991 registra en el artículo 363 algunos principios que se deben tener en cuenta a la hora de aplicar el régimen sancionatorio en Colombia. A continuación, se indica en forma literal lo que dice el artículo:

            .row.align-items-center
              .col-lg-3
                figure
                  img(src='@/assets/curso/tema1/img3.svg', style="width: 420px").m-auto
              .col-lg-9
                p.mb-5 <strong>Artículo 363.</strong> El sistema tributario se fundamenta en los principios de equidad, eficiencia y progresividad. Las leyes tributarias no se aplicarán con retroactividad.
                p.mb-5 Por otra parte, <strong>la Ley 1819 del 29 de diciembre de 2016 es:</strong>
                p Por medio de la cual se adopta una reforma tributaria estructural, se fortalecen los mecanismos para la lucha contra la evasión y la elusión fiscal, y se dictan otras disposiciones.

    p.mb-5 Esta Ley introdujo los principios de gradualidad y proporcionalidad de las sanciones tributarias para incentivar a los contribuyentes sancionados, o que hayan incumplido con sus responsabilidades, a que puedan ponerse al día con estas y con la posibilidad de disminuir el pago de multas o sanciones.

    p.mb-5 <strong>Para ilustrar algunos principios considerados en el régimen sancionatorio tributario en Colombia, a continuación, se presenta la siguiente infografía:</strong>

    .row.bg-color3.mb-4
      .col-12.py-5
        .row.align-items-center.justify-content-center
          .col-11

            ImagenInfografica.color-secundario.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/img4.svg', alt='Principios considerados en el régimen sancionatorio tributario en Colombia')

              .tarjeta.color-acento-botones.p-3(x="4%" y="110%" numero="1")
                h5.mb-2.txt-deco3 Equidad
                p Este principio busca la justicia. En materia tributaria persigue equilibrar tanto las cargas tributarias como los beneficios tributarios de manera ecuánime. Es decir, que tanto la imposición de impuestos a los contribuyentes no resulte excesiva, como que los beneficios a estos nos resultan exagerados.

              .tarjeta.color-acento-botones.p-3(x="18%" y="110%" numero="2")
                h5.mb-2.txt-deco3 Eficiencia
                p Cuando se utiliza la menor cantidad de recursos para conseguir un mismo objetivo. Este principio trata de la capacidad del estado en cabeza de sus entes encargados de los tributos, de fijar un impuesto a los contribuyentes o responsables y poder recaudarlos de manera práctica y sencilla.


              .tarjeta.color-acento-botones.p-3(x="34%" y="110%" numero="3")
                h5.mb-2.txt-deco3 Progresividad
                p Enfoca hacia un debido proceso de manera gradual para conseguir los objetivos trazados. A mayores ingresos, mayores impuestos, esto debido a que, a mayor ingreso, mayor riqueza, y con base en esta última en la mayoría de los casos se calculan los tributos.

              .tarjeta.color-acento-botones.p-3(x="62%" y="110%" numero="4")
                h5.mb-2.txt-deco3 Gradualidad
                p Este principio busca la justicia. En materia tributaria persigue equilibrar tanto las cargas tributarias como los beneficios tributarios de manera ecuánime. Es decir, que tanto la imposición de impuestos a los contribuyentes no resulte excesiva, como que los beneficios a estos nos resultan exagerados.

              .tarjeta.color-acento-botones.p-3(x="74%" y="110%" numero="5")
                h5.mb-2.txt-deco3 Progresividad
                p Cuando se utiliza la menor cantidad de recursos para conseguir un mismo objetivo. Este principio trata de la capacidad del estado en cabeza de sus entes encargados de los tributos, de fijar un impuesto a los contribuyentes o responsables y poder recaudarlos de manera práctica y sencilla.


              .tarjeta.color-acento-botones.p-3(x="85%" y="110%" numero="3")
                h5.mb-2.txt-deco3 Lesividad
                p Hablamos de lesividad cuando se causa o se puede causar un daño o lesión. En este sentido se configura cuando las actuaciones realizadas o dejadas de realizar por parte del contribuyente, perjudican el derecho o derechos de alguno o algunos, sean estas personas naturales o jurídicas. Solo en los casos de afectación a terceros se puede considerar que se incurre en lesividad.

              .tarjeta.color-acento-botones.p-3(x="95%" y="110%" numero="4")
                h5.mb-2.txt-deco3 Favorabilidad
                p Este principio se deriva de otras leyes: cuando encontramos dos leyes que regulen algún aspecto o comportamiento del responsable fiscal. Es allí donde el analista de la información, o declarante puede acudir o aplicar la normativa que le resulte menos perjudicial o más favorable desde lo material o económico.


    .separador.my-5

    #t_1_2
      .titulo-segundo.color-secundario
        h2 1.2 Sanciones tributarias

    .row.mb-5
      .col-lg-3.mb-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img5.svg', style="width: 220px").m-auto
      .col-lg-9
        .dual-txt-deco
          p(style="position: relative; z-index: 1;") Haciendo un poco de historia normativa, en la Constitución Política de Colombia de 1991 el numeral 9 del artículo 95 indica que es deber ciudadano “contribuir al financiamiento de los gastos e inversiones del Estado dentro de conceptos de justicia y equidad” y esto último se ve reflejado en los principios del régimen sancionatorio: la justicia y la equidad.
          p <strong>Por otra parte, el artículo 684 del Estatuto Tributario,</strong> le otorga a la DIAN una cantidad importante de herramientas que la facultan para llevar a cabo, de manera adecuada, los procesos de investigación y fiscalización necesarios para conseguir que los responsables, personas naturales o jurídicas, cumplan con la normatividad tributaria. Dentro de dichas facultades, la DIAN puede verificar la autenticidad de los datos o sumas registradas tanto en las declaraciones tributarias presentadas, así como auditar la información suministrada en los demás informes solicitados.

    p.mb-5 De acuerdo con lo expuesto, contribuyente que haga caso omiso a estas responsabilidades, podrá verse penalizado con algún tipo de sanción, es por este motivo que la DIAN, en ejercicio de las funciones otorgadas, tiene definidas una serie de multas aplicables directamente a todas aquellas personas naturales y/o jurídicas que no den cumplimiento de manera oportuna a los compromisos tributarios. Entre las sanciones más frecuentes se encuentran las siguientes:

    .row.mb-4.align-items-center.justify-content-center
      .col-12.col-md-10
        .row.mb-4
          .col-12
            .titulo-sexto.color-acento-contenido.mb-5
              p.mb-0 #[b Figura 1.] Tipos de sanciones
            figure(data-aos="zoom-in-up")
              img(src='@/assets/curso/tema1/img6.svg').m-auto

    .row.bg-color1.mb-5
      .col-12.py-5
        .row.justify-content-center
          .col-lg-3
            figure
              img(src='@/assets/curso/tema1/img7.png', style="width: 200px").m-auto
          .col-lg-7.bg-color2.p-5
            p A nivel general, se considera que la DIAN, u otra entidad del orden departamental o municipal, impone sanciones a las micro y pequeñas empresas, o a cualquier otro tipo de contribuyentes, por el hecho de no cumplir con las obligaciones tributarias establecidas en las distintas normas, o por cumplir de manera incorrecta o inoportuna.
            .linea_naranja.my-3

    .titulo-quinto.color-acento-contenido
      h4 Sanciones tributarias

    figure.my-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nk249S3Wfck" title="Sanciones tributarias" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.my-5 Para conocer en profundidad las sanciones anteriormente mencionadas,  se presenta la normativa y características principales de cada una:

    .row.justify-content-center.mb-5
      .col-lg-8.bg-color4
        .p-5
          .row.align-items-center
            .col-lg-8
              h3 Principales sanciones tributarias en Colombia
              p Para conocer en profundidad las sanciones anteriormente mencionadas, en el siguiente anexo se presenta la normativa y características principales de cada una.
            .col-lg-4.d-flex.justify-content-center
              a.boton.color-acento-contenido.texto-blanco(href="downloads/SancionesTributarias.pdf" target="_blank" type="application/pdf")
                span Descargar pdf
                i.fas.fa-download(style="color: #EF9F14 !important")

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
