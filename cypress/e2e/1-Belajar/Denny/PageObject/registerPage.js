export const register = () => {
  const usernameInput = () => cy.get("#email");
  const passwordInput = () => cy.get("#pass");
  const submitButton = () => cy.get("#send2");

  const randomEmail = Math.floor(Math.random() * 100000);

  const registerUser = (username, password) => {
    usernameInput().type(username);
    passwordInput().type(password);
    submitButton().click();
  };

  return { registerUser, randomEmail };
};
