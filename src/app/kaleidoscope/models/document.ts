export interface IDocument {
    id: number;
    name: string;
    author: string;
    dateCreated: Date;
    lastModified: Date;
    employee_first_name: string;
    employee_last_name: string;
    email: string;
    department: string;
    city: string;
    streetAddress: string;
    stockIndustry: string;
    stockName: string;
    imageUrl: string;
    latitude: number;
    longitude: number;
    status: string;
    lastQueue: string;
    lastTransition: Date;
}
