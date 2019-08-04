
window.onload = function (){

  var forms = document.querySelectorAll('.form');

  textarea = document.getElementsByTagName('textarea')[0];   
  
  console.dir(forms);

  setInterval(function(){

    for (var i = 0, str = ''; i < forms.length; i++) {
      str += forms[i].value
    }

    textarea.value = str;
    
  }, 1000);}
