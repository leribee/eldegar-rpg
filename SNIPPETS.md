# 📝 SNIPPETS DE CÓDIGO - Eldegar RPG

## Copie e cole estes trechos para personalizar rapidamente

---

## 🏠 HOME PAGE (index.html)

### Card de Sessão
```html
<div class="session-card">
    <div class="card-header">
        <h3>Mesa: Os Guardiões do Reino</h3>
        <span class="date-badge">20/11/2025 - 20h</span>
    </div>
    <div class="card-body">
        <p><strong>Mestre:</strong> João Silva</p>
        <p><strong>Jogadores:</strong> 5/6</p>
        <p class="session-desc">
            Uma aventura épica nas terras do norte, onde os heróis 
            enfrentarão um antigo mal que desperta.
        </p>
    </div>
    <div class="card-footer">
        <a href="mesa1.html" class="btn btn-primary">Ver Mesa</a>
    </div>
</div>
```

---

## 🎲 PÁGINA DE MESA (mesa1.html)

### Personagem Completo
```html
<div class="character-card">
    <div class="character-header">
        <h3 class="character-name">Thorin Martelo de Ferro</h3>
        <span class="status-badge active">Ativo</span>
    </div>
    <p><strong>Raça/Classe:</strong> Anão Guerreiro Nível 5</p>
    <p><strong>Papel no Grupo:</strong> Tanque e protetor</p>
    
    <div class="character-stats">
        <div class="stat">
            <div class="stat-label">FOR</div>
            <div class="stat-value">18</div>
        </div>
        <div class="stat">
            <div class="stat-label">DES</div>
            <div class="stat-value">12</div>
        </div>
        <div class="stat">
            <div class="stat-label">CON</div>
            <div class="stat-value">17</div>
        </div>
        <div class="stat">
            <div class="stat-label">INT</div>
            <div class="stat-value">10</div>
        </div>
        <div class="stat">
            <div class="stat-label">SAB</div>
            <div class="stat-value">13</div>
        </div>
        <div class="stat">
            <div class="stat-label">CAR</div>
            <div class="stat-value">8</div>
        </div>
    </div>
    
    <div class="god-section">
        <h4>Personalidade</h4>
        <p>
            Teimoso e leal, Thorin nunca abandona um companheiro. 
            Ama a forja e vê a honra acima de tudo. Desconfia de 
            magia arcana mas respeita o poder divino.
        </p>
    </div>
    
    <div class="god-section">
        <h4>História</h4>
        <p>
            Exilado de sua montanha natal após um desastre mineiro, 
            Thorin busca redenção protegendo os fracos e combatendo 
            o mal onde quer que o encontre.
        </p>
    </div>
</div>
```

### Personagem Inativo
```html
<div class="character-card inactive">
    <div class="character-header">
        <h3 class="character-name">Elara Folha de Prata</h3>
        <span class="status-badge inactive">Inativo</span>
    </div>
    <p><strong>Raça/Classe:</strong> Elfa Druida</p>
    <p><strong>Status:</strong> Retirada na Sessão 8 - Retornou à floresta</p>
    
    <div class="god-section">
        <h4>História</h4>
        <p>
            Guardiã da natureza que ajudou o grupo em sua jornada inicial. 
            Após salvar a Floresta dos Sussurros, decidiu permanecer 
            como sua protetora.
        </p>
    </div>
</div>
```

### Log de Sessão
```html
<div class="log-entry">
    <div class="log-date">📅 Sessão 12 - 10/11/2025</div>
    <h4>O Segredo da Torre Negra</h4>
    <p>
        Os heróis finalmente alcançaram a Torre Negra e descobriram 
        a verdade sobre o necromante. Na biblioteca proibida, 
        encontraram um grimório antigo que revela a localização 
        do artefato que pode selar o mal para sempre.
    </p>
    <ul>
        <li>✅ Torre Negra explorada</li>
        <li>⚔️ Combate contra 3 Esqueletos Ancestrais</li>
        <li>📜 Grimório da Eternidade obtido</li>
        <li>🎯 Próximo objetivo: Templo do Sol Nascente</li>
    </ul>
</div>
```

### Iframe de Música (Suno)
```html
<div class="music-item">
    <h4>Tema de Batalha Épica</h4>
    <iframe 
        width="100%" 
        height="166" 
        scrolling="no" 
        frameborder="no" 
        allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=SEU_LINK_DO_SUNO">
    </iframe>
    <p>Música tocada durante as grandes batalhas da campanha.</p>
</div>
```

---

## 📅 CALENDÁRIO (calendario.js)

### Adicionar Evento
```javascript
{
    month: 2,              // 0 = Primeiro Mês, 12 = Décimo Terceiro
    day: 15,               // 1-30
    type: 'festival',      // 'festival', 'historical', 'birthday'
    title: 'Festival da Colheita',
    description: 'Grande celebração da colheita anual. Mercadores de toda região comparecem.',
    city: 'Capital de Aldoria',
    table: 'Todas'
},
```

### Adicionar Aniversário
```javascript
{
    month: 5,
    day: 20,
    type: 'birthday',
    title: 'Aniversário de Thorin',
    description: 'O anão Thorin Martelo de Ferro completa 95 anos.',
    city: 'Montanhas do Norte',
    table: 'Mesa 1'
},
```

### Adicionar Evento Histórico
```javascript
{
    month: 8,
    day: 3,
    type: 'historical',
    title: 'Grande Batalha de Aldoria',
    description: 'A batalha que definiu o destino do reino há 500 anos.',
    city: 'Planícies de Aldoria',
    table: 'História Geral'
},
```

### Mudar Nomes dos Meses
```javascript
const MONTHS = [
    "Despertar",      // Mês 1
    "Floração",       // Mês 2
    "Colheita",       // Mês 3
    "Solaris",        // Mês 4
    "Fogos",          // Mês 5
    "Maturação",      // Mês 6
    "Ventos",         // Mês 7
    "Folhas",         // Mês 8
    "Recolhimento",   // Mês 9
    "Gelo",           // Mês 10
    "Neve",           // Mês 11
    "Silêncio",       // Mês 12
    "Renovação"       // Mês 13
];
```

---

## ✨ DEUSES (deuses.html)

### Card de Deus Completo
```html
<div class="god-card">
    <img src="assets/nome-deus.jpg" alt="Nome do Deus" class="god-image">
    <div class="god-content">
        <h2 class="god-title">Theron, o Guardião</h2>
        <p class="god-subtitle">Deus da Proteção e Justiça</p>
        
        <div class="god-section">
            <h4>História</h4>
            <p>
                Nascido das lágrimas de Christa quando viu o sofrimento 
                dos mortais, Theron jurou proteger os inocentes. Carrega 
                um escudo indestrutível forjado no coração de uma estrela.
            </p>
        </div>
        
        <div class="god-quote">
            "Nenhum inocente cairá enquanto meu escudo brilhar."
        </div>
        
        <div class="god-section">
            <h4>Crenças e Objetivos</h4>
            <p>
                Proteger os fracos, defender a justiça, punir tiranos. 
                A força existe para defender, não para oprimir.
            </p>
        </div>
        
        <div class="symbol-icon">🛡️</div>
        <p style="text-align: center; color: #666; margin-top: 0.5rem;">
            <strong>Símbolo Sagrado:</strong> Escudo com Sol Nascente
        </p>
        
        <div class="god-section">
            <h4>Informações Divinas</h4>
            <p><strong>Canalizar Energia:</strong> Positiva</p>
            <p><strong>Arma Preferida:</strong> Espada Longa e Escudo</p>
        </div>
        
        <div class="god-section">
            <h4>Obrigações e Restrições</h4>
            <p>
                Devotos de Theron devem proteger os indefesos, mesmo 
                com a própria vida. Nunca podem usar armadilhas ou 
                táticas covardes. Devem enfrentar inimigos de frente.
            </p>
        </div>
        
        <div class="god-section">
            <h4>Aparência</h4>
            <p>
                Aparece como um guerreiro alto e robusto, com armadura 
                dourada que brilha como o sol. Seu escudo é inquebrável 
                e seus olhos transmitem uma determinação inabalável.
            </p>
        </div>
    </div>
</div>
```

---

## 📰 BLOG (blog.html)

### Post Completo
```html
<article class="blog-post">
    <div class="blog-header">
        <h2 class="blog-title">🎉 Nova Aventura Disponível!</h2>
        <div class="blog-meta">
            <span>📅 15 de Novembro, 2025</span> | 
            <span>✍️ Autor: Mestre João</span> |
            <span>🏷️ Categoria: Anúncios</span>
        </div>
    </div>
    <div class="blog-content">
        <p>
            Estamos empolgados em anunciar uma nova aventura épica para 
            nossas mesas! "O Chamado das Estrelas" promete ser nossa 
            campanha mais desafiadora.
        </p>
        
        <h4>O que esperar:</h4>
        <ul>
            <li>Novos reinos para explorar</li>
            <li>Mistérios cósmicos para desvendar</li>
            <li>Vilões épicos e aliados inesperados</li>
            <li>Tesouros lendários</li>
        </ul>
        
        <p>
            As inscrições estão abertas! Entre em contato para reservar 
            sua vaga.
        </p>
        
        <div style="text-align: center; margin: 2rem 0;">
            <a href="https://wa.me/5500000000000" class="btn btn-primary">
                Inscrever-se Agora
            </a>
        </div>
    </div>
</article>
```

### Post com Imagem
```html
<article class="blog-post">
    <div class="blog-header">
        <h2 class="blog-title">🗺️ Novo Mapa Revelado</h2>
        <div class="blog-meta">
            <span>📅 14 de Novembro, 2025</span> | 
            <span>✍️ Mestre</span> |
            <span>🏷️ Mapas</span>
        </div>
    </div>
    <div class="blog-content">
        <p>Confira o mapa atualizado da região leste:</p>
        
        <div style="text-align: center; margin: 2rem 0;">
            <img src="assets/novo-mapa.jpg" 
                 alt="Novo mapa" 
                 style="max-width: 100%; border-radius: 8px;">
        </div>
        
        <p>Novas áreas incluem as Cavernas de Cristal e o Porto Nebuloso.</p>
    </div>
</article>
```

---

## 📱 WHATSAPP

### Botão Básico
```html
<a href="https://wa.me/5547999999999?text=Olá,%20gostaria%20de%20informações" 
   class="btn btn-whatsapp" 
   target="_blank">
    📱 Enviar Mensagem
</a>
```

### Botão para Mesa Específica
```html
<a href="https://wa.me/5547999999999?text=Olá!%20Gostaria%20de%20participar%20da%20mesa%20Os%20Guardiões%20do%20Reino" 
   class="btn btn-whatsapp" 
   target="_blank">
    📱 Quero Participar desta Mesa
</a>
```

---

## 🎨 CORES (styles.css)

### Paleta Personalizada
```css
:root {
    /* Tons de Terra e Ouro */
    --primary-color: #8b4513;
    --secondary-color: #d4af37;
    
    /* Tons Místicos */
    /* --primary-color: #4a148c; */
    /* --secondary-color: #7b1fa2; */
    
    /* Tons de Floresta */
    /* --primary-color: #1b5e20; */
    /* --secondary-color: #4caf50; */
    
    /* Tons de Fogo */
    /* --primary-color: #b71c1c; */
    /* --secondary-color: #ff5722; */
}
```

---

## 💡 DICAS RÁPIDAS

### Links Internos
```html
<a href="mesa1.html">Ir para Mesa 1</a>
<a href="calendario.html">Ver Calendário</a>
<a href="deuses.html">Conhecer os Deuses</a>
```

### Adicionar Favicon
No `<head>` de cada HTML:
```html
<link rel="icon" type="image/png" href="assets/favicon.png">
```

### Meta Tags para SEO
```html
<meta name="description" content="Site oficial da campanha de RPG Eldegar">
<meta name="keywords" content="RPG, Eldegar, D&D, Campanha">
<meta property="og:title" content="Eldegar RPG">
<meta property="og:description" content="Mundo de aventuras épicas">
```

---

**Use estes snippets para acelerar sua customização! 🚀**
