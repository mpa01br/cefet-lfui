# Informática - REDES

- Disciplina: **Laboratório de Fundamentos de Informática**
- Professor: **[Flávio Coutinho](mailto:coutinho@decom.cefetmg.br)**

---

## Guia 10

- Assunto: **Recursividade**
- Objetivo: Entender o funcionamento da **recursividade** e ganhar uns pontinhos

---

## Roteiro

1. Conheça a [Belesminha](http://homepages.dcc.ufmg.br/~flavioro/belesminha/index.html)
1. Mas o que é recursividade?
1. Missão: salvar a Belesmoca


---

# Conhecendo a **Belesminha**

---

![Uma tela do site da Belesminha](images/belesminha.png)

---

## Definição: Belesminha

`s.f.` **1** "A Belesminha é um sistema criado com o propósito de contribuir com o
aprendizado dos conceitos de Recursividade em disciplinas de Algoritmos."

_Fonte: [site da Belesminha](http://homepages.dcc.ufmg.br/~flavioro/belesminha/index.html)_

---

## Objetivo

1. Descrever um algoritmo para _coletar todas as folhas_ e **parar**
1. Não exceder os **limites de comandos e pilha**

---

## Comandos ([detalhes](http://homepages.dcc.ufmg.br/~flavioro/belesminha/comandos.htm))

![Tela do jogo Belesminha mostrando a Belesminha e algumas folhas em seu caminho](/images/belesminha-tela1.gif)

- `f`: frente
- `d`: virar à direita (90º)
- `e`: virar à esquerda (90º)

### Exemplo:

```bash
ffdf
```
---

## Funções ([detalhes](http://homepages.dcc.ufmg.br/~flavioro/belesminha/funcoes.htm))

- Simples, sem parâmetro:
```bash
a:fff
```
- Com parâmetro (`P`):
```bash
b(P):fb(P-1)
```

### Condição de parada: P == 0

---

# Mas o que é a **recursividade**?

---
