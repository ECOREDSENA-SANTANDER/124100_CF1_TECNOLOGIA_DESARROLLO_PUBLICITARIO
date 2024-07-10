<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Antecedentes de la investigación de mercados
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-8.bg1.p-4
       .row.justify-content-center.align-items-center
        .col-sm-12.col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema1/img1.svg', style="max-width: 60%; margin: auto;")
        .col-sm-12.col-lg-10
          p.mb-0.text-white.fw-bold La investigación de mercados tiene sus orígenes formales en las primeras décadas de 1900:
    
    
    
    .tarjeta.bgimg1.p-4(data-aos="zoom-in-left")
      LineaTiempoC.color-acento-contenido.mt-5
        .row(titulo="1911").align-items-center.justify-content-center
          .col-sm-12.col-lg-3.mb-0
            img(src='@/assets/curso/temas/tema1/img3.svg')
          .col-sm-12.col-lg-5.mb-0.mt-5
            .h4.mt-2 1911
            p.mb-0 J. George Frederick estableció una firma de investigación llamada de  #[i Bussiness Bourne].
        .row(titulo="1911 - 1914").align-items-center.justify-content-center
          .col-sm-12.col-lg-3.mb-0
              img(src='@/assets/curso/temas/tema1/img4.svg')
          .col-sm-12.col-lg-5.mb-0.mt-5
            .h4.mt-2 1911 - 1914
            p Empresas de publicidad y marcas comerciales crean departamentos de investigación de mercados.
        .row(titulo="1915").align-items-center.justify-content-center
          .col-sm-12.col-lg-3.mb-0
              img(src='@/assets/curso/temas/tema1/img5.svg')
          .col-sm-12.col-lg-5.mb-0.mt-5
            .h4.mt-2 1915
            p Crean el #[i Department of Commercial Research] (Departamento de Investigación Comercial) de la  #[i United States Rubber] y contratan al Dr. Paul H. Nystrom para su manejo.
        .row(titulo="1921").align-items-center.justify-content-center
          .col-sm-12.col-lg-3.mb-0
              img(src='@/assets/curso/temas/tema1/img6.svg')
          .col-sm-12.col-lg-5.mb-0.mt-5
            .h4.mt-2 1921
            p Se publicó  #[i Market Analysis de Percival White], que fue el primer libro de investigación en ganar un alto número de lectores y del que se hicieron varias ediciones.
        .row(titulo="1937").align-items-center.justify-content-center
          .col-sm-12.col-lg-3.mb-0
              img(src='@/assets/curso/temas/tema1/img7.svg')
          .col-sm-12.col-lg-5.mb-0.mt-5
            .h4.mt-2 1937
            p Se publicó  #[i  Market Research and Analysis] de Lyndon O. Brown, uno de los textos universitarios más populares de la época.
        .row(titulo="1940").align-items-center.justify-content-center
          .col-sm-12.col-lg-3.mb-0
              img(src='@/assets/curso/temas/tema1/img8.svg')
          .col-sm-12.col-lg-5.mb-0.mt-5
            .h4.mt-2 1940
            p Se publicaron numerosos textos sobre investigación y varias universidades de administración comenzaron a ofrecer cursos de investigación de mercados.
        .row(titulo="1947").align-items-center.justify-content-center
          .col-sm-12.col-lg-3.mb-0
              img(src='@/assets/curso/temas/tema1/img9.svg')
          .col-sm-12.col-lg-5.mb-0.mt-5
            .h4.mt-2 1947
            p Los gastos en actividades de investigación de mercados se estimaban en US$50 millones anuales.
        .row(titulo="1948").align-items-center.justify-content-center
          .col-sm-12.col-lg-3.mb-0
              img(src='@/assets/curso/temas/tema1/img10.svg')
          .col-sm-12.col-lg-5.mb-0.mt-5
            .h4.mt-2 1948
            p Ya se habían formado más de 200 organizaciones de investigación de mercados en los Estados Unidos.
        .row(titulo="1950 - 1970").align-items-center.justify-content-center
          .col-sm-12.col-lg-3.mb-0
              img(src='@/assets/curso/temas/tema1/img11.svg')
          .col-sm-12.col-lg-5.mb-0.mt-5
            .h4.mt-2 1950 - 1970
            p El computador incrementó rápidamente el ritmo de la innovación metodológica, en especial en el área de la investigación de mercados cuantitativa.
        .row(titulo="1990 - 2000").align-items-center.justify-content-center
          .col-sm-12.col-lg-3.mb-0
              img(src='@/assets/curso/temas/tema1/img12.svg')
          .col-sm-12.col-lg-5.mb-0.mt-5
            .h4.mt-2 1990 - 2000
            p Se crean los lectores ópticos de barras en los supermercados, los cuales suministran datos infinitos de consumo; así como las entrevistas telefónicas asistidas por computador, el análisis de datos por medio de terminales remotas y la realización de entrevistas a través de sistemas de televisión por cable de doble vía.
        .row(titulo="2002").align-items-center.justify-content-center
          .col-sm-12.col-lg-3.mb-0
              img(src='@/assets/curso/temas/tema1/img13.svg')
          .col-sm-12.col-lg-5.mb-0.mt-5
            .h4.mt-2 2002
            p El Dr. Ale Smith, ganador del premio Nobel en economía, acuña el término  #[i Neuromarketing] por el uso de tecnologías médicas en el estudio del comportamiento de los consumidores.

    .row.align-items-center.justify-content-center.mt-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-4
        TarjetaAudio.color-acento-contenido.mb-3(
          :audio="require('@/assets/componentes/audio.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass" scoped></style>
