

import { useState } from 'react';

function App() {
  //Array destructing
  const [number,setNumber] = useState(0);
   return (
    <>
      <h1>{number}</h1>
      {/* batching process */}
      <button onClick={()=>{
        setNumber(n => n+1);
        setNumber(n => n+1);
        setNumber(n => n+1);
    }}>+3</button>
    </>
  );
}

export default App;
