import React, { useState } from 'react';

function App() {
  // 更新関数
  const [count, setCount] = useState(0);
  const onClickButton = () => {
    setCount(count + 1);
  }
  return (
     <div>
      <p>You clicked {count} times</p>
      <button onClick={onClickButton}>
        カウントアップ！
      </button>
    </div>
  );
}

export default App;
