<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Variables del mercado
    p.mb-5 En el proceso publicitario, la realización de la investigación es una tarea que en teoría debería llevar a cabo la empresa propietaria de la marca a la cual se le hacen las estrategias de promoción y comunicación. Sin embargo, en muchas ocasiones los empresarios en su mayoría de las Mipymes, dejan de lado la investigación o transfieren esta responsabilidad directamente al profesional o a la agencia de publicidad en el momento de emprender la creación de un brief.
    .row.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 La identificación de las variables que inciden directamente en el proceso comercial, productivo y administrativo de la empresa, son el primer paso para el desarrollo del proceso de investigación publicitaria, toda vez que son el preámbulo a la recolección de información.
    separador.mb-5
    #t_2_1
    .titulo-segundo
      h2 2.1 ¿Qué es una variable del mercado?
    .bloque-texto-a.color-secundario.p-4.p-md-5(data-aos="slide-right")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/img13.svg', style="max-width: 100%; margin: auto;")
        .col-lg-10
          .bloque-texto-a__texto.p-4
            p.mb-0 Como su nombre lo indica, es un factor que tiende a cambiar, ya sea por influencias externas o internas que afectan positiva o negativamente la empresa, debido a su incidencia en el desarrollo comercial de los productos o servicios.
    separador.mb-5
    #t_2_2
    .titulo-segundo
      h2 2.2 Variables externas
    p.mb-5 Son variables que están exentas del control de la empresa y sobre las que no se pueden tomar decisiones directamente; sin embargo, son confortables a través de acciones que se realizan dentro de ella. Las variables externas con más incidencia en la mayoría de Mipymes, son:
    SlyderB(:datos="datosSlyder")
    separador.mb-5
    #t_2_3
    .titulo-segundo
      h2 2.3 Variables internas
    p Además de las variables externas que no están bajo el dominio de la empresa, esta cuenta con unas internas que están bajo su completo control y con las que las Mipymes tienen la capacidad de sobresalir en un mercado muy competitivo, como el de hoy, aplicando estrategias acertadas:
    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Investigación de mercados")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Investigación de mercados
            p Una frase muy conocida dice: #[span <]quien tiene la información tiene el poder#[span >], nada más cierto y claro para definir esta variable, ya que cualquier empresa que desee sobresalir en el mercado tiene en la investigación y en el conocimiento la mejor herramienta para lograrlo.
          .col-md-6
            figure
              img(src='@/assets/curso/img22.svg', style="max-width: 70%; margin: auto;")
      .py-3.py-md-4(titulo="Precio")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Precio
            p Si bien debe responder a las necesidades, gustos, deseos, preferencias y condiciones del mercado, la empresa tiene la posibilidad de diseñar, crear, modificar y adaptar sus productos o servicios a las exigencias de sus consumidores.
          .col-md-6
            figure
              img(src='@/assets/curso/img23.svg', style="max-width: 50%; margin: auto;")
      .py-3.py-md-4(titulo="Producto")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Producto
            p Esta es una variable considerada por muchos expertos como mixta o semicontrolable; debido a que, si bien la empresa está en la libertad de asignar el precio a sus productos, hay ciertas restricciones; entre ellas, los consumidores, la competencia y algunas leyes que ejercen control sobre este tipo de factores.
          .col-md-6
            figure
              img(src='@/assets/curso/img24.svg', style="max-width: 70%; margin: auto;")
      .py-3.py-md-4(titulo="Canales de distribución")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Canales de distribución
            p Canales de distribución: la empresa, con base en el conocimiento que haya obtenido de su mercado objetivo, tiene la opción de entregar el producto de la forma más adecuada y oportuna para sus clientes basándose en que muchos puntos de venta o distribuidores tienen ciertas exigencias para la negociación.
          .col-md-6
            figure
              img(src='@/assets/curso/img25.svg', style="max-width: 50%; margin: auto;")
      .py-3.py-md-4(titulo="Promoción")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Promoción
            p Otro factor determinante en el proceso de comercialización es la promoción, la cual exige conocimientos y creatividad; sin embargo, hoy en día las posibilidades que ofrecen los nuevos medios hace que cualquier empresa pueda abarcar audiencias que en otras épocas eran inimaginables.
          .col-md-6
            figure
              img(src='@/assets/curso/img26.svg', style="max-width: 50%; margin: auto;")
      .py-3.py-md-4(titulo="Personal")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Personal
            p De acuerdo con la versión de Kotler del Marketing mix, el personal hace parte de las 6P de la empresa y se asume como una variable controlable muy importante. Un personal capacitado y con sentido de pertenencia puede generar un impulso trascendental a la organización.
          .col-md-6
            figure
              img(src='@/assets/curso/img27.svg', style="max-width: 60%; margin: auto;")
    .row.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Las variables del mercado, sean internas o externas representan la clave para el planteamiento de las estrategias de marketing y de comunicación. La principal tarea del encargado de la publicidad de la empresa está en el análisis cuidadoso de cada una de ellas, con el fin de que en el diseño se produzca un beneficio para la Mipyme y los riegos sean mínimos.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Consumidor',
        texto:
          'Es la variable más importante del mercado debido a que son los consumidores de los productos o usuarios de los servicios por quienes existe la empresa. Por esta razón, la Mipyme no tiene la capacidad de manipular a sus consumidores para obligarlos a comprar o adquirir sus productos.',
        imagen: require('@/assets/curso/img14.svg'),
      },
      {
        titulo: 'Competencia',
        texto:
          'El mercado está diseñado para que los consumidores tengan la libertada de escoger los productos o servicios que satisfagan sus necesidades y la competencia va a hacer todo lo que esté a su alcance para atraer la mayor cantidad de clientes; por este motivo, ninguna empresa está en la capacidad (dentro de las normas éticas) de impedirlo.',
        imagen: require('@/assets/curso/img15.svg'),
      },
      {
        titulo: 'Leyes',
        texto:
          'Las normas son necesarias para el buen funcionamiento del Estado y para el caso del comercio, ninguna empresa puede ni debe interferir en la proclamación de leyes mercantiles que se publican para el bien colectivo y no de particulares. Los impuestos por ejemplo afectan a ciertas empresas, de acuerdo con el tipo de sociedad.',
        imagen: require('@/assets/curso/img16.svg'),
      },
      {
        titulo: 'Economía',
        texto:
          'La economía, al ser una ciencia, tiene a su alrededor otra serie de variables que pueden afectar el trasegar comercial de la Mipyme; entre ellas, se pueden señalar: la oferta, la demanda, la devaluación de la moneda, la inflación, la deflación, entre otras.<br>Por ejemplo, la devaluación del peso frente al dólar, afecta a quienes realizar importaciones y beneficia a los exportadores.',
        imagen: require('@/assets/curso/img17.svg'),
      },
      {
        titulo: 'Tecnología',
        texto:
          'Todos los días hay avances tecnológicos útiles para el desempeño de las empresas; una muestra de ello, es lo vivido en la cuarentena mundial de 2020, donde la tecnología fue protagonista para realizar contingencias comerciales y de comunicación. Por este motivo, las Mipymes deben adaptarse a dichos avances, pues ir a contracorriente los puede volver obsoletos en el mercado.',
        imagen: require('@/assets/curso/img18.svg'),
      },
      {
        titulo: 'Medio ambiente',
        texto:
          'Ninguna zona del mundo está a salvo de fenómenos naturales que pueden afectar el normal funcionamiento de las Mipymes. De nuevo, se puede ejemplificar con la cuarentena mundial de 2020 que, debido a un fenómeno natural, obligó a muchas empresas a cambiar sus modelos de negocio y adaptarse a nuevas circunstancias del mercado.',
        imagen: require('@/assets/curso/img19.svg'),
      },
      {
        titulo: 'Moda',
        texto:
          'Las empresas deben estar en continuo movimiento. Hace algunos años eran impensables productos para comunidades LGBTI, pero hoy muchas compañías los incluyen en sus portafolios. Por este motivo, es importante tener claro que las nuevas tendencias en todas las esferas determinan el consumo.',
        imagen: require('@/assets/curso/img20.svg'),
      },
      {
        titulo: 'Intermediarios',
        texto:
          'Esta es una variable que tal vez no afecta a todas las empresas, ya que muchas tienen sus propios sistemas de distribución y comercialización, pero hay casos en los que una vez el producto es terminado y entregado, en manos del distribuidor quedan tareas como el empacado, rotulado, entrega y comercialización.',
        imagen: require('@/assets/curso/img21.svg'),
      },
    ],
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
