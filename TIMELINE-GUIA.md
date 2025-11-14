# 📜 LINHA DO TEMPO DE ELDEGAR - Guia Completo

## Visão Geral

A Linha do Tempo de Eldegar é uma interface visual e interativa que apresenta **todos os eventos históricos** do mundo, desde o ano -310AQB até 49QB (ano atual).

### Estatísticas
- **Total de eventos:** Mais de 150 eventos registrados
- **Período coberto:** 359 anos de história
- **2 Eras distintas:** Era do Terror do Sangue (AQB) e Era Pós-Queda de Babel (QB)

---

## 🎯 Funcionalidades

### 1. **Visualização Cronológica**
- Eventos organizados por ano
- Linha visual conectando todos os eventos
- Separação clara entre as duas eras

### 2. **Filtros por Tipo**
Filtre eventos por categoria:
- **Todos** - Mostra todos os eventos
- **Nascimentos** 🎂 - Nascimentos de personagens importantes
- **Mortes** 💀 - Mortes e assassinatos
- **Batalhas** ⚔️ - Guerras e combates
- **Fundações** 🏛️ - Fundação de cidades e organizações
- **Descobertas** 🔍 - Descobertas e revelações
- **Política** 👑 - Eventos políticos e diplomáticos

### 3. **Busca Inteligente**
- Busque por nome de pessoa
- Busque por local/cidade
- Busque por palavra-chave
- Resultados atualizados em tempo real

### 4. **Estatísticas em Tempo Real**
- Contador de eventos visíveis
- Anos de história cobertos
- Era atual destacada

---

## 📊 Estrutura das Eras

### Era Pós-Queda de Babel (QB)
**Anos:** 1QB até 49QB (atual)
**Formato:** Números positivos (1QB, 2QB, 3QB... 49QB)
**Características:**
- Reconstrução após a queda de Babel
- Renascimento da civilização
- Expansão e descobertas
- Era de esperança

### Ano Zero (0QB)
**O Marco Divisor:**
- A Queda de Babel
- Morte do Rei Eldegar IV
- Vitória dos heróis
- Reinício do calendário

### Era do Terror do Sangue
**Anos:** -1QB até -310QB
**Formato:** Números negativos (-1QB, -2QB, -3QB... -310QB)
**Características:**
- Domínio de Babel
- Guerras contra demônios
- Formação da Aliança
- Época sombria

**Importante:** 
- -1QB é o ano mais próximo da Queda de Babel
- -310QB é o ano mais antigo registrado
- Todos os anos antes da Queda são negativos

---

## 🔧 Como Adicionar Novos Eventos

### Estrutura de um Evento

Abra o arquivo `timeline.js` e adicione no array `timelineEvents`:

```javascript
{
    year: 49,              // Ano do evento (positivo para QB, negativo para AQB)
    date: "12/04",         // Data específica (ou null se não houver)
    title: "Título do Evento",
    description: "Descrição detalhada do que aconteceu...",
    type: "political",     // Tipo do evento (ver tipos abaixo)
    era: "qb"             // "qb" ou "aqb"
}
```

### Tipos de Eventos

| Tipo | Código | Descrição | Cor |
|------|--------|-----------|-----|
| Nascimento | `birth` | Nascimento de personagens | Azul |
| Morte | `death` | Mortes e assassinatos | Rosa/Vermelho |
| Batalha | `battle` | Guerras e combates | Vermelho |
| Fundação | `founding` | Fundação de cidades/organizações | Verde |
| Descoberta | `discovery` | Descobertas e revelações | Laranja |
| Político | `political` | Eventos políticos | Roxo |

### Exemplos Práticos

#### Exemplo 1: Nascimento
```javascript
{
    year: 50,
    date: "15/06",
    title: "Nascimento de [Nome]",
    description: "Nasce [Nome], filho de [Pais].",
    type: "birth",
    era: "qb"
}
```

#### Exemplo 2: Batalha (Era Antiga)
```javascript
{
    year: -58,         // Ano negativo = antes da Queda
    date: null,
    title: "Batalha de [Local]",
    description: "Descrição detalhada da batalha, seus participantes e resultado...",
    type: "battle",
    era: "aqb"
}
```

#### Exemplo 3: Evento Político (Era Atual)
```javascript
{
    year: 45,          // Ano positivo = depois da Queda
    date: "02/01",
    title: "Fundação de Nova Cidade",
    description: "Surgimento de uma nova vila ao norte...",
    type: "founding",
    era: "qb"
}
```

**Nota sobre Anos:**
- **Anos positivos:** 1QB, 2QB, 49QB (após a Queda)
- **Anos negativos:** -1QB, -58QB, -310QB (antes da Queda)
- **Exibição:** O número aparece exatamente como no código
- **Exemplo:** -245QB no código = -245QB na tela

---

## 📝 Atualizando Eventos Existentes

### Localizar o Evento

1. Abra `timeline.js`
2. Procure por `timelineEvents`
3. Use Ctrl+F para buscar pelo título ou ano

### Modificar

```javascript
// ANTES
{
    year: 43,
    date: null,
    title: "Evento Antigo",
    description: "Descrição antiga...",
    type: "political",
    era: "qb"
}

// DEPOIS
{
    year: 43,
    date: "10/05",  // Adicionou data específica
    title: "Evento Atualizado",  // Título modificado
    description: "Nova descrição mais detalhada...",  // Descrição expandida
    type: "political",
    era: "qb"
}
```

---

## 🎨 Personalização Visual

### Cores dos Tipos (styles.css ou timeline.html)

```css
.type-birth {
    background: #e3f2fd;
    color: #1976d2;
}

.type-death {
    background: #fce4ec;
    color: #c2185b;
}

.type-battle {
    background: #ffebee;
    color: #d32f2f;
}

.type-founding {
    background: #e8f5e9;
    color: #388e3c;
}

.type-discovery {
    background: #fff3e0;
    color: #f57c00;
}

.type-political {
    background: #f3e5f5;
    color: #7b1fa2;
}
```

---

## 💡 Dicas de Uso

### Para Mestres

1. **Mantenha atualizado:** Adicione eventos conforme as sessões avançam
2. **Seja específico:** Inclua datas quando possível
3. **Detalhe batalhas:** Jogadores adoram ler sobre batalhas épicas
4. **Conecte eventos:** Referencie personagens e locais consistentemente

### Para Jogadores

1. **Use a busca:** Digite nome de personagem para ver sua história
2. **Filtre por tipo:** Veja só batalhas ou apenas nascimentos
3. **Leia contexto:** Entenda a história por trás da campanha
4. **Explore eras:** Compare como o mundo mudou entre eras

---

## 🔍 Exemplos de Buscas

### Buscar por Personagem
```
Digite: "Eldegar"
Resultado: Todos eventos relacionados aos reis Eldegar
```

### Buscar por Local
```
Digite: "Babel"
Resultado: Todos eventos na Ilha de Babel
```

### Buscar por Conceito
```
Digite: "guerra"
Resultado: Todas guerras e batalhas
```

### Buscar por Família
```
Digite: "Sindalin"
Resultado: Todos eventos da família Sindalin
```

---

## ⚡ Atalhos Rápidos

### Navegação por Era

- **Ver só QB:** Clique em "Todos" e role para o topo
- **Ver só AQB:** Role até o final da página
- **Ver Ano Zero:** Procure pela seção vermelha no meio

### Filtros Comuns

- **Linha de sucessão:** Filtre por "Nascimentos" + Busque "Eldegar"
- **Grandes batalhas:** Filtre por "Batalhas"
- **Fundações importantes:** Filtre por "Fundações"

---

## 📋 Checklist de Manutenção

### Mensal
- [ ] Adicionar eventos das últimas sessões
- [ ] Atualizar ano atual se necessário
- [ ] Verificar consistência de nomes

### Por Sessão
- [ ] Registrar eventos importantes
- [ ] Adicionar nascimentos/mortes de NPCs
- [ ] Documentar descobertas

### Anual (no jogo)
- [ ] Revisar eventos do ano
- [ ] Adicionar marco temporal
- [ ] Atualizar estatísticas

---

## 🐛 Resolução de Problemas

### Evento não aparece
- Verifique se está em `timelineEvents`
- Confirme sintaxe JavaScript correta
- Verifique vírgulas entre eventos

### Ordem errada
- Eventos QB: ordem decrescente (49, 48, 47...)
- Eventos AQB: ordem crescente (-1, -2, -3...)
- Sistema ordena automaticamente

### Busca não funciona
- Limpe o campo de busca
- Recarregue a página
- Verifique console (F12) para erros

### Filtro não responde
- Clique em "Todos" primeiro
- Recarregue a página
- Verifique se tipo está correto no evento

---

## 📊 Estatísticas do Projeto

### Eventos por Era
- **QB (1-49):** ~50 eventos
- **Ano Zero:** 1 evento (marco)
- **AQB (-1 a -310):** ~100+ eventos

### Eventos por Tipo
- **Nascimentos:** ~40 eventos
- **Mortes:** ~20 eventos
- **Batalhas:** ~25 eventos
- **Fundações:** ~15 eventos
- **Descobertas:** ~20 eventos
- **Política:** ~30 eventos

---

## 🎯 Próximos Passos

### Melhorias Sugeridas

1. **Adicionar filtro por local/cidade**
2. **Criar vista de mapa interativo**
3. **Adicionar imagens aos eventos**
4. **Sistema de tags/categorias**
5. **Linha do tempo de personagens específicos**
6. **Exportar para PDF**

---

## 📚 Recursos Adicionais

### Arquivos Relacionados
- `timeline.html` - Estrutura da página
- `timeline.js` - Dados e lógica
- `styles.css` - Estilos visuais

### Documentação
- README.md - Guia geral
- SNIPPETS.md - Códigos prontos

---

**Linha do Tempo de Eldegar - Preserve a história do seu mundo! 📜✨**
