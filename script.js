document.addEventListener('DOMContentLoaded', function() {      
    const seasonCarousel = new bootstrap.Carousel('#seasonCarousel', {
        interval: false,
         wrap: false    
    });        
});


document.querySelectorAll('.more-btn').forEach(button => {
  button.addEventListener('click', function() {
    const container = this.previousElementSibling;
    const hiddenRow = container.querySelector('.films-row:not(.active)');
    
    if (hiddenRow) {
      hiddenRow.classList.add('active');
      this.textContent = container.querySelectorAll('.films-row').length > 2 ? 'Show More' : 'End';
    } else {
      container.querySelectorAll('.films-row').forEach(row => row.classList.remove('active'));
      container.querySelector('.films-row').classList.add('active');
      this.textContent = 'More';
    }
  });
});

