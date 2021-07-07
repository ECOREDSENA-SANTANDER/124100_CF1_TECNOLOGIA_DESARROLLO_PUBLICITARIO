<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Matrices de diagnóstico
    p Las matrices de diagnóstico, son herramientas útiles para analizar diferentes aspectos de la empresa realizando comparaciones con variables externas que permitan medir su estado actual en el mercado. Dichas confrontaciones se realizan con el fin de plantear estrategias a partir de las variables internas para contrarrestar los efectos generados por las variables externas.
    separador.mb-5
    #t_4_1
    .titulo-segundo
      h2 4.1  Matriz de Ansoff
    .row.mb-5.align-items-center
      .col-lg-9
        p Esta matriz es una herramienta que permite analizar desde el punto de vista del portafolio de productos y/o servicios de la empresa, las posibilidades que esta tiene para ampliar la cobertura del mercado.
        p La matriz de Ansoff confronta dos variables muy importantes, una interna &#60;Producto&#62; y una externa &#60;Mercados&#62;, los criterios que utiliza dicha matriz se basan en la condición de nuevos o actuales: productos del portafolio y mercados en los cuales comercializar dichos productos o servicios.
        .cajon.color-secundario.p-4
          p.mb-0 Para realizar esta matriz se necesitan dos datos importantes, el primero es el portafolio de productos de la empresa y el segundo es la descripción del mercado objetivo de la empresa. Con esta información se acude a esta herramienta para ubicar dentro de cada uno de los cuadrantes los productos o servicios que definen las estrategias a desarrollar.
      .col-lg-3.mt-4.mt-lg-0
        p #[b Ejemplo matriz de Ansoff]
        figure(data-aos="flip-left")
          img(src='@/assets/curso/img50.svg', style="max-width: 100%; margin: auto;")
          figcaption.mt-3 Fuente: SENA (2020)
    .h4.mb-5 Estrategias de la matriz de Ansoff
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5(data-aos="slide-left")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/img51.svg', style="max-width: 100%; margin: auto;")
        .col-lg-10
          .bloque-texto-a__texto.p-4
            p.mb-0 Teniendo en cuenta factores del mercadeo objetivo y de los productos, la empresa debe plantear qué estrategia llevará a cabo, de acuerdo con sus capacidades de producción y comercialización:
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Penetración del mercado")
        .row.align-items-center
          .col-lg-8
            .h4 Penetración del mercado
            p Esta estrategia se da para productos y mercados actuales, en este caso el objetivo principal de la empresa es incrementar su participación; en otras palabras, aumentar las ventas. Las acciones a realizar son:
            ul.lista-ul--separador.mb-5
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                | Desarrollar estrategias de promoción y comunicación.
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                | Atraer a compradores de la competencia.
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                | Incentivar el aumento del consumo de los productos y/o servicios.
          .col-lg-4
            figure
              img(src='@/assets/curso/img52.svg', style="max-width: 100%; margin: auto;")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Desarrollo de mercados")
        .row.align-items-center
          .col-lg-8
            .h4 Desarrollo de mercados
            p Esta estrategia se realiza en mercados nuevos con productos actuales. El objetivo es identificar los nichos en los cuales el producto vigente puede generar una satisfacción a las necesidades de los posibles consumidores. Estos mercados pueden ser otras regiones o zonas geográficas u otros segmentos de personas. Las actividades que se realizan en esta estrategia son:
            ul.lista-ul--separador.mb-5
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                | Incrementar los canales de distribución.
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                | Realizar estrategias de promoción y comunicación dirigida a nuevos segmentos de personas.
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                | Realizar estrategias de comunicación en otras zonas geográficas.
          .col-lg-4
            figure
              img(src='@/assets/curso/img53.svg', style="max-width: 100%; margin: auto;")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Desarrollo de productos")
        .row.align-items-center
          .col-lg-8
            .h4 Desarrollo de productos
            p Esta estrategia se implementa con productos nuevos en mercados actuales. La idea es crear novedosas propuestas para los mercados que la empresa ya ha conquistado y en los cuales ha generado cierto nivel de posicionamiento. Las tácticas para el desarrollo de esta estrategia son:
            ul.lista-ul--separador.mb-5
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                | Lanzamiento de nuevos productos.
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                | Crear nuevas gamas de productos para una línea actual.
              li 
                i.fas.fa-caret-right(style="color: #37A3A5")
                | Crear productos con nuevos diseños o presentaciones.
          .col-lg-4
            figure
              img(src='@/assets/curso/img54.svg', style="max-width: 100%; margin: auto;")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Diversificación")
        .row.align-items-center
          .col-lg-8
            .h4 Diversificación
            p Combina tanto nuevos productos como mercados y se realiza con el fin de conquistarlos. Aquí la empresa cuenta con una infraestructura sólida que le permite ganar otras zonas geográficas y llegar a segmentos que nunca ha trabajado antes. Las actividades que se llevan a cabo en esta estrategia mezclan las que se hacen en el desarrollo de productos y de mercados.
          .col-lg-4
            figure
              img(src='@/assets/curso/img55.svg', style="max-width: 100%; margin: auto;")
    .cajon.color-secundario.p-4
      p.mb-0 Una vez se ha realizado la matriz de Ansoff, la empresa tendrá la capacidad de determinar cuál o cuáles estrategias son más convenientes para incrementar las ventas y mejorar su posicionamiento.
    separador.mb-5
    #t_4_2
    .titulo-segundo
      h2 4.2 Matriz BCG
    .row.mb-5.align-items-center
      .col-lg-2.mb-4.mb-lg-0
        p #[b Ejemplo matriz de BCG]
        figure(data-aos="flip-right")
          img(src='@/assets/curso/img56.svg', style="max-width: 100%; margin: auto;")
          figcaption.mt-3 Fuente: SENA (2020)
      .col-lg-10
        p Es también llamada Matriz del Grupo Consultor de Boston. Está constituida de cuatro secciones representadas mediante gráficos que le otorgan a cada producto una característica particular. Los criterios para la asignación de una figura a cada producto son: el crecimiento de la industria y la participación en el mercado de cada producto o servicio. Es importante tener en cuenta que antes de llevarla a cabo, ambos datos deben estar corroborados.
        .cajon.color-secundario.p-4
          p.mb-0 Interpretación de las figuras: cada una de las figuras en la matriz representa ciertas características que se asignan a los productos, de acuerdo con los resultados de los criterios de análisis:
    .row.mb-5
      .col-6.col-lg-3
        figure
          img(src='@/assets/curso/img57.svg', style="max-width: 100%; margin: auto;")
      .col-6.col-lg-3
        figure
          img(src='@/assets/curso/img58.svg', style="max-width: 100%; margin: auto;")
      .col-6.col-lg-3
        figure
          img(src='@/assets/curso/img59.svg', style="max-width: 100%; margin: auto;")
      .col-6.col-lg-3
        figure
          img(src='@/assets/curso/img60.svg', style="max-width: 100%; margin: auto;")
    p Esta matriz proporciona una visión estratégica de la empresa a nivel de su portafolio de productos en su totalidad, haciendo un diagnóstico del mercado y el nivel de ventas de los productos.
    separador.mb-5
    #t_4_3
    .titulo-segundo
      h2 4.3 Matriz de competitividad
    p Una de las variables externas del mercado que representa importancia para una empresa, es la competencia; ya que allí está la libertad de escoger la marca que mejor se adapte a la satisfacción de las necesidades. De ahí que el análisis a los competidores más cercanos permite el desarrollo de estrategias que adapten el producto lo mejor posible a las expectativas de los consumidores.
    .cajon.color-secundario.p-4.mb-5
      p.mb-0 Cada factor debe calificarse de 1 a 5 para luego ser totalizado y ubicar a las empresas analizadas en un ranking que determinará el lugar que ocupa la que se está analizando frente a sus competidores y los factores que debe mejorar para su posición. Los que pueden ser objeto de análisis, son:
    .row.justify-content-center.align-items-center.mb-5
      .col-4
        ul.lista-ul--separador
          li 
            i.fas.fa-caret-right(style="color: #37A3A5")
            | Ventas.
          li 
            i.fas.fa-caret-right(style="color: #37A3A5")
            | Posicionamiento.
          li 
            i.fas.fa-caret-right(style="color: #37A3A5")
            | Calidad de la publicidad.
          li 
            i.fas.fa-caret-right(style="color: #37A3A5")
            | Presencia en medios.
          li 
            i.fas.fa-caret-right(style="color: #37A3A5")
            | Estrategia de distribución.
          li 
            i.fas.fa-caret-right(style="color: #37A3A5")
            | Precio.
          li 
            i.fas.fa-caret-right(style="color: #37A3A5")
            | Calidad.
          li 
            i.fas.fa-caret-right(style="color: #37A3A5")
            | Exhibición en puntos de venta.
          li 
            i.fas.fa-caret-right(style="color: #37A3A5")
            | Promociones.
          li 
            i.fas.fa-caret-right(style="color: #37A3A5")
            | Relación con los clientes.
          li 
            i.fas.fa-caret-right(style="color: #37A3A5")
            | Servicio al cliente.
          li 
            i.fas.fa-caret-right(style="color: #37A3A5")
            | Posicionamiento.
          li 
            i.fas.fa-caret-right(style="color: #37A3A5")
            | Línea de productos.
      .col-4.ms-5
        figure(data-aos="flip-right")
          img(src='@/assets/curso/img61.svg', style="max-width: 100%; margin: auto;")
    p.mb-5 #[b Ejemplo matriz de competitividad]
    figure.mb-5
      img(src='@/assets/curso/img62.svg', style="max-width: 100%; margin: auto;")
      figcaption.mt-3 Fuente: SENA (2020)
    .cajon.color-primario.p-4
      p.mb-0 En esta matriz se identifican los competidores más importantes de la empresa y sus principales debilidades y fortalezas. Los factores que se evalúen determinan la efectividad del análisis a partir de la matriz y pueden ser diferentes para cada industria.
    separador.mb-5
    #t_4_4
    .titulo-segundo
      h2 4.4 Matriz DOFA
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5(data-aos="slide-right")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/img63.svg', style="max-width: 100%; margin: auto;")
        .col-lg-10
          .bloque-texto-a__texto.p-4
            p.mb-0 El análisis DOFA o FODA, es un método que permite examinar debilidades, oportunidades, fortalezas y amenazas de una empresa. Este procedimiento es uno de los más realizados por las organizaciones para la toma de decisiones en relación con las variables internas y externas debido a que permite la ponderación de los factores y el planteamiento de estrategias para contrarrestar los hallazgos negativos.
    .row.justify-content-center
      .col-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/img64.svg', alt='Texto que describa la imagen')
              
            h2.text-center Análisis interno
            p.text-center Comprende las debilidades y las fortalezas. En este análisis se tienen en cuenta las derivaciones de las variables internas estudiadas anteriormente; por ejemplo, se pueden analizar los procesos de producción, las estrategias de distribución, las políticas de precios, la promoción, el servicio al cliente o el personal que opera en la empresa.
          .col-md.tarjeta.color-acento-botones.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/img65.svg', alt='Texto que describa la imagen')
            h2.text-center Análisis externo
            p.text-center Incluye las amenazas y oportunidades. Aquí se deben tener en cuenta los factores que se desprenden de las variables externas; la competencia, los canales de distribución, el consumidor, aspectos legales, medio ambiente, factores económicos, entre otros.
    p Para realizar esta matriz es necesario hacer una descripción de cada una de las debilidades, oportunidades, fortalezas y amenazas. Lo ideal es ser lo más específico y detallista posible, no dejar de lado ningún aspecto por insignificante que parezca.
    p.mb-5 Una vez hecho el listado, es necesario calificar cada uno de los factores descritos para darles mayor o menor importancia, de esta forma se hará el cruce de factores y se definirán las estrategias.
    p #[b Ejemplo matriz DOFA]
    figure.mb-5
      img(src='@/assets/curso/img66.svg', style="max-width: 95%;").m-auto
    .cajon.color-secundario.p-4.mb-5
      p.mb-0 Estrategias: de acuerdo con los hallazgos que se realicen en cada uno de los listados de factores, la matriz debe arrojar estrategias para la solución de problemas o para mantener y mejorar los aspectos positivos:
    .row.mb-0.mb-lg-5
      .col-md-6.col-lg-3.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img67.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              h2.text-center DO
              p.text-center Las debilidades halladas en la matriz deben ser contrastadas con oportunidades del mercado a través de tácticas internas.
      .col-md-6.col-lg-3.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img68.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              h2.text-center FO
              p Las oportunidades del mercado que la empresa haya identificado deben ser aprovechadas a través de las fortalezas que presenta.
      .col-md-6.col-lg-3.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img69.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              h2.text-center DA
              p Las debilidades y amenazas que la empresa presenta requieren de estrategias para ser superadas.
      .col-md-6.col-lg-3.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img69.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              h2.text-center FA
              p.text-center Estrategias que permitan contrarrestar las posibles amenazas a partir de las fortalezas de la empresa.
    .cajon.color-primario.p-4
      p.mb-0 El análisis DOFA permite plantear un compendio de estrategias que pueden llegar a ser muy eficaces en algún momento para la empresa, en relación con factores internos y externos; adicionalmente, genera un panorama amplio de su estado y de posibles puntos de debilidad o fortaleza que se deben mejorar y aprovechar.

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

<style lang="sass" scoped></style>
