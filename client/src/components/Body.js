import React, { useState } from 'react'


function Body(props) {
    
    let options = props.foodOptions;
    let priceOptions = Object.keys(options);
    const [qty,setQty] = useState(1);
    const [size,setSize] = useState("");
    const handleAddToCart = async () =>{
        await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodName})
    }

    return (
        <div>
            <div className="card mt-3" style={{"width": "18rem", "maxHeight":"360px"}}>
                <img src={props.foodImg} className="card-img-top" alt="..." style={{height:"180px",objectFit:"fill"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.foodName}</h5>
                        <div className='container'>
                            <select className='m-2 h-100 bg-success rounded'>
                                {Array.from(Array(6),(e,i)=>{
                                    return(
                                        <option key={i+1} value={i+1}>
                                            {i+1}
                                        </option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100 bg-success rounded'>
                                {priceOptions.map((data)=>{
                                    return <option key={data} value={data}>{data}</option>
                                })}
                            </select>
                            <div className='d-inline' h-100 fs-5>Price : </div>
                            <hr></hr>
                            <button className={`btn bg-success justify-centre ms-2`} onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Body
