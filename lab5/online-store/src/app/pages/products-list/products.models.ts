export interface Product {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    description: string[];
    rating: number;
    link: string;
    likes: number;
    category: string;
}

export interface Category {
    id: string;
    name: string;
}
