import React from "react";
import "./loading.css"

import Heading from "../heading/heading"

export default function Loading() {
    return (
        <div className="loading-overlay">
            <Heading component="a" theme="headingM">Aguarde estamos processando</Heading>
        </div>
    )
}