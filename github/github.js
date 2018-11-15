





function getUserName(name){

    
  let errorMess = 'Please enter name';
  var endsWith = name.length == 0 ? true : name ;

  return endsWith== true ? errorMess : 'https://api.github.com/users/'+ name ;



}

const gitHubAvatar = { 

theRequest: function(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let obj = JSON.parse(xhr.responseText);
        callback(obj);
      }
    };
    xhr.open('GET', url, true);
    xhr.send();
  },

userNameCallback: function(obj) {
    document.getElementById("github-user-avatar").src = obj[0].avatar_url;
},

makeRequest: ((url, userNameCallback)=> {})()

};

// let fetchingFunction = (function() {

//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             let gitHubphoto = JSON.parse(xhr.responseText);
//             let photo = document.getElementById("#");
//             let link = githubPhoto.avatar_url;
//             photo.src = link;
//         }
//     };
//     xhr.open("GET", url, true);
//     xhr.send();
//     })();


if (typeof module !== "undefined") {
module.exports = gitHubAvatar;
}









//var url = "https://api.github.com/users/";// + imput value when user submits


// (function(){

//     var xhr = XMLHttpRequest();
    
// xhr.onreadystate = function(){
//     if(xhr.readyState == 4 && xhr.status == 200){

//         var gitResponse = xhr.responseText;
//         var gitObject = JSON.parse(gitResponse);
//     }
// };

// xhr.open("GET", url, true);
// xhr.send();

// })();

