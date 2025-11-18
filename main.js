function play() {
clock = 60
    const inter = setInterval(function() {
        clock--
        if (clock <= 0) {
            dial.showModal()
            scoreShow.innerHTML = "Score: " + score;
            clearInterval(inter)
        }
        timer.innerHTML = clock + "s"
        
    }, 1000)

function generate() {
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
    }, 780)
  
  
    ans = currentWord
     shows.innerHTML = currentWord
     letterCycled = currentWord.charAt(wordCycle)
     times = -1;
}
generate()
document.addEventListener("keydown", (event) => {
    if (event.key === letterCycled) {
        times++
        score++
          wordCycle++
        console.log(score)
     
    
        
        console.log("Congrats", "The letter is: " + letterCycled)
      
    
        if (wordCycle >= currentWord.length) {
            
             
       generate()
       return;
       
        }

        else {
           
        
        ans = currentWord.charAt(score - 1)
         letterCycled = currentWord.charAt(wordCycle)        
        }

        
         scorer.innerHTML = "Score: " + score
    }

   else {
     scorer.innerHTML = "Score: " + score
    score--
   }
   
})
}



