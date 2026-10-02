import { useEffect, useState } from "react";

export function Welcome() {

  const [quote, setQuote] = useState("");
  const [viewcount, setViewCount] = useState(undefined);


  useEffect(() => {
    const fetchQuote = async () => {
      const result = await fetch("https://helloworld-280029092205.us-central1.run.app/v1/quote");
      const body = await result.json();
      setQuote(body.quote);
    }

    const pageName = "home";
    const fetchPageViewCount = async () => {
      const result = await fetch(`https://helloworld-280029092205.us-central1.run.app/v1/${pageName}/viewcount`);
      const body = await result.json();
      if (body) setViewCount(body.viewCount);
    }

    fetchQuote();
    fetchPageViewCount();

    // update page view count given that this page has rendered
    fetch(`https://helloworld-280029092205.us-central1.run.app/v1/${pageName}/viewcount`, {
      method: "POST"
    });

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
        This webpage is a work in progress. You can check out my projects <a href="https://github.com/rohansumant">here</a>.
        {quote && (<span> In the meantime here's a little something <sup><a href="https://linux.die.net/man/6/fortune">1</a></sup> for stopping by:
          <pre>{quote}</pre>
        </span>)}
      </div>
      <hr />
      <footer>
        {viewcount && `Page views (last 7 days): ${viewcount}`}
      </footer>
    </main>
  );
}