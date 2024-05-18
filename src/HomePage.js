import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { imageSlice } from './reducers/imageReducer';

export default function HomePage() {
  const dispatch = useDispatch()
  const downloading = useSelector(state => state.image.downloading)
  const url = useSelector(state => state.image.url)
  const [count, setCount] = useState(0)
  function handleAdd() {
    setCount(count + 1)
  }
  useEffect(() => {
    async function download() {
      const action = imageSlice.actions.download()
      dispatch(action)
    }
    download()
  }, [])

  const imageView = downloading
    ? <p>Loading...</p>
    : <img src={url} />

  return (
    <>
      <h1>Quiz App</h1>
      <div>{count}</div>
      <button onClick={handleAdd}>Add</button>
      <div>
        {imageView}
      </div>
    </>
  );
}
