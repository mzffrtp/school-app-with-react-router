import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"


import Header from "../Components/Header";



const AddStudents = () => {

    const navigate = useNavigate();

    const [studentNo, setStudentNo] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [studentClass, setstudentClass] = useState("");
    const [schoolName, setSchoolName] = useState("");

    const handleSubmit = ((event) => {
        event.preventDefault()

        if (
            studentNo === "" ||
            name === "" ||
            lastname === "" ||
            studentClass === "" ||
            schoolName === "") {

            alert("All of the fields must be filled!")
            return
        }
        const newStudent = {
            id:String(new Date().getTime()),
            studentNo: studentNo,
            name:name,
            lastname:lastname,
            studentClass: studentClass,
            schoolName: schoolName
        }

        axios
        .post("http://localhost:3005/students", newStudent)
        .then((response)=>{
            navigate("/")
        })
        .catch((eroor)=>{
            alert("An error occured when creating a new student!")
        })

       
    })
    return (
        <div>
            <Header />
            <div className="container my-5">
                <form onSubmit={handleSubmit}>
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
                        <button className="btn btn-success my-2" type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddStudents