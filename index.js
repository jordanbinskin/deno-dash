import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";
import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";

const App = () => {
  return (
    <html>
      <body>
       
         <canvas id="myCanvas" width="480" height="320"></canvas>
          <script type="application/javascript">
    function draw() {
      var canvas = document.getElementById('canvas');
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
      }
    }
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
