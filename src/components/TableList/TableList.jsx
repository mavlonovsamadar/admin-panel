import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TableListRow = () => {

  const [rows, setRows] = useState()

  const getAllData =  () => {
let url = "http://localhost:3000/data"
 axios.get(url).then((data)=> setRows(data?.data))
  }

const deleteFunc = (id) => {
  axios.delete(`http://localhost:3000/data/${id}`).then((res)=>{alert(res.statusText)})
  setRows(rows.filter((el) => el.id !== id));
}

  useEffect(()=>{
    getAllData()
  }, [])

  return (
    <>
<Container>
  <Row className='justify-content-center mt-5'>
    <Col xs={10}>
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Images</TableCell>
            <TableCell align="right">Names</TableCell>
            <TableCell align="right">Locations</TableCell>
            <TableCell align="right">Prices</TableCell>
            <TableCell align="right">Sales</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow 
              key={row?.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              

              <TableCell component="th" scope="row">
                <img src={row?.img} width={100} height={50} alt="" />
              </TableCell>
              <TableCell align="right" width={200}>{row?.name}</TableCell>
              <TableCell align="right">{row?.location}</TableCell>
              <TableCell align="right">{row?.price}</TableCell>
              <TableCell align="right">{row?.sale}</TableCell>
              <Link to= {`/table/edit/${row.id}`} > 
              <TableCell align="right"><Button style={{marginTop:"6px", marginRight:"-75px"}} variant="contained">Edit</Button></TableCell>
              </Link>
              <TableCell align="right"><Button style={{marginLeft:"-30px"}} variant="contained" color="error" onClick={()=> deleteFunc(row.id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Col>
    </Row>
    </Container> 
    </>
  )
}

export default TableListRow