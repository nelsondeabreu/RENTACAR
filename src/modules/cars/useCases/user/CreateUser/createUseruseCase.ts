import { UserRepository } from "../../../repositories/UserRepository";

interface IRequest{
    name:           string,
    email:          string,
    password:       string,
    driver_license: string,
    address:        string,
    admin:          string
}

class CreateUserUseCase {
    constructor(private userRepository: UserRepository) {
        
    }

    async execute({name , email , address , admin ,driver_license ,password}: IRequest) {
        try {
            const isValidEmail = this.userRepository.isValidEmail(email)
            if(!isValidEmail) { throw new Error("Invalid Email.") }
            
            if (!this.userRepository.isValidDriverLicense(driver_license)) 
            {throw new Error("Invalid Lincense.")}

            const driver_licenseExists = await this.userRepository.getUserByDriverLicense(driver_license)
            if (driver_licenseExists) { throw new Error("Driver License already exists.") }

            const userAlreadyExists = await this.userRepository.findByEmail(email);
            if (userAlreadyExists) { throw new Error("User already exists.") }
            
            if(!password) throw new Error("Missing Password.")
            return await this.userRepository.create({
                name, email, password, address, 
                admin, driver_license , created_at: new Date().toLocaleDateString()
            });


        } catch (error) {
            throw error
        }

        
    }
}

export { CreateUserUseCase };