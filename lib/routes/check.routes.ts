import { Request, Response, NextFunction } from "express";

export class CheckRoutes {

    public routes(app): void {

        /**
         * Check se rest esta funcionando.
         */
        app.route("/")
            .get((req: Request, res: Response) => {
                res.status(200).send(true);
            });
    }

}