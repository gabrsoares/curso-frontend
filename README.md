# Curso-frontend
#### EBAC

# GIT

## Conceitos de versionamento 

- Histórico
- Controle de versão
- Quem alterou
- O quê alterou
- Quando alterou
- Todos os arquivos
- Evolução contínua

Arquivo A | Versão 1 | Versão 2 Arquivo B | Versão 1 | Versão 2

## Instalação do Git
https://git-scm.com/

- Windows: https://git-scm.com/download/win
- Linux: (apt-get): sudo apt-get install git
- Mac (brew): brew install git

## Criar conta no Github

## Clonar o projeto 

git clone https://github.com/cavalcantemmarcelo/curso-frontend.git

## Commits

Informação de alteração

- Após testado todo o seu código 
- git add *
- git commit -m "mensagem"
- git push (enviar alterações para o repositório)
- git pull (puxar / trazer alterações do github para sua máquina)

## Gitflow
Fluxo do git

### Branchs
são ramificações / versões paralelas

- main / master (vai para produção quando o projeto é publicado)
- develop
- DOD Definition of Done: critérios de aceite
- versionamento 1.0.0

git checkout -b dev (cria uma branch)
git checkout master (muda de branch)

### Merge
Mescla de branchs
Você pode precisar resolver conflitos manualmente

git merge main 

### Pull requests
Mescla de branchs no repositório
Permite code review
O repositório resolve os conflitos automaticamente


### Configura o gitflow
git flow init 
git flow feature start {nome-da-feature} 
