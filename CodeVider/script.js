//filtrimi i kartave sipas kategorive
const butoni = document.querySelectorAll(".button");
const cards = document.querySelectorAll(".card");

for (i = 0; i < butoni.length; i++) {
  butoni[i].addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    cards.forEach((cards) => {
      if (filter === "tegjitha") {
        cards.style.display = "block";
      } else {
        if (cards.classList.contains(filter)) {
          cards.style.display = "block";
        } else {
          cards.style.display = "none";
        }
      }
    });
  });
}
//shfaqja e kartes qe permban emrin e kafshes se kerkuar ne searchbar

const searchInput = document.getElementById("search-input");
const card = document.querySelectorAll(".cards");

function search() {
  const searchText = searchInput.value.trim();
  if (searchText) {
    cards.forEach((card) => {
      const cardData = card.dataset.cardId;
      const cardName = card.querySelector("h2").textContent;
      if (cardName.toLowerCase().includes(searchText.toLowerCase())) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  } else {
    cards.forEach((card) => {
      card.style.display = "block";
    });
  }
}

searchInput.addEventListener("input", search);



//ndryshimi i titullit tek sektori i heroit
function ndryshotitullin() {
  document.getElementById("titulli-i-ri").innerHTML = "We love animals!";
}

//klikimi i kartave

function handleCardClick() {
  const cardId = this.getAttribute("data-card-id");
  const popupContent = document.getElementById("popup-content");

  //  Te dhenat e pop up
  switch (cardId) {
    case "golden retriever":
      popupContent.innerHTML = `
        <h2>More information about Golden Retreiver</h2>
        <p>"id":1,"name":"Golden Retriever","breed_group":"Sporting","size":"Large","lifespan":"10-12 years","origin":"Scotland","temperament":"Intelligent, Friendly, Devoted","colors":["Golden","Cream"],"description":
        "The Golden Retriever is a friendly and intelligent breed known for its gentle nature and love for people. They are great family pets and excel in various roles, including as guide dogs, therapy dogs, and search and rescue dogs</p>
      `;
      break;
    case "labrador":
      popupContent.innerHTML = `
        <h2>More information about Labrador</h2>
        <p>"id":2,"name":"Labrador Retriever","breed_group":"Sporting","size":"Large","lifespan":"10-14 years","origin":"Canada","temperament":"Outgoing, Even-tempered, Gentle","colors":["Yellow","Black","Chocolate"],"description":
        "The Labrador Retriever is one of the most popular dog breeds in the world. They are known for their friendly and outgoing nature, as well as their intelligence and trainability. Labs make excellent family pets and are often used as service dogs and therapy dogs."</p>
      `;
      break;
    case "german shepherd":
      popupContent.innerHTML = `
        <h2>More information about German Shepherd</h2>
        <p>"id":3,"name":"German Shepherd","breed_group":"Herding","size":"Large","lifespan":"9-13 years","origin":"Germany","temperament":"Loyal, Confident, Courageous","colors":["Black","Tan","Sable"],"description":"The German Shepherd is a versatile and intelligent breed, often used in police and military roles for their outstanding abilities in tracking, obedience, and protection. 
        They are loyal and protective of their families and are also popular as working dogs and loyal companions."</p>
      `;
      break;

    case "persian":
      popupContent.innerHTML = `
        <h2>More information about Persian cats</h2>
        <p>id":1,"name":"Persian","origin":"Iran","temperament":"Sweet, Gentle, Quiet","colors":["White","Black","Blue","Cream"],"description":"The Persian cat is a long-haired breed known for its luxurious coat and sweet personality.
         They are calm and affectionate cats that enjoy a relaxed indoor lifestyle."</p>
      `;
      break;
    case "siamese":
      popupContent.innerHTML = `
        <h2>More information about Siamese cats</h2>
        <p>id":2,"name":"Siamese","origin":"Thailand","temperament":"Social, Vocal, Intelligent","colors":["Seal Point","Blue Point","Chocolate Point","Lilac Point"],"description":"The Siamese cat is a vocal and affectionate breed known for its striking blue almond-shaped eyes.
        They are highly social and enjoy interactive play with their human companions."</p>
      `;
      break;
    case "marinecoon":
      popupContent.innerHTML = `
        <h2>More information about Marine Coon cats</h2>
        <p>id":3,"name":"Maine Coon","origin":"United States","temperament":"Friendly, Playful, Gentle","colors":["Brown Tabby","Black","Red","Silver Tabby"],"description":"The Maine Coon is a large and friendly breed known for its tufted ears and bushy tail.
         They are affectionate and sociable cats that get along well with children and other pets.</p>
      `;
      break;

    case "bald eagle":
      popupContent.innerHTML = `
        <h2>More information about Bald Eagle birds</h2>
        <p>"id":1,"name":"Bald Eagle","species":"Haliaeetus leucocephalus","family":"Accipitridae","habitat":"Forests, Coasts, and Lakes","place_of_found":"North America","diet":"Carnivore","description":"The bald eagle is a powerful bird of prey known for its white head and tail feathers.","wingspan_cm":200,"weight_kg""</p>
      `;
      break;
    case "peacock":
      popupContent.innerHTML = `
        <h2>More information about Peacock birds</h2>
        <p>"id":2,"name":"Peacock","species":"Pavo cristatus","family":"Phasianidae","habitat":
        "Forests and Grasslands","place_of_found":"India","diet":"Omnivore","description":"The peacock is a large and colorful bird known for its extravagant tail feathers.","wingspan_cm":160,"weight_kg":4.5</p>
      `;
      break;
    case "hornbill":
      popupContent.innerHTML = `
        <h2>More information about Hornbill birds</h2>
        <p>"id":3,"name":"Hornbill","species":"Bucerotidae","family":"Bucerotidae","habitat":
        "Forests and Woodlands","place_of_found":"Africa, Asia","diet":"Omnivore","description":"Hornbills are medium-sized birds known for their large, curved bills.","wingspan_cm":100,"weight_kg":2.7,</p>
      `;
      break;

    default:
      // Mesazhi nese karta nuk gjetur
      popupContent.innerHTML = `
        <h2>Karte e panjohur</h2>
        <p>Kjo karte nuk ekziston sipas pershkrimeve te dhena.</p></p>
      `;
  }

  document.querySelectorAll(".card").forEach(function (card) {
    card.addEventListener("click", function () {
      // Shfaqja e mesazhit pop up
      document.querySelector(".popup-message").style.display = "block";
    });
  });

  // Permbajtja e pop up
  document.getElementById("popup-container").style.display = "block";
}

// Thirrja e funksionit kur klikohet karta
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", handleCardClick);
});

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", handleCardClick);
});
//validimi apo kushtezimi i fushave kontaktuese
const emriInput = document.getElementById("emriInput");
const emailInput = document.getElementById("emailInput");
const pershkrimiInput = document.getElementById("pershkrimiInput");
const sendButton = document.getElementById("send-button");
function dergo() {
  if (
    emriInput.value === "" ||
    emailInput.value === "" ||
    pershkrimiInput.value === ""
  ) {
    window.alert("Ju lutem mbushni fushat me te dhenat perkatese");
  } else {
    sendButton.value = "Duke u procesuar...";
  }
}
sendButton.addEventListener("click", dergo);
