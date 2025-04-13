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
            $table->string('phone');
            $table->string('logo')->nullable();
            $table->string('timezone')->default('UTC');
            $table->string('locale')->default('en');
            $table->boolean('is_active')->default(true);
            $table->string('street_name_one');
            $table->string('street_name_two');
            $table->string('city');
            $table->string('state');
            $table->string('postal_code');
            $table->string('country');
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
