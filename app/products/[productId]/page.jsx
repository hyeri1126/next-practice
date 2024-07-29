//localhost:3000/products/1
export default function ProductDetail(props) {
    console.log(props)
    const {params, searchParams:search} = props
    console.log(search)
    // URL에 입력된 상품번호(productID)를 받아와야함
    return (
        <div>Product {params.productId} details</div>
    );
}