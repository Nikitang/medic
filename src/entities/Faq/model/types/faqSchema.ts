export interface Faq {
    id: string;
    title: string;
    description: string;
}

export interface FaqSchema {
    data?: Array<Faq>;
}
