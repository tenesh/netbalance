<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {

        Schema::create('tenants', function (Blueprint $table) {

            $table->uuid('id')->primary();
            $table->string('name')->unique();
            $table->string('slug')->unique();
            $table->string('email')->unique();
            $table->string('phone')->nullable();
            $table->string('logo')->nullable();
            $table->string('timezone')->default('UTC');
            $table->string('locale')->default('en');
            $table->boolean('is_active')->default(true);
            $table->string('street_name_one')->nullable();
            $table->string('street_name_two')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('country')->nullable();
            $table->softDeletes(precision: 0);
            $table->timestamp('deletion_scheduled_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {

        Schema::dropIfExists('tenants');
    }
};
