describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
  });
});

it("should check for errors", () => {
  //visit the page
  cy.visit("http://127.0.0.1:5500/index.html");
  //click dropdown

  const button = cy.contains("~`");
  button.should("not.exist");

  const nav = cy.get("h1");
  nav.should("be.visible");

  //const input = cy.get("numberInput");
  // input.should("be.empty");

  const addition1 = cy.get(".number__8");
  const addition2 = cy.get(".number__7");

  addition1 + addition2 == cy.should("have.value", 15);

  const value = cy.get("input");
  value.should("not.have.value");
});
