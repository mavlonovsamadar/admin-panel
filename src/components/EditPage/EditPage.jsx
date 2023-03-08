import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'


const EditPage = () => {

  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [price, setPrice] = useState("")
  const [sale, setSale] = useState("")
  const [image, setImage] = useState("")
  const navigate = useNavigate("")

const {id} = useParams()
console.log(id);
  const getOne = (id) => {
     
    axios.get(`http://localhost:3000/data/${id}`).then((data)=>{
      setName(data.data.name)
      setLocation(data.data.location)
      setPrice(data.data.price )
      setSale(data.data.sale )
      setImage(data.data.img )
    })
  }

  useEffect(()=>{
    getOne(id)
  }, [])

  const editData = () => {
    let obj = {
      name:name,
      location:location,
      price:price,
      sale:sale,
      img:image
    }

    axios.put(`http://localhost:3000/data/${id}`, obj).then((res)=>{
      alert(res.statusText)
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
                <Form.Control type="text" placeholder="Hotel name" onChange={(e) => setName(e.target.value)} value={name}/>
                {name.length < 1 ? <p>Error</p> : <p>Succes</p>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="location" onChange={(e) => setLocation(e.target.value)} value={location}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="price" onChange={(e) => setPrice(e.target.value)} value={price}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Sale</Form.Label>
                <Form.Control type="text" placeholder="sale" onChange={(e) => setSale(e.target.value)} value={sale}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" placeholder="image" onChange={(e) => setImage(e.target.value)} value={image}/>
              </Form.Group>
              {name.length < 1 || location.length < 1 || price.length < 1 || sale.length < 1 || image.length < 1 ? <Button style={{ width: "100%" }} variant="danger" >
                Submit
              </Button> : <Button style={{ width: "100%" }} variant="primary" onClick={editData} >
                Submit
              </Button>}

            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default EditPage