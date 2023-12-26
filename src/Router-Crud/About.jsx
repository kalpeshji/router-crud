import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from './Header'
export default function About() {
    return (
        <>
            <Header />
            <Container className='mt-4'>
                <h1>About of CRUD App!</h1>
            </Container>
        </>
    )
}
