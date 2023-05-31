<?php

namespace Tests\Feature;

use App\Models\Colaborador;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RegistroPontoTest extends TestCase
{
    use RefreshDatabase;

    public function test_registro_ponto_index_page_is_displayed(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('/registro-ponto');

        $response->assertOk();
    }

    public function test_registro_ponto_create_page_is_displayed(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('/registro-ponto/create');

        $response->assertOk();
    }

    public function test_new_registro_ponto_can_store(): void
    {
        $user = User::factory()->create();

        $colaborador = Colaborador::factory()->create();

        $response = $this
            ->actingAs($user)
            ->post('/registro-ponto', [
                'colaboradors_id' => $colaborador['id'],
            ]);

        $response->assertValid();
        $response->assertRedirect('/dashboard');
    }
}
