import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed,  deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)','rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      { barChart }
    </div>
  );
};

export default Chart;
