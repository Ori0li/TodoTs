import { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date();
      const hours = currentTime.getHours().toString().padStart(2, "0");
      const minutes = currentTime.getMinutes().toString().padStart(2, "0");
      const seconds = currentTime.getSeconds().toString().padStart(2, "0");

      setTime(`${hours}:${minutes}:${seconds}`);
    };

    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 max-w-xs mx-auto">
      <div className="text-center text-4xl font-semibold text-gray-800">
        <span className="text-black">{time}</span>
      </div>
    </div>
  );
};

export default Time;
