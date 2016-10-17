## Guia Planilhas Eletrônicas - 5

- Assunto: **Planilhas eletrônicas**: Google Spreadsheets
- Objetivos:
  1. Conhecer outra ferramenta de planilha eletrônica
  1. Criar planilhas **colaborativamente**
  1. Usar recursos únicos da ferramenta
  1. Praticar o uso de funções

---
## Enunciado

1. Crie uma [conta Google][conta-google], se ainda <u>não tiver</u> uma
1. Acesse o [Google Drive][google-drive]
1. **Em duplas**, façam os 2 exercícios descritos no próximo slide
  - A primeira dupla a terminar ganhará fantásticos chocolates `:3`
1. Mostre o exercício para o professor em sala de aula, em vez de
  entregar via Moodle

<!-- e crie uma <u>nova planilha</u> -->

[conta-google]: https://accounts.google.com/SignUpWithoutGmail?hl=pt
[google-drive]: drive.google.com

---
## Exercício 1: Celebridades _again_

- **Enunciado**: recrie a planilha `celebridades.ods` no Google Spreadsheets
  1. As fórmulas devem continuar funcionando para as colunas de "capital" e
    "pessoas/km"
  1. Deve ser possível selecionar um país a partir de uma lista
    (aquela caixinha de opções)
- Obs: há mais de uma forma de fazer este exercício

---
## Exercício 2: Gerenciando Dívidas

- **Enunciado**: sua família contraiu dívidas e você decide ajudá-los criando
  uma planilha para gerenciar o pagamento delas
  1. Há uma dívida que é um empréstimo no banco no valor de R$ 10.000,00, em
    20 parcelas fixas de R$ 500,00
  1. A segunda dívida é o parcelamento do cartão de crédito internacional em 10x
    - As 3 primeiras parcelas são $ 200.00 $ 205.00, $ 210.00 e a última é
      $ 295.00 (em Dólares americanos)
- Você deve usar 3 "abas" na sua planilha:
  1. Situação do empréstimo (veja próximos slides)
  1. Situação do cartão de crédito
  1. Visão geral das dívidas

---
## Exercício 2: Gerenciando Dívidas (parte 1)

- **Situação do empréstimo** e do **cartão de crédito**:
  - Cada aba deve conter, em cada linha, uma parcela, descrita por seu
    **número** (e.g., 1 para a 1ª parcela), seu **valor**, o **mês/ano** e um
    **_status_** que indica se ela já foi paga ou não
    - Inicialmente, _status_ está vazio e, quando o pagamento dessa parcela
      for realizado, a pessoa irá escrever "Ok" nessa célula
- **Situação do cartão de crédito** deve conter uma coluna adicional, que é
  o valor da parcela em Reais
  - Use `=GOOGLEFINANCE("CURRENCY:USDBRL")` para perguntar ao Google quantos
    Reais vale 1 Dólar americano
- continua...

---
## Exercício 2: Gerenciando Dívidas (parte 2)

- **Visão geral** deve conter:
  - Em cada linha, uma das dívidas, sendo que a primeira linha é um cabeçalho
    e a última linha totaliza as colunas
  - Nas colunas: (a) nome da dívida, (b) valor total, (c) valor que
    já foi pago, (d) valor remanescente e (e) porcentagem da dívida que foi
    concluída
    - Para encontrar (c), considere a soma das parcelas que já foram pagas
      (i.e., possuem _status_ "Ok")
      - Para isso, busque saber sobre a função `SOMASE(...)` ou `SUMIF(...)`
    - Os valores devem estar todos em Reais

---
## Entrega

Mostre as planilhas para o professor no horário **desta aula**
