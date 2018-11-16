# [Who-am-I-API](https://fac-15.github.io/Who-am-I-API/)

## Lessons learnt

_Do not try to over complicate things!_ When trying to randomly assign a character to a username we were making things much harder than they needed to be, once we simplified and tried the simplest version of the algorithm it was suddenly working perfectly! 

_Do not test API's_

### Add event listener 

We tried and tried to get the event listeners to work on our submit button and it just wouldn't. 

Finally we realised that we shouldn't have put event listeners on the submit button because our button was in a form. The event listener needed to be put on the **form**. 

### Testing 

We're still not comfortable with tape, but we tried our best to write tests before the function. 

**Things we learnt:** don't try to test API functions. 

## Things that went well

**Planning!** We all took the time to discuss our idea and layout the architecture of the project before any code was written.

The css is responsive.

**Pairing!!**

How the character is assigned
----------------------------

  ASCII
  
s 115

u 117

s 115

a  97

n 110

X 120

115+117+115+97+110+120 mod 25
=24
______________________________

`[ ...
   {
    name: "Argus Filch",
    
    species: "human",
    
    gender: "male",
    
    house: "",
    
    dateOfBirth: "",
    
    yearOfBirth: "",
    
    ancestry: "squib",
    
    eyeColour: "",
    
    hairColour: "grey",
    
    wand: {
    
    wood: "",
    
    core: "",
    
    length: ""
    },
    patronus: "",
    
    hogwartsStudent: false,
    
    hogwartsStaff: true,
    
    actor: "David Bradley",
    
    alive: true,
    
    image: "http://hp-api.herokuapp.com/images/filch.jpg"
    
    }
    
]`

------------------------------------------------------------------
Function to asign a Harry Potter character to the Github user name
  
  `//takes an argument of userName
  const getCharacterIndex = (userName) => {
    
    //converts to lowercase
    const userNameLC = userName.toLowerCase();
     
    //for loop to convert the characters to charCode
    //add each letter to sum
    let sum = 0;
    for (let i = 0; i < userNameLC.length; i++) {
      const code = userNameLC.charCodeAt(i);
      sum += code;
    }
    //gets the modulus of sum
    //the result is the index of the array object - the number of the character.
    const index = sum % 25;
    return index;
  };`

## What we are proud of
### Testing in Tape

const converter = (name) => {
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    let code = name.charCodeAt(i);
    sum += code;
  }
  let index = sum % 25;
  return index;
};

const tolowercase = (name) => {
  return name.toLowerCase();
};


## Our conclusion


