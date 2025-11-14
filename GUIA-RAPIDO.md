# 🚀 GUIA RÁPIDO - Eldegar RPG Site

## Primeiros Passos (5 minutos)

### 1. Criar Repositório GitHub
1. Acesse: https://github.com/new
2. Nome do repositório: `eldegar-rpg`
3. Marque como **Público**
4. Clique em **Create repository**

### 2. Upload dos Arquivos
1. Clique em "uploading an existing file"
2. Arraste TODOS os arquivos do projeto
3. Commit: "Initial commit"

### 3. Ativar GitHub Pages
1. Settings → Pages (menu lateral)
2. Source: **main** branch
3. Save
4. Aguarde 5 minutos

**Pronto! Seu site estará em:**
`https://SEU_USUARIO.github.io/eldegar-rpg/`

---

## Edições Mais Comuns

### ✏️ Mudar Nome da Mesa (index.html)
Linha ~47:
```html
<h3>Mesa: MUDE AQUI</h3>
```

### 📅 Adicionar Evento no Calendário (calendario.js)
Linha ~23, adicione:
```javascript
{
    month: 0,           // 0-12
    day: 15,            // 1-30
    type: 'festival',   // festival, historical, birthday
    title: 'Nome',
    description: 'Descrição',
    city: 'Cidade',
    table: 'Mesa 1'
},
```

### 👤 Adicionar Personagem (mesa1.html)
Copie o bloco da linha ~70 até ~118 e modifique.

### 📝 Novo Post no Blog (blog.html)
Copie o bloco da linha ~35 até ~70 e cole no topo.

### 📱 Mudar WhatsApp
Procure: `wa.me/5500000000000`
Mude para: `wa.me/55SEUDDD999999999`

---

## 🖼️ Adicionar Imagens

### No GitHub:
1. Vá para a pasta `assets/`
2. "Add file" → "Upload files"
3. Arraste suas imagens
4. Commit

### Nomes importantes:
- `mapa-principal.jpg` - Mapa da home
- `mapa-mesa1.jpg` - Mapa da mesa 1
- `christa.jpg` - Imagem da deusa

---

## 🆘 Problemas?

**Site não abre:**
- Aguarde 5-10 minutos
- Verifique se o repo é público

**Imagens não aparecem:**
- Confirme que estão em `assets/`
- Verifique o nome do arquivo

**Calendário não funciona:**
- Pressione F12 no navegador
- Veja erros no Console

---

## 📋 Checklist Mínimo

- [ ] Subir arquivos no GitHub
- [ ] Ativar GitHub Pages
- [ ] Adicionar pelo menos 1 imagem de mapa
- [ ] Editar nome das 3 mesas na home
- [ ] Configurar pelo menos 1 número de WhatsApp
- [ ] Testar o site no navegador

---

**Leia o README.md completo para instruções detalhadas!**
