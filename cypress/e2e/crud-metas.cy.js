describe('Teste de Navegação até Edição de Metas', () => {
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

    // // Passo 5: Clica na opção "Administrador" na área administrativa
    cy.get('.q-item').should('be.visible');
    cy.contains('.q-item','Administrador').click();
    // // Passo 6: Navega até a seção de "Metas"
    cy.contains('.q-item','Metas').click();
    // Passo 7: Clicar no botão "Adicionar"
    cy.contains('.q-btn','Adicionar').click();
    // // Passo 8 Preencher campos de cadastro
    // // Passo  Preencher campo produtos
    cy.wait(10000);
    cy.get('.q-select').should('be.visible');
    cy.get('.q-select .q-field__control').contains('Produtos').click({ force: true})
    cy.get('.q-menu .q-item').contains('Consórcio').click({ force: true}); 

    cy.get('.q-select .q-field__control').contains('Tipo').click({ force: true})
    cy.get('.q-menu .q-item').contains('Valor(R$)').click({ force: true}); 
    
    cy.contains('.q-input', 'Valor Total').find('input').type('10000')
   
    cy.contains('.q-input', 'Data Inicial').find('input').type('11092024')
   
    cy.contains('.q-input', 'Data Final').find('input').type('30092024')
    cy.contains('.q-btn', 'Salvar').click()

    cy.wait(4000);
    cy.get('input[placeholder="Digite aqui a sua busca"]').type('100')
    cy.get('tbody tr').first().find('.q-btn').click();
    cy.contains('.q-item', 'Editar').click()

    cy.wait(10000);
    cy.get('.q-select').should('be.visible');
    cy.get('.q-select .q-field__control').contains('Produtos').click({ force: true})
    cy.get('.q-menu .q-item').contains('Empréstimo sazonal').click({ force: true}); 

    cy.get('.q-select .q-field__control').contains('Tipo').click({ force: true})
    cy.get('.q-menu .q-item').contains('Unidade').click({ force: true}); 
    
    cy.contains('.q-input', 'Valor Total').find('input').type('3000')
   
    cy.contains('.q-input', 'Data Inicial').clear()
    cy.contains('.q-input', 'Data Inicial').type('12102024')
   
    cy.contains('.q-input', 'Data Final').clear()
    cy.contains('.q-input', 'Data Final').type('31102024')
    cy.contains('.q-btn', 'Editar').click()

    cy.wait(4000);
    cy.get('input[placeholder="Digite aqui a sua busca"]')
    cy.get('tbody tr').first().find('.q-btn').click();
    cy.contains('.q-item', 'Excluir').click()
    cy.contains('.q-btn', 'Confirmar').click()
  });
});
