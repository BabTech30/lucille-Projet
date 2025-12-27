document.addEventListener('DOMContentLoaded', () => {
    // Animation d'apparition au scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Cibler tous les éléments importants (timeline, cartes, roadmap)
    const elements = document.querySelectorAll('.timeline-item, .card, .roadmap-item');
    
    elements.forEach(el => {
        // On prépare l'élément (invisible au départ)
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // Ajouter la classe visible via CSS dynamique pour forcer l'affichage
    const style = document.createElement('style');
    style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
