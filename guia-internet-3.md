## Guia Internet 3

- Assunto: **Backup** (Cópia de Segurança) e **Criptografia**
- Objetivos:
  1. Entender o processo de _backup_
  1. Conhecer as etapas e os tipos diferentes de _backup_
  1. Praticar a criação de _backups_ no Windows
  1. Entender e praticar o conceito de cópia criptografada de dados

---
## Roteiro

1. _Backup_
1. Criptografia
   <marquee>ENTREGA DE EXERCÍCIO via Moodle</marquee>

---
# Parte 1: _Backup_

---
![](images/suporte-backup.jpg)

---
## Definição de _Backup_

- Do inglês, "cópia de segurança"
- Pode se referir a:
  1. Uma cópia de arquivos que foi realizada no passado
  1. O processo de criação de cópias (de segurança) de arquivos
- Propósitos
  - **Primário: recuperar dados que foram perdidos por exclusão ou corrupção**
    - Exemplos: ataque, exclusão acidental, dano no disco rígido etc.
  - **Secundário: recuperar dados de um momento anterior**
    - Exemplos: desfazer-se das últimas alterações, manter histórico de
      modificações

---
## Características

- A cópia dos arquivos pode ocupar muito espaço
- Em vez de fazer uma cópia simples, os arquivos são
  1. **Comprimidos**, para ocupar menos espaço
  1. **Deduplicados**, para evitar cópias idênticas do mesmo conteúdo
  1. **Criptografados**, para proteger os dados contra acesso ilegítimo

---
## Tipos de Mídia

- Pode-se armazenar os arquivos de _backup_ em diversos tipos de mídia. Alguns
  exemplos:
  - Fita magnética (ainda é bem comum em _mainframes_)
  - Disco rígico
  - Disco óptico
  - SSD
  - Remoto (_e.g._, na nuvem)
  - Disquete (alguém usa isso? :)

---
## Estratégias de criação de _backups_

1. Não estruturada
  - Exemplo: cópias realizadas sem uma rotina determinada
1. Imagem completa
  - Exemplo: _deep freeze_:
    - programa que congela/reconstrói a imagem do Windows quando este computador
      liga
1. Incremental ou Diferencial
  - Uma cópia completa, seguida de pequenas cópias apenas do que foi alterado
1. Proteção contínua
  - O sistema armazena uma lista de alterações no momento que elas são realizadas

---
# Criptografia

---
## Criptografia

- Etimologia: **cripto + grafia**
  - _kruptós_ (grego antigo): escondido, secreto
  - _graphia_ (latin): escrita
- Criptografar:
  - Conversão de informação de um estado legível **para um estado aparentemente
    sem sentido**
- Descriptografar:
  - Conversão de informação aparentemente sem sentido **para um estado legível**

---
## 3 Estratégias Diferentes

<ol>
  <li>
    Algoritmos de **tabela _hash_**
  </li>
  <li style="clear: both;">
    <img style="float: right; width: 200px" src="images/crypto-symmetric.png">
    Algoritmos de **chave privada** ou algoritmos simétricos
  </li>
  <li style="clear: both;">
    <img style="float: right; width: 200px; margin-top:0.5em;" src="images/crypto-asymmetric.png">
    Algoritmos de **chave pública** ou algoritmos assimétricos
  </li>
</ol>


---
## (1) Algoritmos de **tabela _hash_**

- Exemplos: MD5 (mais famoso), SHA-3 (mais recente e seguro)
- Características:
  - apenas criptografam (não descriptografam)
  - transformam uma mensagem de qualquer tamanho para outra de tamanho fixo
    e curto
- Úteis para:
  - criar uma "assinatura" de um arquivo
    - saber se um _download_ de (e.g.) 10GB está corrompido ou ok
  - salvar uma senha em um formato que não pode ser descriptografado
    - daí um _hacker_ que obtiver acesso à senha (criptografada) não conseguirá
      descobrir a senha de verdade

---
## (2) Algoritmos de **chave privada**

- <img style="float: right; width: 200px" src="images/crypto-symmetric.png">
  Exemplos: DES, AES
- Características:
  - criptografam e descriptografam
  - os dois "lados" precisam usar um mesmo segredo (uma "senha") para
    cripto/descriptografar uma mensagem  
- Úteis para:
  - criptografar e-mails
  - criptografar conexões WiFi
- **Problema**: como um computador combina com o outro qual é o segredo sem que
  haja uma comunicação segura?

---
## (3) Algoritmos de **chave pública**

- <img style="float: right; width: 200px" src="images/crypto-asymmetric.png">
  Exemplo: RSA
- Características:
  - criptografam e descriptografam (igual ao anterior)
  - há uma "chave pública" e uma "chave privada"
    - **chave pública**:
      - qualquer pessoa/programa pode obtê-la (ela não é segura)
      - usada para criptografar
    - **chave privada**: secreta
      - usada para <u>des</u>criptografar
- Úteis para:
  - estabelecer uma conexão segura entre 2 computadores
  - **enviar com segurança** o segredo de um algoritmo de chave privada

---
## Exercício 1

Você deve criptografar uma mensagem
[usando o algoritmo AES](http://aesencryption.net/) (_Advanced Encryption
 Standard_ com <u>128 bits</u>) com **seu número de matrícula como segredo**
e então enviá-la para seu colega ao lado. O colega que receber deve
descriptografar a mensagem e responder de volta, usando seu próprio
número de matrícula como segredo.

Você deve entregar um arquivo PDF contendo:
1. Uma **captura da tela** da mensagem que você enviou e outra da mensagem
  que você recebeu, já descriptografada
1. **As chaves** usadas como segredo

---
## Exercício 2: Pesquise

Pesquise e disserte sobre o papel do algoritmo AES para a segurança
da informação em redes WiFi. Sua resposta deve explicar questões como (a) a
que protocolo de segurança de rede ele está associado, (b) por que é
importante utilizar um algoritmo de criptografia e (c) quais outras
utilizações (além de redes WiFi) podemos dar ao AES ou a outro
algoritmo de criptografia.

Você deve citar pelo menos 2 fontes de pesquisa que encontrar na Internet
como bibliografia.

---
# Referências

- [Ferramenta de Backup do Windows XP](http://www.baboo.com.br/tutorial/tutorial-de-windows/tutorial-windows-xp/ferramenta-de-backup-do-windows-xp-2/)
- [Ferramenta de Backup do Windows 7](http://www.howtogeek.com/howto/1838/using-backup-and-restore-in-windows-7/)
- [Microsoft sobre Backup no Windows XP](https://www.microsoft.com/brasil/windowsxp/using/setup/learnmore/bott_03july14.mspx)
- [Artigo da KB da Microsoft sobre o utilitário Ntbackup.msc](http://support2.microsoft.com/kb/308422/pt-br)
