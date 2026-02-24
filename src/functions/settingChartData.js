import { convertDate } from "./convertDate"

export const settingChartData = (setChartData,prices) => {
    setChartData({
        labels: prices.map((item) => convertDate(item[0])),
        datasets: [
            {
                label: 'Currency',
                data: prices.map((item) => item[1]),
                borderColor: "#3a80e9",
                tension: .25,
                backgroundColor: !prices ? "transparent " : "rgba(58,128,233,0.1)",
                borderWidth: 2,
                fill: true,
                pointRadius: 0,
                yAxisID: 'y',
            }

        ]
    })
}
