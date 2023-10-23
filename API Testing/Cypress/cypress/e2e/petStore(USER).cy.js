it('CREATE USER', () => {
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
    console.log(body)
    cy.request('POST', '/user', body).as('createUser');
    //add new Todo item by defining Todo name
    cy.get('@createUser').then(createUser => {
      expect(createUser.status).to.equal(200);
    })
  })

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