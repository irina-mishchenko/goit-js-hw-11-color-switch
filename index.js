"use strict";

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  body: document.querySelector("body"),
  btnStart: document.querySelector(`[data-action="start"]`),
  btnStop: document.querySelector(`[data-action="stop"]`),
};

const switchBodyColor = {
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = "true";
    this.timerId = setInterval(() => {
      refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
    }, 1000);
  },

  stop() {
    clearInterval(this.timerId);
    this.isActive = false;
  },
};

refs.btnStart.addEventListener(
  "click",
  switchBodyColor.start.bind(switchBodyColor)
);

refs.btnStop.addEventListener(
  "click",
  switchBodyColor.stop.bind(switchBodyColor)
);