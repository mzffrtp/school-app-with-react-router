import React from "react";
import {Link} from "react-router-dom"

import axios from "axios";


const ListStudents = ({ students, setStudents }) => {

    

    const handleDelete = (student) => {
        axios
            .delete(`http://localhost:3005/students/${student.id}`)
            .then((response) => {
                const filteredStudent = students.filter(item => item.id !== student.id)
                setStudents(filteredStudent)
            })
            .catch((error) => {
                alert("An error occured during deleting student!")
            })
    }

    return (
        <div className="container">
            <table className="table table-striped table-warning my-3" >
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Student No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Class</th>
                        <th scope="col">School</th>
                        <th scope="col">Functions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        students.length === 0 ? (
                            <tr>
                                <td className="text-center" colSpan={7}>
                                    No student is recorded at the moment.
                                </td>
                            </tr>
                        ) : (
                            <>
                                {
                                    students.map((student, index) => (
                                        <tr key={student.id} >
                                            <th scope="row">{index + 1}</th>
                                            <td>{student.studentNo}</td>
                                            <td>{student.name}</td>
                                            <td>{student.lastname}</td>
                                            <td>{student.studentClass}</td>
                                            <td>{student.schoolName}</td>
                                            <td>
                                                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                                    <button
                                                        onClick={() => {
                                                            handleDelete(student)
                                                        }}
                                                        type="button" className="btn btn-sm btn-danger">Delete</button>
                                                    <Link
                                                   to={`/edit-student/${student.id}`}
                                                    type="button" className="btn btn-sm btn-warning">Edit</Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListStudents