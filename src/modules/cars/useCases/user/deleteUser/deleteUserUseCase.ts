import { UserRepository } from "../../../repositories/UserRepository";




class DeleteUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(email: string){
        try {
            const userAlreadyExists = await this.userRepository.findByEmail(email);
    
            if (!userAlreadyExists) { throw new Error("user not found."); }

            this.userRepository.delete(email)
            
        } catch (error) {
            throw error
        }
    }
}

export { DeleteUserUseCase }