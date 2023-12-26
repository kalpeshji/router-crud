import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Header from './Header'

export default function Home() {
    return (
        <>
            <Header />
            <Container className='mt-4'>
                <h1>Welcome to CRUD App!</h1>
            </Container>
        </>
    )
}
