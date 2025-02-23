import { DeleteSpecificationUseCase } from "./deleteSpecificationUseCase";
import { Request , Response } from "express";


class DeleteSpecificationController {
    constructor(private deleteSpecificationUseCase: DeleteSpecificationUseCase ) {}

    async handle(request: Request, response: Response) {
        try {
            const {id} = request.body
            await this.deleteSpecificationUseCase.execute(id);
            return response.status(200).json({ message: "Specification deleted with successfully!" });

        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
}
}

export { DeleteSpecificationController };