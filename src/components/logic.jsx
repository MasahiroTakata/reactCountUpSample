import { useState } from "react";
export const Logic = () => {
  // 更新関数
  const [count, setCount] = useState(0);
  const onClickButton = () => {
    setCount(count + 1);
  }
  return <div>
    <p>You clicked {count} times</p>
    <button onClick={onClickButton}>カウントアップ！</button>
  </div>;
};