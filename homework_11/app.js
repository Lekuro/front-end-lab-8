var rootNode = document.getElementById("root");

function readArr(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    let ul = document.createElement("ul");
    elem.appendChild(ul);
    let find = false;
    if (arr[i].folder === true) {
      find = true;
      let li = document.createElement("li");
      li.className = "folder";
      li.innerHTML = `<i class='material-icons'>folder_open</i><i class='material-icons'>folder</i>`;
      let liText = document.createTextNode(`${arr[i].title}`);
      li.appendChild(liText);
      elem.children[i].appendChild(li);
      let li1 = document.createElement("li");
      elem.children[i].appendChild(li1);
      if (arr[i].children) {
        readArr(arr[i].children, elem.children[i].children[1]);
      } else {
        elem.children[i].children[1].innerHTML = "<i>Folder is empty</i>";
      }
    }
    if (!find) {
      let li = document.createElement("li");
      li.innerHTML = `<i class='material-icons grey'>insert_drive_file</i>`;
      let liText = document.createTextNode(`${arr[i].title}`);
      li.appendChild(liText);
      elem.children[i].appendChild(li);
    }
  }
}
function createTree(arr) {
  let div = document.createElement("div");
  readArr(arr, div);
  return div;
}
function accordion() {
  this.classList.toggle("open");
}
let treeView = createTree(structure);

rootNode.appendChild(treeView);

let folderElem = document.getElementsByClassName("folder");
for (let i = 0; i < folderElem.length; i++) {
  folderElem[i].addEventListener("click", accordion);
}
