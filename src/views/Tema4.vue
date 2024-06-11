<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Matrices de diagnóstico
    
    .row.justify-content-center(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img.bgimg11
          .bloque-texto-g__texto.p-5
            p.mb-0 Las matrices de diagnóstico, son herramientas útiles para analizar diferentes aspectos de la empresa realizando comparaciones con variables externas que permitan medir su estado actual en el mercado. Dichas confrontaciones se realizan con el fin de plantear estrategias a partir de las variables internas para contrarrestar los efectos generados por las variables externas.
    
    Separador
    #t_4_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2  4.1  Matriz de <i>Ansoff</i>

    .row.mb-5.align-items-center(data-aos="zoom-in-left")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/temas/tema4/img2.png")
      .col-sm-12.col-lg-8
        p Esta matriz es una herramienta que permite analizar desde el punto de vista del portafolio de productos y/o servicios de la empresa, las posibilidades que esta tiene para ampliar la cobertura del mercado.
        p La matriz de <i>Ansoff</i> confronta dos variables muy importantes, una interna &#60;Producto&#62; y una externa &#60;Mercados&#62;, los criterios que utiliza dicha matriz se basan en la condición de nuevos o actuales: productos del portafolio y mercados en los cuales comercializar dichos productos o servicios.
        .cajon.color-secundario.p-4.mt-5
          p.mb-0 Para realizar esta matriz se necesitan dos datos importantes, el primero es el portafolio de productos de la empresa y el segundo es la descripción del mercado objetivo de la empresa. Con esta información se acude a esta herramienta para ubicar dentro de cada uno de los cuadrantes los productos o servicios que definen las estrategias a desarrollar.
    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-6 
        .titulo-sexto.color-secundario.mt-5
          h5 Figura 1.
          span
            |  Ejemplo matriz de <i>Ansoff</i>
        figure
          img(src='@/assets/curso/temas/tema4/img3.svg', alt='')
        figcaption.mt-3 Fuente: SENA (2020)

    .d-flex.align-items-center.mt-4.mb-4(data-aos="zoom-in-left")
        img.w-card-icon(src="@/assets/curso/temas/tema3/img19.svg")
        .bg5.py-2.w-card-text.fw-bold Estrategias de Matriz de <i>Ansoff</i>
    p.mb-5(data-aos="zoom-in-left") Teniendo en cuenta factores del mercadeo objetivo y de los productos, la empresa debe plantear qué estrategia llevará a cabo, de acuerdo con sus capacidades de producción y comercialización:
    .fullview.mb-5.p-5
      .bg2.p-5(data-aos="zoom-in-left")
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-11
              .row.justify-content-center.mb-0
                .col-sm-12.col-lg-8
                  p.fw-bold.mt-2 Penetración del mercado
                  p Esta estrategia se da para productos y mercados actuales, en este caso el objetivo principal de la empresa es incrementar su participación; en otras palabras, aumentar las ventas. Las acciones a realizar son:
                  ul.lista-ul.mb-0
                    li 
                      i.fas.fa-check-circle.color-primario
                      | Desarrollar estrategias de promoción y comunicación.
                    li 
                      i.fas.fa-check-circle.color-primario
                      | Atraer a compradores de la competencia.
                    li 
                      i.fas.fa-check-circle.color-primario
                      | Incentivar el aumento del consumo de los productos y/o servicios.
                .col-sm-12.col-md-8.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema4/img4.png')
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-11
              .row.justify-content-center.mb-0
                .col-sm-12.col-lg-8
                  p.fw-bold.mt-2 Desarrollo de mercados
                  p Esta estrategia se realiza en mercados nuevos con productos actuales. El objetivo es identificar los nichos en los cuales el producto vigente puede generar una satisfacción a las necesidades de los posibles consumidores. Estos mercados pueden ser otras regiones o zonas geográficas u otros segmentos de personas. Las actividades que se realizan en esta estrategia son:
                  ul.lista-ul.mb-5
                    li 
                      i.fas.fa-check-circle.color-primario
                      | Incrementar los canales de distribución.
                    li 
                      i.fas.fa-check-circle.color-primario
                      | Realizar estrategias de promoción y comunicación dirigida a nuevos segmentos de personas.
                    li 
                      i.fas.fa-check-circle.color-primario
                      | Realizar estrategias de comunicación en otras zonas geográficas.
                .col-sm-12.col-md-8.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema4/img5.png')
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-11
              .row.justify-content-center.mb-0
                .col-sm-12.col-lg-8
                  p.fw-bold.mt-2 Desarrollo de productos
                  p Esta estrategia se implementa con productos nuevos en mercados actuales. La idea es crear novedosas propuestas para los mercados que la empresa ya ha conquistado y en los cuales ha generado cierto nivel de posicionamiento. Las tácticas para el desarrollo de esta estrategia son:
                  ul.lista-ul.mb-5
                    li 
                      i.fas.fa-check-circle.color-primario
                      | Lanzamiento de nuevos productos.
                    li 
                      i.fas.fa-check-circle.color-primario
                      | Crear nuevas gamas de productos para una línea actual.
                    li 
                      i.fas.fa-check-circle.color-primario
                      | Crear productos con nuevos diseños o presentaciones.
                .col-sm-12.col-md-8.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema4/img6.png')
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-11
              .row.justify-content-center.mb-0
                .col-sm-12.col-lg-8
                  p.fw-bold.mt-2 Diversificación
                  p.mb-cus.mb-4 Combina tanto nuevos productos como mercados y se realiza con el fin de conquistarlos. Aquí la empresa cuenta con una infraestructura sólida que le permite ganar otras zonas geográficas y llegar a segmentos que nunca ha trabajado antes. Las actividades que se llevan a cabo en esta estrategia mezclan las que se hacen en el desarrollo de productos y de mercados.
                  .cajon.color-secundario.p-4
                    p.mb-0 Una vez se ha realizado la matriz de <i>Ansoff</i>, la empresa tendrá la capacidad de determinar cuál o cuáles estrategias son más convenientes para incrementar las ventas y mejorar su posicionamiento.
    
                .col-sm-12.col-md-8.col-lg-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema4/img7.png')
          



    Separador
    #t_4_2.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 4.2 Matriz BCG
    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-3
        .titulo-sexto.color-secundario
          h5 Figura 2.
          span
            |  Ejemplo matriz de BCG
        figure
          img(src='@/assets/curso/temas/tema4/img8.svg', alt='')
        figcaption.mb-cus.mt-3 Fuente: SENA (2020)
      .col-sm-12.col-lg-5
        p Es también llamada Matriz del Grupo Consultor de Boston. Está constituida de cuatro secciones representadas mediante gráficos que le otorgan a cada producto una característica particular. Los criterios para la asignación de una figura a cada producto son: el crecimiento de la industria y la participación en el mercado de cada producto o servicio. Es importante tener en cuenta que antes de llevarla a cabo, ambos datos deben estar corroborados.
        .cajon.color-secundario.p-5.mt-4
          p.mb-0.fw-bold Interpretación de las figuras: cada una de las figuras en la matriz representa ciertas características que se asignan a los productos, de acuerdo con los resultados de los criterios de análisis:
    
    .row.justify-content-between.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-3.justify-content-center.mx-0.px-2
        .bg7.px-1.py-3.h-card.mb-cus
          .row.justify-content-center.align-items-center.my-4
            .col-lg-6.d-none.d-lg-block
              img.h-card-img(src='@/assets/curso/temas/tema4/img9.svg')
          .title-card.bg8.mx-2 Estrella
          p.mt-4.text-center.mx-2 Son productos que generan una alta rentabilidad para le empresa, el crecimiento de la industria o del mercado es alto y su participación es fuerte.
      .col-sm-12.col-lg-3.justify-content-center.mx-0.px-2
        .bg7.px-1.py-3.h-card.mb-cus
          .row.justify-content-center.align-items-center.my-4
            .col-lg-6.d-none.d-lg-block
              img.h-card-img(src='@/assets/curso/temas/tema4/img10.svg')
          .title-card.bg8.mx-2 Incognita
          p.mt-4.text-center.mx-2 También llamados interrogantes, son productos con un potencial alto; sin embargo, con niveles bajos en ventas debido a su leve participación en el mercado a pesar del crecimiento de la industria.
      .col-sm-12.col-lg-3.justify-content-center.mx-0.px-2
        .bg7.px-1.py-3.h-card.mb-cus
          .row.justify-content-center.align-items-center.my-4
            .col-lg-6.d-none.d-lg-block
              img.h-card-img(src='@/assets/curso/temas/tema4/img11.svg')
          .title-card.bg8.mx-2 Vaca
          p.mt-4.text-center.mx-2 Son productos con una sostenibilidad estable y tienen una participación alta en el mercado, pero la industria tiende a estancarse.
      .col-sm-12.col-lg-3.justify-content-center.mx-0.px-2
        .bg7.px-1.py-3.h-card.mb-cus
          .row.justify-content-center.align-items-center.my-4
            .col-lg-6.d-none.d-lg-block
              img.h-card-img(src='@/assets/curso/temas/tema4/img12.svg')
          .title-card.bg8.mx-2 Perro
          p.mt-4.text-center.mx-2 Conocidos también como hueso, son productos que están ad portas de salir del mercado, su ciclo de vida está terminando debido a que su participación es leve y la industria tiene un crecimiento bajo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12.bg1.p-4
       .row.justify-content-center.align-items-center
        .col-sm-12.col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema4/img13.svg', style="max-width: 60%; margin: auto;")
        .col-sm-12.col-lg-10
          p.mb-0.text-white.fw-bold Esta matriz proporciona una visión estratégica de la empresa a nivel de su portafolio de productos en su totalidad, haciendo un diagnóstico del mercado y el nivel de ventas de los productos.
   
   
   
    Separador
    #t_4_3.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2  4.3 Matriz de competitividad
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema4/img14.png')
      .col-sm-12.col-lg-8
        p.mb-5 Una de las variables externas del mercado que representa importancia para una empresa, es la competencia; ya que allí está la libertad de escoger la marca que mejor se adapte a la satisfacción de las necesidades. De ahí que el análisis a los competidores más cercanos permite el desarrollo de estrategias que adapten el producto lo mejor posible a las expectativas de los consumidores.
        .cajon.color-acento-contenido.p-4
          p.mb-0 Cada factor debe calificarse de 1 a 5 para luego ser totalizado y ubicar a las empresas analizadas en un <i>ranking</i> que determinará el lugar que ocupa la que se está analizando frente a sus competidores y los factores que debe mejorar para su posición. Los que pueden ser objeto de análisis, son:
    
    .tarjeta--container.tarjeta-radius-0.row.mb-5.justify-content-center(data-aos="zoom-in-left")
      .col-sm-12.col-lg-6.tarjeta.bg4.px-5.py-5
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-6
            ul.lista-ul
              li 
                i.fas.fa-check-circle.color-primario
                | Ventas.
              li 
                i.fas.fa-check-circle.color-primario
                | Posicionamiento.
              li 
                i.fas.fa-check-circle.color-primario
                | Calidad de la publicidad.
              li 
                i.fas.fa-check-circle.color-primario
                | Presencia en medios.
              li 
                i.fas.fa-check-circle.color-primario
                | Estrategia de distribución.
              li 
                i.fas.fa-check-circle.color-primario
                | Precio.
              li 
                i.fas.fa-check-circle.color-primario
                | Calidad.
          .col-sm-12.col-lg-6
            ul.lista-ul
              li 
                i.fas.fa-check-circle.color-primario
                | Exhibición en puntos de venta.
              li 
                i.fas.fa-check-circle.color-primario
                | Promociones.
              li 
                i.fas.fa-check-circle.color-primario
                | Relación con los clientes.
              li 
                i.fas.fa-check-circle.color-primario
                | Servicio al cliente.
              li 
                i.fas.fa-check-circle.color-primario
                | Posicionamiento.
              li 
                i.fas.fa-check-circle.color-primario
                | Línea de productos.
      .col-sm-12.col-lg-4.tarjeta.bgimg12.p-3.d-none.d-lg-block
        h2.mt-5.p-3 &nbsp;
    
    
    .titulo-sexto.color-secundario(data-aos="zoom-in-left")
      h5 Figura 3.
      span
        |  Ejemplo matriz de competitividad
    figure(data-aos="zoom-in-left")
      img(src='@/assets/curso/temas/tema4/img16.svg', alt='')
    figcaption Fuente: SENA (2020) 


    .row.justify-content-center.align-items-center.my-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12.bg1.p-4
       .row.justify-content-center.align-items-center
        .col-sm-12.col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema4/img13.svg', style="max-width: 60%; margin: auto;")
        .col-sm-12.col-lg-10
          p.mb-0.text-white.fw-bold En esta matriz se identifican los competidores más importantes de la empresa y sus principales debilidades y fortalezas. Los factores que se evalúen determinan la efectividad del análisis a partir de la matriz y pueden ser diferentes para cada industria.
    
    
    
    Separador
    #t_4_4.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2  4.4 Matriz <i>DOFA</i>
    .row.justify-content-center(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img.bgimg13
          .bloque-texto-g__texto.p-5
            p.mb-0 El análisis <i>DOFA</i> o <i>FODA</i>, es un método que permite examinar debilidades, oportunidades, fortalezas y amenazas de una empresa. Este procedimiento es uno de los más realizados por las organizaciones para la toma de decisiones en relación con las variables internas y externas debido a que permite la ponderación de los factores y el planteamiento de estrategias para contrarrestar los hallazgos negativos.
    
    
    .row.tarjeta--container.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-6.tarjeta.bgimg9.p-5
        .row.justify-content-start.mb-4.d-none.d-lg-block
          .col-4
              img(src='@/assets/curso/temas/tema4/img18.svg')
        h2.mt-5  Análisis interno
        p Comprende las debilidades y las fortalezas. En este análisis se tienen en cuenta las derivaciones de las variables internas estudiadas anteriormente; por ejemplo, se pueden analizar los procesos de producción, las estrategias de distribución, las políticas de precios, la promoción, el servicio al cliente o el personal que opera en la empresa.
      .col-sm-12.col-lg-6.tarjeta.bgimg10.p-5
        .row.justify-content-start.mb-4.d-none.d-lg-block
          .col-4
              img(src='@/assets/curso/temas/tema4/img19.svg')
        h2.mt-5.text-white Análisis externo
        p.text-white Incluye las amenazas y oportunidades. Aquí se deben tener en cuenta los factores que se desprenden de las variables externas; la competencia, los canales de distribución, el consumidor, aspectos legales, medio ambiente, factores económicos, entre otros.
    
    p.mb-4(data-aos="zoom-in-left") Para realizar esta matriz es necesario hacer una descripción de cada una de las debilidades, oportunidades, fortalezas y amenazas. Lo ideal es ser lo más específico y detallista posible, no dejar de lado ningún aspecto por insignificante que parezca.
    p.mb-5(data-aos="zoom-in-left") Una vez hecho el listado, es necesario calificar cada uno de los factores descritos para darles mayor o menor importancia, de esta forma se hará el cruce de factores y se definirán las estrategias.
    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-5
        .titulo-sexto.color-secundario
          h5 Figura 4.
          span
            |  Ejemplo matriz <i>DOFA</i>
        figure
          img(src='@/assets/curso/temas/tema4/img21.svg', alt='')
        figcaption Fuente: SENA (2020) 
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img.mt-5(src='@/assets/curso/temas/tema4/img22.png', alt='')


    
    
    .d-flex.align-items-center.my-5(data-aos="zoom-in-left")
      img.w-card-icon(src="@/assets/curso/temas/tema3/img21.svg")
      .bg5.py-2.w-card-text.fw-bold Estrategias
    p.mb-5(data-aos="zoom-in-left") De acuerdo con los hallazgos que se realicen en cada uno de los listados de factores, la matriz debe arrojar estrategias para la solución de problemas o para mantener y mejorar los aspectos positivos:
    

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in-left")
      .tarjeta.color-secundario-cus.py-4.px-5
        .row.justify-content-center.mb-4
          .col-sm-3.col-lg-5.mb-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema4/img23.svg')
        .title-card.bg8.mx-2.mb-4 <i>DO</i>
        p.mb-0.text-center Las debilidades halladas en la matriz deben ser contrastadas con oportunidades del mercado a través de tácticas internas.
      .tarjeta.color-secundario-cus.py-4.px-5
        .row.justify-content-center.mb-4
          .col-sm-3.col-lg-5.mb-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema4/img24.svg')
        .title-card.bg8.mx-2.mb-4 <i>FO</i>
        p.mb-0.text-center Las oportunidades del mercado que la empresa haya identificado deben ser aprovechadas a través de las fortalezas que presenta.
      .tarjeta.color-secundario-cus.py-4.px-5
        .row.justify-content-center.mb-4
          .col-sm-3.col-lg-5.mb-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema4/img25.svg')
        .title-card.bg8.mx-2.mb-4 <i>DA</i>
        p.mb-0.text-center Las debilidades y amenazas que la empresa presenta requieren de estrategias para ser superadas.
      .tarjeta.color-secundario-cus.py-4.px-5
        .row.justify-content-center.mb-4
          .col-sm-3.col-lg-5.mb-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema4/img26.svg')
        .title-card.bg8.mx-2.mb-4 <i>FA</i>
        p.mb-0.text-center Estrategias que permitan contrarrestar las posibles amenazas a partir de las fortalezas de la empresa.

    .row.justify-content-center.align-items-center.my-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12.bg1.p-4
       .row.justify-content-center.align-items-center
        .col-sm-12.col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema4/img13.svg', style="max-width: 60%; margin: auto;")
        .col-sm-12.col-lg-10
          p.mb-0.text-white.fw-bold El análisis <i>DOFA</i> permite plantear un compendio de estrategias que pueden llegar a ser muy eficaces en algún momento para la empresa, en relación con factores internos y externos; adicionalmente, genera un panorama amplio de su estado y de posibles puntos de debilidad o fortaleza que se deben mejorar y aprovechar.
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
