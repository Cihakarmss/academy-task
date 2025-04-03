import React from 'react';

function Card(props) {
   const {image,title,descraption}=props
    
    return (
        <div className="card">
            <img src={image} alt="" />
            <div className="note">
            <div className="title"><h3>{title}</h3></div>
            <div className="descraption">{descraption}</div>
            </div>
        </div>
    );
}

export default Card                                    