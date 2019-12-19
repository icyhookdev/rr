import React from 'react';
import ReactHighcharts from 'react-highcharts';
import ChartData from '../components/ChartData/ChartData';

// const config = {
//   xAxis: {
//     categories: [
//       'Jan',
//       'Feb',
//       'Mar',
//       'Apr',
//       'May',
//       'Jun',
//       'Jul',
//       'Aug',
//       'Sep',
//       'Oct',
//       'Nov',
//       'Dec',
//     ],
//   },
//   yAxis: {
//     categories: ['Jan', 'Feb'],
//   },
//   title: {
//     text: 'Datagran Line Graph',
//   },
//   legend: {
//     enabled: false,
//   },

//   series: [
//     {
//       data: [176.0, 704.4],
//     },
//   ],
// };
// <ReactHighcharts config={config} />
const LineGraph = () => <ChartData />;

export default LineGraph;
