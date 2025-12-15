# Portfólio Pessoal

Este repositório contém o código-fonte do meu portfólio pessoal (site estático feito com Vite, React e TypeScript).

## Visão geral

- **Tecnologias:** Vite, TypeScript, React, Tailwind CSS, shadcn-ui
- **Objetivo:** Apresentar projetos, experiências e informações de contato.

## Como rodar localmente

1. Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/PauloRobertoGomes/paulorobertogomes.github.io.git
cd paulorobertogomes.github.io
```

2. Instale dependências e rode em modo de desenvolvimento:

```bash
npm install
npm run dev
```

O servidor de desenvolvimento do Vite será aberto em `http://localhost:5173` (ou outra porta disponível).

## Deploy

Para publicar a versão de produção use o script de deploy fornecido no `package.json`:

```bash
npm run deploy
```

- `npm run deploy` executa o processo de build e de publicação no GitHub Pages.

Observações:

- Certifique-se de ter Node.js e npm instalados.
- Se o `npm run deploy` exigir um token ou configuração extra (por exemplo `GH_TOKEN` para GitHub Pages), configure as variáveis de ambiente antes do deploy.
