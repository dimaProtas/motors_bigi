import React from 'react';
import s from './FrendsNav.module.css';


const FrendsNav = (props) => {
    return (
        <div>
            <img src={props.photo} alt="img" />
            <div className={s.name}>{props.name}</div>
        </div>
    )
}

export default FrendsNav;
