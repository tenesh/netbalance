<?php

namespace Database\Seeders;

use App\Enums\UserRole;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class SuperAdminSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {

        $email = config('seeder.super_admin.email');
        $password = config('seeder.super_admin.password');
        $name = config('seeder.super_admin.name');
        $firstname = config('seeder.super_admin.firstname');
        $lastname = config('seeder.super_admin.lastname');

        $user = User::firstOrCreate(
            ['email' => $email],
            [
                'id' => (string) Str::uuid(),
                'first_name' => $firstname,
                'middle_name' => '',
                'last_name' => $lastname,
                'name' => $name,
                'email_verified_at' => now(),
                'password' => Hash::make($password),
                'is_admin' => true,
                'avatar' => null,
                'tenant_id' => null,
            ]
        );

        $user->assignRole(UserRole::SUPER_ADMIN->value);
    }
}
