import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [response_state, setResponseState] = React.useState({ is_loading: true, response: null });

  React.useEffect(() => {
    (async function() {
      const response = await fetch('/api/');
      setResponseState( {is_loading: false, response: response.statusText });
    })();
  },[]);

  return (
    <div>
      <h2>This is an app</h2>
      {response_state.is_loading ? <p>Loading...</p>: `Server says ${response_state.response}`}
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)