import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';


const Navbar = () =>  {
    return (
      <Nav fill variant="tabs" className='Navbar'>
        <div className='navbar1'>Andi Muafak</div>
        <Nav.Item className='navbar2'>
          <Nav.Link eventKey="link-1">Blog Pribadi</Nav.Link>
        </Nav.Item>
        <Nav.Item className='navbar2'>
          <Nav.Link eventKey="link-2">Footer</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
  
  export default Navbar;