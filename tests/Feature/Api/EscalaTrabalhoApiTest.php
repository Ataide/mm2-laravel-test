<?php

namespace Tests\Feature\Api;

use App\Models\EscalaTrabalho;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\Fluent\AssertableJson;
use JWTAuth;
use Tests\TestCase;

class EscalaTrabalhoApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_if_escala_trabalho_can_be_store_using_api_routes(): void
    {
        $user = User::factory()->create();
        $token = JWTAuth::fromUser($user);
        $header_token = ['Authorization' => 'Bearer ' . $token];

        $new_escala_trabalho = ['nome' => 'Padrao', 'inicio' => '09:00', 'fim' => '18:00'];

        $response = $this
            ->withHeaders($header_token)
            ->post('api/escala_trabalho', $new_escala_trabalho);

        $response->assertCreated()->assertJson(fn(AssertableJson $json) =>
            $json->where('data.nome', $new_escala_trabalho['nome'])
                ->etc()
        );
    }

    public function test_if_escala_trabalho_can_be_deleted_using_api_routes(): void
    {
        $user = User::factory()->create();
        $token = JWTAuth::fromUser($user);
        $header_token = ['Authorization' => 'Bearer ' . $token];

        $escala_trabalho = EscalaTrabalho::factory()->create();

        $response = $this
            ->withHeaders($header_token)
            ->delete('/api/escala_trabalho', [
                "id" => $escala_trabalho['id'],
            ]);

        $response->assertNoContent();
    }

    public function test_if_escala_trabalho_can_be_updated_using_api_routes(): void
    {
        $user = User::factory()->create();
        $token = JWTAuth::fromUser($user);
        $header_token = ['Authorization' => 'Bearer ' . $token];

        $escala_trabalho = EscalaTrabalho::factory()->create();

        $response = $this
            ->withHeaders($header_token)
            ->patch('/api/escala_trabalho', [
                "id" => $escala_trabalho['id'],
                "nome" => "Noturno",
                "inicio" => $escala_trabalho['inicio'],
                "fim" => $escala_trabalho['fim'],
            ]);

        $response->assertOk()->assertJson(fn(AssertableJson $json) =>
            $json->where('data.nome', 'Noturno')
                ->etc()
        );
    }

}
