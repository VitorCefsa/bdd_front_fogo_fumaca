Feature: Testar o modelo de detecção de fogo

  Scenario: Verificar o carregamento da página de teste de modelo
    Given O usuário acessa a página de teste de modelo
    Then A página deve exibir "Teste o modelo de Detecção de Fogo"
    And O feed de vídeo deve estar visível
