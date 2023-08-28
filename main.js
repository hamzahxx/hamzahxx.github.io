document.addEventListener('DOMContentLoaded', function() {
    var flipCards = document.querySelectorAll('.flip-card');
    for (var i = 0; i < flipCards.length; i++) {
        flipCards[i].addEventListener('click', function() {
        this.classList.toggle('flipped');
        });
    }
});