class AboutImg {
  constructor(item) {
    this.item = item;
    this.itemData = this.item.dataset.tab;

    this.content = document.querySelectorAll(
      `.content[data-tab='${this.itemData}']`
    );
    this.content = Array.from(this.content).map(item => new Content(item));
    this.item.addEventListener("click", () => this.itemClick());
  }
  itemClick() {
    const content = document.querySelectorAll(".content");
    content.forEach(item => (item.style.display = "none"));
    this.content.forEach(item => item.displayContent());
  }
}
class Content {
  constructor(content) {
    this.content = content;
  }
  displayContent() {
    this.content = this.content.style.display = "block";
  }
}
const aboutImg = document
  .querySelectorAll(".aboutImg")
  .forEach(item => new AboutImg(item));

// document.getElementById("date").innerHTML = Date();
function display_c() {
  var refresh = 1000; // Refresh rate in milli seconds
  mytime = setTimeout("display_ct()", refresh);
}

function display_ct() {
  var x = new Date();
  document.getElementById("ct").innerHTML = x;
  display_c();
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function show() {
  document.getElementById("thumpsDown").style.transform = "rotate(180deg)";
  document.getElementById("thumpsUp").style.display = "none";
}
function unShow() {
  document.getElementById("thumpsDown").style.display = "inline-block";
  document.getElementById("thumpsUp").style.transform = "rotate(180deg)";
}
