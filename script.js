document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = "#334155";
    });
    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = "#1e293b";
    });
});
