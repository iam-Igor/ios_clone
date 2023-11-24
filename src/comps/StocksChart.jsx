import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import configureChart from "../configs/chartConfig";

const StockChart = ({ stockData }) => {
  const prices = stockData.map((data) => data.regularMarketPrice); // Estrai solo i prezzi

  const data = {
    labels: Array.from({ length: prices.length }, (_, index) => index + 1), // Crea un array di numeri per l'asse x (1, 2, 3, ...)
    datasets: [
      {
        label: "Stock Price",
        data: prices,
        borderColor: "rgba(46, 188, 72, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: false,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Permette al grafico di adattarsi alle dimensioni del suo contenitore
    aspectRatio: 1,
    responsive: true,
    scales: {
      x: {
        display: false, // Nascondi l'asse x
      },
      y: {
        display: false, // Nascondi l'asse y
      },
    },
    plugins: {
      legend: {
        display: false, // Nascondi la legenda
      },
    },
  };

  useEffect(() => {
    configureChart(); // Configura Chart.js all'avvio del componente
  }, []);

  return <div>{stockData && <Line data={data} options={options} />}</div>;
};

export default StockChart;
