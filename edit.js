function getJsonData () {
  return {
    "contacts": [
      {
        "id": "c5657",
        "name": "Michael",
        "email": "michael@mail.com",
        "address": "Michael street",
        "gender": "Male",
        "phone": {
          "mobile": "63790563",
          "home": "26713565",
          "office": "25783564"
        }
      },
      {
        "id": "c4635",
        "name": "Johnny",
        "email": "johnny@mail.com",
        "address": "Johnny street",
        "gender": "Male",
        "phone": {
          "mobile": "69743982",
          "home": "29874597",
          "office": "23298439"
        }
      },
      {
        "id": "6736",
        "name": "Leonardo",
        "email": "leonardo@mail.com",
        "address": "Leonardo street",
        "gender": "Male",
        "phone": {
          "mobile": "62843894",
          "home": "24299360",
          "office": "29853072"
        }
      },
      {
        "id": "c2043",
        "name": "Angelina",
        "email": "angelina@mail.com",
        "address": "Angelina street",
        "gender": "Female",
        "phone": {
          "mobile": "69883785",
          "home": "20978865",
          "office": "23940976"
        }
      },
      {
        "id": "c205",
        "name": "Dido",
        "email": "dido@mail.com",
        "address": "Dido street",
        "gender": "Female",
        "phone": {
          "mobile": "68745612",
          "home": "23246845",
          "office": "24685315"
        }
      },
      {
        "id": "c2807",
        "name": "Hugh",
        "email": "hugh@mail.com",
        "address": "Hugh street",
        "gender": "Male",
        "phone": {
          "mobile": "64653123",
          "home": "26746533",
          "office": "25646325"
        }
      },
      {
        "id": "c1808",
        "name": "Will",
        "email": "will@mail.com",
        "address": "Will street",
        "gender": "Male",
        "phone": {
          "mobile": "67896316",
          "home": "24325413",
          "office": "29876583"
        }
      },
      {
        "id": "c8741",
        "name": "Kate",
        "email": "kate@mail.com",
        "address": "Kate street",
        "gender": "Female",
        "phone": {
          "mobile": "63476865",
          "home": "20365453",
          "office": "26875148"
        }
      }
    ]
  }
}

function initialize() {
  var status = "* Offline *";
  if (navigator.onLine) {
    status = "* Online *";
    retrieveContacts();
  } else {
    const localStorage = window.localStorage;
    console.log("1223212132")
    console.log(localStorage)
    if (localStorage) {
      const contacts = localStorage.getItem("contacts");
      if (contacts) {
        displayContacts(JSON.parse(contacts));
      }
    }
  }

  document.getElementById("status").innerHTML = status;

  document.body.addEventListener(
    "online",
    function () {
      document.getElementById("status").innerHTML = "Online";
    },
    false
  );
  document.body.addEventListener(
    "offline",
    function () {
      document.getElementById("status").innerHTML = "Offline";
    },
    false
  );
}

function retrieveContacts() {
  const xhr = new XMLHttpRequest();
  const url = "contacts.json";

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {

      if(!xhr.respons) {
        console.log("respone is empty");
      }

      var contacts = (xhr.response)? JSON.parse(xhr.response).contacts : getJsonData().contacts;
      displayContacts(contacts);

      // Store contact data to localstorage
      const localStorage = window.localStorage;
      if (localStorage) {
        localStorage.setItem("contacts", JSON.stringify(contacts));
      }
    }
  };

  xhr.open("get", url);
  xhr.send();
}

let htmlStr = [];
function displayContacts(contacts) {
  contacts.forEach(addRow);
  tcontent.innerHTML = htmlStr.join(' ');
}

function addRow(contact) {
  var tcontent = document.getElementById("tcontent");
  htmlStr.push(`<tr><td>${contact.id}</td><td>${contact.address}</td><td>${contact.phone.mobile}</td></tr>`);
  
  // var row = tcontent.insertRow();

  // var nameCell = row.insertCell();
  // nameCell.setAttribute('data-label', "Name");
  // nameCell.innerHTML = contact.name;

  // var addressCell = row.insertCell();
  // addressCell.setAttribute('data-label', "Address");
  // addressCell.innerHTML = contact.address;

  // var mobileCell = row.insertCell();
  // mobileCell.setAttribute('data-label', "Mobile");
  // mobileCell.innerHTML = contact.phone.mobile;
}