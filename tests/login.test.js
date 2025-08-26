import pom from "../pages/LoginPage";

fixture`A base form filling test`
  .page`https://the-internet.herokuapp.com/login`;

test("Fill login input", async (t) => {
  await t
    .typeText(pom.firstName, "tomsmith")
    .expect(pom.firstName.value)
    .eql("tomsmith")
    .typeText(pom.password, "SuperSecretPassword!")
    .expect(pom.password.value)
    .eql("SuperSecretPassword!")
    .click(pom.submitButton);

  await t
    .expect(pom.flashContainer.innerText)
    .contains("You logged into a secure area!");
});
