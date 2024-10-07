# Automação de Testes para Projeto de Detecção de Fogo e Fumaça

Este repositório contém os testes automatizados utilizando **Playwright** para o projeto de detecção de fogo e fumaça. Os testes cobrem várias funcionalidades do frontend, incluindo a página inicial e a página de teste de modelo com detecção em tempo real via câmera.

## Funcionalidades dos Testes

- Verificação do carregamento da página inicial.
- Testes da funcionalidade de detecção de fogo utilizando feed de vídeo da câmera.
- Estrutura modular com **pages** (páginas) para encapsular as interações da UI.
- Integração futura com **BDD** usando **Cucumber.js** para cenários de testes em linguagem natural (Gherkin).

## Estrutura do Projeto

A estrutura de pastas e arquivos está organizada da seguinte maneira:

```plaintext
automacao_teste_front_fogo_fumaca/
├── pages/                  # Classes para representar as páginas da aplicação
│   ├── homePage.js         # Página inicial
│   └── testarModeloPage.js # Página de teste do modelo de detecção de fogo
│
├── tests/                  # Testes automatizados
│   ├── home.test.js        # Testes da página inicial
│   └── testar_modelo.test.js # Testes da página de detecção de fogo
│
├── playwright.config.js    # Configuração do Playwright
├── package.json            # Gerenciador de dependências
└── .gitignore              # Arquivos e pastas ignorados pelo Git
