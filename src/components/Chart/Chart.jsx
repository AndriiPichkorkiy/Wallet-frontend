import React from 'react'
import { Chart as ChartJS, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import { ChartWrapper, BalanceWrapper } from './Chart.styled'

const Chart = ({ statistics, totalData }) => {
  ChartJS.register(ArcElement)
  console.log('statistics', statistics)

  const names = statistics.map(obj => obj.name)
  const colors = statistics.map(obj => obj.color)
  const quantities = statistics.map(obj => obj.quantity)

  const options = {
    animation: {
      // animateScale: true,
      animateRotate: true,
      duration: 800
      // easing: 'easeOutBounce',
    },
    outerRadius: 100,
    layout: {
      padding: 6
    },
    responsive: true,

    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          labelTextColor: function (context) {
            return '#fff'
          }
        }
      }
    }
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
        hoverOffset: 15
      }
    ]
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
          cutout: '70%'
        }
      ]
    }
  }

  return (
    <ChartWrapper>
      <BalanceWrapper>
        {totalData ? (
          `₴ ${totalData.expenses ? totalData.expenses : 0}`
        ) : (
          <p>loading...</p>
        )}
      </BalanceWrapper>
      <Doughnut data={doughnutData} options={options} />
    </ChartWrapper>
  )
}

export default Chart
