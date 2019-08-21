import { ContactController } from "./../../controllers/crmController";


describe("TestController", () => {

    let contactController: ContactController = new ContactController();

    it("Testa o GET", async () => {

        expect(contactController.test(5, 5)).toBe(10);

    })

    // test("Test GET", async () => {
    // });

});