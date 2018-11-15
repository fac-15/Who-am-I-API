

const gitHubAvatar = (() => { 

const theRequest = (url, callback) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let obj = JSON.parse(xhr.responseText);
        callback(obj);
      }
    };
    xhr.open('GET', url, true);
    xhr.send();
  };

const githubURL = "https://api.github.com/users/";

function userNameCallback = (obj) => {
if (str.length === 0) {

 return true;
 } else {
     return str; 
 }
};

makeRequest(githubURL), userNameCallback);

})();

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

module.exports = gitHubAvatar;