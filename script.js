function shake(){

    var ball= document.getElementById("ball")
    var messageText = document.getElementById("message")
 
    //remove previous message if it exists
    if(messageText != null){
     messageText.parentNode.removeChild(messageText);
    }
    
    //Make the ball shake by adding the css class
    ball.classList.add("shake");
 
    //Remove the shake class after it stops shaking
    setTimeout(function(){ ball.classList.remove("shake"); }, 1500);
    
    //call the fortune function to get your fortune only after 2sec
    setTimeout(function(){ getFortune(); }, 1500);
 }
 
 
 //generate the fortune for the ball
 function getFortune(){
     //array of fortunes
     var fortunes = ['Yeah, sure', 'I guess so', 'Heard!', 'Yes.', 'I cannot tell', '100%', 'Yes, chef!', 'You are cooked', 'You are cooking', 'Hmm... I dunno', 'Lunch break (Come back later)', 'Toilet break (Come back later)', 'No spoilers!', 'Man... Who knows?', 'Sorry? I cant hear you', 'Nah', 'No, chef.', 'Honestly? No.', 'About 50/50', 'I frankly doubt it']
 
     //get a random fortune message message
     var fortune = fortunes[Math.floor(Math.random()*fortunes.length)];
 
     //display the fortune on the page
     var parent = document.getElementById("fortune");
     var newMessage = document.createElement("div");
     newMessage.setAttribute('id', "message");
     newMessage.innerHTML = "\""+fortune+"\"";
     parent.appendChild(newMessage);
 }