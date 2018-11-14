() => {
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

  const hpNameUrl = 'hp-api.herokuapp.com/api/characters';

  const hpNameCallback = obj => {
    document.getElementById('hp-user-handle').textContent = obj[0].name;
  };

  makeRequest(hpNameUrl, hpNameCallback);
};
