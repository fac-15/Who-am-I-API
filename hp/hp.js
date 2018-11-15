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
  const hpObjUrl = 'http://hp-api.herokuapp.com/api/characters';

  const hpNameCallback = (obj) => {
    document.getElementById('hp-user-handle').textContent = obj[0].name;
    document.getElementById('hp-character-species').textContent =
      obj[0].species;
    document.getElementById('hp-character-house').textContent = obj[0].house;
    document.getElementById('hp-character-history').textContent =
      obj[0].ancestry;
    document.getElementById('hp-character-wand').textContent = Object.values(
      obj[0].wand
    )
      .slice(0, 2)
      .join(' and ');
    document.getElementById(
      'hp-character-wand-length'
    ).textContent = Object.values(obj[0].wand).pop();
    document.getElementById('hp-character-patronus').textContent =
      obj[0].patronus;
  };

  makeRequest(hpObjUrl, hpNameCallback);
})();
