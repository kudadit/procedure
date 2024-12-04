function toggleText() {
  const detailSection = document.querySelector('.detail');
  detailSection.classList.toggle('hovered');  // Toggle kelas hovered untuk efek

  const content = document.getElementById("textContent");
  const button = document.querySelector(".read-more-btn");

  content.classList.toggle("show");

  if (content.classList.contains("show")) {
    button.textContent = "Read Less";
  } else {
    button.textContent = "Read More";
  }
}
