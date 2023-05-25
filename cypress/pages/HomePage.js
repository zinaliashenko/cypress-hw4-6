export class HomePage {
  openMenu() {
    cy.get("#open-navigation-menu-mobile").click();
  }
  logOut() {
    cy.contains("Log out").click();
  }
}
