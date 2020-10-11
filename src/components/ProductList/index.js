// import React from 'react';

// cost ProductList = () =>{
        
//     <StaticQuery query={graphql`
//         query DictionariesQuery{
//             allDictionariesJson{
//                 edges{
//                     node{
//                         name
//                         ISBN
//                         price
//                     }
//                 }
//             }
//         }`
//     }
//     render={dictionaries => (
//         <div>
//             <h1>Dictionary</h1>
//             <table>
//                 <tr>
//                     <th>Book Name</th>
//                     <th>ISBN Number</th>
//                     <th>Price</th>
//                 </tr>
//                 {getBookTable(dictionaries)}
//             </table>
//         </div>
//     )}
//     />   
// };

// export default ProductList;