import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Group A', value: 200, color: '#6497B1' },
  { name: 'Group B', value: 1200, color: '#A259FF' },
  { name: 'Group C', value: 300, color: '#F24E1E' },
  { name: 'Group D', value: 300, color: '#FFC107' },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="start"
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class CustomPieChart extends PureComponent {
  render() {
    return (
      <PieChart width={270} height={270}>
        <Pie
          data={this.props.reports ? this.props.data : data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={135}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map(({ color }) => (
            <Cell key={color} fill={color} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
