describe("Тест відвідування сайту goit", () => {
  it("Тест відвідування сайту goit для юзера", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.login("user888@gmail.com", "1234567890");
    cy.get("[type='submit']").click();
    cy.get("#open-navigation-menu-mobile").click();
    cy.contains("Log out").click();
  });

  it("Тест відвідування сайту goit для тестовика", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.login("testowyqa@qa.team", "QA!automation-1");
    cy.get("[type='submit']").click();
    cy.get("#open-navigation-menu-mobile").click();
    cy.contains("Log out").click();
  });
});
