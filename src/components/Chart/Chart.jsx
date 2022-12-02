import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import s from './Chart.module.css'

const colors = [
  'rgba(254, 208, 87, 1)',
  'rgba(255, 216, 208, 1)',
  'rgba(253, 148, 152, 1)',
  'rgba(197, 186, 255, 1)',
  'rgba(110, 120, 232, 1)',
  'rgba(74, 86, 226, 1)',
  'rgba(129, 225, 255, 1)',
  'rgba(36, 204, 167, 1)',
  'rgba(0, 173, 132, 1)',
]

const Chart = ({ statistics, totalData }) => {
  // ChartJS.register(ArcElement);
  ChartJS.register(ArcElement, Tooltip)

  const names = statistics?.map(obj => obj.name)
  const quantities = statistics?.map(obj => obj.quantity)

  const options = {
    animation: {
      // animateScale: true,
      animateRotate: true,
      duration: 800,
      // easing: 'easeOutBounce',
    },
    outerRadius: 100,
    layout: {
      padding: 6,
    },
    responsive: true,

    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          labelTextColor: function (context) {
            return '#fff'
          },
        },
      },
    },
  }

  let doughnutData = {
    labels: names,
    datasets: [
      {
        label: '₴',
        data: quantities,
        backgroundColor: colors,
        borderWidth: 0,
        cutout: '70%',
        hoverOffset: 15,
      },
    ],
  }

  if (!statistics?.length) {
    doughnutData = {
      labels: ['--', '--'],
      datasets: [
        {
          label: '# of Votes',
          data: ['50', '50'],
          backgroundColor: ['#bdbdbd', '#e0e0e0'],
          borderWidth: 0,
          cutout: '70%',
        },
      ],
    }
  }

  return (
    <div className={s.chart}>
      <h3 className={s.chart__title}>Statistics</h3>
      <div className={s.chart__container}>
        <div className={s.chart__balance}>
          {totalData ? (
            `₴ ${totalData.totalBalance ? totalData.totalBalance : 0}`
          ) : (
            <p>loading...</p>
          )}
        </div>
        <Doughnut data={doughnutData} options={options} />
      </div>
    </div>
  )
}

export default Chart
