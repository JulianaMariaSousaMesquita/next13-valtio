# Testando Valtio do zero com next13 (Passo a passo)
Este repositório foi criado para fins de teste e demonstração do uso do Valtio (uma biblioteca JavaScript de gerenciamento de estado) em conjunto com o Next.js 13 (um framework React para renderização do lado do servidor) usando o gerenciador de pacotes pnpm.

### Recursos Incluídos:
Configuração básica do Next.js 13.
Exemplo de uso do Valtio para gerenciar o estado em um aplicativo React.
Integração simples do Valtio com componentes do Next.js.
Instruções de Uso:

Clone este repositório em sua máquina local.
Instale as dependências com o comando pnpm install.
Inicie o servidor de desenvolvimento com pnpm dev.
Acesse http://localhost:3000/ValtioTest em seu navegador para ver a demonstração do Valtio em ação.
Este repositório serve como um ponto de partida para explorar o Valtio em um ambiente Next.js 13, usando o pnpm como gerenciador de pacotes. Sinta-se à vontade para usá-lo como base para seus próprios projetos ou experimentos relacionados ao Valtio e ao Next.js, mantendo o uso do pnpm para instalação de pacotes.

## Passo 1: Criar um Novo Repositório no GitHub
1. Acesse o GitHub (**https://github.com/**) e faça login na sua conta (ou crie uma se você ainda não tiver).
2. Clique no botão "+" no canto superior direito e selecione "New Repository".
3. Preencha os detalhes do seu novo repositório:
    - **Repository name**: my-valtio-app-test
    - **Description**: (opcional)
    - **Visibility**: (defina como desejar)
4. Marque a opção "Initialize this repository with a README".
5. Clique em "Create repository" para criar o repositório.

## Passo 2: Clonar o Repositório no seu Computador
1. Abra o terminal no seu computador.
2. Navegue para a pasta onde deseja criar o seu projeto.
3. Use o comando **`git clone`** para clonar o repositório recém-criado no seu computador. Substitua **`<URL do Repositório>`** pela URL do seu repositório no GitHub.

```bash
git clone <URL do Repositório>
```

## Passo 3: Criar um Novo Projeto Next.js com o Nome Específico
1. No terminal, navegue para o diretório do repositório clonado:

```bash
cd my-valtio-app-test
```

1. Crie um novo projeto Next.js com o seguinte comando e siga as instruções:

```bash
npx create-next-app .
```

Isso criará o projeto Next.js no diretório atual (o mesmo onde você clonou o repositório).

- Ao criar um aplicativo Next.js 13, você pode encontrar algumas configurações que podem ser personalizadas durante o processo de criação. Aqui estão algumas das configurações comuns e as diferenças entre escolher "Yes" (Sim) ou "No" (Não):
    1. **Would you like to use TypeScript with this project?**
        - **Yes:** Isso configura o projeto para usar TypeScript como a linguagem principal. Você terá arquivos **`.tsx`** e configurações TypeScript.
        - **No:** O projeto usará JavaScript padrão. Os arquivos terão a extensão **`.js`**.
    2. **Would you like to use ESLint with this project?**
        - **Yes:** Configura o projeto para usar o ESLint para linting e formatação de código. É uma escolha comum para manter um código limpo e consistente.
        - **No:** O projeto não incluirá configurações para o ESLint. Você precisará configurá-lo manualmente, se desejar.
    3. **Would you like to use Tailwind CSS with this project?**
        - **Yes:** Configura o projeto para usar o Tailwind CSS como estrutura de estilo. O Tailwind CSS é uma estrutura de estilo utilitária.
        - **No:** O projeto não incluirá configurações para o Tailwind CSS. Você precisará configurá-lo manualmente, se desejar.
    4. **Would you like to use ESLint with this project?**
        - **Yes:** Configura o projeto para usar o ESLint para linting e formatação de código. É uma escolha comum para manter um código limpo e consistente.
        - **No:** O projeto não incluirá configurações para o ESLint. Você precisará configurá-lo manualmente, se desejar.
    5. **Would you like to enable experimental `enableServerProps`?**
        - **Yes:** Ativa a funcionalidade experimental **`enableServerProps`**, que é parte da abordagem SSR (Server-Side Rendering) do Next.js. Isso permite carregar dados no lado do servidor antes da renderização.
        - **No:** Desativa a funcionalidade **`enableServerProps`** experimental. Você pode usar a abordagem padrão do Next.js para SSR.
    6. **Would you like to customize the default import alias?**
        - **Yes:** Isso permite personalizar o alias de importação padrão no projeto. Por exemplo, você pode alterar o alias padrão de **`@`** para outra coisa, como **`~`**.
        - **No:** Mantém o alias de importação padrão como **`@`**.
    
    A escolha entre "Yes" e "No" depende das necessidades do seu projeto. Se você não tiver certeza, pode começar com as configurações padrão (escolhendo "No") e personalizá-las posteriormente conforme necessário. As escolhas de configuração podem variar de acordo com os requisitos específicos do seu projeto, como o uso de TypeScript, estilo, linting e SSR.
    
    Certifique-se de ler as descrições das configurações ao criar o projeto Next.js para entender melhor suas implicações. Você pode optar por personalizar o projeto de acordo com suas preferências e necessidades específicas.
    

## Passo 4: Instalar o Valtio
1. No terminal, certifique-se de estar no diretório do projeto Next.js (**`my-valtio-app-test`**).
2. Instale o Valtio usando o npm (ou yarn, ou pnpm):

```bash
pnpm install valtio
```

## Passo 5: Criar o Arquivo de Teste Valtio
1. Dentro do diretório do seu projeto Next.js, crie uma nova pasta chamada **`pages`**:

```bash
mkdir pages
```

1. Dentro da pasta **`pages`**, crie um novo arquivo chamado **`ValtioTest.js`** e cole o código do exemplo Valtio que você deseja testar.

```bash
import React from 'react';
import { proxy, useSnapshot } from 'valtio';

// Criando um objeto de estado observável
const state = proxy({ count: 0 });

function Counter() {
  // Usando useSnapshot para observar o estado
  const snap = useSnapshot(state);

  return (
    <div>
      <p>Count: {snap.count}</p>
      <button onClick={() => (state.count += 1)}>Increment</button>
    </div>
  );
}

export default function ValtioTest() {
  return (
    <div>
      <h1>Valtio Example</h1>
      <Counter />
    </div>
  );
}

```
Este código cria um componente React ValtioTest que usa o Valtio para gerenciar o estado do contador. O contador começa em 0 e você pode incrementá-lo clicando no botão "Increment".

## Passo 6: Iniciar o Servidor Next.js
1. No terminal, certifique-se de estar no diretório do projeto Next.js (**`my-valtio-app-test`**).
2. Inicie o servidor Next.js com o seguinte comando:

```bash
pnpm dev
```

## Passo 7: Visualizar a Página

1. Abra seu navegador e acesse **`http://localhost:3000/ValtioTest`** (ou o caminho que você configurou) para ver a página "Valtio Example" com o contador que pode ser incrementado.



# README NEXT13 
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
