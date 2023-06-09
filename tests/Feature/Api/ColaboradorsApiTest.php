<?php

namespace Tests\Feature\Api;

use App\Models\Colaborador;
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

        $new_colaborador = ['nome' => 'Ataide', 'matricula' => '12345', 'cpf' => '22813495867', 'escala_trabalho_id' => $escala->id];

        $response = $this->withHeaders($header_token)->post('api/colaboradores', $new_colaborador);

        $response->assertCreated()->assertJson(fn(AssertableJson $json) =>
            $json->where('data.nome', $new_colaborador['nome'])
                ->etc()
        );
    }

    public function test_if_colaboradors_can_be_deleted_using_api_routes(): void
    {
        $user = User::factory()->create();
        $token = JWTAuth::fromUser($user);
        $header_token = ['Authorization' => 'Bearer ' . $token];

        $colaborador = Colaborador::factory()->create();

        $response = $this
            ->withHeaders($header_token)
            ->delete('/api/colaboradores', [
                "id" => $colaborador['id'],
            ]);

        $response->assertNoContent();
    }

    public function test_if_colaboradors_can_be_updated_using_api_routes(): void
    {
        $user = User::factory()->create();
        $token = JWTAuth::fromUser($user);
        $header_token = ['Authorization' => 'Bearer ' . $token];

        $colaborador = Colaborador::factory()->create();

        $response = $this
            ->withHeaders($header_token)
            ->patch('/api/colaboradores', [
                "id" => $colaborador['id'],
                "nome" => "Dennis",
                "matricula" => $colaborador['matricula'],
                "cpf" => $colaborador['cpf'],
                "escala_trabalho_id" => $colaborador['escala_trabalho_id'],
            ]);

        $response->assertOk()->assertJson(fn(AssertableJson $json) =>
            $json->where('data.nome', 'Dennis')
                ->etc()
        );

    }

    public function test_if_api_can_search_colaboradors_by_params(): void
    {
        $user = User::factory()->create();
        $token = JWTAuth::fromUser($user);
        $header_token = ['Authorization' => 'Bearer ' . $token];

        $colaborador = Colaborador::factory()->create();

        $response = $this
            ->withHeaders($header_token)
            ->post('/api/colaboradores/search', [
                "nome" => $colaborador['nome'],
            ]);
        $response->assertOk()->assertJson(fn(AssertableJson $json) =>
            $json->where('data.0.nome', $colaborador['nome'])
                ->etc()
        );
    }

}
