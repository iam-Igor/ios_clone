import { Chart } from "chart.js/auto";

const configureChart = () => {
  if (Chart.controllers && Chart.controllers.line) {
    Chart.register(Chart.controllers.line); // Registrazione del tipo di grafico lineare
  }
  if (Chart.scaleService && Chart.scaleService.getScaleConstructor) {
    Chart.register(Chart.scaleService.getScaleConstructor("time")); // Registrazione della scala 'time'
  }
};

export default configureChart;
