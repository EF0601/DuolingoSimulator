let textDisplay = document.querySelector('.textdisplay');
let daycount = document.querySelector('.dayCount');

let level = 0;
//aka day
let suspectlvl = 0;
//suspectlvl: if it's above one, it's GG.

function changeDisplay(newDisplay){
     textDisplay.textContent = newDisplay;
}

changeDisplay("Welcome to Duolingo simulator! Survive for 15 days and you win! But there's a catch... NO STREAK SAVORS, and this is happening at the BUSIEST TIME in your life! But you wonder, 'Do I have enough time for this?' What do you think? Do you want to do Duolingo? (A: Do a lesson. B: Go hang out with friends. C: Assault Duo.)");
// optionClicked = true;

function adv(){
     if(optionClicked === true){
          if(level === 0){
               // changeDisplay("You've decided to start Duolingo. But you wonder, 'Do I have enough time for this?' What do you think? Do you want to do Duolingo? (A: Do a lesson. B: Go hang out with friends. C: Assault Duo.)");
               changeDisplay("More Duolingo? But you wonder, 'Do I have enough time for this?' What do you think? Do you want to do Duolingo? (A: Do a lesson. B: Go hang out with friends. C: Assault Duo.)");
          }
          if(level === 1){
               // changeDisplay("More Duolingo? But you wonder, 'Do I have enough time for this?' What do you think? Do you want to do Duolingo? (A: Do a lesson. B: Go hang out with friends. C: Assault Duo.)");
               changeDisplay("You wake, and get a phone call from your friend. He wants you to attend his birthday party. Do you want to do Duolingo today? (A: Do a lesson. B: Go hang out with friends. C: Sue Duo.)");
          }
          if(level === 2){
               // changeDisplay("You wake, and get a phone call from your friend. He wants you to attend his birthday party. Do you want to do Duolingo today? (A: Do a lesson. B: Go hang out with friends. C: Sue Duo.)");
               changeDisplay("Too much Duolingo, I think. You are now suffering from depression. Do you want to do Duolingo today? (A: Do a quick lesson. B: Go hang out with no one. C: Assault Duo.)");
          }
          if(level === 3){
               // changeDisplay("Too much Duolingo, I think. You are now suffering from depression. Do you want to do Duolingo today? (A: Do a quick lesson. B: Go hang out with no one. C: Sue Duo.)");
               changeDisplay("Weekends! Go shopping or more Duolingo? (A: Do a quick lesson. B: Go shopping. C: Confront Duo.)");
          }
          if(level === 4){
               // changeDisplay("Weekends! Go shopping or more Duolingo? (A: Do a quick lesson. B: Go shopping. C: Confront Duo.)");
               changeDisplay("You woke up kinda sick... (A: Do a quick lesson. B: Go hang out with no one. C: Sue Duo.)")
          }
          level++;
          daycount.textContent = level;
          optionClicked = false;
     }
     else{}
}

function option(optionNo){
     // if(level === 0){
          // level++;
          // changeDisplay("You've decided to start Duolingo. But you wonder, 'Do I have enough time for this?' What do you think? Do you want to do Duolingo? (A: Do a lesson. B: Go hang out with friends. C: Assault Duo.)");
     // }
     if(level === 0){
          // level = 2;
          // changeDisplay("You've decided to start Duolingo. But you wonder, 'Do I have enough time for this?' What do you think? Do you want to do Duolingo? (A: Do a lesson. B: Go hang out with friends. C: Assault Duo.)");
          if(level === 0 && optionNo === 1){
               changeDisplay("What does, 'Hablo español' mean? (A: I speak Spanish. B: Speak Spanish. C: Spanish sucks.)(But hey, guess what? Duo doesn't care if you get it right or not. He just cares if you did your lesson!) (Press next day to continue.)")
               // level++;
               //Does lesson
               console.log(level,optionNo)
          }
          if(level === 0 && optionNo === 2){
               changeDisplay("What a dissapointment, thought Duo. You suck. One more day and YOU ARE DEAD.")
               suspectlvl++
               // level++;
               //Skips lesson
               console.log(level,optionNo)
          }
          if(level === 0 && optionNo === 3){
               changeDisplay("You weren't able to find Duo.");
               suspectlvl++
               // level++;
               //Skips lesson
               console.log(level,optionNo)
          }
     }
     if(level === 1){
          // level = 2;
          // changeDisplay("You wake, and get a phone call from your friend. He wants you to attend his birthday party. Do you want to do Duolingo today? (A: Do a lesson. B: Go hang out with friends. C: Assault Duo.)");
          if(level === 1 && optionNo === 1){
               changeDisplay("What does, 'Ego sum puer.' mean? (A: I am a girl. B: I am a boy. C: Only nerds do Latin.)(But hey, guess what? Duo doesn't care if you get it right or not. He just cares if you did your lesson!) (Press next day to continue.)")
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
          if(level === 1  && optionNo === 3){
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
               changeDisplay("What does, '我是一个男孩' mean? (A: I am a girl. B: I am a boy. C: Only nerds do Chinese.)(But hey, guess what? Duo doesn't care if you get it right or not. He just cares if you did your lesson!) (Press next day to continue.)")
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
               changeDisplay("Duo paid $100 billion for lawyers. You lose.");
               suspectlvl++
               // level++;
               //Skips lesson
               console.log(level,optionNo)
          }
     }
     if(level === 3){
          // level = 2;
          // changeDisplay("You wake, and get a phone call from your friend. He wants you to attend his birthday party. Do you want to do Duolingo today? (A: Do a lesson. B: Go hang out with friends. C: Assault Duo.)");
          if(level === 3 && optionNo === 1){
               changeDisplay("What does, 'Я дівчина' mean? (A: I am a girl. B: I am a boy. C: Only nerds do Ukrainian.)(But hey, guess what? Duo doesn't care if you get it right or not. He just cares if you did your lesson!) (Press next day to continue.)")
               // level++;
               //Does lesson
               console.log(level,optionNo)
          }
          if(level === 3 && optionNo === 2){
               changeDisplay("Dancin' at the disco... OH NO YOUR STREAK?!?!?!?!")
               suspectlvl++
               // level++;
               //Skips lesson
               console.log(level,optionNo)
          }
          if(level === 3  && optionNo === 3){
               changeDisplay("Duo finds you. FIGHT!!!");
               level = 100;
               //enables battle mode
               // level++;
               //Skips lesson
               console.log(level,optionNo)
          }
     }
     if(level === 4){
          // level = 2;
          // changeDisplay("You wake, and get a phone call from your friend. He wants you to attend his birthday party. Do you want to do Duolingo today? (A: Do a lesson. B: Go hang out with friends. C: Assault Duo.)");
          if(level === 4 && optionNo === 1){
               changeDisplay("Free lesson! (Press next day to continue.)")
               // level++;
               //Does lesson
               console.log(level,optionNo)
          }
          if(level === 4 && optionNo === 2){
               changeDisplay("You had a nice day shopping, but your family is KIDNAPPED?!")
               suspectlvl++
               // level++;
               //Skips lesson
               console.log(level,optionNo)
          }
          if(level === 4  && optionNo === 3){
               changeDisplay("An explosion rocks the room. Duo uses lesson bomb! It works! You died!");
               //You died
               // level++;
               //Skips lesson
               console.log(level,optionNo)
          }
     }
     // setTimeout('option()', 1000)
     optionClicked = true;
}
