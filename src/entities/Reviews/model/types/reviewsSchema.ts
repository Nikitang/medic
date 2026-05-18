export interface Reviews {
    id: string;
    fullName: string;
    photo: string;
    specialization: string;
}

export interface ReviewsSchema {
    data?: Array<Reviews>;
}
