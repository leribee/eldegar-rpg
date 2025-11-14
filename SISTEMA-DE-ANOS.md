# 📅 SISTEMA DE ANOS DE ELDEGAR

## Como Funciona

Eldegar possui um sistema de calendário simples baseado no evento mais importante da história: **A Queda de Babel** (Ano Zero).

---

## 🎯 O Sistema QB (Queda de Babel)

### Formato Único
Todos os anos em Eldegar usam **QB** (Queda de Babel):
- **Anos positivos:** Depois da Queda (1QB, 2QB... 49QB)
- **Ano Zero:** A Queda de Babel (0QB)
- **Anos negativos:** Antes da Queda (-1QB, -2QB... -310QB)

---

## 📊 As Três Divisões

### 1. Era Pós-Queda de Babel
**Formato:** Números positivos
- 1QB, 2QB, 3QB... 49QB (atual)
- **Quanto maior, mais recente**

### 2. Ano Zero (0QB)
**O Marco:** A Queda de Babel
- Ano único que marca a divisão

### 3. Era do Terror do Sangue
**Formato:** Números negativos  
- -1QB, -2QB, -3QB... -310QB
- **Quanto mais negativo, mais antigo**

---

## 📈 Linha do Tempo Visual

```
PASSADO ←―――――――――――――――――――――――――→ FUTURO

-310QB ... -100QB ... -58QB ... -1QB | 0QB | 1QB ... 49QB (atual)
  ↑                                    ↑
mais antigo                        ANO ZERO
                                 (Queda de Babel)
```

---

## 🔢 Exemplos Práticos

### Exemplo 1: Nascimento de Merlin
- **Código:** `year: -310`
- **Tela:** "-310QB"
- **Significado:** 310 anos antes da Queda

### Exemplo 2: Batalha da Costa Congelada
- **Código:** `year: -58`
- **Tela:** "-58QB"
- **Significado:** 58 anos antes da Queda

### Exemplo 3: A Queda de Babel
- **Código:** `year: 0`
- **Tela:** "0QB"
- **Significado:** O ano zero

### Exemplo 4: Ano Atual
- **Código:** `year: 49`
- **Tela:** "49QB"
- **Significado:** 49 anos após a Queda

---

## 💡 Regras Simples

### ✅ Regra 1: Use QB para tudo
- Não existe "AQB" na exibição
- Todos os anos são QB
- Negativos = antes, Positivos = depois

### ✅ Regra 2: Quanto mais negativo, mais antigo
```
-310QB (mais antigo)
-100QB
-58QB
-1QB
0QB (marco)
1QB
49QB (atual)
```

### ✅ Regra 3: O que você escreve é o que aparece
- Código: `-245` → Tela: `-245QB`
- Código: `49` → Tela: `49QB`
- Sem conversões complicadas!

---

## 📝 Como Adicionar Eventos

### Evento Antigo (antes da Queda):
```javascript
{
    year: -100,        // Número NEGATIVO
    title: "Despertar de Babel",
    description: "Babel desperta pela primeira vez...",
    type: "battle",
    era: "aqb"         // Era do Terror do Sangue
}
// Na tela: -100QB
```

### Evento Recente (depois da Queda):
```javascript
{
    year: 45,          // Número POSITIVO
    title: "Fundação de Espada Polar",
    description: "Nova vila ao norte...",
    type: "founding",
    era: "qb"          // Era Pós-Queda
}
// Na tela: 45QB
```

---

## 📊 Visualização na Timeline

```
═══════════════════════════════════════
     ERA PÓS-QUEDA DE BABEL
═══════════════════════════════════════
49QB (atual) ← Mais recente
48QB
47QB
...
2QB
1QB
═══════════════════════════════════════
          ANO ZERO (0QB)
      🔥 A QUEDA DE BABEL 🔥
═══════════════════════════════════════
-1QB
-2QB
-3QB
...
-58QB (Grandes Batalhas)
-100QB (Despertar de Babel)
...
-310QB (Nascimento de Merlin) ← Mais antigo
═══════════════════════════════════════
       ERA DO TERROR DO SANGUE
═══════════════════════════════════════
```

---

## 🎓 Perguntas e Respostas

### Q: Por que não usar "AQB"?
**A:** Sistema simplificado. Um único formato (QB) é mais fácil de entender.

### Q: Como sei se um ano é antigo?
**A:** Se é negativo, é antigo. Quanto mais negativo, mais antigo.

### Q: -245QB é o mesmo que 245AQB?
**A:** Conceitualmente sim (245 anos antes), mas usamos apenas -245QB.

### Q: O código e a tela são iguais?
**A:** Sim! O que você escreve (`-58`) é o que aparece (`-58QB`).

---

## ✅ Checklist

Ao adicionar evento:
- [ ] Antes da Queda? Use número negativo (ex: `-58`)
- [ ] Depois da Queda? Use número positivo (ex: `49`)
- [ ] Defina `era: "aqb"` (antes) ou `era: "qb"` (depois)
- [ ] Adicione "QB" só no final (sistema faz isso)

---

## 📐 Matemática Simples

### Calcular distância entre eventos:
```
Evento A: -100QB
Evento B: -50QB
Distância: |-100 - (-50)| = 50 anos

Evento C: -10QB
Evento D: 10QB
Distância: |10 - (-10)| = 20 anos
```

### Ordenar eventos:
```
Do mais antigo ao mais recente:
-310, -100, -58, -1, 0, 1, 49
```

---

**Sistema de Anos de Eldegar - Simples, Direto e Consistente! 📅**

**Use apenas QB com positivos e negativos. Sem complicação!**
