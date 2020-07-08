import React from 'react';
import anime from "animejs/lib/anime.es";
import './App.css';

function App() {
  let posX = 0;
  let posY = 0;
  let animations = [];
  let time = 0;
  let timer;
  const easings = [
    "linear",
    "easeInQuad",
    "easeInCubic",
    "easeInQuart",
    "easeInQuint",
    "easeInSine",
    "easeInExpo",
    "easeInCirc",
    "easeInBack",
    "easeInBounce",
    "easeOutQuad",
    "easeOutCubic",
    "easeOutQuart",
    "easeOutQuint",
    "easeOutSine",
    "easeOutExpo",
    "easeOutCirc",
    "easeOutBack",
    "easeOutBounce",
    "easeInOutQuad",
    "easeInOutCubic",
    "easeInOutQuart",
    "easeInOutQuint",
    "easeInOutSine",
    "easeInOutExpo",
    "easeInOutCirc",
    "easeInOutBack",
    "easeInOutBounce"
  ]

  React.useEffect(() => {
    refillAnimation();
    stopGame();
  }, []);

  // 부딪혔는지 확인
  const check = () => {
    const materials = document.querySelectorAll(".material");
    const length = materials.length;

    for(let i=0; i<length; i++) {
      const rect = materials[i].getBoundingClientRect();

      if((posX >= rect.left && posX <= rect.right) && (posY <= rect.bottom && posY >= rect.top)) {
        stop();
        alert("Game over: " + time.toFixed(2) + "s");
      }
    }
  }

  // 게임 시작
  const start = () => {
    let control = document.querySelector(".control");
    control.style.display = "none";

    addBackgroundEvent();
    startGame();
    startTimer();
  }

  // 게임 종료
  const stop = () => {
    let control = document.querySelector(".control");
    control.style.display = "block";

    stopTimer();
    removeBackgroundEvent();
    stopGame();
  }

  // 에니메이션 시작
  const startGame = () => {
    animations.map(animation => animation.restart());
  }

  // 애니메이션 종료
  const stopGame = () => {
    animations.map(animation => animation.pause());
  }

  // 애니메이션 생성
  const createAnimation = (container) => {
    return anime({
      targets: container,
      left: [
        { value: "98%", duration: getRandomDuration(), easing: easings[anime.random(29, -1)] },
        { value: "0%", duration: getRandomDuration(), easings: easings[anime.random(29, -1)] },
      ],
      update: () => {
        check();
      },
      loop: true
    });
  }

  // 애니메이션 재생성
  const refillAnimation = () => {
    removeAnimation();
    animations = [];
    
    const materials = document.querySelectorAll(".material");
    const length = materials.length;

    for(let i=0; i<length; i++) animations.push(createAnimation(materials[i]));
  }

  // 애니메이션 삭제
  const removeAnimation = () => {
    const materials = document.querySelectorAll(".material");
    const length = materials.length;

    for(let i=0; i<length; i++) {
      anime.remove(".material");
    }
  }

  // 배경 이벤트 추가
  const addBackgroundEvent = () => {
    let background = document.querySelector(".background");
    background.addEventListener("mousemove", e => setMousePosition(e));
  }

  // 배경 이벤트 삭제
  const removeBackgroundEvent = () => {
    let background = document.querySelector(".background");
    background.removeEventListener("mousemove", e => setMousePosition(e));
  }

  // 타이머 시작
  const startTimer = () => {
    time = 0;
    timer = setInterval(incrementNumber, 10);
  }

  // 타이머 종료
  const stopTimer = () => {
    clearInterval(timer);
  }

  // 시간 추가
  const incrementNumber = () => {
    time += 0.01;
  }
  
  // 랜덤 시간
  const getRandomDuration = () => {
    return anime.random(6000, 3000);
  }

  // 마우스 위치 저장
  const setMousePosition = (e) => {
    posX = e.clientX;
    posY = e.clientY;
  }

  return (
    <div className="App">
      <div className="background">
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
        <div className="material" />
      </div>
      <button className="control" onClick={e => start(e)}>Start</button>
    </div>
  );
}

export default App;