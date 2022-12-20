import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

import Header from "../Components/Header";
import ListStudents from "../Components/ListStudents";


const Home = () => {

    const [students, setStudents] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:3005/students")

            .then((response) => {
                setStudents(response.data)
            })
            .catch((error) => {
                console.log("error")

            })

    }, [])

    if (students === null) {
        return (null)
    }

    return (
        <div>
            <Header />
            <div className="container mt-5 d-flex justify-content-end">
                <button 
                onClick={()=>navigate("/add-student")}
                className="btn btn-primary">Add New Student
                </button>
            </div>
            <ListStudents students={students} />
        </div>
    )
}

export default Home