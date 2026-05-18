import { convertDate } from "./convertDate";

export const settingChartData = (
  setChartData,
  prices1 = [],
  prices2 = [],
  crypto1 = "Coin 1",
  crypto2 = "Coin 2"
) => {

  /* ===============================
     TWO COIN COMPARISON
  =============================== */

  if (prices1.length > 0 && prices2.length > 0) {

    setChartData({
      labels: prices1.map((item) => convertDate(item[0])),
      datasets: [
        {
          label: crypto1,
          data: prices1.map((item) => item[1]),
          borderColor: "#332288",
          tension: 0.3,
          borderWidth: 2,
          pointRadius: 0,
          yAxisID: "y",
        },
        {
          label: crypto2,
          data: prices2.map((item) => item[1]),
          borderColor: "#009E73",
          tension: 0.3,
          borderWidth: 2,
          pointRadius: 0,
          yAxisID: "y1",
        }
      ]
    });

  }

  /* ===============================
     SINGLE COIN CHART
  =============================== */

  else if (prices1.length > 0) {

    setChartData({
      labels: prices1.map((item) => convertDate(item[0])),
      datasets: [
        {
          label: crypto1,
          data: prices1.map((item) => item[1]),
          borderColor: "#3a80e9",
          tension: 0.3,
          backgroundColor: "rgba(58,128,233,0.1)",
          borderWidth: 2,
          fill: true,
          pointRadius: 0,
          yAxisID: "y",
        }
      ]
    });

  }

};