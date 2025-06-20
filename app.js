const frases= [
   "Believe in God, the Lord Jesus Christ, and yourself.",
   "Nothing is impossible, because you have faith you can do it.",
   "If you set a goal, no matter who is against you, you can achieve it.",
   "If you have set this goal and no one believes in you, not even your family, remember, God and the Lord Jesus Christ believe in you.",
   "Remember, you can do anything, the day will come and you will be proud of yourself, just don't forget to study hard.",
   "I was alone when I created this app. My family doesn't even know what I do, but God and the Lord Jesus Christ are with me. I created it, I created it silently, and now you are reading these lines. I am happy that you are reading what I have written. I am happy and I will be even happier if you accept my words.",
   "Remember, if you haven't learned anything new for your future today, then you are 10 steps behind the path to your wonderful future.",
];


function showQuote() {
  const index = Math.floor(Math.random() * frases.length);
  document.getElementById("quote").innerText = frases[index];
}
