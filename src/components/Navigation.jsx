import React, { useState, useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { SearchContext } from '../contexts/SearchContext'

const Navigation = () => {
	const history = useHistory()
	const { setSearchValue } = useContext(SearchContext)
	const [value, setValue] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchValue(value)
		history.push(`/search-result?page=1&query=${value}`)
		setValue('')
	}
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Nav>
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
				<Form className="d-flex" style={{ width: '50%' }} onSubmit={handleSubmit}>
					<FormControl
						type="search"
						placeholder="Search for movies"
						className="mr-2"
						aria-label="Search"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<Button variant="outline-secondary" type='submit'>Search</Button>
				</Form>
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
