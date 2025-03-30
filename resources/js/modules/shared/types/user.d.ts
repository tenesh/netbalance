export interface User {
    id: string;
    name: string;
    email: string;
    tenant_id?: string;
    role: string;
    avatar?: string;
    first_name: string;
    last_name: string;
    middle_name: string;
}
