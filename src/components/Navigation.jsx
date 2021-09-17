import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Nav >
					<NavLink to="/top-rated" className="nav-link navbar-brand">
						Top Rated
					</NavLink>
					<NavLink to="/latest" className="nav-link navbar-brand">
						Latest
					</NavLink>
					<NavLink to="/popular" className="nav-link navbar-brand">
						Popular
					</NavLink>
				</Nav>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<NavLink to="/genres" className="nav-link">
							Find a movie by genre
						</NavLink>
						<NavLink to="/history" className="nav-link">
							History
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
