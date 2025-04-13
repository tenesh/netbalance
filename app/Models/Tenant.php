<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;
use Laravel\Paddle\Billable;

class Tenant extends Model
{
    use Billable, HasFactory, HasUuids;

    protected $fillable = [
        'name',
        'slug',
        'email',
        'phone',
        'timezone',
        'locale',
        'street_name_one',
        'street_name_two',
        'state',
        'city',
        'postal_code',
        'country',
    ];

    protected $hidden = [
        'is_active',
        'deletion_scheduled_at',
    ];

    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
        ];
    }

    public static function booted(): void
    {
        static::creating(function ($model) {
            $model->id = Str::uuid();
        });
    }

    protected function name(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => ucfirst($value),
            set: fn (string $value) => strtolower($value),
        );
    }

    protected function slug(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => strtolower($value),
            set: fn (string $value) => strtolower($value),
        );
    }

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }
}
