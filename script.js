let names = [
    "19TE402",
    "15TE789",
    "19TE787",
    "15TE787",
    "18TE544",
    "21TE458",
    "20TE450",
    "20TE000"
    ];
      
    count = names.length;
    
    function start(){
      selected = names[Math.random() * count | 0].toUpperCase();
      covered = selected.replace(/[^\s]/g, '_');
      document.body.innerHTML = covered;
      timer = setInterval(decode, 50);
    }
    
    function decode(){
      newtext = covered.split('').map(changeLetter()).join('');
      document.body.innerHTML = newtext;
      if(selected == covered){
        clearTimeout(timer);
        winnerRevealed();
        return false;
      }
      covered = newtext;
    }
    
    function changeLetter(){
      replacements = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz%!@&*#_ ';
      replacementsLen = replacements.length;
      return function(letter, index, err){
        return selected[index] == letter 
           ? letter 
           : replacements[Math.random() * replacementsLen | 0];
      }
    }
    
    function winnerRevealed(){
      alert('winner found');
    }