describe('home page', () => {
  beforeEach(() => cy.visit('/'))

  it('should display header', () => {
    cy.get('.header').should('be.visible')
    cy.get('.header__logo').should('be.visible')
  })

  it('should display page header', () => {
    cy.get('.page-title')
      .should('be.visible')
      .should('contain.text', 'Now Showing')
  })

  it('should display now playing movies', () => {
    cy.get('.movie-card').should('exist').should('have.length.at.least', 1)
    cy.get('.movie-card').eq(0).click()
  })

  it('should link to correct movie page', () => {
    const movie = cy.get('.movie-card')
    if (movie) {
      movie
        .get('[data-cy="movie-card"]')
        .eq(0)
        .invoke('attr', 'href')
        .then((href) => {
          cy.request(href).its('status').should('eq', 200)
        })
    }
  })
})
