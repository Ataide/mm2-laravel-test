<?php

namespace Tests\Feature\Api;

use App\Models\EscalaTrabalho;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\Fluent\AssertableJson;
use JWTAuth;
use Tests\TestCase;

class ColaboradorsApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_if_colaboradors_can_be_store_using_api_routes(): void
    {
        $user = User::factory()->create();
        $token = JWTAuth::fromUser($user);
        $header_token = ['Authorization' => 'Bearer ' . $token];

        $escala = EscalaTrabalho::factory()->create();

        $new_colaborador = ['nome' => '', 'matricula' => '12345', 'cpf' => '22813495867', 'escala_trabalho_id' => $escala->id];

        $response = $this->withHeaders($header_token)->post('api/colaboradores', $new_colaborador);

        $response->assertCreated()->assertJson(fn(AssertableJson $json) =>
            $json->where('data.nome', $new_colaborador['nome'])
                ->etc()
        );
    }

}
