import React from 'react';
import {ComposedChart, Area, linearGradient, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const StockChart = (props) => {

    const data = props.data

    return (
        <ResponsiveContainer width="100%" height={300}>
            <ComposedChart 
                width={730} height={250} data={data} margin={{ top: 5, right: 10, left: 20, bottom: 5 }}
                >
                  <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                   </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={0} padding={{left: 5, right: 5}} reversed={true}/>
                <YAxis label={{value: "USD", angle: -90, position: 'left'}} 
                       domain={['dataMin-1', 'dataMax+1']} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="1. open" stroke="#8884d8" />
                <Area type="monotone" dataKey="4. close" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)"/>
            </ComposedChart>
        </ResponsiveContainer>
    )

}

export default StockChart;