<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Default Super admin settings
    |--------------------------------------------------------------------------
    |
    | This file contains default values for super admin user seeding.
    | Values can be overridden in the .env file.
    |
    */

    'super_admin' => [
        'email' => env('SUPER_ADMIN_EMAIL', 'superadmin@netbalance.local'),
        'name' => env('SUPER_ADMIN_NAME', 'super_admin'),
        'firstname' => env('SUPER_ADMIN_FIRSTNAME', 'super'),
        'lastname' => env('SUPER_ADMIN_LASTNAME', 'admin'),
        'password' => env('SUPER_ADMIN_PASSWORD', 'Super_admin1234@'),
    ],
];
