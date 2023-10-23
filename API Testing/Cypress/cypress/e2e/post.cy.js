it('Create a user - Post', () => {
    let body = {
        
            "id": 0,
            "username": "fajrimajid17",
            "firstName": "Muhamad Fajri",
            "lastName": "Majid",
            "email": "fajrimajid17@gmail.com",
            "password": "123456",
            "phone": "0123456",
            "userStatus": 0
          }
    
    cy.request('POST', '/user', body).as('createUser');
    cy.get('@createUser').then(createUser => {
      expect(createUser.status).to.equal(200);
    })
  })
