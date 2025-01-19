# Nezuko-2

Nezuko-2 é um **boilerplate** para projetos baseados no **Next.js 15**, projetado para fornecer uma estrutura inicial sólida e equipada com ferramentas modernas de desenvolvimento. Este repositório inclui configurações pré-definidas para testes, estilização, automação de tarefas e qualidade de código, tornando-o ideal para iniciar rapidamente o desenvolvimento de aplicações web robustas e escaláveis.

## 🛠 Tecnologias

### Testes

- **Vitest**: Framework de testes moderno, rápido e compatível com Jest. Oferece execução de testes em paralelo e suporte nativo a TypeScript.
- **React Testing Library**: Biblioteca para testar componentes React de forma que simula o comportamento do usuário real, focando em testes de integração.
- **Cypress**: Biblioteca para testar de forma simples e eficiente para seus aplicativos web modernos, depurá-los visualmente e automatizá-los em seus fluxos de integração contínua (e2e).

### Estilização

- **PostCSS**: Ferramenta para transformar CSS com JavaScript, permitindo uso de plugins modernos.
- **Tailwind CSS**: Framework CSS utilitário que permite estilização rápida através de classes pré-definidas, altamente customizável.
- **Class Variance Authority (CVA)**: é uma biblioteca leve e poderosa para gerenciamento dinâmico de classes CSS em projetos JavaScript ou TypeScript. Ele facilita a composição de classes condicionais, especialmente em cenários onde você precisa aplicar variantes (como tamanhos, cores ou estados) de forma clara, tipada e eficiente.

### Qualidade de Código

- **ESLint**: Ferramenta de linting para identificar e corrigir problemas no código JavaScript/TypeScript.
- **Prettier**: Formatador de código que garante consistência no estilo de código em todo o projeto.
- **CommitLint**: Garante que as mensagens de commit sigam um padrão estabelecido (Conventional Commits).

### Automação

- **Lefthook**: Gerenciador de git hooks que executa tarefas automatizadas antes de commits e pushes, como:
  - Formatação de código
  - Verificação de lint
  - Execução de testes
  - Build de verificação antes de push

## 🚀 Como usar

1. Clone o repositório

```bash
npx create-next-app@latest -e https://github.com/italobarrosme/nezuko-2
```

2. Instale as dependências:

```bash
npm install
```

```bash
npm run prepare
```

1. Execute o projeto:

```bash
npm run dev
```

## 📝 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera versão de produção
- `npm run test`: Executa os testes
- `npm run lint`: Verifica problemas de linting
- `npm run format`: Formata o código usando Prettier
- `npm run test:e2e`: Inicia testes e2e
- `npm run prepare`: Sicroniza git hooks de automação


