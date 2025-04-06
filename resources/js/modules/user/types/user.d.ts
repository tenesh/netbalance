export interface User {
    id: string;
    name: string;
    email: string;
    tenant_id?: string;
    type: UserType;
    avatar?: string;
    first_name: string;
    last_name: string;
    middle_name: string;
}

export enum UserType {
    LANDLORD = 'landlord',
    TENANT = 'tenant',
}

export enum UserPermission {
    LIST_LANDLORD_USERS = 'list_landlord_users',
    CREATE_LANDLORD_USER = 'create_landlord_user',
    READ_LANDLORD_USER = 'read_landlord_user',
    UPDATE_LANDLORD_USER = 'update_landlord_user',
    DELETE_LANDLORD_USER = 'delete_landlord_user',
    LIST_ALL_TENANT_USERS = 'list_all_tenant_users',
    LIST_TENANT_USERS = 'list_tenant_users',
    CREATE_TENANT_USER = 'create_tenant_user',
    READ_TENANT_USER = 'read_tenant_user',
    UPDATE_TENANT_USER = 'update_tenant_user',
    DELETE_TENANT_USER = 'delete_tenant_user',
    LIST_TENANTS = 'list_tenants',
    CREATE_TENANT = 'create_tenant',
    READ_TENANT = 'read_tenant',
    UPDATE_TENANT = 'update_tenant',
    DELETE_TENANT = 'delete_tenant',
}
