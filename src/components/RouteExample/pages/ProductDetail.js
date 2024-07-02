import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { prodId, pageNo } = useParams();
    return (
        <>
            <h1>제품 상세보기 화면</h1>
            <p>
                제품ID: {prodId}, 페이지번호: {pageNo}
            </p>
        </>
    );
};

export default ProductDetail;
