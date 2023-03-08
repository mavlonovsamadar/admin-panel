import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import createData from '../dynamicAxios/DynamicAxios'

const CreateData = () => {

  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [price, setPrice] = useState("")
  const [sale, setSale] = useState("")
  const [image, setImage] = useState("")
  const navigate = useNavigate("")

  
  const createAllData = async () => {

    let data = {
      name: name,
      location: location,
      price: price,
      sale: sale,
      img: image,
    }

    let url = "http://localhost:3000/data"
    await createData(url, data)
      .then((res) => {
        alert("Succesfully created")
        setName("")
        setLocation("")
        setPrice("")
        setSale("")
        setImage("")
        navigate("/table")
      })
  }

  return (
    <>
      <Container>
        <Row className='justify-content-center mt-4'>
          <Col xs={7}>
            <h1 style={{ textAlign: "center" }}>Hello create page</h1>
            
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>name</Form.Label>
                <Form.Control type="text" placeholder="Hotel name" onChange={(e) => setName(e.target.value)} />
                {name.length < 1 ? <p>Error</p> : <p>Succes</p>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="location" onChange={(e) => setLocation(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="price" onChange={(e) => setPrice(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Sale</Form.Label>
                <Form.Control type="text" placeholder="sale" onChange={(e) => setSale(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" placeholder="image" onChange={(e) => setImage(e.target.value)} />
              </Form.Group>
              {name.length<1 || location.length<1 || price.length<1 || sale.length<1 || image.length<1? <Button style={{ width: "100%" }} variant="danger" >
                Submit
              </Button> : <Button style={{ width: "100%" }} variant="primary" onClick={createAllData}>
                Submit
              </Button>}
              
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CreateData