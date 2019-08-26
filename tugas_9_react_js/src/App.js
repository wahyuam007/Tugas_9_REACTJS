import React, {Component} from 'react';
// import {useState} from 'react-dom';
import {
  Col, 
  Row, 
  Button,
  Container,
  Breadcrumb,
  Form,
  Navbar,
  Nav,
  FormControl,
  NavDropdown,
  Tabs,
  Tab,
  Table,
  ProgressBar,
  Pagination,
  OverlayTrigger,
  Popover,
  Collapse
  } from 'react-bootstrap';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Ashow : false,
      setShow : false,
      buka : false
    };
    this.handleClose= this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    
  }
  handleClose() {
    this.setState(() => {
      return{
        Ashow : false
      }
    });
  }

  handleShow() {
    this.setState(() => {
      return{
        Ashow : true
      }
    });
  }

  
  render(){
    const popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">
          Informasi Website
        </Popover.Title>
        <Popover.Content>
          Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita olahraga
        </Popover.Content>
      </Popover>
    )
    return (
      <div>
        <Navbar bg="dark" variant="dark" >
          <Navbar.Brand href="/" >Akses Sport</Navbar.Brand> 
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link> 
            <Nav.Link href="/">Berita</Nav.Link>  
            <Nav.Link href="/">Live Score</Nav.Link>
            <NavDropdown title="Piala & Liga">
              <NavDropdown.Item href="/">Menu 1</NavDropdown.Item>
              <NavDropdown.Item href="/">Menu 2</NavDropdown.Item>
              <NavDropdown.Item href="/">Menu 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">Transfer Pemain</Nav.Link>
            <Nav.Link href="/">Tim</Nav.Link>
          </Nav>
            
          <Form className="pull-right" inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <Container>
          <Row>
            <Col md={{ span: 4, offset:8 }}>
              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/">Liga Inggris</Breadcrumb.Item>
                <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Rumor Transfer Pemain</h3>
            </Col>
            <Col md={{span: 2, offset:6}}>
              <p>tes</p>
            </Col>
          </Row>
          <Tabs defaultActiveKey="home">
            <Tab eventKey="home" title="Semua Transfer">
            </Tab>
            <Tab eventKey="liga_primer" title="Liga Primer Inggris"></Tab>
            <Tab eventKey="seriA" title="Serie A"></Tab>
            <Tab eventKey="divisi_P" title="Divisi Primera"></Tab>
            <Tab eventKey="bundesliga" title="Bundesliga"></Tab>
            <Tab eventKey="Liga_1" title="Liga 1 Indonesia"></Tab>
          </Tabs>
          <br />
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nama Pemain</th>
                <th>Tim</th>
                <th>Transfer</th>
                <th>Proses Transfer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>MAROUANE FEELAINI</td>
                <td>MANCHESTER UNITED</td>
                <td>SHANDONG LUNENG</td>
                <td>
                  <ProgressBar now={85} label="85%" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>LUIS NANI</td>
                <td>SPORTING CP</td>
                <td>SHANDONG LUNENG</td>
                <td>
                  <ProgressBar now={55} label="55%" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>MAREK HAMSIK</td>
                <td>NAPOLI</td>
                <td>DALIAN YIFANG</td>
                <td>
                  <ProgressBar now={95} label="95%" />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>SARDAR AZMOUN</td>
                <td>RUBIN KAZAN</td>
                <td>ZENIT ST PETERSBURG</td>
                <td>
                  <ProgressBar now={100} label="100%" />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>MISCHY BATSHUAYI</td>
                <td>CHELSEA</td>
                <td>CRYSTAL PALACE</td>
                <td>
                  <ProgressBar now={50} label="50%" />
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>LUCAS PIAZON</td>
                <td>CHELSEA</td>
                <td>CHIELO</td>
                <td>
                  <ProgressBar now={100} label="100%" />
                </td>
              </tr>
            </tbody>
          </Table>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
          <br />
          <Row>
            <Col md="1">
              <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <Button variant="primary">Informasi</Button>
              </OverlayTrigger>
            </Col>
            <Col md="2">
              <Button variant="primary" onClick={()=>this.setState({ buka: !this.state.buka })}>Versi Website</Button>
              <Collapse in={this.state.buka}>
                <p>Akses Sport v1.0</p>
              </Collapse>
            </Col>
          </Row>
          
        </Container>

      </div>
    );
  }
}

export default App;