import React from 'react';
import StockChart from './StockChart';

const StockDisplay = (props) => {

    const rawStockData = Object.values(props.stockData)
    const metadata = {}
    const stockData = []

    

    for (let key in rawStockData[0]){
        let newkey = [key.toLowerCase().replace(/\d|\s|\W/g,'')]
        metadata[newkey] = rawStockData[0][key]

    }

    let counter = 1
    for (let key in rawStockData[1]){
        if(!(key.slice(-2) % 2)){
            counter ++;
            let data = Object.assign({},{"name": key},rawStockData[1][key]);
            // data.push(Object.assign({},{"name": key},rawStockData[1][key]));
            stockData.push(data);
            if(counter === 21) {
                break
            }
        }
        
    }



    console.log('stockData',stockData);
    console.log('metadata', metadata);
    
    return (
     <div>
         <div>
            <h2>{metadata.symbol}</h2>
            <p>Information: {metadata.information} </p>
            {/* <p>Last refreshed: {metadata.lastrefreshed}</p> */}
         </div>
         <div>
             <h3>Close: {parseFloat(stockData[0]["4. close"])}
                <span style={{fontSize: '0.7em', color: 'gray'}}> USD</span>
            </h3>
             <p>Close date: {stockData[0].name}</p>
             <p>High: {parseFloat(stockData[0]["2. high"])}</p>
             <p>Low: {parseFloat(stockData[0]["3. low"])}</p>
             <p>Volume: {stockData[0]["5. volume"]}</p>
         </div>
         <div style={{marginTop: 100}}>
            <StockChart data={stockData}/>
         </div>
        
     </div>
    )
}

export default StockDisplay;


    // for (key of Object.keys(props.stockData)){

    // }
    







    // const stockData = props.stockData

    // console.log('stockData', stockData);

    // let stockDataClean = {}
    // let data = []

    // for (let key in stockData){
    //     let newkey = [key.toLowerCase().replace(/\d|\s|\W/g,'')] //rename key{Metadata{}, Time Series..}
    //     stockDataClean[newkey]= {} //create key
    //     const objectcheck = null;
    //     const objectcreation = {}
    //     for (let subkey in stockData[key]){
    //         if(typeof stockData[key][subkey] === 'object'){
    //             objectcheck = 'Y'
    //             objectcreation.name = subkey
    //         } else {
    //             objectcheck = 'N'
    //         }
    //     }

    //     if(objectcheck === 'Y'){

    //         stockDataClean[newkey] = Object.assign({},objectcreation, Object.values(stockData[key]))
    //     } else {
    //         stockDataClean[newkey] = stockData[newkey]
    //     }



        // for (let subkey in stockData[key]){
        //     let newsubkey = subkey.toLowerCase().replace(/(\d.\s)|\s/g,'') //rename subkey {Information, Symbol...}
        //     // stockDataClean[newkey][newSubkey] = stockData[key][subkey]
        //     if(typeof stockData[key][subkey] === 'object'){ //if next level down an object
        //         // stockDataClean[newkey][newsubkey] = {}
        //         // let abc = {}
        //         let counter = counter+1
        //         data.push({name: subkey})
        //         let test = Object.values(stockData[key])
        //         data.push(test)
        //         for (let subsubkey in stockData[key][subkey]) { //rename subsubkey {1.open: ..., 2.High...}
        //             let newsubsubkey = subsubkey.toLowerCase().replace(/\d|\s|\W/g,'')
        //             // stockDataClean[newkey][newsubkey][newsubsubkey] = stockData[key][subkey][subsubkey]
        //             // abc = {name: newsubkey, [newsubsubkey]: stockData[key][subkey][subsubkey]}
        //             // stockDataClean[newkey][newsubkey] = stockData[key][subkey][subsubkey]
        //             // stockDataClean[newkey].append({name: subkey})
        //             // data.[0].push({[newsubsubkey]: stockData[key][subkey][subsubkey]})
        //             // data.push()
        //             // stockDataClean[newkey][newsubsubkey] = stockData[key][subkey][subsubkey]
        //             // Object.assign(stockDataClean[newkey],{name:1, [newsubsubkey]: stockData[key][subkey][subsubkey]})
        //             // console.log('subsubkey loop', abc)

        //         }    
        //         // console.log('test', test);
                
                 
        //     } else { //else
        //         // stockDataClean[newkey][newsubkey] = {}
        //         stockDataClean[newkey][newsubkey] = stockData[key][subkey] 
        //     }
        // }

    // }