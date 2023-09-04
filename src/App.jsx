

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  
  // Replace 'YOUR_USERNAME' and 'YOUR_PASSWORD' with your actual credentials
  const username = 'ANISHO';
  const password = 'Welcom33';

  useEffect(() => {
    const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

    // Replace 'YOUR_ODATA_API_URL' with the actual URL of your OData API endpoint
   axios.get('https://sapd49.tyson.com/sap/opu/odata/sap/ZAPI_PRDVERS_SRV/LandscapeDetailsSet?sap-client=100', {
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        setData(response.data.d.results.map((item)=> ({
          Sysid: item.Sysid,
          Systype :item.Systype,
        })));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Data from OData API</h1>
      <ul>
        {data.map(item => (
          <li> {item.Systype}</li>
          // <li> {item.Sysid}</li>
          
        ))}
      </ul>
    </div>
  );
}

// return (
//       <div>
//         <h1>Data Table</h1>
//         <table>
//           <thead>
//             <tr>
//               <th>System id</th>
//               <th>Version</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map(item => (
//               <tr key={item.Sysid}>
//                 <td>{item.Sysid}</td>
//                 <td>{item.Version}</td>
//                 <td>{item.ModDate}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
          
//             };

export default App;
