describe('Home page view flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=8QpQ5HPMwd3rzuHyUhl2eNb1PZZw3frg', {
      fixture: 'articles.json'
    }).as('sampleArticles')
    cy.visit("http://localhost:3000/")
  });

  it('Should visit the website', () => {
    cy.visit("http://localhost:3000/")
  });

  it('Should show a homepage with a title and subtext', () => {
    cy.get('h1').should('be.visible').contains('The News Room')
      .get('h2').contains(' N.Y. Times News Reader')
  });

  it('Should have a search bar with a button that lets the user search for results', () => {
    cy.get('.search-container').should('exist')
    .get('.clear-btn').contains('Clear')
    .get('.search-container').click()
    .get('.all-articles-container').should('have.length', 1)
  });

  it('Should show article cards with sections, images, titles, bylines, and dates', () => {
    cy.get('[href="/2023-01-04T12:31:47-05:00"] > .card > .article-section')
    .get('.article-image').first().should('have.attr', 'src').should('include', "https://static01.nyt.com/images/2023/01/04/us/house-speaker-vote-tally-promo/house-speaker-vote-tally-promo-threeByTwoSmallAt2X.jpg")
    .get('[href="/2023-01-04T12:31:47-05:00"] > .card > :nth-child(3)')
    .get('[href="/2023-01-04T12:31:47-05:00"] > .card > :nth-child(4)')
    .get('[href="/2023-01-04T12:31:47-05:00"] > .card > :nth-child(5)')
  })

  it('Should show an error message if the response is not ok', () => {
    cy.intercept({
        method: 'GET',
        url: 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=8QpQ5HPMwd3rzuHyUhl2eNb1PZZw3frg'
      },
      {
        statusCode: 401,
        body: { 
          message: 'Oops, looks like there was an error!'
        }
      })
  });

  it('Should be able to click on a specific article to view more details on a different page', () => {
    cy.get('[href="/2023-01-04T12:31:47-05:00"] > .card').first().click()
    .url().should("be.equal", 'http://localhost:3000/2023-01-04T12:31:47-05:00')
    .get('.single-article-title').contains("Live Vote Count: Tracking the House Speaker Votes") 
    .get('h2.single-article-details').contains("By Allison McCartney, Alicia Parlapiano and Emily Cochrane") 
    .get('.single-article-container > :nth-child(3)').contains('Published: 01/04/2023')
    .get('.single-article-image').should('have.attr', 'src').should('include', "https://static01.nyt.com/images/2023/01/04/us/house-speaker-vote-tally-promo/house-speaker-vote-tally-promo-threeByTwoSmallAt2X.jpg")
    .get('.single-article-container > :nth-child(6)').contains('Follow live to see how each representative voted for House speaker on each ballot.')
    .get('a').contains('Click to read the full article')
  })


});