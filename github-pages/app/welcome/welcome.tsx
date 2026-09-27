import { useEffect, useState } from "react";
import { Link } from "react-router";

export function Welcome() {

  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      const result = await fetch("https://helloworld-280029092205.us-central1.run.app/v1/quote");
      const body = await result.json();
      setQuote(body.quote);
    }

    fetchQuote();
  }, []);

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <h1>
        Hey there 👋! I am Rohan.
      </h1><br />
      <div>
        I work as a software engineer at Amazon in Sunnyvale, CA. You can find out more about me <a href="https://www.linkedin.com/in/rohan-sumant-b9434455/">here</a>.
        <ul>
          <li>
            Email: rsumant@alumni.scu.edu
          </li>
          <li>
            Phone: 6692603169
          </li>
        </ul>
      </div>
      <div>
        Outside of work, my interests are Chess, bouldering, and reading.
      </div><br />
      <div>
        This webpage is a work in progress. {quote && (<span>
          Here's a little something <sup><a href="https://linux.die.net/man/6/fortune">1</a></sup> for stopping by:
          <pre>{quote}</pre>
        </span>)}
      </div>
    </main>
  );
}