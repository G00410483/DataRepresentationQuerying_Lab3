import './App.css';
import Content from './componenets/content';
import Footer from './componenets/footer';
import Header from './componenets/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<Content></Content>}></Route>
          <Route path='/read' element={<Header></Header>}></Route>
          <Route path='/create' element={<Footer></Footer>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

