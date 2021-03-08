import { createElement } from "lwc";
import displayCustomerDetails from "c/displayCustomerDetails";

const flushPromises = () => {
  // eslint-disable-next-line no-undef
  return new Promise((resolve) => setImmediate(resolve));
};

describe("c-display-customer-details", () => {
  let element;

  beforeEach(() => {
    element = createElement("c-display-customer-details", {
      is: displayCustomerDetails
    });
  });

  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }

    jest.clearAllMocks();
  });

  it("should test something", async () => {
    //test
    await flushPromises();
    //results
  });
});
