import React, { useEffect, useState } from 'react';

import './App.css';
import './App.scss';
import logo from './logo.svg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listItems } from './graphql/queries';
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchItems()
  }, [])

  async function fetchItems() {
    try {
      const itemData = await API.graphql(graphqlOperation(listItems))
      const items = itemData.data.listItems.items
      setItems(items)
    } catch (err) { console.log('error fetching items') }
  }

  return (
    <>
      <Navbar collapseOnSelect expand="md" fixed="top" className="justify-content-between" bg="dark" variant="dark">
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Tech Valley Center of Gravity - STUFF
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Form inline>
              <Form.Control type="text" placeholder="Search" className=" mr-sm-2" />
              <Button type="submit" variant="outline-primary">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <h1>Stuff To Use For Free!</h1>
              <p>
                This is a database of where TVCOG members may find consumables in the makerspace.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {
                  items.map((item, index) => (
                    <tr key={item.id ? item.id : index}>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App;
