# 🎲 Site Eldegar RPG

Site completo para campanha de RPG em Eldegar, pronto para GitHub Pages!

## 📋 Estrutura do Projeto

```
/
├── index.html          # Página principal
├── mesa1.html          # Template de página de mesa
├── calendario.html     # Calendário interativo
├── deuses.html         # Panteão de deuses
├── blog.html           # Blog e anúncios
├── styles.css          # Estilos principais
├── script.js           # JavaScript principal
├── calendario.js       # JavaScript do calendário
├── assets/            # Pasta para imagens
│   ├── mapa-principal.jpg
│   ├── mapa-mesa1.jpg
│   ├── christa.jpg
│   └── ...
└── README.md          # Este arquivo
```

## 🚀 Como Publicar no GitHub Pages

### 1. Criar Repositório

1. Vá para [GitHub](https://github.com) e faça login
2. Clique em "New repository"
3. Nome sugerido: `eldegar-rpg`
4. Marque como "Public"
5. Clique em "Create repository"

### 2. Upload dos Arquivos

**Opção A - Via Interface Web:**
1. Na página do repositório, clique em "uploading an existing file"
2. Arraste todos os arquivos HTML, CSS e JS
3. Faça commit com a mensagem "Initial commit"

**Opção B - Via Git (Terminal):**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/eldegar-rpg.git
git push -u origin main
```

### 3. Ativar GitHub Pages

1. No repositório, vá em "Settings"
2. No menu lateral, clique em "Pages"
3. Em "Source", selecione "main" branch
4. Clique em "Save"
5. Aguarde alguns minutos e seu site estará em:
   `https://SEU_USUARIO.github.io/eldegar-rpg/`

## 📸 Adicionando Imagens

### Criar pasta assets

1. No repositório, clique em "Add file" > "Create new file"
2. Digite: `assets/.gitkeep`
3. Commit com mensagem "Create assets folder"

### Upload de imagens

1. Vá até a pasta `assets`
2. Clique em "Add file" > "Upload files"
3. Faça upload das imagens:
   - `mapa-principal.jpg` - Mapa geral de Eldegar
   - `mapa-mesa1.jpg` - Mapa específico da Mesa 1
   - `christa.jpg` - Imagem da deusa Christa
   - Outras imagens conforme necessário

### Formatos recomendados
- Mapas: JPG ou PNG (tamanho otimizado: ~200-500KB)
- Deuses: JPG ou PNG (500x700px ideal)
- Ícones: PNG com transparência

## ✏️ Personalizando o Conteúdo

### 1. Página Inicial (index.html)

**Alterar cards de sessões:**
```html
<!-- Encontre este bloco e modifique: -->
<div class="session-card">
    <div class="card-header">
        <h3>Mesa: NOME DA SUA MESA</h3>
        <span class="date-badge">DATA - HORA</span>
    </div>
    <div class="card-body">
        <p><strong>Mestre:</strong> SEU NOME</p>
        <p><strong>Jogadores:</strong> X/Y</p>
        <p class="session-desc">DESCRIÇÃO...</p>
    </div>
</div>
```

### 2. Criar Novas Páginas de Mesa

1. Copie `mesa1.html` e renomeie (ex: `mesa2.html`)
2. Edite o conteúdo:
   - Nome da mesa
   - Informações do mestre
   - Personagens
   - Log de sessões
   - Links do WhatsApp

**Personagens:**
```html
<div class="character-card">
    <div class="character-header">
        <h3 class="character-name">Nome do Personagem</h3>
        <span class="status-badge active">Ativo</span>
    </div>
    <p><strong>Raça/Classe:</strong> Descrição</p>
    <!-- Adicione os atributos -->
</div>
```

**Log de Sessões:**
```html
<div class="log-entry">
    <div class="log-date">📅 Sessão X - DATA</div>
    <h4>Título da Sessão</h4>
    <p>Resumo do que aconteceu...</p>
</div>
```

### 3. Calendário (calendario.js)

**Adicionar eventos:**
```javascript
const events = [
    {
        month: 0,           // 0-12 (Janeiro a Décimo Terceiro Mês)
        day: 15,            // 1-30
        type: 'festival',   // 'festival', 'historical', 'birthday'
        title: 'Nome do Evento',
        description: 'Descrição detalhada',
        city: 'Nome da Cidade',
        table: 'Mesa 1'
    },
    // Adicione mais eventos aqui
];
```

**Mudar nomes dos meses:**
```javascript
const MONTHS = [
    "Nome do Mês 1",
    "Nome do Mês 2",
    // ... até 13 meses
];
```

**Ajustar estações:**
```javascript
const seasons = [
    { name: 'Primavera', icon: '🌸', startMonth: 0 },
    { name: 'Verão', icon: '☀️', startMonth: 3 },
    { name: 'Outono', icon: '🍂', startMonth: 6 },
    { name: 'Inverno', icon: '❄️', startMonth: 9 }
];
```

### 4. Adicionar Deuses (deuses.html)

Copie este bloco e modifique:
```html
<div class="god-card">
    <img src="assets/NOME_DO_DEUS.jpg" alt="Nome" class="god-image">
    <div class="god-content">
        <h2 class="god-title">Nome do Deus</h2>
        <p class="god-subtitle">Título/Domínio</p>
        
        <div class="god-section">
            <h4>História</h4>
            <p>História do deus...</p>
        </div>
        
        <div class="god-quote">
            "Frase marcante..."
        </div>
        
        <!-- Continue com as outras seções -->
    </div>
</div>
```

### 5. Blog/Anúncios (blog.html)

Para adicionar novo post (sempre no topo):
```html
<article class="blog-post">
    <div class="blog-header">
        <h2 class="blog-title">Título do Post</h2>
        <div class="blog-meta">
            <span>📅 Data</span> | 
            <span>✍️ Autor: Seu Nome</span> |
            <span>🏷️ Categoria: Tipo</span>
        </div>
    </div>
    <div class="blog-content">
        <p>Conteúdo do post...</p>
    </div>
</article>
```

## 🎨 Personalizando Cores

Edite o arquivo `styles.css`, no início:
```css
:root {
    --primary-color: #8b4513;      /* Cor principal */
    --secondary-color: #d4af37;    /* Cor secundária */
    --dark-bg: #1a1a1a;           /* Fundo escuro */
    /* Modifique conforme desejado */
}
```

## 📱 WhatsApp

Para configurar botões do WhatsApp, substitua o número:
```html
<a href="https://wa.me/5547999999999?text=Mensagem" 
   class="btn btn-whatsapp">
    📱 Enviar Mensagem
</a>
```
- Formato: `55` (Brasil) + `47` (DDD) + `999999999` (número)

## 🎵 Músicas do Suno

Para adicionar músicas do Suno.ai:
```html
<iframe width="100%" height="166" scrolling="no" frameborder="no" 
        allow="autoplay" 
        src="URL_DO_SUNO_AQUI">
</iframe>
```

## 🔧 Manutenção

### Atualizar via GitHub Web
1. Navegue até o arquivo que quer editar
2. Clique no ícone de lápis (Edit)
3. Faça as mudanças
4. Commit changes

### Atualizar via Git Local
```bash
# Fazer alterações nos arquivos
git add .
git commit -m "Descrição das mudanças"
git push
```

## 📋 Checklist de Publicação

- [ ] Criar repositório no GitHub
- [ ] Fazer upload de todos os arquivos
- [ ] Criar pasta `assets/`
- [ ] Adicionar todas as imagens
- [ ] Ativar GitHub Pages
- [ ] Personalizar conteúdo das páginas
- [ ] Adicionar eventos no calendário
- [ ] Configurar números do WhatsApp
- [ ] Testar todas as páginas
- [ ] Compartilhar o link!

## 🆘 Problemas Comuns

**Imagens não aparecem:**
- Verifique se estão na pasta `assets/`
- Confirme que os nomes coincidem no HTML
- Caminhos devem ser: `assets/nome-imagem.jpg`

**GitHub Pages não funciona:**
- Aguarde 5-10 minutos após ativar
- Verifique se o repositório é público
- Confirme que `index.html` está na raiz

**Calendário não funciona:**
- Verifique se `calendario.js` está na mesma pasta
- Abra o Console do navegador (F12) para ver erros

## 🎯 Próximos Passos

1. Adicione mais mesas copiando `mesa1.html`
2. Preencha o calendário com eventos da sua campanha
3. Complete o panteão de deuses
4. Mantenha o blog atualizado com novidades
5. Considere adicionar:
   - Galeria de arte/fan art
   - Sistema de bestário
   - Regras customizadas
   - História detalhada do mundo

## 📞 Suporte

Se precisar de ajuda:
1. Revise este README
2. Procure erros no Console do navegador (F12)
3. Verifique a documentação do GitHub Pages

---

**Boa sorte com sua campanha em Eldegar! 🎲⚔️✨**
