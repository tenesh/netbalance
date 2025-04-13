export interface Plan {
    id: string;
    name: string;
    description?: string;
    type: string;
    tax_category: string;
    image_url?: string;
    custom_data?: object;
    status: string;
    created_at: string;
    updated_at: string;
}
