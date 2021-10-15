import { useState } from 'react';

function App () {
    
  const [ count, setCount ] = useState(0)

  const plus = () => {
    setCount(count +1)
  }

  const minus = () => {
    setCount( count -1)
  }

  return(
    <div>
      <h4>Count: { count } </h4>
      <button onClick={(plus)}> + </button>
      <button onClick={(minus)}> - </button>
    </div>
  )

}

export default App;
