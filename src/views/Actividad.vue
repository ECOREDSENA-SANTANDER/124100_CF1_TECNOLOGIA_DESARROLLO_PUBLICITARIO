<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Nombre del CF',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión y el uso adecuado de las herramientas básicas en la ventana <em>Board</em> del <em>software</em> EAGLE.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!.',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué aporta la investigación publicitaria a la elaboración de un <i>brief</i>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La selección de piezas gráficas sin analizar el mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La información sobre variables y condiciones para orientar la comunicación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La sustitución de las decisiones comerciales de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La definición del presupuesto sin consultar información previa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos y herramientas de la investigación publicitaria.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos abordados.',
        },
        {
          id: 2,
          texto:
            '¿Qué avance impulsó especialmente la investigación cuantitativa de mercados entre 1950 y 1970?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La aplicación de nuevas herramientas informáticas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La desaparición de los estudios de consumidores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La sustitución de datos por opiniones sin registro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La eliminación de procedimientos de análisis.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos y herramientas de la investigación publicitaria.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos abordados.',
        },
        {
          id: 3,
          texto:
            'Una empresa detecta una variación de la inflación que modifica sus costos. ¿Cómo debe clasificar esta condición?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Como una decisión interna de promoción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Como una característica del personal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Como una variable externa económica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Como una modificación de su portafolio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos y herramientas de la investigación publicitaria.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos abordados.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de las siguientes decisiones corresponde principalmente a una variable interna de una empresa?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La entrada de nuevos competidores al sector.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El aumento general de los impuestos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un cambio en las preferencias del consumidor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La capacitación del personal de servicio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos y herramientas de la investigación publicitaria.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos abordados.',
        },
        {
          id: 5,
          texto:
            'Una marca ajusta el diseño de un producto según las necesidades de sus clientes. ¿Qué variable está gestionando?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Medio ambiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Legislación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Competencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos y herramientas de la investigación publicitaria.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos abordados.',
        },
        {
          id: 6,
          texto:
            '¿Por qué el precio puede considerarse una variable semicontrolable?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque depende únicamente de la agencia publicitaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque la empresa lo define, pero influyen el mercado y ciertas normas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Porque todos los productos deben tener el mismo valor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque la empresa no participa en su definición.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos y herramientas de la investigación publicitaria.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos abordados.',
        },
        {
          id: 7,
          texto:
            'Una empresa necesita acercarse por primera vez a un mercado del que dispone de pocos datos. ¿Qué investigación conviene iniciar?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Causal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Experimental concluyente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exploratoria.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'De seguimiento de ventas únicamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos y herramientas de la investigación publicitaria.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos abordados.',
        },
        {
          id: 8,
          texto:
            '¿Qué tipo de investigación permite caracterizar hábitos de compra durante un periodo definido?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una investigación descriptiva.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una investigación causal exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una auditoría de personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una estrategia de diversificación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos y herramientas de la investigación publicitaria.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos abordados.',
        },
        {
          id: 9,
          texto:
            'Una organización quiere examinar las causas de la disminución de ventas de una referencia. ¿Qué tipo de investigación aborda ese propósito?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exploratoria de reconocimiento inicial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Histórica de antecedentes generales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Descriptiva de inventarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Causal orientada a explicar el fenómeno.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos y herramientas de la investigación publicitaria.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos abordados.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de las siguientes situaciones utiliza una fuente secundaria de información?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar una encuesta nueva a los compradores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Consultar un estudio sectorial publicado previamente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Entrevistar por primera vez a distribuidores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Organizar un grupo focal con consumidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos y herramientas de la investigación publicitaria.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos abordados.',
        },
        {
          id: 11,
          texto:
            '¿Cuál de las siguientes acciones permite obtener información primaria para un <i>brief</i>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Revisar estadísticas de un informe anterior.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Consultar una publicación institucional ya elaborada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Entrevistar directamente a clientes potenciales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Leer resultados de una investigación de otra empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos y herramientas de la investigación publicitaria.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos abordados.',
        },
        {
          id: 12,
          texto:
            '¿Qué técnica resulta pertinente para reunir opiniones mediante una conversación guiada con varios consumidores?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Grupo focal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Consulta de registros contables.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Matriz BCG.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Análisis de series históricas únicamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos y herramientas de la investigación publicitaria.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos abordados.',
        },
        {
          id: 13,
          texto:
            'Una empresa busca aumentar ventas de sus productos actuales entre los clientes de su mercado actual. ¿Qué estrategia de Ansoff aplica?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diversificación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desarrollo de nuevos mercados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desarrollo de productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Penetración de mercado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos y herramientas de la investigación publicitaria.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos abordados.',
        },
        {
          id: 14,
          texto:
            '¿Qué estrategia de Ansoff corresponde a comercializar productos actuales en una nueva región?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Penetración de mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desarrollo de mercados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Desarrollo de productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diversificación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos y herramientas de la investigación publicitaria.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos abordados.',
        },
        {
          id: 15,
          texto:
            'En la matriz BCG, ¿qué clasificación recibe un producto con alta participación en un mercado de bajo crecimiento?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incógnita.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estrella.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Vaca.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Perro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos y herramientas de la investigación publicitaria.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos abordados.',
        },
        {
          id: 16,
          texto:
            '¿Qué situación caracteriza a un producto incógnita en la matriz BCG?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Baja participación en un mercado de alto crecimiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Alta participación en un mercado de bajo crecimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Alta participación en un mercado de alto crecimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Baja participación en un mercado de bajo crecimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos y herramientas de la investigación publicitaria.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos abordados.',
        },
        {
          id: 17,
          texto: '¿Para qué se utiliza una matriz de competitividad?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para definir exclusivamente la nómina de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para eliminar la necesidad de investigar consumidores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para reemplazar todos los análisis internos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para comparar factores de desempeño frente a competidores.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos y herramientas de la investigación publicitaria.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos abordados.',
        },
        {
          id: 18,
          texto:
            'Una empresa posee un equipo creativo competente y detecta mayor demanda digital. ¿Qué cruce DOFA aprovecha ambas condiciones?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'DA: debilidades y amenazas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'FO: fortalezas y oportunidades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'DO: debilidades y oportunidades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'FA: fortalezas y amenazas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos y herramientas de la investigación publicitaria.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos abordados.',
        },
        {
          id: 19,
          texto:
            '¿Cuál de las siguientes formulaciones es adecuada como problema de investigación publicitaria?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '¿La campaña fue buena, sí o no?',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '¿Se debe vender más sin investigar?',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                '¿Qué factores influyen en la preferencia de marca del público objetivo?',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '¿La empresa tiene un logotipo?',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos y herramientas de la investigación publicitaria.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos abordados.',
        },
        {
          id: 20,
          texto:
            'Después de organizar, tabular e interpretar los datos recolectados, ¿qué permite orientar las estrategias publicitarias?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La formulación de conclusiones sustentadas en los resultados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La eliminación de los objetivos de investigación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La selección de campañas sin considerar hallazgos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La sustitución de información por supuestos sin comprobar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los conceptos y herramientas de la investigación publicitaria.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos abordados.',
        },
      ],
      mensaje_final_aprobado:
        'Ha alcanzado al menos el 70 % de respuestas correctas y demuestra comprensión de los fundamentos de la investigación publicitaria. Continúe aplicando estos conocimientos en el diagnóstico y la elaboración del brief.',
      mensaje_final_reprobado:
        'Aún no ha alcanzado el 70 % de respuestas correctas. Revise los contenidos sobre variables, recolección de información, matrices y proceso de investigación; después, realice nuevamente el cuestionario.',
    },
  }),
}
</script>
