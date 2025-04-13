<?php

declare(strict_types=1);

namespace App\ValueObjects;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Contracts\Support\Jsonable;
use JsonSerializable;

class PaddleProduct implements Arrayable, Jsonable, JsonSerializable
{
    public function __construct(
        private readonly string $id,
        private readonly string $name,
        private readonly ?string $description,
        private readonly string $type,
        private readonly string $taxCategory,
        private readonly ?string $imageUrl,
        private readonly ?array $customData,
        private readonly string $status,
        private readonly string $createdAt,
        private readonly string $updatedAt
    ) {}

    public function toArray(): array
    {

        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'type' => $this->type,
            'tax_category' => $this->taxCategory,
            'image_url' => $this->imageUrl,
            'custom_data' => $this->customData,
            'status' => $this->status,
            'created_at' => $this->createdAt,
            'updated_at' => $this->updatedAt,
        ];
    }

    public function toJson($options = 0): string
    {

        return json_encode($this->toArray(), $options);
    }

    public function jsonSerialize(): array
    {

        return $this->toArray();
    }
}
