const loginUser = {
    method : 'GET',
    url : '/user/login',
    qs : {
        username : "fajrimajid17",
        password : "123456",
    }
  }
  it('LOGIN REGISTERED USER', () => {
    cy.request(loginUser).as('loginUser');
    cy.get('@loginUser').then(loginUser => {
        expect(loginUser.status).to.equal(200);
    }
    )}
  )