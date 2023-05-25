import { Login } from "../pages/Login";
const LoginPage = new Login();

import { HomePage } from "../pages/HomePage";
const Home = new HomePage();

describe("Тестування логінки", () => {
  it("test login page user", () => {
    LoginPage.navigate();
    LoginPage.inputLoginFieldsUser();
    LoginPage.clickOnLoginButton();
    Home.openMenu();
    Home.logOut();
  });
  it("test login page tester", () => {
    LoginPage.navigate();
    LoginPage.inputLoginFieldsTester();
    LoginPage.clickOnLoginButton();
    Home.openMenu();
    Home.logOut();
  });
});
