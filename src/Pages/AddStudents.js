import React, { useState } from "react";

import Header from "../Components/Header";



const AddStudents = () => {

    const [studentNo, setStudentNo] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [classroom, setClassroom] = useState("");
    const [schoolName, setSchoolName] = useState("");

    const handleSubmit = ((event) => {
        event.preventDefault()

        if (
            studentNo === "" ||
            name === "" ||
            lastname === "" ||
            classroom === "" ||
            schoolName === "") {

            alert("All of the fields must be filled!")
        }
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
                            value={classroom}
                            onChange={(event) => setClassroom(event.target.value)}
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