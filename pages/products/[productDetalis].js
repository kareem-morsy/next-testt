
export default function productDetalis({product}) {
  return (
    <div>
        <h1>{product.title}</h1>
        <h1>{product.price}</h1>
        <br/>
        <br/>

    </div>
  )
}



// export async function getStaticPaths(){
//     const response = await fetch ("https://dummyjson.com/products");
//     const data = await response.json()
//     console.log(data)
//     const paths = data.map((x)=>{
//         return{
//             params: {
//                 productId : `${x.id}`
//             }
//         }
//     })

//     return{
//         paths,
//         fallback : false
//     }
// }


// export async function getStaticProps(context){
//     const res = await fetch (`https://dummyjson.com/products/${context.params.productDetalis}`)
//     const data = await res.json();
//     return{
//         props : {
//             product : data 
//         }
//     }
// }


export async function getServerSideProps(context) {
    const res = await fetch (`https://dummyjson.com/products/${context.params.productDetalis}`)
    const data = await res.json()
    return{
        props : {
            product : data
        }
    }
}
