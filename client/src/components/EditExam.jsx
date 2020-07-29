import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const EditExam = props => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});

    useEffect( () => {
        console.log(props._id);
        axios.get(`http://localhost:8000/api/exam/${props._id}`)
            .then(res => {
                console.log(res);
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);

            }).catch(errors => console.log(errors));
    }, [props._id]);


    const UpdateItem = e => {
        e.preventDefault();
        const madeItem = {name, type, description, skill1, skill2, skill3};
        console.log("loggin madeItem below")
        console.log(madeItem)
        axios.put(`http://localhost:8000/api/exam/${props._id}`, madeItem)
            .then(res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/"); 
                }
            }).catch(err => console.log(err));
    }

    return (
        <div className="row">
        <form className="col-sm-8 offset-sm-2" onSubmit={UpdateItem}>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" onChange={e => setName(e.target.value)} value={name} />
                {errors.name ? <p className="text-danger">{errors.name.properties.message}</p>: ""}

                <div className="form-group">
                <label>Type</label>
                <input type="text" className="form-control" onChange={e => setType(e.target.value)} value={type} /></div>
                {errors.type ? <p className="text-danger">{errors.type.properties.message}</p>: ""}

                <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" onChange={e => setDescription(e.target.value)} value={description} ></textarea></div>
                {errors.description ? <p className="text-danger">{errors.description.properties.message}</p>: ""}

                <div className="form-group">
                <label>Skills 1</label>
                <input type="text" className="form-control" onChange={e => setSkill1(e.target.value)} value={skill1} /></div>
                {errors.skill1 ? <p className="text-danger">{errors.skill1.properties.message}</p>: ""}

                <div className="form-group">
                <label>Skill 2</label>
                <input type="text" className="form-control" onChange={e => setSkill2(e.target.value)} value={skill2} /></div>
                {errors.skill2 ? <p className="text-danger">{errors.skill2.properties.message}</p>: ""}

                <div className="form-group">
                <label>Skill 3</label>
                <input type="text" className="form-control" onChange={e => setSkill3(e.target.value)} value={skill3} /></div>
                {errors.skill3 ? <p className="text-danger">{errors.skill3.properties.message}</p>: ""}
            </div>
            <input type="submit" className="btn btn-success btn-block" value="Update Pet Info" />
        </form>
    </div>
    )
}

export default EditExam;