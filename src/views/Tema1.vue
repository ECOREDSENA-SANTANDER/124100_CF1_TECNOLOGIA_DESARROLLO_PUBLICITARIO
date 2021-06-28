<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Antecedentes de investigación de mercados
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5(data-aos="slide-left")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/img1.svg', style="max-width: 60%; margin: auto;")
        .col-lg-10
          .bloque-texto-a__texto.p-4
            p.mb-0 La investigación de mercados tiene sus orígenes formales en las primeras décadas de 1900:
    .tarjeta.tarjeta--gris.p-4
      LineaTiempoC.color-acento-contenido
        .row(titulo="1911").align-items-center
          .col-lg-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/img2.svg', style="max-width: 25%; margin: auto;")
          .col-lg-9
            .h4 1911
            p J. George Frederick estableció una firma de investigación llamada de Bussiness Bourne.
        .row(titulo="1911 - 1914").align-items-center
          .col-lg-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/img3.svg', style="max-width: 55%; margin: auto;")
          .col-lg-9
            .h4 1911 - 1914
            p Empresas de publicidad y marcas comerciales crean departamentos de investigación de mercados.
        .row(titulo="1915").align-items-center
          .col-lg-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/img4.svg', style="max-width: 65%; margin: auto;")
          .col-lg-9
            .h4 1915
            p Crean el Department of Commercial Research (Departamento de Investigación Comercial) de la United States Rubber y contratan al Dr. Paul H. Nystrom para su manejo.
        .row(titulo="1921").align-items-center
          .col-lg-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/img5.svg', style="max-width: 35%; margin: auto;")
          .col-lg-9
            .h4 1921
            p Se publicó Market Analysis de Percival White, que fue el primer libro de investigación en ganar un alto número de lectores y del que se hicieron varias ediciones.
        .row(titulo="1937").align-items-center
          .col-lg-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/img6.svg', style="max-width: 35%; margin: auto;")
          .col-lg-9
            .h4 1937
            p Se publicó Market Research and Analysis de Lyndon O. Brown, uno de los textos universitarios más populares de la época.
        .row(titulo="1940").align-items-center
          .col-lg-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/img7.svg', style="max-width: 65%; margin: auto;")
          .col-lg-9
            .h4 1940
            p Se publicaron numerosos textos sobre investigación y varias universidades de administración comenzaron a ofrecer cursos de investigación de mercados.
        .row(titulo="1947").align-items-center
          .col-lg-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/img8.svg', style="max-width: 65%; margin: auto;")
          .col-lg-9
            .h4 1947
            p Los gastos en actividades de investigación de mercados se estimaban en US$50 millones anuales.
        .row(titulo="1948").align-items-center
          .col-lg-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/img9.svg', style="max-width: 65%; margin: auto;")
          .col-lg-9
            .h4 1948
            p Ya se habían formado más de 200 organizaciones de investigación de mercados en los Estados Unidos.
        .row(titulo="1950 - 1970").align-items-center
          .col-lg-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/img10.svg', style="max-width: 65%; margin: auto;")
          .col-lg-9
            .h4 1950 - 1970
            p El computador incremento rápidamente el ritmo de la innovación metodológica, en especial en el área de la investigación de mercados cuantitativa.
        .row(titulo="1990 - 2000").align-items-center
          .col-lg-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/img11.svg', style="max-width: 65%; margin: auto;")
          .col-lg-9
            .h4 1990 - 2000
            p Se crean los lectores ópticos de barras en los supermercados, los cuales suministran datos infinitos de consumo; así como las entrevistas telefónicas asistidas por computador, el análisis de datos por medio de terminales remotas y la realización de entrevistas a través de sistemas de televisión por cable de doble vía.
        .row(titulo="2002").align-items-center
          .col-lg-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/img12.svg', style="max-width: 65%; margin: auto;")
          .col-lg-9
            .h4 2002
            p El Dr. Ale Smith, ganador del premio Nobel en economía, acuña el término Neuromarketing por el uso de tecnologías médicas en el estudio del comportamiento de los consumidores.

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
