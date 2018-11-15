(() => {
  const makeRequest = (url, callback) => {
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

  // url
  const hpObjUrl = 'http://hp-api.herokuapp.com/api/characters';

  //callback
  const hpNameCallback = (obj) => {
    document.getElementById('hp-user-handle').textContent = obj[index].name;
    document.getElementById('hp-character-species').textContent =
      obj[index].species;
    document.getElementById('hp-character-house').textContent =
      obj[index].house;
    document.getElementById('hp-character-history').textContent =
      obj[index].ancestry;
    document.getElementById('hp-character-wand').textContent = Object.values(
      obj[index].wand
    )
      .slice(0, 2)
      .join(' and ');
    document.getElementById(
      'hp-character-wand-length'
    ).textContent = Object.values(obj[index].wand).pop();
    document.getElementById('hp-character-patronus').textContent =
      obj[index].patronus;

    document.getElementById('hp-avatar').src = obj[index].image;

    if (!obj[index].hogwartsStudent) {
      document.getElementById('student').style.visibility = 'hidden';
    }

    if (!obj[index].hogwartsStaff) {
      document.getElementById('staff').style.visibility = 'hidden';
    }
  };

  makeRequest(hpObjUrl, hpNameCallback);

  let userName = document.getElementById('github-user-name').value;
  let userNameLC = userName.toLowerCase();

  var sum = 0;
  for (var i = 0; i < userNameLC.length; i++) {
    var code = userNameLC.charCodeAt(i);
    sum += code;
  }
  var index = sum % 25;
})();

// if (typeof module !== 'undefined') {
//   module.exports = hpfunctions;
// }
// module.exports = all;
