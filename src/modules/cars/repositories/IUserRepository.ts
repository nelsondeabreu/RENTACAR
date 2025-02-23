import { User } from "@prisma/client"

interface IUserRepositoryDTO{
    name: string,
    email: string,
    password: string,
    driver_license: string,
    address:      string,
    created_at:   string,
    admin:        string
}


interface IUserRepository {
    create({name,email,address,admin,created_at,driver_license,password }: IUserRepositoryDTO): Promise<User>
    delete(email: string): Promise<void>
    findById(id: string): Promise<User>
    allUsers(): Promise<User[]>
    /* update(email: string, data: Partial<User>): Promise<User>
    verifyEmail(email: string): Promise<User>
    verifyDriverLicense(driver_license: string): Promise<User>
    login(email: string, password: string): Promise<User>
    changePassword(email: string, password: string): Promise<User>
    forgotPassword(email: string): Promise<User>
    resetPassword(token: string, password: string): Promise<User>
    getUserByEmail(email: string): Promise<User>
    getUserByDriverLicense(driver_license: string): Promise<User>
    updateProfile(email: string, data: Partial<User>): Promise<User> */
}

export { IUserRepository, IUserRepositoryDTO }