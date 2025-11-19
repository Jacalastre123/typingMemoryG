highScorer.innerHTML = "High Score: " + highScore

function play() {
    score = 0
clock = 60
    const inter = setInterval(function() {
        clock--
        if (clock <= 0) {
            dial.showModal()
            scoreShow.innerHTML = "Score: " + score + "<br>Word is: " + currentWord;
            clearInterval(inter)
            if (score >= highScore) {
                highScore = score
                localStorage.setItem("highScore", highScore)
                highScorer.innerHTML = "High Score: " + highScore
            }
        }        timer.innerHTML = clock + "s"
        
    }, 1000)

function generate() {
    scoreShow.innerHTML = "Score: " + score;
	speed += 20
    pickerNum = Math.floor(Math.random() * 26)
    wordCycle = 0
    
    letterAmount++
    letterPicked = alphaList[pickerNum]
 if (letterAmount <= 1) {
        currentWord = letterPicked
   }
   else {
    currentWord = currentWord + letterPicked
	
   }
   
    setTimeout(function() {
        shows.innerHTML = "Type it!"
	
    }, 780 + speed)
  
  
    ans = currentWord
     shows.innerHTML = currentWord
     letterCycled = currentWord.charAt(wordCycle)
     times = -1;
      scoreShow.innerHTML = "Score: " + score
}
generate()

document.addEventListener("keydown", (event) => {
    scoreShow.innerHTML = "Score: " + score
    if (event.key === letterCycled) {
        times++
        score += 1
        scoreShow.innerHTML = "Score: " + score
          wordCycle++
        console.log(score)
     
    
        
    
      
    
        if (wordCycle >= currentWord.length) {
            
             
       generate()
       
       
        }

        else {
           
        
        ans = currentWord.charAt(score)
         letterCycled = currentWord.charAt(wordCycle)        
        }

        
         scorer.innerHTML = "Score: " + score
    }

   else {
     scorer.innerHTML = "Score: " + score
    score--
    clearInterval(inter)
       if (score >= highScore) {
                highScore = score
                localStorage.setItem("highScore", highScore)
                highScorer.innerHTML = "High Score: " + highScore
            }
            scoreShow.innerHTML = "Score: " + score + "<br>Word is: " + currentWord
    dial.showModal()
   }
 
}
)
}
