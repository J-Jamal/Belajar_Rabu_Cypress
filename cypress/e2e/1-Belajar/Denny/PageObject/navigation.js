export const pages = () => {
  const visitHome = () => {
    cy.visit("https://magento.softwaretestingboard.com/");
  };

  const visitAccount = () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/login/"
    );
  };

  const visitHoodie = () => {
    cy.visit("https://magento.softwaretestingboard.com/hero-hoodie.html");
  };
  const visitTshirt = () => {
    cy.visit("https://magento.softwaretestingboard.com/radiant-tee.html");
  };
  const visitOrderHistory = () => {
    cy.visit("https://magento.softwaretestingboard.com/sales/order/history/");
  };

  const visitDownloadProduct = () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/downloadable/customer/products/"
    );
  };

  const visitWishList = () => {
    cy.visit("https://magento.softwaretestingboard.com/wishlist/");
  };

  const visitAddressBook = () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/address/");
  };

  const visitAccountInformation = () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/edit/");
  };

  const visitPaymentMethod = () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/vault/cards/listaction/"
    );
  };

  const visitProductReview = () => {
    cy.visit("https://magento.softwaretestingboard.com/review/customer/");
  };

  const getSubmit = () => {
    return "#form-validate > .actions-toolbar > div.primary > .action";
  };

  return {
    visitAccount,
    getSubmit,
    visitAccountInformation,
    visitAddressBook,
    visitDownloadProduct,
    visitDownloadProduct,
    visitHome,
    visitHoodie,
    visitOrderHistory,
    visitPaymentMethod,
    visitProductReview,
    visitTshirt,
    visitWishList,
  };
};
