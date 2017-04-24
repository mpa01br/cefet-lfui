## Guia 14

- Assunto: Linha de comando no **Windows**
- Objetivo:
  1. Conhecer a organização de pastas do Windows
  1. Conhecer e exercitar os comandos _shell_ no Windows

---
# Estrutura dos diretórios no Windows

---
## Diretórios na **pasta raiz (C:)**

![](images/estrutura-diretorios-windows.png)

---
<!--
backdrop: cmd-and-powershell
-->

# Comandos do **_shell_** (ou **terminal**)

---
## Histórico de _shell_ para Windows (1/3)

- Até as versões Windows 9x, o _shell_ presente era o <u>**COMMAND.COM**</u> (que era o MS-DOS)
  - Ele era o primeiro aplicativo iniciado pelo SO quando o computador ligava
  - A interface gráfica do Windows era um programa iniciado pelo COMMAND.COM
- Nas versões NT do Windows (Windows 2000 em diante), o _shell_ passou a ser o <u>**cmd.exe**</u>
  - O _shell_ passou a ser uma emulação do MS-DOS e era chamado pelo usuário apenas
    se ele quisesse/precisasse
  - Veja a **foto da direita** (fundo preto) do _slide_ anterior

---
## Histórico de _shell_ para Windows (2/3)

- Além de expor os comandos, o _shell_ também pode executar pequenos programas interpretados (_vs_ compilados) chamados
  **arquivos de processamento em lote** (ou `.bat`)
  - Exemplo de arquivo `.bat`:
    ```bat
    @echo off
    ping www.google.com.brrrr -n 1 -w 1000 > nul
    if errorlevel 1 ( echo Site fora do ar ou inexistente )
    else ( echo Site funcionando  )
    ```
    - Baixar [essa versão do `.bat`](attachments/guia14/google-online.bat) e outra que recebe o [site como parâmetro](attachments/guia14/site-online.bat)

---
## Histórico de _shell_ para Windows (3/3)

- A partir do Windows 7, a Microsoft lançou um _shell_ bem mais poderoso e flexível chamado <u>**Windows PowerShell**</u>
  - Veja a **foto da esquerda** (fundo azul) de três _slides_ atrás
  - Dá acesso a funções da plataforma .NET (linguagens C#, Visual Basic etc.)
  - Suporta praticamente todos os comandos de `cmd.exe` e **vários do `bash` (Linux)**
  - O `cmd.exe` continua presente no Windows, mesmo com o PowerShell

---
## Abrindo um _shell_

- O **cmd.exe**
  - No menu iniciar, procure por <u>Prompt de Comando</u>
  - No teclado: <kbd>Super</kbd><kbd>R</kbd>, digite `cmd.exe` (pode omitir `.exe`) e aperte <kbd>Enter</kbd>
- O **PowerShell**
  - No menu iniciar, procure por <u>Windows PowerShell</u>
  - No teclado: <kbd>Super</kbd><kbd>R</kbd>, digite `powershell.exe` (pode omitir `.exe`) e aperte <kbd>Enter</kbd>
- Vejamos alguns comandos que podem ser executados no **`cmd.exe`**: https://pt.wikibooks.org/wiki/MS-DOS/Lista_de_comandos

---
## Comandos de sessão (1/2)

- Encerra a sessão (fecha a tela do _prompt_)
  ```
  C:\> exit
  ```
- Limpa a tela do _shell_
  ```
  C:\> cls
  ```

| cmd.exe               | PowerShell                    | bash (Linux)         | Descrição do comando                         |
|:----------------------|:------------------------------|:---------------------|----------------------------------------------|
| **`exit`**            | `exit`                        | `exit`               | Encerra a sessão (fecha a tela do _prompt_)  |
| **`cls`**             | `cls`, `clear`                | `clear`, `reset`     | Limpa a tela                                 |

---
## Comandos de sessão (2/2)

- Encerra a sessão do usuário corrente (faz _log off_)
  ```
  C:\> shutdown -l
  ```
- Desliga o computador
  ```
  C:\> shutdown -f
  ```

| cmd.exe               | PowerShell                    | bash (Linux)         | Descrição do comando                         |
|:----------------------|:------------------------------|:---------------------|----------------------------------------------|
| `shutdown -f`         | `shutdown -f`                 | `halt`, `shutdown`   | Desliga o computador                         |
| `shutdown -l`         | `shutdown -l`                 | `logout`             | Encerra a sessão do usuário corrente         |

---
## Comandos de **ajuda**

- Mostra ajuda completa sobre o `comando`
  ```
  C:\> help comando
  ```
  - Exemplo:
    ```
    C:\> help shutdown
    ```
    - Um texto será mostrado com informações sobre como o comando `shutdown` funciona

| cmd.exe               | PowerShell                    | bash (Linux)               | Descrição do comando                   |
|:----------------------|:------------------------------|:---------------------------|----------------------------------------|
| `help`                | `gcm`                         | `apropos`, `type`, `which` | Mostra os comandos disponíveis         |
| **`help`**            | `help`, `man`                 | `man`, `info`              | Mostra ajuda aos comandos              |


---
## Navegação no **sistema de arquivos** (1/5)

- Mostra qual é o diretório corrente - em que pasta o usuário está
  ```
  C:\> cd
  ```
  - Exemplo:
    ```
    C:\Users\Flavio> cd
    C:\Users\Flavio
    C:\Users\Flavio>
    ```

| cmd.exe               | PowerShell                    | bash (Linux)         | Descrição do comando                   |
|:----------------------|:------------------------------|:---------------------|----------------------------------------|
| cd                    | gl, cd, pwd                   | pwd                  | Mostra qual é o diretório atual        |

---
## Navegação no **sistema de arquivos** (2/5)

- Altera o <u>d</u>iretório <u>c</u>orrente para `novo_diretorio`
  ```
  C:\> cd novo_diretorio
  ```
  - Exemplo:
    ```
    C:\> cd Users
    C:\Users>
    ```
    - Muda para o diretório `C:\Users`

| cmd.exe               | PowerShell                    | bash (Linux)         | Descrição do comando                   |
|:----------------------|:------------------------------|:---------------------|----------------------------------------|
| cd, chdir             | sl, cd, chdir                 | cd                   | Altera (entra) o diretório corrente    |

---
## Navegação no **sistema de arquivos** (3/5)

- **Nomes especiais** de diretórios:
  - `.`
    - O próprio diretório corrente
  - `..`
    - O diretório "pai" (ancestral) do diretório corrente
    - Exemplo:
      ```
      C:\Users\Flavio\Desktop> cd ..
      C:\Users\Flavio>
      ```
      ```
      C:\Users\Flavio> cd ../..
      C:\>
      ```

---
## Navegação no sistema de arquivos (4/5)

- Lista o conteúdo do <u>dir</u>etório corrente
  ```
  C:> dir
  ```
  - Exemplo:
    ```
    C:\Users\Flavio> dir
    29/06/2015  11:01    < DIR >          .
    29/06/2015  11:01    < DIR >          ..
    29/06/2015  11:01    < DIR >          Desktop
    14/06/2015  16:21    < DIR >          Documents
    29/06/2015  09:53    < DIR >          Downloads
                 0 arquivo(s)          0 bytes
                 5 pasta(s)   288.201.752.576 bytes disponíveis
    ```

---
## Navegação no sistema de arquivos (5/5)

- Lista também os **arquivos e diretórios ocultos**
  ```
  C:\> dir /a
  ```
- Mostra todos os arquivos com uma extensão (por exemplo, .txt):
  ```
  C:\Windows> dir *.log
  ```

| cmd.exe               | PowerShell                    | bash (Linux)         | Descrição do comando                         |
|:----------------------|:------------------------------|:---------------------|----------------------------------------------|
| dir                   | gci, dir, ls                  | ls                   | Lista arquivos e diretórios dentro do atual  |

---
## Alteração no sistema de arquivos (1/5)

- **Cria** (_<u>m</u>a<u>k</u>e_) um novo **<u>dir</u>etório** dentro do diretório atual com o nome `novo_diretorio`
  ```
  C:\> mkdir novo_diretorio
  ```
- **Remove** um diretório **vazio**
  ```
  C:\> rd nome_diretorio
  ```

| cmd.exe               | PowerShell                    | bash (Linux)         | Descrição do comando                         |
|:----------------------|:------------------------------|:---------------------|----------------------------------------------|
| md, mkdir             | md, mkdir                     | mkdir                | Cria um diretório                            |

---
## Alteração no sistema de arquivos (2/5)

- Se precisar **remover** um diretório que **não está vazio**:
  ```
  C:\> rd /S nome_diretorio
  ```
- **Remover todos os arquivos** de uma pasta (**exceto** a própria pasta):
  ```
  C:\> del nome_diretorio
  ```

| cmd.exe               | PowerShell                    | bash (Linux)         | Descrição do comando                         |
|:----------------------|:------------------------------|:---------------------|----------------------------------------------|
| del, erase, rmdir, rd | ri, del, erase, rmdir, rd, rm | rm, rmdir            | Exclui um arquivo / diretório                |

---
## Alteração no sistema de arquivos (3/5)

- **Copia** `nome_arquivo` para a pasta especificada por `destino_da_copia`, opcionalmente mudando o
    nome do arquivo
  ```
  C:\> copy nome_arquivo destino_da_copia
  ```
  - Exemplo:
    ```
    C:\> copy frutas.txt .\arquivos\legumes.txt
    ```
    - Copiou o arquivo `frutas.txt` da pasta do raiz para a pasta `arquivos`, alterando o nome
      do arquivo para `legumes.txt`

| cmd.exe               | PowerShell                    | bash (Linux)         | Descrição do comando                         |
|:----------------------|:------------------------------|:---------------------|----------------------------------------------|
| copy                  | cpi, copy, cp                 | cp                   | Copia arquivos / diretórios para outro lugar |


---
## Alteração no sistema de arquivos (4/5)

- **Move** `nome_arquivo` para uma nova pasta especificada por `nova_pasta_arquivo`, opcionalmente mudando o
    nome do arquivo
  ```
  C:\> move nome_arquivo nova_pasta_arquivo
  ```
  - Exemplo:
    ```
    C:\> move legumes.txt Ingredientes\vegetais.txt
    ```
    - Moveu o arquivo de `legumes.txt` para a pasta `C:\Ingredientes\` com o nome `vegetais.txt`

| cmd.exe               | PowerShell                    | bash (Linux)         | Descrição do comando                         |
|:----------------------|:------------------------------|:---------------------|----------------------------------------------|
| move                  | mi, move, mv                  | mv                   | Move arquivos / diretórios para outro lugar  |

---
## Alteração no sistema de arquivos (5/5)

- **Renomeia** `nome_arquivo_ou_diretorio` para um `novo_nome`
  ```
  C:\> ren nome_arquivo_ou_diretorio novo_nome
  ```
  - Exemplo:
    ```
    C:\> ren legumes.txt vegetables.txt
    ```
    - Alterou o nome do arquivo de `legumes.txt` para `vegetables.txt`

| cmd.exe               | PowerShell                    | bash (Linux)         | Descrição do comando                         |
|:----------------------|:------------------------------|:---------------------|----------------------------------------------|
| ren, rename           | rni, ren, mv                  | mv                   | Renomeia um arquivo / diretório              |

---
## Lendo o conteúdo de arquivos

- Imprime o conteúdo do arquivo `nome_do_arquivo` na tela do terminal:
  ```
  C:\> type nome_do_arquivo
  ```
- Para **abrir arquivos** usando seu **"editor padrão"**:
  ```
  C:\> start nome_do_arquivo
  ```

| cmd.exe               | PowerShell                    | bash (Linux)                         | Descrição do comando                |
|:----------------------|:------------------------------|:-------------------------------------|-------------------------------------|
| **`type`**            | `gc`, `type`, `cat`           | `cat`                                | Mostra o conteúdo de um arquivo     |
| `start`               | `start`, `ii`                 | `kde-open`, `gnome-open`, `xdg-open` | Abre um arquivo com o editor padrão |

---
# Exercício
- Neste laboratório sera necessario criar um arquivo tipo doc para ser enviado ao professor, pelo ambinete AVA. Por isto veja que editor de texto tem seu computador, abra-o e crie um arquivo com seu nome do tipo DOC ou ODF (Word ou Libre Office). 
- Faca o envio no link https://ava.cefetmg.br/mod/assign/view.php?id=2225

---
## Atividade (parte 1/5)

- Tarefa 1: O que é CMD e para que serve? (Responda no arquivo tipo DOC ou ODF com seu nome)
- De uma olhada em comandos CMD no link https://pt.wikibooks.org/wiki/MS-DOS/Lista_de_comandos e faca teste com alguns deles.

---
## Atividade (parte 2/5)

- Tarefa 2: Qual a diferenca entre o CMD e o powershell? (Responda no arquivo tipo DOC ou ODF com seu nome)

---
## Atividade (parte 3/5)
- Tarefa 3: Utilizando comandos no terminal, <u>anote</u> a <u>sequência de comandos</u> utilizados em <u>cada atividade</u>:
  1. Crie um diretório (pasta) em sua área de trabalho (área de trabalho: `C:\Users\aluno\Desktop`) e de seu nome para ele (veja para   
     que serve os comandos cd, md e dir).
  1. Utilizando o comando `notepad texto.txt`, crie um arquivo texto dentro do diretório criado `seu_nome` (digite este comando na linha 
     de comando).
  1. Crie um novo diretório dentro do diretório `seu_nome` com o nome `trabalhos` (veja para que serve os comandos cd, md e dir).
  (Coloque todos estes comando no arquivo tipo DOC ou ODF com seu nome)

---
## Atividade (parte 4/5)
- Continuando tarefa 3...
  1. Copie o arquivo `texto.txt` para o mesmo diretório `seu_nome` mas trocando o seu nome para `copia.txt` (veja para que serve o 
     comando cp e o que significa path).
  1. Mova o arquivo texto `copia.txt` que está no diretório `seu_nome` para o diretório `trabalhos` que está dentro de `seu_nome` (veja 
     para que serve o comando mv e o que significa path).
  1. Apague o arquivo `texto.txt` que está no diretório `seu_nome` (veja para que serve o comando rd, del e deltree).
  1. Exclua o diretório `seu_nome` juntamente com os seus sub-diretórios
  (Coloque todos estes comando no arquivo tipo DOC ou ODF com seu nome) (veja para que serve o comando rd, del e deltree).
  
---
## Atividade (parte 5/5)
- Tarefa 4: Baixe o arquivo site-online.bat (http://mpa01br.github.io/cefet-lfui/attachments/guia-so-3/site-online.bat ou https://ava.cefetmg.br/mod/resource/view.php?id=2228), que verifica se um site existe e está funcionando ou não.
  1. Use esse "programa" para verificar se existem:
    - www.google.com (não use http://)
    - www.eunaoexistomesmo.com (não use http://)
    
  1. Para executar o site-online.bat, baixe-o para uma pasta e, dentro do prompt de comando (CMD), execute:
     C:\pasta_onde_esta_o_arquivo\> site-online.bat www.endereco-do-site.com.
  1. Crie um novo diretório dentro do diretório `seu_nome` com o nome `trabalhos` (veja para que serve os comandos cd, md e dir).
  (Coloque todos estes comando no arquivo tipo DOC ou ODF com seu nome)
  
- Dê um print da tela com as duas respostas e cole no arquivo tipo doc criado.
- Anexe o arquivo a esta tarefa e envie-o: https://ava.cefetmg.br/mod/assign/view.php?id=2225.
