import React from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const StockChart = (props) => {

    const data = props.data

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart 
                width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={0} padding={{left: 5, right: 5}}/>
                <YAxis label={{value: "USD", angle: -90, position: 'left'}} 
                       domain={['dataMin', 'dataMax']} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="1. open" stroke="#8884d8" />
                <Line type="monotone" dataKey="4. close" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    )

}

export default StockChart;