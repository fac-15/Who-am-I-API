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

  //callback
  const hpNameCallback = (obj, index) => {
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
      document.getElementById('student').style.display = 'none';
    }

    if (!obj[index].hogwartsStaff) {
      document.getElementById('staff').style.display = 'none';
    }
  };

  const getCharacterIndex = (userName) => {
    const userNameLC = userName.toLowerCase();

    let sum = 0;
    for (let i = 0; i < userNameLC.length; i++) {
      const code = userNameLC.charCodeAt(i);
      sum += code;
    }
    const index = sum % 25;
    return index;
  };

  const init = () => {
    const form = document.getElementById('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = e.target[0].value;

      const hpObjUrl = 'http://hp-api.herokuapp.com/api/characters';
      const index = getCharacterIndex(name);

      makeRequest(hpObjUrl, (obj) => {
        hpNameCallback(obj, index);
      });
    });
  };

  init();
})();
