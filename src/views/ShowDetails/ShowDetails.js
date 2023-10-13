import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import detail from "./../Laptop/Laptop.json";

export default function ShowDetails() {
    const { id } = useParams();
    const [selectedDetail, setSelectedDetail] = useState(null);

    useEffect(() => {
        const foundDetail = detail.find(item => item.id === id);
        if (foundDetail) {
            setSelectedDetail(foundDetail);
        }
    }, [id]);

    if (!selectedDetail) {
        return <div>Detail not found!</div>;
    }

    return (
        <div>
            <img  src={selectedDetail.img}/>
            <h1>{selectedDetail.title}</h1>
            <p>{selectedDetail.description}</p>
            <p>Price: {selectedDetail.price}</p>

        
        </div>
    );
}
