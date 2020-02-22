console.log(
  "%c © SANTOSH PANDEY",
  "color:black; font-size:45px;font-weight:900;font-family:impact;text-shadow:0 0 3px white;"
);

// starts the real code ;)
let taskCount = 0;

// clearInput() function starts here
clearInput = () => {
  document.querySelector(".job-entry").value = "";
};

// addTask() function starts here
addTask = () => {
  let textvalue = document.querySelector(".job-entry").value;
  if (textvalue == "") alert("Write something, fancypants!");
  else if (taskCount == 14) alert("Task list is full with 14 tasks!");
  else {
    taskCount++;
    document.querySelector(".job-entry").value = null;
    let image = document.createElement("img");
    image.src = "./images/options-cross.png";
    let list = document.createElement("li");
    list.appendChild(image);
    let spanmsg = document.createElement("span");
    let msg = document.createTextNode(textvalue);
    spanmsg.appendChild(msg);
    list.appendChild(spanmsg);
    list.appendChild(msg);
    document.querySelector("ul").appendChild(list);
    const listItems = document.querySelectorAll("li");
    for (let i = 0; i < listItems.length; i++) {
      listItems[i].style.setProperty("font-family", "delius");
      listItems[i].style.setProperty("font-weight", "700");
      listItems[i].style.setProperty("font-size", "21px");
    }
    image.className = taskCount;
    image.onclick = () => {
      let cn = image.className;
      var elements = document.getElementsByClassName(cn);
      while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
      }
    };
    list.className = taskCount;
  }
};
