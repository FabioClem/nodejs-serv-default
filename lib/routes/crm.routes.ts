import { Request, Response, NextFunction } from "express";
import { ContactController } from "../controllers/crm.controller";

export class CrmRoutes {

    public contactController: ContactController = new ContactController();

    public routes(app): void {
        /**
         * 
         */
        app.route('/contact')
            .get((req: Request, res: Response, next: NextFunction) => {
                next();
            }, this.contactController.getContacts)
            .post(this.contactController.addNewContact);

        // Contact detail
        app.route('/contact/:contactId')
            .get((req: Request, res: Response, next: NextFunction) => {



                next();
            }, this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact)
    }
}