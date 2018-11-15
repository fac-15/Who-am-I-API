function getUserName(name){

    
        let errorMess = 'Please enter name';
        var endsWith = name.length == 0 ? true : name ;

        return endsWith== true ? errorMess : 'https://api.github.com/users/'+ name ;

    
    
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


module.exports = getUserName;