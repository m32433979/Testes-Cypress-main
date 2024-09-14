describe('Teste de Navegação', () => {
    it('Deve realizar login e navegar até a página de edição de metas', () => {
      // Passo 1: Visita a página de login
      cy.visit('https://devsrvapp01.voxdata.local/UserLogOn');
  
      // Passo 2: Preenche os campos de login (usuário, senha e estação de trabalho)
      cy.get('input[placeholder="Usuário"]').type('aqueiroz');
      cy.get('input[placeholder="Senha"]').type('12345');
      cy.get('input[placeholder="Estação de Trabalho"]').type('desenv07');
      // Passo 3: Clica no botão "Entrar"
      cy.get('#btnLogon').should('be.visible').click();
      
      // Passo 4: Seleciona o perfil de administrador
      cy.get('#listProfiles_LinkButton5_0').contains('Administrador').click();
      
      cy.wait(3000);
      // // Passo 5: Clica na opção "Administrador" na área administrativa
      cy.get('.q-item').should('be.visible');
      cy.contains('.q-item','Administrador').click();
      // // Passo 6: Navega até a seção de "Metas"
      cy.contains('.q-item','Metas').click();
      //Cadastrar campanhas 
      cy.wait(3000);
      cy.get('input[placeholder="Digite aqui a sua busca"]').type('25/09/2024')
    cy.get('tbody tr').first().find('.q-btn').click();
    cy.contains('.q-item', 'Campanhas').click();
    cy.contains('.q-btn','Adicionar').click(); 
    cy.wait(3000);
    cy.contains('.q-input','Nome da campanha').find('input').type('Banpará')
    cy.contains('.q-input', 'Valor da campanha').find('input').type('1000000')
    cy.contains('.q-input', 'Data Inicial').find('input').type('04092024')
    cy.contains('.q-input', 'Data Final').find('input').type('25092024')
    cy.contains('.q-btn', 'add').click()
    cy.wait(3000);
    cy.contains('.q-input','Nome da campanha').find('input').type('Natal')
    cy.contains('.q-input', 'Valor da campanha').find('input').type('1000000')
    cy.contains('.q-input', 'Data Inicial').find('input').type('04092024')
    cy.contains('.q-input', 'Data Final').find('input').type('25092024')
    cy.contains('.q-btn', 'add').click()
    cy.wait(3000);
    //Editar campanha durante o cadastro
    cy.contains('.q-btn', 'edit').click(); // Acessa o botão de edição
    cy.wait(3000)
    cy.contains('.q-input', 'Nome da campanha').click().clear().type('Ano novo')
    cy.contains('.q-input', 'Valor da campanha').click().clear().type('1000000')
    cy.contains('.q-input', 'Data Inicial').find('input').type('04092024')
    cy.contains('.q-input', 'Data Final').find('input').type('25092024')
    cy.contains('.q-btn', 'add').click()
    //Excluir campanha durante o cadastro
    cy.wait(3000)
    cy.contains('.q-btn', 'delete').click();
    cy.contains('.q-btn', 'Confirmar').click();
    cy.contains('.q-input', 'Nome da campanha').click().type('Ano novo')
    cy.contains('.q-input', 'Valor da campanha').click().clear().type('1000000')
    cy.contains('.q-btn', 'add').click()
    cy.contains('.q-btn', 'Salvar').click()
    cy.wait(3000)
    //Excluir campanha já cadastrada
    cy.get('tbody tr').first().find('.q-btn').click();
    cy.contains('.q-item', 'Excluir').click()
    cy.contains('.q-btn', 'Confirmar').click()
    cy.wait(3000)
    cy.get('tbody tr').first().find('.q-btn').click();
    cy.contains('.q-item', 'Excluir').click()
    cy.contains('.q-btn', 'Confirmar').click()
    //Editar campanha ja cadastrada
    cy.contains('.q-btn', 'Editar').click()
    cy.wait(3000)
    cy.contains('.q-input', 'Nome da campanha').click().type('Ano novo')
    cy.contains('.q-input', 'Valor da campanha').click().type('1000000')
    cy.contains('.q-input', 'Data Inicial').find('input').type('04092024')
    cy.contains('.q-input', 'Data Final').find('input').type('25092024')
    cy.contains('.q-btn', 'add').click()
    cy.wait(3000)
    cy.contains('.q-input','Nome da campanha').find('input').type('Natal')
    cy.contains('.q-input', 'Valor da campanha').find('input').type('1000000')
    cy.contains('.q-input', 'Data Inicial').find('input').type('04092024')
    cy.contains('.q-input', 'Data Final').find('input').type('25092024')
    cy.contains('.q-btn', 'add').click()
    cy.contains('.q-btn', 'Salvar').click()
  });
});