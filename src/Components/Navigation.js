import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
 <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Antonette API</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Link to={'/users'}><Button>Liste-Users </Button> </Link>
            <Link to={'/contact'}><Button>Contact US</Button></Link>

          
          </Nav>
      </Navbar>
     

    </div>
  )
}

export default Navigation