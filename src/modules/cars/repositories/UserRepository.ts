import { PrismaClient, User } from "@prisma/client";
import { IUserRepository, IUserRepositoryDTO } from "./IUserRepository";





class UserRepository implements IUserRepository {
    private prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient();
    }
    async create({ name, email, address, admin, created_at, driver_license, password }: IUserRepositoryDTO): Promise<User> {
        return await this.prisma.user.create({
            data: {
                name,
                email,
                address,
                admin,
                created_at,
                driver_license,
                password,
            },
        }); 
    }

    async findByEmail(email: string): Promise<User | null> {
        return await this.prisma.user.findUnique({ where: { email } });
    }
    async update(id: string, data: Partial<IUserRepositoryDTO>): Promise<User> {
        return await this.prisma.user.update({
            where: { id },
            data,
        });
    }
    async delete(email: string): Promise<void> {
        await this.prisma.user.delete({ where: { email } });
    }
    async findById(id: string): Promise<User | null> {
        return await this.prisma.user.findUnique({ where: { id } });
    }
    async allUsers(): Promise<User[]> {
        return await this.prisma.user.findMany();
    }
    
    async getUserByDriverLicense(driver_license: string): Promise<User> {
        return await this.prisma.user.findUnique({ where: { driver_license } });
    }

    isValidDriverLicense = (driver_license: string | undefined | null): boolean => {
        const regex = /^ANG-\d{7}$/;
        return regex.test(driver_license); 
    };
}

export { UserRepository };