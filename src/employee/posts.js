import {table} from 'react-bootstrap'
function Posts(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.text())
    .then(data => console.log(data));

     
      return(
          <>
            <h3>This will show you all posts</h3>
          </>

      )

}
export default Posts;