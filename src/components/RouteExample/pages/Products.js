import React from "react";
import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
    { id: "p1", name: "세탁기" },
    { id: "p2", name: "데스크탑" },
    { id: "p3", name: "랩탑" },
    { id: "p4", name: "청소기" },
    { id: "p5", name: "다리미" },
];

const Products = () => {
    console.log("products!");
    return (
        <>
            <h1>My Products Page</h1>
            <ul>
                {DUMMY_PRODUCTS.map((prod) => (
                    <li key={prod.id}>
                        <Link to={`${prod.id}/page/10`}>{prod.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Products;
