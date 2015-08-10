# Informática - REDES

- Disciplina: **Laboratório de Fundamentos de Informática**
- Professor: **[Flávio Coutinho](mailto:coutinho@decom.cefetmg.br)**

---
## Guia 16

- Assunto: **Segurança da Informação**
- Objetivos:
  1. Conhecer os fundamentos de Segurança da Informação
  1. Entender a **resolução de DNS local** (arquivo _hosts_)
  1. Prevenção, detecção e mitigação de **malware**

---
## Roteiro

1. Avisos
1. Segurança e DNS
1. Atividades sobre _malware_
   <marquee>ENTREGA DE EXERCÍCIO via Moodle</marquee>

---
# Parte 1: Avisos

---
## Pré-relatório desta aula

Entregar via **Moodle**.

[Link para entrega](http://moodle.cefetmg.br/mod/assignment/view.php?id=13128)

---
## Formato de entrega dos trabalhos

Você deve entregar suas atividades desta disciplina, a partir de hoje, seguindo
os formatos descritos a seguir:
1. Seu trabalho deve ser escrito no programa **Word** ou em sua versão software
   livre **LibreOffice Writer**.
1. O trabalho deve ser **entregue no formato pdf**

---
## Formato de entraga dos trabalhos

- Você deve escrever respostas aos enunciados dos exercícios como um
  **texto completo**, da mesma forma que você o faz nas aulas de Português.

- Uma resposta em texto completo deve possibilitar um leitor que tem acesso
   apenas à resposta de saber com facilidade o que foi perguntado.

---
## Exemplo

Questão 1) O que é DDoS?

Formato correto: No contexto de segurança da informação, _Distributed Denial of Services_
(DDoS) ou Negação de Serviços Distribuída refere-se a um ataque cibernético para
impedir que serviços de rede atendam requisições legítimas.


~~Formato incorreto~~: Ataque cibernético para impedir que serviços atendam requisições
legítimas.

---
# Parte 2: Fundamentos de Segurança da Informação

---
## Conheça o CID da Segurança

![O CID da Segurança](images/cid-seguranca.png)

---
## Conheça o CID da Segurança

A segurança da informação perpassa por 3 grandes pilares:

- **Confidencialidade** (_confidentiality_): a informação não deve ser acessada
  por quem não tem autorização para acessá-la.
- **Integridade** (_integrity_): informações corretas e no formato esperado.
- **Disponibilidade** (_availability_): garantia de que acessos legítimos à
  informação são sempre possíveis.

---
## Os 10 Mandamentos da Segurança da Informação

1. Utilize senhas difíceis de serem descobertas;
2. Altere sua senha periodicamente;
3. Tome cuidado com downloads;
4. Tome cuidado com e-mails de remetentes desconhecidos;
5. Evite sites com conteúdos duvidosos;

---
## Os 10 Mandamentos da Segurança da Informação (cont.)

6. Não abra anexos de e-mails desconhecidos;
7. Tome cuidado com compras na Internet;
8. Tome cuidado ao acessar sites de bancos;
9. Não revele informações sobre você na Internet;
10. Ao informar dados em sites, verifique se a página é segura (com prefixo “https”).

---
# Parte 3: Resolução local de DNS

---
## O arquivo _hosts_

Um mapeamento de nomes (_Domain Names_) para endereços IP que é a primeira fonte
de pesquisa do sistema operacional para a resolução de DNS.

Localização:
- Windows: `C:\Windows\system32\drivers\etc\hosts`
- Unix: `/etc/hosts`

---
## Exercício (sem entrega)

1. Você deve **localizar o arquivo _hosts_** e **criar uma entrada nele** para
   que o nome "fessor" (sem àspas) aponte para o _notebook_ do professor.
2. Acessar, no seu navegador, o computador do professor na porta 8081

---
O cachorro do professor comeu este slide.
---
Este também...
---
...e mais outro...
---
...
---
...e agora? Acho que a resposta está em outro lugar... Que tal voltar para os
slides 15 e 16?
