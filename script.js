var wrapperEle = document.body.querySelector(".wrapper");

var chrs = [
  {
    name: "Optimus Prime",
    class: "leader",
    afl: "autobot",
    vehicle: "truck",
    color: "blue"
  },
  {
    name: "Megatron",
    class: "leader",
    afl: "decepticon",
    vehicle: "tank",
    color: "green"
  },
  {
    name: "Bumblebee",
    class: "scout",
    afl: "autobot",
    vehicle: "car",
    color: "gold"
  },
  {
    name: "Starscream",
    class: "scout",
    afl: "decepticon",
    vehicle: "plane",
    color: "white"
  },
  {
    name: "Ironhide",
    class: "soldier",
    afl: "autobot",
    vehicle: "truck",
    color: "blue"
  },
  {
    name: "Brawl",
    class: "soldier",
    afl: "decepticon",
    vehicle: "tank",
    color: "green"
  }
];

for (var i = 0; i < chrs.length; i++) {
  var ele = document.createElement("div");
  var nameEle = document.createElement("div");
  var classEle = document.createElement("div");
  var veEle = document.createElement("div");

  var img1 =
    "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
  var img2 =
    "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";

  if (chrs[i].afl == "autobot") {
    ele.classList.add("character", "autobot");
    var imgA = document.createElement("img");
    imgA.setAttribute("src", img1);
    var divA = document.createElement("div");
    divA.appendChild(imgA);
    ele.appendChild(divA);
    
  } else {
    ele.classList.add("character", "decepticon");
    var imgD = document.createElement("img");
    imgD.setAttribute("src", img2);
    ele.appendChild(imgD);
  }

  ele.appendChild(nameEle);
  ele.appendChild(classEle);
  ele.appendChild(veEle);

  
  // if(chrs[i].vehicle == "truck") {
  //   veEle.style.color = "blue"
  // }

  veEle.style.color = chrs[i].color;

  nameEle.innerHTML = "Name: " + chrs[i].name;
  classEle.innerHTML = "Class:  " + chrs[i].class.toUpperCase();
  veEle.innerHTML = "Vehicle:  " + chrs[i].vehicle;


  wrapperEle.appendChild(ele);

}