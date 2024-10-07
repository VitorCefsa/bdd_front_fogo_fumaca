Feature: Página Inicial

  Scenario: Verificar o carregamento da página inicial
    Given O usuário acessa a página inicial
    Then O título da página deve ser "Detecção de Fogo"
    And A página deve exibir "Bem-vindo ao Projeto de Detecção de Fogo"
