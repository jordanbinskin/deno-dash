import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";
import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";

const App = () => {
  return (
    <html>
      <body>
       
         <canvas id="myCanvas" width="480" height="320"></canvas>
          <script src="script.js"></script>
        <script>
          alert('wassup')
        </script>
      </body>
    </html>
  )
}

function handler(req: Request): Response {
  const renderedHTML = renderSSR(<App />)
  return new Response(renderedHTML, {
    headers: {
      "content-type": "text/html"
    }
  });
}

console.log("Listening on http://localhost:8000");
await listenAndServe(":8000", handler);
