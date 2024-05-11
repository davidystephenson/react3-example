import { useState, useEffect } from 'react';

export default function HomePage() {
  const [count, setCount] = useState(0)
  const [image, setImage] = useState('')
  function handleAdd() {
    setCount(count + 1)
  }
  useEffect(() => {
    async function download() {
      const url = 'https://dog.ceo/api/breeds/image/random'
      const response = await fetch(url)
      const data = await response.json()
      setImage(data.message)
    }
    download()
  }, [])

  return (
    <>
      <h1>Quiz App</h1>
      <div>{count}</div>
      <button onClick={handleAdd}>Add</button>
      <div>
        <img src={image} />
      </div>
    </>
  );
}
