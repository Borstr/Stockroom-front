interface Task {
    id: string,
    title: string;
    products: ProductInDemand[];
    entryDate: string;
    finishDate: string;
    instructions: string;
}

interface ProductInDemand {
    product: Product;
    amount: number;
}

interface Product {
    title: string;
    color?: string;
    model?: string;
    inStock: number;
    inDelivery: number;
    width?: number;
    length?: number;
    height?: number;
    imagePath?: string;
    id: string;
}

export type {
    Task,
    ProductInDemand,
    Product
}