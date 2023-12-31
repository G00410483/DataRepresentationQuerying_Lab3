//Imports
import './App.css';
import Content from './componenets/content';
import Footer from './componenets/footer';
import Read from './componenets/read';
import Create from './componenets/create';
import Header from './componenets/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    //Display Navbar
    <BrowserRouter>
      <div className="App">
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
          {/* Navbar */}
            <Nav className="me-auto">
              {/* Link to Homepage */}
              <Nav.Link href="/">Home</Nav.Link>
              {/* Link to Read Page */}
              <Nav.Link href="/read">Read</Nav.Link>
              {/* Link to Create Page */}
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/read1">READ</Nav.Link>
              <Nav.Link href="/create1">CREATE</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/*Routing*/}
        <Routes>
          {/* Route to Homepage */}
          <Route path='/' element={<Content></Content>}></Route>
           {/* Route to Header Page */}
          <Route path='/read' element={<Header></Header>}></Route>
           {/* Route to Footer Page */}
          <Route path='/create' element={<Footer></Footer>}></Route>
           {/* Route to Read Page */}
          <Route path='/read1' element={<Read></Read>}></Route>
           {/* Route to Create Page */}
          <Route path='/create1' element={<Create></Create>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

