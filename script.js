// Script principal para funcionalidades gerais

// Função para ampliar mapas ao clicar
document.addEventListener('DOMContentLoaded', function() {
    const mapImages = document.querySelectorAll('.map-container img');
    
    mapImages.forEach(img => {
        img.addEventListener('click', function() {
            // Criar modal para visualizar imagem ampliada
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                cursor: zoom-out;
            `;
            
            const modalImg = document.createElement('img');
            modalImg.src = this.src;
            modalImg.style.cssText = `
                max-width: 95%;
                max-height: 95%;
                box-shadow: 0 0 30px rgba(255,255,255,0.3);
                border-radius: 8px;
            `;
            
            modal.appendChild(modalImg);
            document.body.appendChild(modal);
            
            // Fechar ao clicar
            modal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
            
            // Fechar com ESC
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    if (document.body.contains(modal)) {
                        document.body.removeChild(modal);
                    }
                }
            });
        });
    });
});

// Menu responsivo para mobile
document.addEventListener('DOMContentLoaded', function() {
    // Se a tela for pequena, adicionar botão de menu hamburguer
    if (window.innerWidth <= 768) {
        const navMenu = document.querySelector('.nav-menu');
        const navbar = document.querySelector('.navbar .container');
        
        // Criar botão hamburguer
        const menuButton = document.createElement('button');
        menuButton.innerHTML = '☰';
        menuButton.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            display: none;
        `;
        
        // Adicionar funcionalidade de toggle
        menuButton.addEventListener('click', function() {
            if (navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.background = 'var(--dark-bg)';
                navMenu.style.padding = '1rem';
            }
        });
        
        // Mostrar botão em telas pequenas
        if (window.innerWidth <= 768) {
            menuButton.style.display = 'block';
            navMenu.style.display = 'none';
        }
        
        navbar.appendChild(menuButton);
    }
});

// Animações ao scroll
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Animar cards
    const cards = document.querySelectorAll('.session-card, .character-card, .god-card, .blog-post');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Função para copiar links
function copyLink(url) {
    navigator.clipboard.writeText(url).then(function() {
        alert('Link copiado para a área de transferência!');
    }, function() {
        alert('Erro ao copiar link. Por favor, copie manualmente: ' + url);
    });
}

// Smooth scroll para âncoras
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Função para formatar datas
function formatDate(dateString) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
}

// Toast notifications (opcional)
function showToast(message, duration = 3000) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: var(--shadow-hover);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, duration);
}

// Adicionar animações CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Log para debug
console.log('🎲 Site Eldegar RPG carregado com sucesso!');
