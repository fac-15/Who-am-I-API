(() => {
  document.getElementById('hp-avatar').style.visibility = 'hidden';
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
    // character name
    document.getElementById('hp-user-handle').textContent = obj[index].name;

    // species
    document.getElementById('hp-character-species').textContent =
      obj[index].species;

    // hogwarts house
    if (obj[index].house.length > 0) {
      document.getElementById('house').style.display = 'initial';
      document.getElementById('hp-character-house').textContent =
        obj[index].house;
    } else {
      document.getElementById('house').style.display = 'none';
    }

    // bloodline
    if (obj[index].ancestry.length > 0) {
      document.getElementById('history').style.display = 'initial';
      document.getElementById('hp-character-history').textContent =
        obj[index].ancestry;
    } else {
      document.getElementById('history').style.display = 'none';
    }

    // wand details
    if (obj[index].wand.wood.length > 0) {
      document.getElementById('wand-length').style.display = 'initial';
      document.getElementById('hp-character-wand').textContent = Object.values(
        obj[index].wand
      )
        .slice(0, 2)
        .join(' and ');
      document.getElementById(
        'hp-character-wand-length'
      ).textContent = Object.values(obj[index].wand).pop();
    } else {
      document.getElementById('wand-length').style.display = 'none';
      document.getElementById('hp-character-wand').textContent = 'Unknown';
    }

    // patronus
    if (obj[index].patronus.length > 0) {
      document.getElementById('patronus').style.display = 'initial';
      document.getElementById('hp-character-patronus').textContent =
        obj[index].patronus;
    } else {
      document.getElementById('patronus').style.display = 'none';
    }

    // image
    document.getElementById('hp-avatar').style.visibility = 'visible';
    document.getElementById('hp-avatar').src = obj[index].image;

    // student?
    if (obj[index].hogwartsStudent === false) {
      document.getElementById('student').style.display = 'none';
    } else {
      document.getElementById('student').style.display = 'initial';
    }

    // teacher?
    if (obj[index].hogwartsStaff === false) {
      document.getElementById('staff').style.display = 'none';
    } else {
      document.getElementById('staff').style.display = 'initial';
    }
  };

  // how to choose a character
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

      const hpObjUrl = 'https://cors-anywhere.herokuapp.com/http://hp-api.herokuapp.com/api/characters';
      const index = getCharacterIndex(name);

      makeRequest(hpObjUrl, (obj) => {
        hpNameCallback(obj, index);
      });
    });
  };

  init();
})();
