# Você terminou o primeiro exercício!!

O arquivo _hosts_ pode ser usado para
que possamos referenciar outras máquinas da rede através de nomes, em vez de
IPs.

Da mesma forma, um vírus pode alterar seu arquivo _hosts_ com o intuito de
redirecioná-lo ao IP de um site malicioso quando utiliza-se de um nome legítimo
(por ex., acessando-se www.itau.com.br apontando para um site que contém um
vírus ou mesmo uma fachada falsa do itaú para roubar sua senha do banco).

---
# **Malware**
---
## **Prevenção** de _Malware_

- Devemos sempre ter um anti-malware instalado e realizar busca programada
  - [SpyBot](http://www.safer-networking.org/) (versão gratuita)
  - MalwareBytes (versão gratuita)
  - AVG (versão gratuita)
- Também devemos realizar **_backups_** (cópias de segurança) de arquivos de
  dados
  - Arquivos de instalação: relacionados ao funcionamento do sistema operacional
    e dos programas instalados
  - **Arquivos de dados** são aqueles de informações pessoais como documentos,
    fotos, imagens, livros etc.

---
## **Prevenção** de _Malware_ (cont.)

- É necessário manter atualizados o anti-malware e as **definições de infecção**
- Sem um programa anti-malware, ou mesmo com programas desatualizados, podemos
  começar a perceber **comportamentos estranhos** em um computador
  - Sua página inicial do navegador foi alterada
  - O motor de busca do navegador foi alterado
  - Janelas _popup_ aparecem aleatoriamente durante a navegação
  - Seu usuário do facebook posta mensagens sozinho
  - O cartão de crédito do seu pai foi clonado

---
## **Detecção** de _Malware_

1. Instalar, Atualizar e Executar buscas em anti-malwares
1. Verificar e desinstalar programas "suspeitos"
  - Painel de controle / Adicionar e remover programas
1. Verificar no registro de inicialização do sistema operacional por aplicativos
  suspeitos e desativá-los
  - `msconfig`
  - Gerenciador de tarefas
1. Verificar por extensões de navegador com códigos maliciosos "pegando carona"
  (_hijacking_)

---
## Atividade

1. Instalar o SpyBot: http://www.safer-networking.org/
1. **"Imunizar"** seu sistema para todos os navegadores
1. Abrir seu arquivo _hosts_ e ver as entradas que estão nele

---
## Exercício (para entregar)

Responda esta e as questões seguintes considerando o formato esperado para
suas respostas que conversamos mais cedo.

**Questão 1)** Por que seu arquivo _hosts_ agora tem várias novas entradas?

**Questão 2)** Por que as novas entradas do seu arquivo _hosts_ apontam para
`127.0.0.1`?

---
## Atividade

1. Abra o "Gerenciador de Tarefas" do Windows
1. Na aba de "Processos", consulte duas entradas diferentes da lista (e.g., alg.exe, winlogon.exe)
na Internet para saber se os arquivos são legítimos ou se são maliciosos
1. Envie os arquivos relativos aos dois processos para o site VirusTotal para saber se a sua cópia desses arquivos está infectada ou sã

---
## Exercício

**Questão 3)** Escreva um pequeno relatório sobre o que você descobriu sobre os
dois processos/arquivos relatando se eles são legítimos ou se são maliciosos e
qual é o propósito deles.

Entregar via **Moodle**

---
# Para aprender mais...
---
## Referências

- [Cartilha de Segurança](http://cartilha.cert.br/)
- [Projeto OWASP](https://www.owasp.org/index.php/Main_Page)
