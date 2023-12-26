import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';

export default function AddUser() {
    const [input, setInput] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!input.name) {
            newErrors.name = 'Name is required';
            isValid = false;
        }
        if (!input.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        }
        if (!input.address) {
            newErrors.address = 'Address is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const users = JSON.parse(localStorage.getItem('data'));

        if (users === null) {
            localStorage.setItem('data', JSON.stringify([input]));
        } else {
            users.push(input);
            localStorage.setItem('data', JSON.stringify(users));
        }

        navigate('/user');
    };

    return (
        <>
            <Header />
            <div className="w-50 m-auto p-4 mt-5 bg-dark rounded-5">
                <h4 className="text-light mb-4">Add User</h4>
                <form className="form">
                    <div className="mb-3">
                        <input className="form-control" onChange={handleChange} type="text" name="name" placeholder="NAME"
                        />
                        <small className="text-danger">{errors.name}</small>
                    </div>
                    <div className="mb-3">
                        <input className="form-control" onChange={handleChange} type="email" name="email" placeholder="EMAIL"
                        />
                        <small className="text-danger">{errors.email}</small>
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" onChange={handleChange} name="address" cols="30" rows="10" placeholder="ADDRESS"
                        ></textarea>
                        <small className="text-danger">{errors.address}</small>
                    </div>
                    <div className="d-flex justify-content-end mt-4">
                        <Link to="/user" className="btn btn-light me-3">
                            CANCEL
                        </Link>
                        <button onClick={handleSubmit} className="btn btn-light">
                            ADD
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
