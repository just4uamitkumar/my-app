import React from "react"

function Product(props) {
    return (        
        <div className="product">
            <h3 className="text-center">{props.product.id} : {props.product.name} </h3>           
            <p>Description : {props.product.description}</p>
            <p className="text-right">{props.product.price.toLocaleString("en-US", 
            { style: "currency", currency: "USD" })}</p>            
        </div>       
    )
}

export default Product