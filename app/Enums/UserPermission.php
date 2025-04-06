<?php

declare(strict_types=1);

namespace App\Enums;

enum UserPermission: string
{
    case LIST_LANDLORD_USERS = 'list_landlord_users';
    case CREATE_LANDLORD_USER = 'create_landlord_user';
    case READ_LANDLORD_USER = 'read_landlord_user';
    case UPDATE_LANDLORD_USER = 'update_landlord_user';
    case DELETE_LANDLORD_USER = 'delete_landlord_user';

    case LIST_ALL_TENANT_USERS = 'list_all_tenant_users';
    case LIST_TENANT_USERS = 'list_tenant_users';
    case CREATE_TENANT_USER = 'create_tenant_user';
    case READ_TENANT_USER = 'read_tenant_user';
    case UPDATE_TENANT_USER = 'update_tenant_user';
    case DELETE_TENANT_USER = 'delete_tenant_user';

    case LIST_TENANTS = 'list_tenants';
    case CREATE_TENANT = 'create_tenant';
    case READ_TENANT = 'read_tenant';
    case UPDATE_TENANT = 'update_tenant';
    case DELETE_TENANT = 'delete_tenant';
}
