<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTenantRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {

        return [
            'name' => 'required|string|max:255|unique:tenants,name',
            'slug' => 'required|string|max:255|unique:tenants,slug',
            'email' => 'required|email|max:255|unique:tenants,email',
            'phone' => 'required|string|max:50',
            'logo' => 'file|mimetypes:image/jpeg,image/png|max:3000',
            'street_name_one' => 'required|string|max:255',
            'street_name_two' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'state' => 'required|string|max:255',
            'postal_code' => 'required|string|max:20',
            'country' => 'required|string|max:255',
            'timezone' => 'required|string|timezone',
            'plan' => 'required|string',
        ];
    }
}
