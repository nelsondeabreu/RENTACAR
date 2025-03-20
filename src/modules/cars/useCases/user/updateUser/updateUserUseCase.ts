import { UserRepository } from "../../../repositories/UserRepository";

interface IRequest{
    id: string,
    data: {
        name?: string,
        email?: string,
        password?: string,
        driver_license?: string,
        address?: string,
        admin?: string
    }
}


class UpdateUserUseCase {
    constructor(private userRepository: UserRepository) {}
        async execute({id ,data}: IRequest){
            try {
                const {name , driver_license , address ,admin } = data

                const findByID = await this.userRepository.findById(id)
                if (!findByID) { throw new Error("user not found."); }

                if (!name || !driver_license || !address || !admin) {
                    throw new Error("Invalid update , preenchimento obrigatorio de todos os campos.");
                }
                const getUserByDriverLicense = await this.userRepository.getUserByDriverLicense(driver_license)
                if (getUserByDriverLicense) { throw new Error("Driver license alreadyExists!");}
                
                const isValidDriverLicense = this.userRepository.isValidDriverLicense(driver_license)
                if (isValidDriverLicense) { throw new Error("Invalid Driver License."); }
                
                const user = await this.userRepository.update(id , data);
                
                const {password,...dadosVisiveis} = user;
                return dadosVisiveis;

        } catch (error) {
            throw error
        }
    
    }
}

export {UpdateUserUseCase};