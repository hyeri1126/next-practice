import Link from "next/link";

const productsList = [3,4]

const ProductList = () => {
    return (
        <div>
            <h1>Product List</h1>
            {productsList.map((productId)=>{
                return ( <Link href={`/products/${productId}`}><h2>Product {productId}</h2></Link>)
            }
            )}
         
        </div>
    );
}

export default ProductList;