import React, { useId } from 'react'

export default function App() {
  const id1 = useId()
  const id2 = useId()
  const id3 = useId()
  console.log(id1, id2, id3)
  return <div>App</div>
}
