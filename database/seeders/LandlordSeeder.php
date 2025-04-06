<?php

namespace Database\Seeders;

use App\Enums\LandlordRole;
use App\Enums\UserType;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class LandlordSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {

        $email = config('app.default_landlord_email');
        $password = config('app.default_landlord_password');
        $name = config('app.default_landlord_name');
        $firstname = config('app.default_landlord_firstname');
        $lastname = config('app.default_landlord_lastname');

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
                'avatar' => null,
                'type' => UserType::LANDLORD->value,
                'tenant_id' => null,
            ]
        );

        $user->assignRole(LandlordRole::SUPER_ADMIN->value);
    }
}
