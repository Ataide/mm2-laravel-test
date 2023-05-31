<?php

namespace Tests\Feature\Api;

use App\Models\Colaborador;
use App\Models\RegistroPonto;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\Fluent\AssertableJson;
use JWTAuth;
use Tests\TestCase;

class RegistroPontoApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_if_registro_ponto_can_be_list_using_api_routes(): void
    {

        $user = User::factory()->create();
        $token = JWTAuth::fromUser($user);
        $header_token = ['Authorization' => 'Bearer ' . $token];

        $ponto = RegistroPonto::factory()->create();

        $response = $this
            ->withHeaders($header_token)
            ->get('api/registro_ponto');

        $response->assertOK()->assertJsonStructure(["success", "data", "message"]);
    }

    public function test_if_registro_ponto_can_be_send_to_queue_using_api_routes(): void
    {
        $user = User::factory()->create();
        $token = JWTAuth::fromUser($user);
        $header_token = ['Authorization' => 'Bearer ' . $token];

        $colaborador = Colaborador::factory()->create();

        $new_registro_ponto = [
            'colaboradors_id' => $colaborador['id'],
        ];

        $response = $this
            ->withHeaders($header_token)
            ->post('api/registro_ponto', $new_registro_ponto);

        $response->assertAccepted()->assertJson(fn(AssertableJson $json) =>
            $json->where('data.colaboradors_id', $new_registro_ponto['colaboradors_id'])
                ->etc()
        );
    }

}
