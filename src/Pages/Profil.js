import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import {  useNavigate, useParams } from 'react-router-dom'

const Profil = () => {
const {id}= useParams()

const [user, setUser ] = useState({})

const navigate = useNavigate()


useEffect(() => {
  axios
  .get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
  .then ((res) => setUser(res.data[0]))
  .catch ((err)=> console.log(err))
 
}, [id])

  return (
    <div>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.username}</Card.Text>
        <Card.Text>{user.email}</Card.Text>

        <Button onClick={()=> navigate(-1)} variant="danger">Back</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Profil