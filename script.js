/* ==========================================
   VELOCITY BIKE SHOWROOM
   PREMIUM JAVASCRIPT
========================================== */

const bikes = [
{
    name:"Yamaha R1",
    category:"sport",
    engine:"998 CC",
    power:"200 HP",
    speed:"299 KM/H",
    price:"₹19.20 L",
    image:"images/r1.jpg",
    desc:"Flagship supersport built for track performance."
},
{
    name:"BMW S1000RR",
    category:"sport",
    engine:"999 CC",
    power:"210 HP",
    speed:"299 KM/H",
    price:"₹21.50 L",
    image:"images/s1000rr.jpg",
    desc:"German superbike with incredible electronics."
},
{
    name:"Yamaha MT-15",
    category:"street",
    engine:"155 CC",
    power:"18 HP",
    speed:"130 KM/H",
    price:"₹1.72 L",
    image:"images/mt15.jpg",
    desc:"Best lightweight street motorcycle."
},
{
    name:"KTM Duke 390",
    category:"street",
    engine:"399 CC",
    power:"46 HP",
    speed:"167 KM/H",
    price:"₹2.95 L",
    image:"images/duke390.jpg",
    desc:"Aggressive naked street machine."
},
{
    name:"Ducati Panigale V4",
    category:"sport",
    engine:"1103 CC",
    power:"214 HP",
    speed:"300 KM/H",
    price:"₹29.00 L",
    image:"images/panigale.jpg",
    desc:"Premium Italian superbike."
},
{
    name:"Royal Enfield GT650",
    category:"cruiser",
    engine:"648 CC",
    power:"47 HP",
    speed:"170 KM/H",
    price:"₹3.39 L",
    image:"images/gt650.jpg",
    desc:"Classic café racer with twin-cylinder engine."
},
{
    name:"BMW G310GS",
    category:"adventure",
    engine:"313 CC",
    power:"34 HP",
    speed:"143 KM/H",
    price:"₹3.30 L",
    image:"images/g310gs.jpg",
    desc:"Adventure motorcycle for touring lovers."
}
];

/* ================= ELEMENTS ================= */

const container = document.getElementById("bikeContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

const compareHead = document.getElementById("compareHead");
const compareBody = document.getElementById("compareBody");

const modal = document.getElementById("bikeModal");
const modalImg = document.getElementById("modalImg");
const modalName = document.getElementById("modalName");
const modalEngine = document.getElementById("modalEngine");
const modalPower = document.getElementById("modalPower");
const modalSpeed = document.getElementById("modalSpeed");
const modalPrice = document.getElementById("modalPrice");
const closeBtn = document.querySelector(".close");

let compareList = [];

/* ================= RENDER BIKES ================= */

function renderBikes(data){

container.innerHTML = "";

data.forEach((bike,index)=>{

const card = document.createElement("div");

card.className = "bike-card";

card.innerHTML = `
<div class="bike-image">

<img src="${bike.image}" alt="${bike.name}">

<div class="badge">NEW</div>

<div class="like">
<i class="fa-solid fa-heart"></i>
</div>

</div>

<div class="bike-content">

<p class="bike-category">${bike.category.toUpperCase()}</p>

<h3>${bike.name}</h3>

<p class="desc">${bike.desc}</p>

<div class="specs">

<div class="spec">
<span>ENGINE</span>
<h4>${bike.engine}</h4>
</div>

<div class="spec">
<span>POWER</span>
<h4>${bike.power}</h4>
</div>

<div class="spec">
<span>TOP SPEED</span>
<h4>${bike.speed}</h4>
</div>

<div class="spec">
<span>PRICE</span>
<h4>${bike.price}</h4>
</div>

</div>

<div class="price-row">

<div class="price">
<small>Starting</small>
<h2>${bike.price}</h2>
</div>

<button class="compare-btn">
Compare
</button>

</div>

</div>
`;

card.querySelector("img").onclick = ()=>{
openModal(bike);
};

card.querySelector(".compare-btn").onclick = ()=>{
addCompare(bike);
};

container.appendChild(card);

});

}

renderBikes(bikes);

/* ================= SEARCH ================= */

function filterBikes(){

const search = searchInput.value.toLowerCase();

const category = categoryFilter.value;

const filtered = bikes.filter(bike=>{

const matchName = bike.name.toLowerCase().includes(search);

const matchCat = category==="all" || bike.category===category;

return matchName && matchCat;

});

renderBikes(filtered);

}

searchInput.addEventListener("input",filterBikes);

categoryFilter.addEventListener("change",filterBikes);

/* ================= MODAL ================= */

function openModal(bike){

modal.classList.add("active");

modalImg.src = bike.image;
modalName.innerText = bike.name;
modalEngine.innerText = bike.engine;
modalPower.innerText = bike.power;
modalSpeed.innerText = bike.speed;
modalPrice.innerText = bike.price;

}

closeBtn.onclick = ()=>{
modal.classList.remove("active");
};

window.onclick = (e)=>{
if(e.target===modal){
modal.classList.remove("active");
}
};

/* ================= COMPARE ================= */

function addCompare(bike){

if(compareList.find(item=>item.name===bike.name)) return;

if(compareList.length===3){
alert("You can compare maximum 3 bikes.");
return;
}

compareList.push(bike);

renderCompare();

}

function renderCompare(){

compareHead.innerHTML = "<th>Specification</th>";

compareBody.innerHTML = "";

compareList.forEach(bike=>{
compareHead.innerHTML += `<th>${bike.name}</th>`;
});

const specs = [
["Price","price"],
["Engine","engine"],
["Power","power"],
["Top Speed","speed"]
];

specs.forEach(spec=>{

let row = `<tr><td>${spec[0]}</td>`;

compareList.forEach(bike=>{
row += `<td>${bike[spec[1]]}</td>`;
});

row += "</tr>";

compareBody.innerHTML += row;

});

}

/* ================= TEST RIDE ================= */

document.getElementById("rideForm").addEventListener("submit",function(e){

e.preventDefault();

alert("🎉 Your Test Ride has been booked successfully!");

this.reset();

});

/* ================= HERO BUTTON ================= */

function scrollToBikes(){

document.getElementById("collection").scrollIntoView({

behavior:"smooth"

});

}

/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menu-btn");

const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click",()=>{

navbar.classList.toggle("show");

});