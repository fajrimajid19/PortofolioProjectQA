import 'cypress-file-upload';
    
    it('Testing Portal UAD', function() {
        cy.visit('https://portal.uad.ac.id/login')

        //Loginform
        cy.get(':nth-child(1) > .input-icon > .form-control').type('1800018300')
        cy.get(':nth-child(2) > .input-icon > .form-control').type('1800018300')
        cy.get('.form-actions > .btn').click()
        cy.contains('Kemahasiswaan').click()
        cy.contains('Prestasi Mahasiswa').click()
        cy.get('.portlet-body > .btn-primary').click()
        //Eventform
        cy.get(':nth-child(3) > .col-md-9 > [placeholder=""]').type('LKTI INFORMATIKA')                 
        cy.get('[placeholder="Event Name"]').type('INFORMATIKA SCIENTIFIC WRITING')
        //Judulform
        cy.get(':nth-child(4) > .col-md-9 > [placeholder=""]').type("PROJECT DEBUG")
        cy.get('[placeholder="Tittle"]').type("[PROJECT DEBUG")
       //JenisKegiatanform
        cy.get('#select2-chosen-1').click()
        cy.get('#s2id_autogen1_search').type('Lomba Karya Tulis{enter}')
        //Peran Kegiatan
        cy.get('#select2-chosen-2').click()
        cy.get('#s2id_autogen2_search').type('Juara Lomba{enter}').debug()
        
        
        //Lingkup Kegiatan
        cy.get('#select2-chosen-3').click()
        cy.get('#s2id_autogen3_search').type('Internasional{enter}') 
        //TahunForm   
        cy.get(':nth-child(10) > .col-md-2 > .form-control').type('2023')
        //Tempatkegiatanform
        cy.get(':nth-child(11) > .col-md-6 > .form-control').type('Jogja')
        cy.get('#select2-chosen-4').click()
        //Organisasi
        cy.get('#s2id_autogen4_search').type('HMPS{enter}')
        cy.get('#select2-chosen-6').click()
        //Keikutsertaanform
        cy.get('#s2id_autogen6_search').type('Individu{enter}')
        //UploadFile form
        const filePath= 'fajri.jpeg'
        cy.get('#file_prestasi', { timeout: 10000 })
        .attachFile(filePath, {subjectType: 'drag-n-drop'}).debug()
        //Submit
        cy.get('.green', { timeout: 10000 }).click()
        

    



        //cy.get(':nth-child(8) > .col-md-2 > .form-control').type('01-01-2023').should('have.value', '01-01-2023').click()
        
        //cy.get(':nth-child(9) > .col-md-2 > .form-control').type('02-02-2023').should('have.value', '02-02-2023').click()



        

        // cy.get(':nth-child(8) > .col-md-2 > .form-control').click()
       // cy.get('.datepicker-days > .table-condensed > thead > :nth-child(1) > .datepicker-switch').select('June 2022').click()
        // cy.get('tbody > :nth-child(2) > :nth-child(7)').click();
        // Select month
       
    // Select day
    
    
        
        
        
        //cy.get('select').select('2023/2024 Genap')
        //cy.get(':nth-child(13) > td > .btn').click()

    


})
