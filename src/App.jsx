// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const MyComponent = () => {
//   const [data, setData] = useState([]);
  
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const authHeaders = new Headers({
//           'Authorization': 'Basic ' + btoa('ANISHO' + ':' + 'Welcome@123')
//         });
  
//         const response = await fetch(
//           'https://sapd49.tyson.com/sap/opu/odata/sap/ZAPI_PRDVERS_SRV/SysDetailsSet?$filter=(Sysid eq ${sapSystemId})', 
//           {
//             method: 'GET',
//             headers: authHeaders
//           }
//         );
  
//         if (response.ok) {
//           const responseData = await response.json();
//           setData(responseData.d.results);
//           console.log(responseData);
//         } else {
//           console.error('Error fetching data:', response.status);
//         };
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }

//     }}}



// import axios from 'axios';

//  function App(){ {


//     const response =  axios.get(
//       'https://sapd49.tyson.com/sap/opu/odata/sap/ZAPI_PRDVERS_SRV/LandscapeDetailsSet?sap-client=100',
//       requestBody,
//       {
//         auth: {
//           username: 'JA',
//           password: 'Ajns@2658',
//         },

//         headers: {
//           'Content-Type': 'application/json',
//         },
//       },
//     );

//     return response.data;
//   }
  


// App().then(data => {
//   console.log(data);
// })

//     fetchData();
//   }, []);
  
//   return (
//     <div>
//       <h1>Data Table</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>System id</th>
//             <th>Version</th>
//             <th>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {response.data.d.results.map(item => (
//             <tr key={item.Name}>
//               <td>{response.data.d.results.item.Sysid}</td>
//               <td>{item.Version}</td>
//               <td>{item.ModDate}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
        
//           };
// export default App;





// 



// import axios from 'axios';

// async function App() {
//   try {
//     const response = await  axios.get(
//       'https://sapd49.tyson.com/sap/opu/odata/sap/ZAPI_PRDVERS_SRV/LandscapeDetailsSet?sap-client=100',
//       {
//         auth: {
//           username: 'JA',
//           password: 'Ajns@2658',
//         },
//       },
//     );

//     return response.data;
//   } catch (err) {
//     console.log(err.message);
//     console.log(err.response.status);
//   }
// }

// App().then(data => {
//   console.log(data);
// });





// import React, { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://sapd49.tyson.com/sap/opu/odata/sap/ZAPI_PRDVERS_SRV/LandscapeDetailsSet?sap-client=100', {
//           method: 'GET',
//           headers: {
//             'Authorization': 'Basic ' + btoa('AJ:Ajns@2658'), // Replace with actual credentials
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const jsonData = await response.json();
//         setData(jsonData);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }
//   return response.data.d.results.Name;
//   return (
//     <div>
//       <h1>OData Service Data</h1>
//       <ul>
//         {response.data.d.results.map((item, index) => (
//           <li key={index}>{item.Name}</li> // Replace with actual property name
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



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
          Sysidd: item.Sysid,
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
