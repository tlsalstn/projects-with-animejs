import React from 'react';
import anime from "animejs/lib/anime.es";
import './App.css';

function App() {
  let animation = [];
  
  React.useEffect(() => {
    animation.push(anime({
      targets: ".text",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1000,
      delay: (a, b) => b * 250
    }));

    animation.push(anime({
      targets: ".outline",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 2000,
      delay: (a, b) => b * 250
    }));

    animation.push(anime({
      targets: ".inside",
      opacity: [
        { value: 0 },
        { value: 1 }
      ],
      duration: 3500,
      easing: 'linear'
    }));

    document.getElementById("logo").addEventListener("click", () => restart());
  }, []);

  const restart = () => {
    const length = animation.length;
    for(let i=0; i<length; i++) animation[i].restart();
  }

  return (
    <div className="App">
      <svg id="logo" className="valorant" width="100%" height="937" xmlns="http://w3.org/2000/svg" version="1.1" viewBox="0 0 1079 300">
        <g fill="none">
          <path className="outline" d="M 75 94 V 149 L 125 209 H 175 L 75 94 V 95" stroke="black" stroke-width="2" />
          <path className="outline" d="M 165 164 H 205 L 225 144 V 94 L 165 164 H 166" stroke="black" stroke-width="2" />
          <path className="inside" d="M 75 94 V 149 L 125 209 H 175 L 75 94 V 95" fill="black" />
          <path className="inside" d="M 165 164 H 205 L 225 144 V 94 L 165 164 H 166" fill="black" />
          <path className="text v" d="M 270 100 L 280 202 H 282 L 355 97" stroke="#000" stroke-width="16" />
          <path className="text a" d="M 330 204 L 405 101 H 408 V 195 L 367 154" stroke="#000" stroke-width="16" />
          <path className="text l" d="M 448 101 V 195 H 500" stroke="#000" stroke-width="16" />
          <path d="M 490 180 L 520 220" fill="#ff4655" stroke="#ff4655" stroke-width="8" />
          <path className="text o" d="M 510 150 A 40 40 0 1 1 590 150" stroke="#000" stroke-width="16" />
          <path className="text o" d="M 510 150 A 40 40 0 1 0 590 150" stroke="#000" stroke-width="16" />
          <path className="text r" d="M 630 200 V 110 H 700 V 111 L 665 155 L 710 210" stroke="#000" stroke-width="16" />
          <path className="text a" d="M 815 205 L 741 101 H 740 V 195 L 773 154" stroke="#000" stroke-width="16" />
          <path className="text n" d="M 815 170 V 103 L 895 200 V 101" stroke="#000" stroke-width="16" />
          <path d="M 790 134 L 870 245" fill="#ff465" stroke="#ff4655" stroke-width="15" />
          <path className="text t" d="M 915 110 H 1005" stroke="#000" stroke-width="16" />
          <path className="text t" d="M 960 110 V 200" stroke="#000" stroke-width="16" />
          <path d="M 985 90 L 1025 130" fill="#ff4655" stroke="#ff4655" stroke-width="15" />
          <path d="M 260 80 V 100 H 1079 V 80 H 260" fill="#ff4655" stroke="#ff4655" stroke-width="2" />
          <path d="M 260 230 V 201 H 1079 V 230 H 260" fill="#ff4655" stroke="#ff4655" stroke-width="2" />
        </g>
      </svg>
    </div>
  );
}

export default App;
