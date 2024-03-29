// count state를 setState를 이용하여 변경하기
// 버튼을 클릭할 때마다 count 상태값이 변경되도록 구현
import { useState, useEffect } from "react"

function MyComponent() {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") {
        setCount((prevCount) => prevCount + 1)
      } else if (event.key === "ArrowDown") {
        setCount((prevCount) => prevCount - 1)
      }
    }

    window.addEventListener("keyup", handleKeyUp)

    return () => {
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [])

  return (
    <div>
      <h2>MyComponent</h2>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default MyComponent
