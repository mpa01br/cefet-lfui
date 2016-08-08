# Guia **Web** 2

- Assunto: **Páginas Web**
- Objetivo:
  1. Conhecer as tecnologias com as quais se constrói páginas web
  1. Criar páginas web simples e estáticas

---
## Hoje vamos falar sobre

1. Funcionamento da Web
1. Estrutura básica de um arquivo `html`
1. Tags `html`
1. Um pouco de estilo `css`

---
# Funcionamento da Web

---
## Servidores Web e Navegadores

![Como servidores web se comunicam com navegadores](../../images/how-web-works.png)

---
## O que um **servidor web** faz?

![Um servidor web atendendo a requisições de arquivos html de um navegador](../../images/web-servers.png)

- **O servidor fica escutando** (aguardando), em determinada porta
  (geralmente 80), **por requisições** (solicitações) **de arquivos**
  realizadas por navegadores

---
# Estrutura Básica do **HTML**

---
## Arquivo **"inicial.html"**
![Exemplo de um arquivo html](../../images/exemplo-html.png)

---
## Abrindo "inicial.html" **no navegador**

![Exemplo de um arquivo html no navegador](../../images/exemplo-html-resultado.png)

---
## Estrutura de um **arquivo HTML**

- Um punhado de **_tags_** no texto
  - As _tags_ marcam (definem) a estrutura do texto
  - Existem dezenas de _tags_ (umas 50? 60?) e cada uma tem um propósito e um
    resultado visual
  - A grande maioria delas precisam ser abertas e depois fechadas
    (e.g., `<p>...</p>` delimitando um parágrafo)
- Indentação e espaçamento são livres e não afetam o resultado
- Um arquivo HTML é _plain-text_, ou puramente textual
  - em contraposição a um arquivo binário, por exemplo

---
## Exemplo de _tag_: &lt;p&gt;...&lt;p&gt;

- Para marcar onde um **parágrafo** começa e onde ele termina
  ```html
<p>
    You'll find us right in the center of
    downtown Webville. Come join us!
</p>
  ```
- Resultado: apenas um bloco de texto, como esperávamos
  <iframe width="100%" height="120" src="http://jsfiddle.net/fegemo/ofs1csr0/embedded/result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>  

---
## Exemplo de tag: &lt;p&gt;...&lt;p&gt; (cont.)

- **Quebras de linha são feitas automaticamente** dentro de um parágrafo e não
  necessariamente no mesmo lugar que você quebrou a linha no seu código fonte
```html
<p>
  "Um dos maiores problemas encontrados em viajar no tempo não é
  vir a se tornar acidentalmente seu próprio pai ou mãe. Não há
  nenhum problema em tornar-se seu próprio pai ou mãe com que
  uma família de mente aberta e bem ajustada não possa lidar."
</p>
```

---
## Exemplo de tag: &lt;p&gt;...&lt;p&gt; (cont.)

- Resultado: um bloco de texto com quebras de linha onde foram necessárias.
  <iframe width="100%" height="300" src="http://jsfiddle.net/fegemo/62afu86f/embedded/result,html/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

---
## Anatomia de uma _tag_

![Anatomia de uma tag mostrando que ela consiste de seu nome envolto por sinais de "menor que" e "maior que"](../../images/anatomia-tag.png)

- _tag_ de fechamento: &lt;/h1&gt;
  - É idêntica à _tag_ de abertura, porém com uma barra
- Chamamos `<TAG>CONTEÚDO</TAG>` de um **elemento** da página
- _Tags_ de abertura podem ter **atributos**:
  ```html
  <p class="em-destaque">...</p>
  ```
  - No exemplo, `<p>` possui um atributo `class` cujo valor é `em-destaque`
    - Aprenderemos o que o atributo `class` significa depois
  - **Não deve haver espaço** entre seu nome e seu valor:
    &lt;p class = "..."&gt; (errado!)

---
## Voltando ao arquivo completo...

<iframe width="100%" height="500" src="//jsfiddle.net/fegemo/weft22qL/embedded/html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

---
## A _tag_ &lt;html&gt;

- Envolve todas¹ as outras _tags_
  - ¹Exceto a _tag_ especial &lt;!doctype html&gt;
- Dentro dela, **devem existir todas e apenas**, nesta ordem:
  - &lt;head&gt;
  - &lt;body&gt;

---
## A _tag_ &lt;head&gt;

- Do inglês: cabeça
- Contém **meta-informação** sobre este arquivo `html`
  - Título da página (obrigatório)
  - Descrição da página
  - Ícone
  - Inclusão de arquivos (`.css`, `.js`)
- Trecho de código
```
&lt;html&gt;
      &lt;head&gt;
        &lt;title&gt;Este é o título que aparece na aba&lt;/title&gt;
        ...
      &lt;/head&gt;
...
```

---
## A _tag_ &lt;body&gt;

- Do inglês: corpo
- Contém **todo o conteúdo da página**: _tags_ de
  - parágrafos
  - títulos e subtítulos (`<h1>...</h1>`)
  - imagens (`<img>`), etc.
- Trecho de código
```
&lt;html&gt;
    &lt;head&gt;...&lt;/head&gt;
    &lt;body&gt;
        ...
    &lt;/body&gt;
&lt;html&gt;
```

---
## Como o navegador decide **como vai exibir** as _tags_ html?

- Estilos padrão
  - Cor: preto
  - Fundo de tela: branco
  - Fonte: Times New Roman
- Cada navegador pode ter um estilo padrão diferente
- É possível e altamente recomendável **criar estilos próprios**
- Vamos conhecer agora uma segunda linguagem: CSS

---
# Um pouco de estilo
## Conhecendo CSS - Cascading Stylesheets

---
## Definindo o estilo

- Adicionamos um novo elemento: `<style>...</style>`
- Podemos colocá-lo no &lt;head&gt; ou no &lt;body&gt;, mas a **melhor prática é
  no cabeçalho**
```
&lt;html&gt;
      &lt;head&gt;
        &lt;title&gt;Este é o título que aparece na aba&lt;/title&gt;
        &lt;style type="text/css"&gt;

        &lt;/style&gt;
      &lt;/head&gt;
      ...
```

---
## Definindo o estilo (cont.)

```css
body {
  background-color: #d2b48c;
  margin-left: 20%;
  margin-right: 20%;
  border: 2px dotted black;
  padding: 10px 10px 10px 10px;
  font-family: sans-serif;
}
```

...e o resultado...

---
## Definindo o estilo (cont.)

<iframe width="100%" height="500" src="//jsfiddle.net/fegemo/9po3sd1m/2/embedded/result,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

---
## Entendendo o estilo

- Define a cor (_color_) do fundo (_background_) para marrom (definido em
  hexadecimal):
  ```
  background-color: #d2b48c;
  ```  
- Define as margens laterais da página:
  ```
  margin-left: 20%;
  margin-right: 20%;
  ```

---
## Entendendo o estilo (cont.)

- Coloca uma borda preta (_black_) com largura de `2px` e pontilhada (_dotted_):
  ```
  border: 2px dotted black;
  ```
- Altera a fonte para `sans-serif` (parecida com Arial):
  ```
  font-family: sans-serif;
  ```

---
## Entendendo o estilo (cont.)

- Define um espaço de preenchimento de `10px` entre a borda e o conteúdo
  ```
  padding: 10px 10px 10px 10px;
  ```
  - `padding:` é um atalho para
    - `padding-top:`
    - `padding-right:`
    - `padding-bottom:`
    - `padding-left:`
  - Se usarmos a propriedade de atalho, definimos valores para as propriedades
    originais na ordem acima (cima, direita, baixo, esquerda)

---
## Mais sobre atalhos

- Os **resultados são idênticos** de se fazer:
- ```
  padding: 10px 10px 10px 10px;
  ```
- ```
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  ```
- ```
  padding: 10px;
  ```
