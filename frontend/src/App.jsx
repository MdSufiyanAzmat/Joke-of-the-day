import {useState} from 'react'
import './App.css'

function App(){
  const [joke, setJoke] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

async function fetchJoke(){
  setLoading(true);
  setError('')
  // setJoke('');
  try{
    const response = await fetch('http://localhost:3000/api/joke');

    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setJoke(data.joke);

  }catch(e){
    setError('Failed to fetch joke. Is the backend running?');
    console.log(e)
  }finally {
      setLoading(false);  // ← THIS IS CRITICAL! Always runs
    }
}  

return (
  <>
     <div style={{ 
      maxWidth: '600px', 
      margin: '50px auto', 
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>😂 Joke of the Day</h1> 
      
      <button 
        onClick={fetchJoke}
        disabled={loading}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          marginBottom: '20px'
        }}
      >
        {loading ? 'Loading...' : 'Get a Joke'}
      </button>
      
      {error && (
        <div style={{ color: 'red', marginTop: '20px' }}>
          ❌ {error}
        </div>
      )}
      
      {joke && (
        <div style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f0f0f0',
          borderRadius: '10px',
          fontSize: '18px'
        }}>
          <p>{joke}</p>
        </div>
      )}
    </div>

  </>
)
}

export default App;