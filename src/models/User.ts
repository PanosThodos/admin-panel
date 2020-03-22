export class User {

    id: string;
    photo: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    address: string;


    constructor(
        // data: any = {}
        data?: {
            id: string,
            photo: string;
            name: string;
            company: string;
            email: string;
            phone: string;
            address: string;
        }
    ) {
        this.id = data.id ?? '';
        this.photo = data.photo ?? '';
        this.name = data.name ?? '';
        this.company = data.company ?? '';
        this.email = data.email ?? '';
        this.phone = data.phone ?? '';
        this.address = data.address ?? '';
    }

}