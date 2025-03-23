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

        User::firstOrCreate(
            ['email' => $email],
            [
                'id' => Str::uuid(),
                'first_name' => 'Super',
                'middle_name' => '',
                'last_name' => 'Admin',
                'name' => 'Super Administrator',
                'email_verified_at' => now(),
                'password' => Hash::make($password),
                'type' => UserType::ADMIN->value,
                'role' => AdminRole::SUPER_ADMINISTRATOR->value,
                'tenant_id' => null,
            ]
        );
    }
}
