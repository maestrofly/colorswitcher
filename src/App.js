import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>COLOR SWITCHER</h1> 
     <p>Custom color switch that consists 
       of four(4) different colors. Whenever any of the colors is clicked, it should
       change the background of the page to that of the corresponding color.</p>
  
      {/* <!DOCTYPE html>
      <html lang = "en"> */}
        {/* <head>
          {/* <meta charset="UTF-8">
            <metaname = "viewport" content = "width = device-width, initial-scale = 1.0"> */}
              <title>DOCUMENT</title>
              <link rel = "stylesheet" href = "bg-color.css"></link>
        {/* </head> */} */}
        <body>
          <h4>COLOR SCHEME SWITCHER</h4>
          <div class = "Flex">
            <div id="green" onClick = "green_bg()"></div>
            <div id="red" onClick = "red_bg()"></div>
            <div id="blue" onClick = "blue_bg()"></div>
            <div id="yellow" onClick = "yellow_bg()"></div>
          </div>
          <p>TRY CLICK ON ONE OF THE COLORS ABOVE TO CHANGE THE BACKGROUND COLOR OF 
              THE PAGE
            </p>

            <script type = "text/Javascript" src = "bg_color.js"></script>
        </body>
      </html>
    </div>
  );
}

export default App;
