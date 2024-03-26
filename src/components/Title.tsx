import { useState } from "react";

const Title = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text p-sticky">pictures</h1>
    </>
  );
};

export default Title;
