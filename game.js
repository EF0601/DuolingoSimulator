let textDisplay = document.querySelector('.textdisplay');
let daycount = document.querySelector('.dayCount');

let level = 0;
//aka day
let suspectlvl = 0;
//suspectlvl: if it's above one, it's GG.

function changeDisplay(newDisplay){
     textDisplay.textContent = newDisplay;
}

function decSus(){
     if(suspectlvl > 0){
          suspectlvl = suspectlvl - 1;
     }
     else{}
}

changeDisplay("Welcome to Duolingo simulator! Survive for 15 days and you win! But there's a catch... NO STREAK SAVORS, and this is happening at the BUSIEST TIME in your life! But you wonder, 'Do I have enough time for this?' What do you think? Do you want to do Duolingo? (A: Do a lesson. B: Go hang out with friends. C: Assault Duo.)");

function adv(){
     if(optionClicked === true){
          if(level === 0){
               changeDisplay("More Duolingo? But you wonder, 'Do I have enough time for this?' What do you think? Do you want to do Duolingo? (A: Do a lesson. B: Go hang out with friends. C: Assault Duo.)");
          }
          if(level === 1){
               changeDisplay("You wake, and get a phone call from your friend. He wants you to attend his birthday party. Do you want to do Duolingo today? (A: Do a lesson. B: Go hang out with friends. C: Sue Duo.)");
          }
          if(level === 2){
               changeDisplay("Too much Duolingo, I think. You are now suffering from depression. Do you want to do Duolingo today? (A: Do a quick lesson. B: Go hang out with no one. C: Assault Duo.)");
          }
          if(level === 3){
               changeDisplay("Weekends! Go shopping or more Duolingo? (A: Do a quick lesson. B: Go shopping. C: Confront Duo.)");
          }
          if(level === 4){
               changeDisplay("You woke up kinda sick... (A: Do a quick lesson. B: Go hang out with no one. C: Assault Duo.)")
          }
          if(level === 5){
               changeDisplay("Uhph... Almost a week? Break? (A: Do a lesson. B: Go hang out with friends. C: Sue Duo.)")
          }
          if(level === 6){
               changeDisplay("Zzzz... hmm? What?! (A: Do a quick lesson. B: Go play games. C: Assault Duo.)")
          }
          if(level === 7){
               changeDisplay("... (A: Do a quick lesson. B: Go play games. C: Assault Duo.)")
          }
          level++;
          daycount.textContent = level;
          optionClicked = false;
          if(suspectlvl >= 3){
               changeDisplay("UH OH. DUO IS ON YOU!!! FIGHT!!!")
          }
          else{}
          document.querySelector('.btn1').style.display = "inline";
          document.querySelector('.btn2').style.display = "inline";
          document.querySelector('.btn3').style.display = "inline";
     }
     else{}
}

function option(optionNo){
     if(level === 0){
          if(level === 0 && optionNo === 1){
               changeDisplay("What does, 'Hablo español' mean? (A: I speak Spanish. B: Speak Spanish. C: Spanish sucks.)(But hey, guess what? Duo doesn't care if you get it right or not. He just cares if you did your lesson!) (Press next day to continue.)")
               //Does lesson
               console.log(level,optionNo)
               decSus();
          }
          if(level === 0 && optionNo === 2){
               changeDisplay("What a dissapointment, thought Duo. You suck. One more day and YOU ARE DEAD.")
               suspectlvl++
               console.log(level,optionNo)
          }
          if(level === 0 && optionNo === 3){
               changeDisplay("You weren't able to find Duo.");
               suspectlvl++
               console.log(level,optionNo)
          }
     }
     if(level === 1){
          if(level === 1 && optionNo === 1){
               changeDisplay("What does, 'Ego sum puer.' mean? (A: I am a girl. B: I am a boy. C: Only nerds do Latin.)(But hey, guess what? Duo doesn't care if you get it right or not. He just cares if you did your lesson!) (Press next day to continue.)")
               console.log(level,optionNo)
               decSus();
          }
          if(level === 1 && optionNo === 2){
               changeDisplay("What a dissapointment, thought Duo. You suck. One more day and YOU ARE DEAD.")
               suspectlvl++
               console.log(level,optionNo)
          }
          if(level === 1  && optionNo === 3){
               changeDisplay("You weren't able to find Duo.");
               suspectlvl++
               console.log(level,optionNo)
          }
          
     }
     if(level === 2){
          if(level === 2 && optionNo === 1){
               changeDisplay("What does, '我是一个男孩' mean? (A: I am a girl. B: I am a boy. C: Only nerds do Chinese.)(But hey, guess what? Duo doesn't care if you get it right or not. He just cares if you did your lesson!) (Press next day to continue.)")
               console.log(level,optionNo)
               decSus();
          }
          if(level === 2 && optionNo === 2){
               changeDisplay("What a dissapointment, thought Duo. You suck. One more day and YOU ARE DEAD.")
               suspectlvl++
               console.log(level,optionNo)
          }
          if(level === 2  && optionNo === 3){
               changeDisplay("Duo paid $100 billion for lawyers. You lose.");
               suspectlvl++
               console.log(level,optionNo)
          }
     }
     if(level === 3){
          if(level === 3 && optionNo === 1){
               changeDisplay("What does, 'Я дівчина' mean? (A: I am a girl. B: I am a boy. C: Only nerds do Ukrainian.)(But hey, guess what? Duo doesn't care if you get it right or not. He just cares if you did your lesson!) (Press next day to continue.)")
               console.log(level,optionNo)
               decSus();
          }
          if(level === 3 && optionNo === 2){
               changeDisplay("Dancin' at the disco... OH NO YOUR STREAK?!?!?!?!")
               suspectlvl++
               console.log(level,optionNo)
          }
          if(level === 3  && optionNo === 3){
               changeDisplay("Duo finds you. FIGHT!!!");
               level = 100;
               //enables battle mode
               console.log(level,optionNo)
          }
     }
     if(level === 4){
          if(level === 4 && optionNo === 1){
               changeDisplay("Free lesson! (Press next day to continue.)")
               console.log(level,optionNo)
               decSus();
          }
          if(level === 4 && optionNo === 2){
               changeDisplay("You had a nice day shopping, but your family is KIDNAPPED?!")
               suspectlvl++
               console.log(level,optionNo)
          }
          if(level === 4  && optionNo === 3){
               changeDisplay("An explosion rocks the room. Duo uses lesson bomb! It works! You died!");
               console.log(level,optionNo)
          }
     }
     if(level === 5){
          if(level === 5 && optionNo === 1){
               changeDisplay("ERROR: NOTHING (Press next day to continue)")
               console.log(level,optionNo)
               decSus();
          }
          if(level === 5 && optionNo === 2){
               changeDisplay("Things are going on. Your friends have dissappeared!")
               suspectlvl++
               console.log(level,optionNo)
          }
          if(level === 5  && optionNo === 3){
               changeDisplay("/kill Duo IT WORKED! Duo's hurt! He forgot to keep count of your streak today!");
               console.log(level,optionNo)
          }
     }
     if(level === 6){
          if(level === 6 && optionNo === 1){
               changeDisplay("What does 'What does' mean in English? (A: What does B: What Does C: huh?)(But guess what? Duo doesn't care if you got it wrong or not! He just cares that you did it!) (Press next day to continue)")
               console.log(level,optionNo)
               decSus();
          }
          if(level === 6 && optionNo === 2){
               changeDisplay("Your friends are there, but they're addicted to Duolingo.")
               suspectlvl++
               console.log(level,optionNo)
          }
          if(level === 6  && optionNo === 3){
               changeDisplay("Duolingo paid [infinity symbol] dollars to bribe the judge! The lawsuit failed!");
               suspectlvl++
               console.log(level,optionNo)
          }
     }
     if(level === 7){
          if(level === 7 && optionNo === 1){
               changeDisplay("What does 3.141592 mean in math? (A: Decimal B: PI C: I failed math.)(But guess what? Duo doesn't care if you got it wrong or not! He just cares that you did it!) (Press next day to continue)")
               console.log(level,optionNo)
               decSus();
          }
          if(level === 7 && optionNo === 2){
               changeDisplay("Logging on to games... please wait. ERROR: CONNECTION BLOCKED")
               suspectlvl++
               console.log(level,optionNo)
          }
          if(level === 7  && optionNo === 3){
               changeDisplay("Duo finds you! FIGHT!");
               console.log(level,optionNo)
          }
     }
     optionClicked = true;
     document.querySelector('.btn1').style.display = "none";
     document.querySelector('.btn2').style.display = "none";
     document.querySelector('.btn3').style.display = "none";
}
