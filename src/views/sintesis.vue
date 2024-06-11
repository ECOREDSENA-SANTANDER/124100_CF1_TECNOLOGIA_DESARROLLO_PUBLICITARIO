<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Se detalla el proceso y componentes de la investigación publicitaria junto a los antecedentes de la investigación de mercados. En el área de investigación publicitaria, se abordan las variables del mercado que influyen en las decisiones de mercado, las técnicas y fuentes para la recolección de información, y diversas matrices de diagnóstico como la matriz de Ansoff, BCG, de Competitividad y DOFA. Por otro lado, los antecedentes de la investigación de mercados se describen a través de un proceso que incluye la identificación del problema, la metodología aplicada, la recolección y análisis de datos, y la elaboración de conclusiones y estrategias resultantes. ")
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
