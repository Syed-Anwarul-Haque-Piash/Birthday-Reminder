import React from 'react';
import './List.css';

const List = (props) => {
    const {id,age,image,name}=props.people;
    return (
        <div className='content'>
            <div>
            <img src={image} alt="" />
            </div>
           <div className='info'>
             <h3>{name}</h3>
             <h5>{age}</h5>
           </div>
        </div>
    );
};

export default List;