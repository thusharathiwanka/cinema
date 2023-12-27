describe('movie page', () => {
  beforeEach(() => cy.visit('/movies/951491'))

  it('should display header', () => {
    cy.get('.header').should('be.visible')
    cy.get('.header__logo').should('be.visible')
    cy.get('.header__back-link--text')
      .should('be.visible')
      .should('contain', 'Back to Movies')
    cy.get('.header__back-link--img').should('not.be.visible')

    cy.viewport('iphone-6')
    cy.get('.header__back-link--img').should('be.visible')
  })

  it('should display movie details', () => {
    cy.get('.movie-overview').should('be.visible')
    cy.get('.movie-poster__image')
      .should(
        'have.attr',
        'src',
        'https://image.tmdb.org/t/p/w500//aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg'
      )
      .should('exist')
    cy.get('.movie-poster__rating').should('be.visible')
    cy.get('[data-cy="movie-overview__title"]')
      .should('be.visible')
      .should('contain.text', 'Saw X')
    cy.get('[data-cy="movie-overview__subtitle"]').should('be.visible')
    cy.get('[data-cy="movie-overview__overview-content"]')
      .should('be.visible')
      .should(
        'contain.text',
        "Between the events of 'Saw' and 'Saw II', a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps."
      )
    cy.get('[data-cy="movie-overview__year"]')
      .should('be.visible')
      .should('contain.text', '2023')
    cy.get('[data-cy="movie-overview__runtime"]')
      .should('be.visible')
      .should('contain.text', '1h 58m')
  })

  it('should display booking form title', () => {
    cy.get('[data-cy="booking-form__title"]')
      .should('be.visible')
      .should('contain.text', 'Book My Show')
  })

  it('should display time details step by default for booking form', () => {
    cy.get('[data-cy="time-details-form"]').should('be.visible')
    cy.get('.text-input__label')
      .should('be.visible')
      .should('contain.text', 'Select Date*')
    cy.get('.time-details-form__showtime h1')
      .should('be.visible')
      .should('contain.text', '8:30 AM')
  })

  it('should create a booking', () => {
    const today = new Date().toISOString().split('T')[0]
    const nextButton = cy
      .get('[data-cy="booking-form__next"]')
      .should('be.visible')

    cy.get('[data-cy="booked-date-input"]').children().eq(1).type(today)
    nextButton.click()
    cy.get('[data-cy="name-input"]').children().eq(1).type('Test')
    cy.get('[data-cy="email-input"]').children().eq(1).type('test@gmail.com')
    cy.get('[data-cy="mobile-input"]').children().eq(1).type('0777777777')
    nextButton.click()
    cy.get('.seat-layout__row').first().children().eq(0).click()
    cy.get('.seat-layout__row').first().children().eq(1).click()
    cy.get('[data-cy="booking-form__book"]').should('be.visible').click()
    cy.get('[data-cy="booking-summary__title"]').should('be.visible')
    cy.get('.booking-summary__booked-date').should('contain.text', today)
    cy.get('.booking-summary__booked-time').should('contain.text', '8:30 AM')
    cy.get('.booking-summary__seats')
      .children()
      .eq(1)
      .children()
      .eq(0)
      .should('contain.text', 'A1')
    cy.get('.booking-summary__seats')
      .children()
      .eq(1)
      .children()
      .eq(1)
      .should('contain.text', 'A2')
  })
})
