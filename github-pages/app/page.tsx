'use client';
import { useEffect, useState } from "react";

export default function Home() {
  
  const [time, setTime] = useState(null);
  
  useEffect(() => {
    async function fn() {
      const response = await fetch('https://helloworld-280029092205.us-west1.run.app/api/time');
      const data = await response.json();
      setTime(data.time);
    }

    fn();
  }, []);

  return (
    <main>
      Getting started with Github Pages! <br />
      Current time is {time ? time : "..."}.
    </main>
  );
}
