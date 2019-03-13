class AboutImg {
  constructor(item) {
    this.item = item;
    this.itemData = this.item.dataset.tab;

    this.content = document.querySelectorAll(
      // `.content[data-tab='${this.item.dataset.tab}']`
      `.content[data-tab='${this.itemData}']`
    );
    this.content = Array.from(this.content).map(item => new Content(item));
    // this.content = new Content(this.content);
    this.item.addEventListener("click", () => this.itemClick());
  }
  itemClick() {
    // this.content.toggleContent();
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
    // this.content.classList.toggle("change");
    this.content = this.content.style.display = "block";
  }
}
const aboutImg = document
  .querySelectorAll(".aboutImg")
  .forEach(item => new AboutImg(item));

let displayDate = new Date();
document.getElementById("date").innerHTML = displayDate.toString();

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
