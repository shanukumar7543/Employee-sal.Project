import {Table} from 'react-bootstrap';
function EmployeeList(){
    return(
        <>
           <h2> List of employee</h2>
           <Table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">ID NO.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Shubham</td>
      <td>Singh</td>
      <td>@120233</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Sanjeev</td>
      <td>Bhai</td>
      <td>@1225623</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Pritesh</td>
      <td>Pandole</td>
      <td>@1225</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Prince</td>
      <td>Singh</td>
      <td>@1225014</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Shanu</td>
      <td>Sahay</td>
      <td>@1225014</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Prashant</td>
      <td>Kumar</td>
      <td>@122004</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td colspan="2">Ankku</td>
      <td>@1250412</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Suman</td>
      <td>Singh</td>
      <td>@11115014</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>Rohit</td>
      <td>Sharma</td>
      <td>@101015014</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>Puja</td>
      <td>Singh</td>
      <td>@122501474</td>
    </tr>
  </tbody>
</Table>
           
        </>
    )

}
export default EmployeeList;  