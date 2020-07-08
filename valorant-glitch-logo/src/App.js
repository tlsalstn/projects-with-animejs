import React from 'react';
import anime from "animejs/lib/anime.es";
import "./App.css";

const startAnimation = (cnt) => {
  const elements = document.querySelectorAll(".bar");
  const container = document.getElementsByClassName("wrap");
  anime({
    targets: [...elements, ...container],
    left: [{
      value: (a) => {
        if(a.className === container[0].className) {
          if (anime.random(3, 0) === 2) return "+=" + anime.random(5, 0) + "px";
          return "-=" + anime.random(5, 0) + "px";
        } else {
          if (anime.random(10, 1) === 3) {
            if (anime.random(3, 0) === 2) return "+=" + anime.random(50, 10) + "px";
            return "-=" + anime.random(50, 10) + "px";
          }
        }
      }
    }, {
      value: (a) => a.style.left
    }],
    top: [{value: (a) => {
      if(a.className === container[0].className) {
        if (anime.random(3, 0) === 2) return "+=" + anime.random(5, 0) + "px";
        return "-=" + anime.random(5, 0) + "px";
      }
    }}, {
      value: (a) => a.style.top
    }],
    duration: 100,
    easing: "steps(1)",
    complete: () => {
      cnt++;
      if(cnt < 4) startAnimation(cnt);
    }
  });
}

function App() {
  React.useEffect(() => {
    const container = document.getElementsByClassName("wrap");
    container[0].addEventListener("click", () => startAnimation(0));
    const elements = document.querySelectorAll(".bar");
    const length = elements.length;
    for (let i = 0; i < 10; i++) {
      elements[i].style.width = (i * 5.1) + "px";
      elements[i].style.height = "0px";
      elements[i].style.left = "1.5px";
      elements[i].style.webkitTransform = "skew(0deg)";
      elements[i].style.borderBottom = "5px solid #000";
      elements[i].style.borderRight = "4.5px solid red";
    }
    for (let i = 10; i < 25; i++) {
      elements[i].style.left = (((i - 9) * 4)) + "px";
      elements[i].style.width = "50px";
      elements[i].style.height = "5px";
      elements[i].style.background = "#000";
      elements[i].style.webkitTransform = "skew(40deg)";
    }
    for (let i = 25; i < 35; i++) {
      elements[i].style.width = ((i - 25) * 5) + "px";
      elements[i].style.height = "0px";
      elements[i].style.left = (67 - ((i - 25) * 5)) + "px";
      elements[i].style.webkitTransform = "skew(0deg)";
      elements[i].style.borderBottom = "5px solid #000";
      elements[i].style.borderLeft = "4.5px solid red";
    }
    for (let i = 35; i < length; i++) {
      elements[i].style.webkitTransform = "skew(-40deg)";
      elements[i].style.left = ((i * -4) + 160) + "px";
      elements[i].style.width = "50px";
      elements[i].style.height = "5px";
      elements[i].style.background = "#000";
    }
  }, [])

  return (
    <div className="App">
      <div className="wrap">
        <div className="box">
          <div className="left">
            {/* 25 */}
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
          <div className="right">
            {/* 15 */}
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;