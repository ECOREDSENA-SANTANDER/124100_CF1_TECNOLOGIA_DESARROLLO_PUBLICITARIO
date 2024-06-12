<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La imagen presenta un esquema de investigación publicitaria, dividido en cuatro áreas clave: Variables del mercado, que examinan factores externos e internos; Recolección de información, abarcando tipos, fuentes y técnicas de investigación; Matrices de diagnóstico, incluyendo herramientas como las matrices de Ansoff, BCG, competitividad y DOFA; y el Proceso de investigación, que abarca desde la identificación del problema hasta la recolección y análisis de datos y la formulación de estrategias. Este esquema organiza y guía el proceso de investigación en publicidad y mercados.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
