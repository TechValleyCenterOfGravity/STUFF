import React, { useEffect, useState } from 'react';

import './App.css';
import './App.scss';
import logo from './logo.svg';

import { useTable } from 'react-table';
import ReactMarkdown from 'react-markdown';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import BTable from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listItems } from './graphql/queries';
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  return (
    <BTable striped bordered hover {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
            prepareRow(row)
            return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>
                  {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </BTable>
  )

}

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
      console.log(items)
    } catch (err) { console.log('error fetching items') }
  }

  const columns = React.useMemo(
    () => [
      {
        Header: 'Item Name',
        accessor: 'name',
      },
      {
        Header: 'Description',
        accessor: 'description',
        Cell: props => <ReactMarkdown>{ props.value }</ReactMarkdown>,
      },
      {
        Header: 'Link',
        accessor: 'link',
        Cell: props => <a href={ props.value }>Link</a>,
      },
      {
        Header: 'Locations',
        accessor: 'Locations.items',
        Cell: props =>
          <ul>
            {props.value.map((itemloc, index) => (
              <li key={itemloc.id ? itemloc.id : index}>{itemloc.Zone.name} - {itemloc.name}</li>
            ))}
          </ul>
      },
    ],
    []
  )

  const data = React.useMemo(() => items, [items])

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
          />
        </Navbar.Brand>
        <Navbar.Brand className="d-md-none">TVCOG - STUFF</Navbar.Brand>
        <Navbar.Brand className="d-none d-md-block">Tech Valley Center of Gravity - STUFF</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Form inline>
              <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
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
            <Table columns={columns} data={data} />
          </Col>
        </Row>
      </Container>
    </>
  )

}

export default App;
