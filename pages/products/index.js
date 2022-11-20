
export default function index(props) {
    console.log(props)
  return (
    <div>
        {props.products.map((product)=>{
            return(
                <h1>{product.title}</h1>
            )
        })}
    </div>
  )
}


export async function getStaticProps(){
    const res  = await fetch("http://localhost:9000/products");
    const data = await res.json();

    return{
        props : {
            products : data 
        }
    }
}
