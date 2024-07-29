'use client'

import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter()    
    const clickHandler = () => {
        //주문이 성공했을 경우, 메인페이지(localhost:3000)로 라우팅
        // 주문 처리 로직 수행 
        router.push('/') 
        // replace(히스토리 기록을 남기지 않음)
        // back()는 뒤로가기        

    }
    return (
        <div>
            <h1>Order Product</h1>
            <button className="p-2 text-white bg-black border" onClick={clickHandler}>Place an order</button>
        </div>
    );
}