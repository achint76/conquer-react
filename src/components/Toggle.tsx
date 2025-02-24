import { useState } from "react";

const Toggle = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 p-5">
      {/* Agar isVisible true hai to text dikhao */}
      {isVisible && <h1 className="text-2xl font-bold">Hello World!</h1>}

      {/* Button click hone par state toggle karo */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => {
          setIsVisible(!isVisible);
          setCount(count + 1);
        }}
      >
        Toggle Text: {count}
      </button>
    </div>
  );
};

export default Toggle;
