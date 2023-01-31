let textDisplay = document.querySelector('.textdisplay');
let daycount = document.querySelector('.dayCount');

let level = 0;
//aka day
let suspectlvl = 0;
//suspectlvl: if it's above one, it's GG.

function changeDisplay(newDisplay){
     textDisplay.textContent = newDisplay;
}

changeDisplay("Welcome to Duolingo simulator! Survive for 15 days and you win! But there's a catch... NO STREAK SAVORS, and this is happening at the BUSIEST TIME in your life! Good luck! (Press any option to continue)");

function adv(){
     
     if(level === 0){
          changeDisplay("You've decided to start Duolingo. But you wonder, 'Do I have enough time for this?' What do you think? Do you want to do Duolingo? (A: Do a lesson. B: Go hang out with friends. C: Assault Duo.)");
     }
     if(level === 1){
          changeDisplay("You've decided to start Duolingo. But you wonder, 'Do I have enough time for this?' What do you think? Do you want to do Duolingo? (A: Do a lesson. B: Go hang out with friends. C: Assault Duo.)");
     }
     if(level === 2){
          changeDisplay("You wake, and get a phone call from your friend. He wants you to attend his birthday party. Do you want to do Duolingo today? (A: Do a lesson. B: Go hang out with friends. C: Assault Duo.)");
     }
     level++;
     daycount.textContent = level;
}

function option(optionNo){
     // if(level === 0){
          // level++;
          // changeDisplay("You've decided to start Duolingo. But you wonder, 'Do I have enough time for this?' What do you think? Do you want to do Duolingo? (A: Do a lesson. B: Go hang out with friends. C: Assault Duo.)");
     // }
     if(level === 1){
          // level = 2;
          // changeDisplay("You've decided to start Duolingo. But you wonder, 'Do I have enough time for this?' What do you think? Do you want to do Duolingo? (A: Do a lesson. B: Go hang out with friends. C: Assault Duo.)");
          if(level === 1 && optionNo === 1){
               changeDisplay("What does, 'Hablo español' mean? (A: I speak Spanish. B: Speak Spanish. C: Spanish sucks.)(But hey, guess what? Duo doesn't care if you get it right or not. He just cares if you did your lesson!)")
               // level++;
               //Does lesson
               console.log(level,optionNo)
          }
          if(level === 1 && optionNo === 2){
               changeDisplay("What a dissapointment, thought Duo. You suck. One more day and YOU ARE DEAD.")
               suspectlvl++
               // level++;
               //Skips lesson
               console.log(level,optionNo)
          }
          if(level === 1 && optionNo === 3){
               changeDisplay("You weren't able to find Duo.");
               suspectlvl++
               // level++;
               //Skips lesson
               console.log(level,optionNo)
          }
     }
     if(level === 2){
          // level = 2;
          // changeDisplay("You wake, and get a phone call from your friend. He wants you to attend his birthday party. Do you want to do Duolingo today? (A: Do a lesson. B: Go hang out with friends. C: Assault Duo.)");
          if(level === 2 && optionNo === 1){
               changeDisplay("What does, 'Ego sum puer.' mean? (A: I am a girl. B: I am a boy. C: Only nerds do Latin.)(But hey, guess what? Duo doesn't care if you get it right or not. He just cares if you did your lesson!)")
               // level++;
               //Does lesson
               console.log(level,optionNo)
          }
          if(level === 2 && optionNo === 2){
               changeDisplay("What a dissapointment, thought Duo. You suck. One more day and YOU ARE DEAD.")
               suspectlvl++
               // level++;
               //Skips lesson
               console.log(level,optionNo)
          }
          if(level === 2  && optionNo === 3){
               changeDisplay("You weren't able to find Duo.");
               suspectlvl++
               // level++;
               //Skips lesson
               console.log(level,optionNo)
          }
     }
     setTimeout('option()', 1000)
}