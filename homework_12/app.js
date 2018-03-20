let rootNode = document.getElementById("root");
createPreview();
window.addEventListener("hashchange", checkHash);
function createPreview() {
  rootNode.innerHTML = "<div class='thumbnails'></div>";
  createElem("h1", rootNode.firstChild, "Most popular tanks", "");
  for (let i = 0; i < tanks.length; i++) {
    let aThumbnail = createElem("a", "", "", "thumbnail");
    aThumbnail.setAttribute("href", `#${tanks[i].model}`);
    aThumbnail.setAttribute("title", "Click to details");
    createThumbnails(tanks[i], aThumbnail);
    rootNode.firstChild.appendChild(aThumbnail);
  }
}
function createElem(elem, parent, text, clas) {
  elem = document.createElement(elem);
  if (text) {
    text = document.createTextNode(text);
    elem.appendChild(text);
  }
  if (clas) {
    elem.className = clas;
  }
  if (parent) {
    parent.appendChild(elem);
  }
  return elem;
}
function createThumbnails(objTank, elem) {
  let imgTank = createElem("img", elem);
  imgTank.setAttribute("src", objTank.preview);
  imgTank.setAttribute("alt", "tankList");
  let pList = createElem("p", elem, objTank.model, "list");
  pList.setAttribute("title", objTank.model);
  let imgFlag = document.createElement("img");
  imgFlag.setAttribute("src", objTank.country_image);
  imgFlag.setAttribute("alt", "flag");
  imgFlag.setAttribute("title", objTank.country);
  let spanLevel = createElem("span", "", objTank.level);
  spanLevel.setAttribute("title", "Click to details");
  pList.prepend(imgFlag, spanLevel);
}
function createDetail(numberTank) {
  rootNode.innerHTML = `<div class='tank'></div>`;
  let objTank = tanks[numberTank];
  let divTank = rootNode.firstChild;
  let h1Tank = createElem("h1", divTank);
  let imgFlag = createElem("img", h1Tank);
  imgFlag.setAttribute("src", objTank.country_image);
  imgFlag.setAttribute("alt", "flag");
  imgFlag.setAttribute("title", objTank.country);
  createElem("span", h1Tank, objTank.model, "model");
  createElem("span", h1Tank, `(level ${objTank.level})`);
  let divGrid = createElem("div", divTank, "", "grid");
  let divCol1 = createElem("div", divGrid);
  createElem("h2", divCol1, "Preview");
  let imgTank = createElem("img", divCol1);
  imgTank.setAttribute("src", objTank.preview);
  imgTank.setAttribute("alt", "tank");
  let divCol2 = createElem("div", divGrid);
  createElem("h2", divCol2, "Characteristic");
  let table = createElem("table", divCol2);
  createTable(objTank.details, table);
  let aBack = createElem("a", divTank, "Back to list view");
  aBack.setAttribute("href", "#");
}
function createTable(obj, elem) {
  for (let key in obj) {
    let tr = createElem("tr", elem);
    let keys = key.replace(/_/g, " ");
    createElem("td", tr, keys);
    createElem("td", tr, obj[key]);
  }
}
function checkHash() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  if (hash === "") {
    createPreview();
  } else {
    for (let i = 0; i < tanks.length; i++) {
      if (hash === tanks[i].model) {
        createDetail(i);
        break;
      }
    }
  }
}
