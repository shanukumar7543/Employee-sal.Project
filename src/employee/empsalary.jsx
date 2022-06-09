import {table} from 'react-bootstrap'
 function EmpSalary(){

     return(
       <>
       <h4>Account Department</h4>
       <table class="table caption-top">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Shubham</td>
      <td>bhai</td>
      <td>50,000</td>
    </tr>
    
    <tr>
      <th scope="row">2</th>
      <td>Sanjeev</td>
      <td>bhai</td>
      <td>60,000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Pritesh</td>
      <td>Pandole</td>
      <td>75,000</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Prince</td>
      <td>Singh</td>
      <td>80,000</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Shanu</td>
      <td>Sahay</td>
      <td>85,000</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Prashant</td>
      <td>Kumar</td>
      <td>80,000</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Anku</td>
      <td>Singh</td>
      <td>82,000</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Suman</td>
      <td>Singh</td>
      <td>84,000</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>Rohit</td>
      <td>Sharma</td>
      <td>88,000</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>Puja</td>
      <td>Singh</td>
      <td>88,000</td>
    </tr>

  </tbody>
</table>
       </>

     )
 }
 export default EmpSalary;
