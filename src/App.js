import React, { useEffect, useState } from "react";
import TableRow from "./Components/TableRow";
import "./style.css";


function App() {
  
  let [data,setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        const json = await res.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [])


  return(
    <div className="container">
          <table>
          <thead>
              <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Id</th>
                  <th>Symbol</th>
                  <th>Current Price</th>
                  <th>Total Volume</th>
              </tr>
          </thead>
            {
              <TableRow dataArray={data}/>
            }
        </table>



    </div>

    

  )
  
}

export default App;