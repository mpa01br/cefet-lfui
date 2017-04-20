# Informática - REDES

- Disciplina: **Laboratório de Fundamentos de Informática**
- Professor: **[Flávio Coutinho Silva](mailto:coutinho@decom.cefetmg.br)**

---

## ~~Guia 10~~ Guia Interino

- Assunto: **Recursividade**
- Objetivo: Entender o funcionamento da **recursividade** e ganhar uns pontinhos

---

## Roteiro

1. Conheça a [Belesminha](http://homepages.dcc.ufmg.br/~flavioro/belesminha/index.html)
1. Mas o que é recursividade?
1. Missão: salvar a Belesmoca


---

# **1** Conhecendo a **Belesminha**

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

![Tela do jogo Belesminha mostrando a Belesminha e algumas folhas em seu caminho](images/belesminha-tela1.gif)

- `f`: frente
- `d`: virar à direita (90º)
- `e`: virar à esquerda (90º)

---

## Exemplo de comandos

```
ffdf
```

- frente
- frente
- vira à direita
- frente novamente

---

## Interface do jogo

![Tela do jogo Belesminha mostrando a interface](images/belesminha-interface.gif)

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

# **2** Mas o que é a **recursividade**?

---

## Definição: Recursividade

s.f. **1** Em ciência da computação, a recursividade é a definição de uma
subrotina (função ou método) que pode invocar a si mesma.

---

## Definição: Recursividade

- `fatorial(x) = x * fatorial(x-1)`
```C
int fatorial(int n)
{
    if (n==1) {
      return n;
    }
    return fatorial(n-1) * n;
}
```

---

# **3** Missão: salvar a Belesmoca

---

## Mas como, professor?

- Concluir o desafio da Belesminha e vencer a última fase.
- Mostrar a solução do último nível para o professor
- Valor: **1 ponto extra**

---

## Passos...

1. [Baixar o jogo](http://homepages.dcc.ufmg.br/~flavioro/belesminha/comobaixar.htm)
1. Descompactar o arquivo em alguma pasta (Desktop/Belesminha?)
1. Executar a máquina virtual do Java em linha de comando, na pasta:
```bash
java -jar Belesminha-primavera2008.jar
```
