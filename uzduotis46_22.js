//Duomenis pasiimsime iš: https://magnetic-melon-yam.glitch.me

//1. Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color).
//2. Naudojant JS metodus, padalinkite vardą į dvi dalis: vardą ir pavardę (lentelėje).
//3. Pridėkite prie lentelės (tarp id ir name) nuotrauką.
//4. Sukurkite checkbox virš lentelės su JS.
//5. Jį paspaudus, rodys tik tuos žmones, kurie yra VIP.
//Sukurkite virš lentelės ir search laukelį (forma su input type search ir mygtukas).
//Suvedus duomenis, lentelėje turi prasifiltruoti pagal vardą
//arba pavardę (fullname contains search string). Capitalizacija turėtų būti nesvarbi.
///////
const label = document.createElement("label");
label.for = "vip";
label.textContent = "VIP";
const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.id = "vip";
document.body.append(checkbox, label);

////komentaras
////komentaras2
////komenr
const form = document.createElement("form");
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Name or Surname");
const button = document.createElement("button");
button.setAttribute("type", "submit");
button.textContent = "Search";
form.append(input, button);
document.body.append(form);

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

const tr = document.createElement("tr");

const th1 = document.createElement("th");
th1.textContent = "ID";
const th2 = document.createElement("th");
th2.textContent = "Image";
const th3 = document.createElement("th");
th3.textContent = "First name";
const th4 = document.createElement("th");
th4.textContent = "Last name";
const th5 = document.createElement("th");
th5.textContent = "City";
const th6 = document.createElement("th");
th6.textContent = "Fav color";

function toTable(array) {
  tbody.innerHTML = "";

  array.forEach((elem) => {
    const elem_id = elem.id;
    const elem_fullname = elem.name;
    const index_whitesp = elem_fullname.indexOf(" ");
    const fname = elem_fullname.slice(0, index_whitesp);
    const lname = elem_fullname.slice(index_whitesp + 1);
    const elem_city = elem.city;
    const elem_fav_color = elem.fav_color;
    //const elem_vip = elem.vip;
    const elem_image = elem.image;

    const elem_tr = document.createElement("tr");

    const id_td = document.createElement("td");
    id_td.textContent = elem_id;
    const image_td = document.createElement("td");
    const image = document.createElement("img");
    image.setAttribute("src", elem_image);
    image_td.append(image);
    const fname_td = document.createElement("td");
    fname_td.textContent = fname;
    const lname_td = document.createElement("td");
    lname_td.textContent = lname;
    const city_td = document.createElement("td");
    city_td.textContent = elem_city;
    const fav_color_td = document.createElement("td");
    fav_color_td.textContent = elem_fav_color;

    elem_tr.append(id_td, image_td, fname_td, lname_td, city_td, fav_color_td);
    tbody.append(elem_tr);
  });

  tr.append(th1, th2, th3, th4, th5, th6);
  thead.append(tr);
  table.append(thead, tbody);
  document.body.append(table);
}

async function doRequest() {
  // try catch bloke mes nurodom tapaty kas butu su then, catch
  try {
    const data = await fetch("https://magnetic-melon-yam.glitch.me");

    console.log("got data", data);
    const myJson = await data.json();
    console.log("myJson", myJson);

    toTable(myJson);
    const vip_true = myJson.filter((elem) => elem.vip == true);

    checkbox.addEventListener("change", (event) => {
      if (checkbox.checked == true) {
        toTable(vip_true);
      } else {
        toTable(myJson);
      }
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const searchValue = input.value.toLowerCase().trim();

      const searchArray = myJson.filter((elem) =>
        elem.name.toLowerCase().includes(searchValue)
      );
      toTable(searchArray);
    });
  } catch (errro) {
    //console.log(errro)
    alert("Klaida");
    return;
  }
}

doRequest();
