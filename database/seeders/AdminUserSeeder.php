<?php

namespace Database\Seeders;

use App\Enums\AdminRole;
use App\Enums\UserType;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AdminUserSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {

        $email = config('app.default_admin_email');
        $password = config('app.default_admin_password');
        $name = config('app.default_admin_name');
        $firstname = config('app.default_admin_firstname');
        $lastname = config('app.default_admin_lastname');

        User::firstOrCreate(
            ['email' => $email],
            [
                'id' => Str::uuid(),
                'first_name' => $firstname,
                'middle_name' => '',
                'last_name' => $lastname,
                'name' => $name,
                'email_verified_at' => now(),
                'password' => Hash::make($password),
                'avatar' => null,
                'type' => UserType::ADMIN->value,
                'role' => AdminRole::SUPER_ADMINISTRATOR->value,
                'tenant_id' => null,
            ]
        );
    }
}
