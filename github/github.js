



document.getElementById("form").addEventListener("submit", 
  
 function theRequest(event) {
   event.preventDefault();
  let name = document.getElementById("github-user-name").value;


  let xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let obj = JSON.parse(xhr.responseText);
        document.getElementById("github-user-avatar").src = obj.avatar_url;
      }
    };
    xhr.open('GET', 'https://api.github.com/users/' + name, true);
    xhr.send();
  });






// if (typeof module !== "undefined") {
//   module.exports = "./github/github.js";
//   }
  
