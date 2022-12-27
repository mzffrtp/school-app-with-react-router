import React, {useEffect, useState} from "react";

import Header from "../Components/Header";

import {useParams, useNavigate} from "react-router-dom"
import axios from "axios";


const EditStudent = () => {

    const {studentId} = useParams();
    const navigate =useNavigate();

    const [studentNo, setStudentNo] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [studentClass, setstudentClass] = useState("");
    const [schoolName, setSchoolName] = useState("");

    const [editedStudent, setEditedStudent] = useState(null);

    const handleEdit = (event) =>{
        event.preventDefault()

        if (editedStudent === null) {
            return null
        }
        if (
            studentNo === "" ||
            name === "" ||
            lastname === "" ||
            studentClass === "" ||
            schoolName === "") {

            alert("All of the fields must be filled!")
            return
        }

        const updatedStudent = {
            id:editedStudent.id,
            name:name,
            lastname:lastname,
            studentClass:studentClass,
            schoolName:schoolName,
        }

        axios
            .put(`http://localhost:3005/students/${updatedStudent.id}`, updatedStudent)
            .then(res=>{
                navigate("/")
            })
            .catch(error=>{
                alert("An error occured during editing!")
            })

          




    }

    useEffect (()=> {
        axios
            .get (`http://localhost:3005/students/${studentId}`)
            .then(res=>{
                setStudentNo(res.data.studentNo);
                setName(res.data.name);
                setLastname(res.data.lastname);
                setstudentClass(res.data.studentClass);
                setSchoolName(res.data.schoolName);
                setEditedStudent(res.data)
            })
            .catch((error)=>{
                alert("An error occured when editing student!")
                navigate("/")
            })
    },[])

    return (
        <div>
            <Header />
            <div className="container my-5">
                <form onSubmit={handleEdit}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Student No</label>
                        <input
                            value={studentNo}
                            onChange={(event) => setStudentNo(event.target.value)}
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Ex: 505" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Ex: Martin" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Lastname</label>
                        <input
                            value={lastname}
                            onChange={(event) => setLastname(event.target.value)}
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Ex: Andersson" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Class</label>
                        <input
                            value={studentClass}
                            onChange={(event) => setstudentClass(event.target.value)}
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Ex: 4/B" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">School Name</label>
                        <input
                            value={schoolName}
                            onChange={(event) => setSchoolName(event.target.value)}
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Ex: Cambridge" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-success my-2" type="submit">Edit</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default EditStudent