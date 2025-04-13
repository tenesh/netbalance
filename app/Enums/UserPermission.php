<?php

declare(strict_types=1);

namespace App\Enums;

enum UserPermission: string
{
    // Global user management actions
    case GLOBAL_LIST_USERS = 'global_list_users';
    case GLOBAL_CREATE_USER = 'global_create_user';
    case GLOBAL_READ_USER = 'global_read_user';
    case GLOBAL_UPDATE_USER = 'global_update_user';
    case GLOBAL_DELETE_USER = 'global_delete_user';

    // Global tenant management actions
    case LIST_TENANTS = 'list_tenants';
    case CREATE_TENANT = 'create_tenant';
    case READ_TENANT = 'read_tenant';
    case UPDATE_TENANT = 'update_tenant';
    case DELETE_TENANT = 'delete_tenant';

    // Owner specific tenant management actions
    case REQUEST_TENANT_DELETION = 'request_tenant_deletion';

    // Tenant user management actions
    case TENANT_LIST_USERS = 'tenant_list_users';
    case TENANT_READ_USER = 'tenant_read_user';
    case TENANT_UPDATE_USER = 'tenant_update_user';
    case TENANT_INVITE_USER = 'tenant_invite_user';
}
