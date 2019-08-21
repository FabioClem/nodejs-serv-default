import { Request, Response, NextFunction } from "express";
import { ContactController } from "../controllers/crmController";

export class Routes {

    public contactController: ContactController = new ContactController();

    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200)
                    .send({
                        message: 'Sucesso'
                    });
            });

        // Contact 
        app.route('/contact')
            .get((req: Request, res: Response, next: NextFunction) => {
                next();
            }, this.contactController.getContacts)
            .post(this.contactController.addNewContact);

        // Contact detail
        app.route('/contact/:contactId')
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact)
    }
}