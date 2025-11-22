highScorer.innerHTML = "High Score: " + highScore

function generate() {
    codable.value = ""
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

function play(button) {
	scoreShow.innerHTML = "Score: " + score
    codable.value = ""
    score = 0
clock = 60
currentWord = ""
scoreShow.innerHTML = "Score: " + score;
button.disabled = true
    inter = setInterval(function() {
        clock--
        if (clock <= 0) {
            
            button.disabled = false
            dial.showModal()
            scoreShow.innerHTML = "Score: " + score + "<br>Word is: " + currentWord + "<br>High Score: " + highScore;
            clearInterval(inter)
            if (score >= highScore) {
                highScore = score
                localStorage.setItem("highScore", highScore)
                highScorer.innerHTML = "High Score: " + highScore
				message.innerHTML = "New High Score!"
				scoreShow.innerHTML = "Score: " + score + "<br>Word is: " + currentWord + "<br>High Score: " + highScore;
            }
           
        }        timer.innerHTML = clock + "s"
        
    }, 1000)


generate()
function isMobile(){
	return /Android|iPhone|Ipad|Ipod|Windows Phone|WebOS/i
	.test(navigator.userAgent) || window.innerWitdh <= 600
}
	if (isMobile()) {
		document.addEventListener("input", checks)
	}

	else {
document.addEventListener("keydown", checks)
	}
}

    function checks(event) {
    scoreShow.innerHTML = "Score: " + score
    if (event.key === letterCycled) {
        times++
        score += 1
        scoreShow.innerHTML = "Score: " + score
          wordCycle++
    
     
    
        
    
      
    
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

    clearInterval(inter)
       if (score >= highScore) {
                highScore = score 
                localStorage.setItem("highScore", highScore)
                highScorer.innerHTML = "High Score: " + highScore
            }
           document.removeEventListener("keydown", checks)
            scoreShow.innerHTML = "Score: " + score + "<br>Word is: " + currentWord
            document.getElementById("playBut").disabled = false
    dial.showModal()
    
   }
}

function resetHigh() {
    highScore = 0
    localStorage.setItem("highScore", highScore)
    highScorer.innerHTML = "High Score:" + highScore
}
