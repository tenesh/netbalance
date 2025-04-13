export interface User {
    id: string;
    name: string;
    email: string;
    tenant_id?: string;
    is_admin: boolean;
    avatar?: string;
    first_name: string;
    last_name: string;
    middle_name: string;
}

export enum UserPermission {
    // Global user management actions
    GLOBAL_LIST_USERS = 'global_list_users',
    GLOBAL_CREATE_USER = 'global_create_user',
    GLOBAL_READ_USER = 'global_read_user',
    GLOBAL_UPDATE_USER = 'global_update_user',
    GLOBAL_DELETE_USER = 'global_delete_user',
    // Global tenant management actions
    LIST_TENANTS = 'list_tenants',
    CREATE_TENANT = 'create_tenant',
    READ_TENANT = 'read_tenant',
    UPDATE_TENANT = 'update_tenant',
    DELETE_TENANT = 'delete_tenant',
    // Owner specific tenant management actions
    REQUEST_TENANT_DELETION = 'request_tenant_deletion',
    // Tenant user management actions
    TENANT_LIST_USERS = 'tenant_list_users',
    TENANT_READ_USER = 'tenant_read_user',
    TENANT_UPDATE_USER = 'tenant_update_user',
    TENANT_INVITE_USER = 'tenant_invite_user',
}

export enum UserRole {
    // Roles for admin
    ADMIN = 'admin',
    SUPER_ADMIN = 'super_admin',
    // Roles for tenant
    OWNER = 'owner',
    MANAGER = 'manager',
    STAFF = 'staff',
    SUPPORT = 'support',
}
