export default async function Home() {
  const response = await fetch('https://helloworld-280029092205.us-west1.run.app/api/time');
  const data = await response.json();
  return (
    <main>
      Getting started with Github Pages! <br />
      Current time is {data.time}
    </main>
  );
}
