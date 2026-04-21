export interface Service {
    title: string;
    description: string;
    icon: string;
}

export interface ServiceSchema {
    data?: Array<Service>;
}
