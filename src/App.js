

import { useState } from 'react';

function App() {
  //Array destructing
  const [number,setNumber] = useState(0);
   return (
    <>
      <h1>{number}</h1>
      {/* batching process */}
      <button onClick={()=>{
        setNumber(number + 5);
        setNumber(n => n + 1);
    }}>Increase the number</button>
    </>
  );
}

export default App;
