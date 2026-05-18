import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this
import { convertNum } from "../../../functions/converNum";


function LineChart({ chartData, multiAxis, priceType }) {
    const options = {
        plugins: {
            legend: {
                display: multiAxis ? true : false,
                
            },

        },
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
        },
        scales: {

            y: {
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, ticks) {
                        if (priceType === 'prices') {

                            return '$' + value.toLocaleString();
                        }
                        else {
                            return '$' + convertNum(value);
                        }
                    }
                },


            },
            y1: {
                type: 'linear',
                display: true,
                position: "right",
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, ticks) {
                        if (priceType === 'prices') {

                            return '$' + value.toLocaleString();
                        }
                        else {
                            return '$' + convertNum(value);
                        }
                    }
                },
            }

        }
    };

    return <Line data={chartData} options={options} />;
}

export default LineChart;