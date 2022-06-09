import { Nav } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import EmployeeList from "./employee/employeelist";
import EmpSalary from "./employee/empsalary";
import Services from  "./employee/Services";
import Posts from "./employee/posts";
import Contactus from  "./employee/contactus";

function App() {
  return (
    <>
      <h1>This is main page</h1>
      <Nav variant="tabs">
    <Nav.Item>
      <Nav.Link><Link to="/">Home</Link></Nav.Link>
   </Nav.Item>   
   <Nav.Item>
        <Nav.Link ><Link to="salary">Salary</Link></Nav.Link>
   </Nav.Item>
   <Nav.Item>
   <Nav.Link ><Link to="services">Services</Link></Nav.Link>
   </Nav.Item>
   <Nav.Item>
   <Nav.Link ><Link to="posts">Posts</Link></Nav.Link>
   </Nav.Item>
   <Nav.Item>
         <Nav.Link ><Link to="contactus">Contact Us</Link></Nav.Link>
    </Nav.Item>
    </Nav>
      
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/salary" element={<EmpSalary />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/post" element={<Posts />} />
        <Route path="/contactus" element={<Contactus />} />
        
      </Routes>
    </>
  );
}

export default App;
