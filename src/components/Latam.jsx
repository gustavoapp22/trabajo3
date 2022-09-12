import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';



const Latam = ({ xd }) => {

    const [btn, setBtn] = useState({});

    useEffect(() => {
        axios.get(xd)
            .then((res) => setBtn(res.data))
    }, []);

    console.log(btn);

    return (
        <div className='fa'>
            <li className='name'>
                <div className='card'>
                <h1>{btn.name}</h1>
                <img src={btn.image} alt="" />
                <h2>{btn.status}</h2>
                <h3><b>origin</b>{btn.origin?.name}</h3>
                <h4><b>episodes where appear</b>{btn.episode?.length}</h4>
                </div>
            </li>
        </div>
    );
};

export default Latam;