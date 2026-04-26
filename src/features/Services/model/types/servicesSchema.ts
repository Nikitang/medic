import { IconTypes } from 'shared/utils/IconMap';

export interface Service {
    title: string;
    description: string;
    icon: IconTypes;
    iconPosition: 'left' | 'right';
}

export interface ServiceSchema {
    data?: Array<Service>;
}
