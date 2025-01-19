# 🌸 Nezuko-2

**Nezuko-2** é um **boilerplate** para projetos baseados no **Next.js 15**, projetado para fornecer uma estrutura inicial sólida e equipada com ferramentas modernas de desenvolvimento. Este repositório inclui configurações pré-definidas para testes, estilização, automação de tarefas e qualidade de código, tornando-o ideal para iniciar rapidamente o desenvolvimento de aplicações web robustas e escaláveis.

## 🛠 **Tecnologias**

### 🔍 **Testes**
- **[Vitest](https://vitest.dev/)**: Framework de testes moderno, rápido e compatível com Jest. Oferece execução de testes em paralelo e suporte nativo a TypeScript.
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)**: Biblioteca para testar componentes React de forma que simula o comportamento do usuário real, focando em testes de integração.
- **[Cypress](https://www.cypress.io/)**: Biblioteca para testes end-to-end simples e eficientes, permitindo automação em fluxos de integração contínua.

### 🎨 **Estilização**
- **[PostCSS](https://postcss.org/)**: Ferramenta para transformar CSS com JavaScript, permitindo uso de plugins modernos.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário que permite estilização rápida através de classes pré-definidas e altamente customizável.
- **[Class Variance Authority (CVA)](https://cva.style/docs/getting-started/installation)**: Biblioteca leve para gerenciamento dinâmico de classes CSS, com suporte às variantes (tamanhos, cores ou estados) de forma clara, tipada e eficiente.

### ✅ **Qualidade de Código**
- **[ESLint](https://eslint.org/)**: Ferramenta de linting para identificar e corrigir problemas no código JavaScript/TypeScript.
- **[Prettier](https://prettier.io/)**: Formatador de código que garante consistência no estilo de código em todo o projeto.
- **[CommitLint](https://commitlint.js.org/)**: Garante que as mensagens de commit sigam um padrão estabelecido (Conventional Commits).

### 🤖 **Automação**
- **[Lefthook](https://github.com/evilmartians/lefthook)**: Gerenciador de git hooks que executa tarefas automatizadas antes de commits e pushes, como:
  - Formatação de código.
  - Verificação de lint.
  - Execução de testes.
  - Build de verificação antes de push.

## 🚀 **Como usar**

1. **Clone o repositório**:

```bash
npx create-next-app@latest -e https://github.com/italobarrosme/nezuko-2
```

2. **Instale as dependências**:

```bash
npm install
```

3. **Prepare os git hooks**:

```bash
npm run prepare
```

4. **Inicie o servidor de desenvolvimento**:

```bash
npm run dev
```


## 📝 **Scripts Disponíveis**

### 💻 Desenvolvimento
- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera a versão de produção.

### 🧪 Testes
- `npm run test`: Executa os testes.
- `npm run test:e2e`: Executa os testes end-to-end (Cypress).

### ✨ Qualidade de Código
- `npm run lint`: Verifica problemas de linting.
- `npm run format`: Formata o código usando Prettier.

### 🔧 Automação
- `npm run prepare`: Sincroniza os git hooks de automação.


## 🧑‍💻 **Contribuições**
Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias ou correções. Sua contribuição é muito bem-vinda! 🙌


**Feito com ❤️ por [@italobarrosme](https://github.com/italobarrosme)**.

