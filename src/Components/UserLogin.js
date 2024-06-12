import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function UserLogin() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios.post(`http://localhost:3000/viewPost`)
      .then((res) => {
        console.log(res, "res")
        if (res.data.data !== undefined) {
          setValues(res.data.data);
        }
      })
      .catch((e) => { });
  }, []);

  return (
    <div className='Userlogin'>
      <header>
        <Navbar bg="dark" expand="md" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">BlogSpot</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="collapseOnSelect">
              <Nav className="ms-auto">
                <Nav.Link href="#home"><Link className="btn btn-outline-light" aria-current="page" to='/UserLogin'>Home</Link></Nav.Link>
                <Nav.Link href="#About"><Link className="btn btn-outline-light" aria-current="page" to='/AboutUs'>About Us</Link></Nav.Link>
                <Nav.Link href="#About"><Link className="btn btn-outline-light" aria-current="page" to='/PostBlog'>Post a Blog</Link></Nav.Link>
                <Nav.Link href="#About"><Link className="btn btn-outline-light" aria-current="page" to='/MyProfile'>My Profile</Link></Nav.Link>
                <Nav.Link href="#About"><Link className="btn btn-outline-light" aria-current="page" to='/'>Logout</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <div className='rows'>
      <h1 className="text-left pt-8 text-black">Here are your latest blogs:</h1>
      </div>
      
      <div className="row">
        {values.map((e) => {
          return (
            <div className="col-md-6 mb-4" key={e._id}>
              <div className="card shadow" style={{ width: "100%" }}>
                <div className="card-body text-center">
                  <h5 className="card_title1"><label>Title : {e.title}</label></h5>
                  <img src={`http://localhost:3000/${e.image.filename}`} alt='hello' width="100%" height="250px" />
                  <h5 className="card_title1"><label>@writer : {e.user.firstname}</label></h5>
                  <div className="content-box">
                    <h5 className="card_title2 glowing-text"><label>{e.content}</label></h5>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserLogin;
