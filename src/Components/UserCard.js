import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const UserCard = ({user}) => {
  const navigate = useNavigate()
  return (
    <div>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.username}</Card.Text>
        <Card.Text>{user.email}</Card.Text>

        <Button onClick={()=> navigate(`/Profil/${user.id}`)} variant="outline-success">Profil</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default UserCard