let alphaList = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "d",
        "s",
        "t",
        "u",
        "v",
        "v",
        "x",
        "y",
        "z",
    ]
    const shows = document.getElementById("shows")
    const dial = document.getElementById("dial")
    const timer = document.getElementById("timer")
    const scorer = document.getElementById("scorers")
    const scoreShow = dial.querySelector("#scoreShow")
   
    let score = 0

    let pickerNum;
    let letterPicked;
    let currentWord;
    let letterAmount = 0
    let ans = ""
    let letterCycled;
    let wordCycle = -1
    let times = 0
let clock = 60
  