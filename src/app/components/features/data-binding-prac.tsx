import React, { useState, useEffect } from 'react';

function DataBindingPrac(props: any) {
  const initialTitle = props.title;
  console.log(props.children, typeof(props.children));
  const [title, setTile] = useState(initialTitle);
  function handleOnchange(e: any) {
    setTile(e.target.value);
  }

  useEffect(() => {
    console.log(`useEffect`);
    return() => {
      console.log('Effect clean up run');
    }
  }, []);

  return (
    <div className="container">
      <h1 style={{textTransform: 'uppercase', fontSize: 24}}>{title}</h1>
      <input type="text"
             value={title}
             onChange={handleOnchange}/>
    </div>
  )
}

export default DataBindingPrac;
