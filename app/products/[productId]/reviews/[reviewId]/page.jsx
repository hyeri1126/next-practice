import { notFound } from "next/navigation";

export default function ProductReview({params}){
    const maxNum = 10;
  
    // #방법1 -> 모듈 사용 x. 
    // if (parseInt(params.reviewId) > maxNum) {
    //     return {
    //         notFound:true
    //     } // 리다이렉트 후 컴포넌트 내용은 렌더링되지 않음
    // }

    // #방법2
    if (parseInt(params.reviewId) > maxNum) {
        notFound()
    }
    

    return (
        <div>review {params.reviewId} for {params.productId} </div>
    )
}