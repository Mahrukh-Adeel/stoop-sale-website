const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.addEventListener("click", function() {
    item.classList.toggle("active");
    const answer = item.querySelector(".faq-answer");
    answer.classList.toggle("show");
  });
});
function share() {
    if (navigator.share) {
      navigator.share({
        title: 'Amazing Stoop Sale!',
        text: 'Check out this awesome stoop sale happening near you!',
        url: 'https://your-stoop-sale-website.com/' 
      })
      .then(() => console.log('Shared successfully!'))
      .catch(error => console.error('Sharing failed:', error));
    } else {
      console.log('Sharing is not supported by your browser.');
    }
}
function navigateToContact() {
  window.location.href = 'contact.html';
}

function navigateToDetails() {
  window.location.href = 'detail.html';
}

  