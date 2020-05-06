import axios from 'axios';

// const fetchData= axios.get( '../../public//data.json' )
//             .then( res => {
//                 const fetchedOrders = [];
//                 for ( let key in res.data ) {
//                     fetchedOrders.push( {
//                         ...res.data[key],
//                         id: key
//                     } );
//                 }
                
//             } );
//             // .catch( err => {
//             //     dispatch(fetchOrdersFail(err));
//             // } );

const URL = `../services/blog.json`;



async function fetchData(){

               // console.log("cool")
                const response = await fetch(`${URL}`);
                const data = await response.json();
               
                if (response.status >= 400) {
                    throw new Error(data.errors);
                }
              //  console.log("cool", response,data)
                return data;
            };

export {fetchData};