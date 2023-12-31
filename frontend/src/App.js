import logo from './logo.svg';
import './App.css';
import axios from 'axios'


function App() {

  const getDetails = async() => {
     console.log("asdsfd")
     const response = await axios.get('http://localhost:5000/getDetails', {
        // Pass any required data in the request body
       params: {
        postid: 5,
        userid:3,
        title:'sriramrsss',
        content:'sihhackathonnn'
      },
      });
      console.log(response)
  }
  
  return (
    <div>
      <h2>postgres</h2>
      <h2 onClick={getDetails}>getDetails</h2>
    </div>
  );
}

export default App;
