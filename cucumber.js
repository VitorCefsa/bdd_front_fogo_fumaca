module.exports = {
    default: {
      format: ['html:reports/cucumber-report.html', 'progress'],
      paths: ['features/**/*.feature'],
      require: ['step_definitions/**/*.steps.js'],
      publishQuiet: true,  // Remove o link automático para os relatórios do Cucumber
      timeout: 60000,      // Timeout de 60 segundos para cada cenário
    },
  };
  