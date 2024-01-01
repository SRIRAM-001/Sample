import logo from './logo.svg';
import './App.css';
import axios from 'axios'


function App() {

  const getDetails = async() => {
     console.log("asdsfd")
     const response = await axios.get('https://sam-5f6z.onrender.com/getDetails', {
        // Pass any required data in the request body
       params: {
        postid: 6,
        userid:2,
        title:'sriramrsssss',
        content:'sihhackathonnnnnn'
      },
      });
      console.log(response,"res")
  }
  
  return (
    <div>
      <h2>postgres</h2>
      <h2 onClick={getDetails}>getDetails</h2>
    </div>
  );
}

export default App;
