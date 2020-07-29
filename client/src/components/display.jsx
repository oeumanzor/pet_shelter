import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Display = props =>{
    const [item, setItem] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/exam")
            .then(res => {
                console.log(res);
                setItem(res.data);
            })
            .catch(err => console.log(err));
    }, []);
    
    return(
        <div>
        {item.map( (item, i) => 
            <div className="card mb-1" key={item._id}>
                <div className="card-header">Pet Name: {item.name}</div>
                <div className="card-body">
                    <p>Type: {item.type}</p>
                    <Link className="btn btn-outline-primary float-right" to={`/edit/${item._id}`}>Edit Pet Info</Link>
                    <Link className="btn btn-primary float-right mr-1" to={`/info/${item._id}`}>More on This Pet</Link>
                </div>
            </div>
        )}
    </div>
    )
}

export default Display;