import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavBrand from 'react-bootstrap/NavbarBrand';

function App() {
	return (
		<>
			<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
				<Container fluid>
					<Navbar.Brand href="/">Personal</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
							<Nav.Item>
								<Nav.Link href="/home">Home</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="link-1">Link</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="link-2">Link</Nav.Link>
							</Nav.Item>
							<NavDropdown title="Dropdown" id="nav-dropdown">
								<NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
								<NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
								<NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Container fluid>
				<div className="App">
					<div className="card">
						<div className="card-body">Test</div>
					</div>
				</div>
			</Container>
		</>
	);
}

export default App;
