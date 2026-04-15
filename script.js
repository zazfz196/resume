// Script para currículo interativo
console.log("Eu que fiz saporra");

// Adicionar animação ao carregar
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.animation = `fadeIn 0.6s ease-in-out ${index * 0.1}s forwards`;
    });
});

// Adicionar estilo de animação
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);