import React, { useEffect, useState } from 'react';
import { Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function User() {
    const [data, setData] = useState(() => {
        return JSON.parse(localStorage.getItem('data')) || [];
    });

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data));
    }, [data]);

    const handleDelete = (index) => {
        const newData = [...data]
        newData.splice(index, 1)
        setData(newData)
        localStorage.setItem('data', JSON.stringify(newData))
    }
    return (
        <>
            <Header />
            <Container className='mt-4'>
                <div className="d-flex flex-wrap justify-content-between mb-5 w-75 m-auto">
                    <h2>Users</h2>
                    <Link to={'/user/adduser'} className='text-decoration-none btn btn-black bg-black text-light mt-2 '>Add User</Link>
                </div>
                <table className="table table-striped mt-4 w-75 m-auto" border="1">
                    <thead>
                        <tr>
                            <th scope="col" className='text-center'>S.R. No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col" className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item, index) => (
                            <tr key={index}>
                                <td className='text-center'>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.address}</td>
                                <td>
                                    <div className="d-flex justify-content-evenly">
                                        <Link to={`/user/updateuser/${index}`} className='btn btn-dark btn-sm'>
                                            <i className="bi bi-pencil"></i>
                                        </Link>
                                        <button onClick={() => handleDelete(index)} className='btn btn-dark btn-sm'>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
        </>
    );
}
