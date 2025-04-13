<?php

declare(strict_types=1);

namespace App\Services;

use App\ValueObjects\PaddleProduct;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class PaddleService
{
    public function __construct(
        private readonly string $apiKey,
        private readonly string $apiBaseUrl
    ) {}

    public function getProducts(): array
    {

        $products = [];
        $result = $this->fetch('products');

        foreach ($result as $item) {
            try {
                $products[] = new PaddleProduct(
                    $item['id'],
                    $item['name'],
                    $item['description'],
                    $item['type'],
                    $item['tax_category'],
                    $item['image_url'],
                    $item['custom_data'],
                    $item['status'],
                    $item['created_at'],
                    $item['updated_at'],
                );
            } catch (\Throwable $e) {
                Log::warning('Failed to process product', [
                    'product' => $item,
                    'error' => $e->getMessage(),
                ]);
            }
        }

        return $products;
    }

    public function fetch(string $endpoint, array $params = [])
    {

        $baseUrl = rtrim($this->apiBaseUrl, '/');
        $endpoint = ltrim($endpoint, '/');
        $url = sprintf('%s/%s', $baseUrl, $endpoint);
        $bearerToken = sprintf('Bearer %s', $this->apiKey);

        try {
            $response = Http::withHeaders([
                'Authorization' => $bearerToken,
                'Paddle-Version' => '1',
                'Content-Type' => 'application/json',
            ])->get($url, $params);

            if (! $response->successful()) {
                throw new \Exception('Failed to fetch products: '.$response->status().' '.$response->body());
            }

            return $response->json()['data'] ?? [];
        } catch (\Throwable $e) {

            Log::error('[Paddle API] Request failed', [
                'url' => $url,
                'error' => $e->getMessage(),
            ]);

            return [];
        }
    }
}
