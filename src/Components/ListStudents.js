import React from "react";


const ListStudents = ({ students }) => {

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
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student, index) => (
                            <tr key={student.id} >
                                <th scope="row">{index+1}</th>
                                <td>{student.studentNo}</td>
                                <td>{student.name}</td>
                                <td>{student.lastname}</td>
                                <td>{student.studentClass}</td>
                                <td>{student.schoolName}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListStudents