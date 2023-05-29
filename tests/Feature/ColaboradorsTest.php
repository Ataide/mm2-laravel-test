<?php

namespace Tests\Feature;

use App\Models\Colaborador;
use App\Models\EscalaTrabalho;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ColaboradorsTest extends TestCase
{
    use RefreshDatabase;

    public function test_colaboradors_index_page_is_displayed(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('/colaboradors');

        $response->assertOk();
    }

    public function test_colaboradors_create_page_is_displayed(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('/colaboradors/create');

        $response->assertOk();
    }

    public function test_colaboradors_edit_page_is_displayed(): void
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get('/colaboradors/edit/1');
        $response->assertOk();
    }
    public function test_new_coladorador_can_store(): void
    {
        $user = User::factory()->create();

        $escala_trabalho = EscalaTrabalho::factory()->create();

        $response = $this
            ->actingAs($user)
            ->post('/colaboradors', [
                'nome' => 'Ataide',
                'matricula' => '123456',
                'cpf' => '22813495867',
                'escala_trabalho_id' => $escala_trabalho->id,
            ]);

        $response->assertValid();
        $response->assertRedirect('/colaboradors');
    }

    public function test_if_coladorador_can_updated(): void
    {
        $user = User::factory()->create();

        $colaborador = Colaborador::factory()->create();

        $response = $this
            ->actingAs($user)
            ->patch('/colaboradors', [
                "id" => $colaborador->id,
                "nome" => "Ataide",
            ]);

        $response
            ->assertSessionHasNoErrors()
            ->assertRedirect('/colaboradors');

        $colaborador->refresh();

        $this->assertSame('Ataide', $colaborador->nome);
    }

    public function test_coladorador_can_be_deleted(): void
    {
        $user = User::factory()->create();

        $colaborador = Colaborador::factory()->create();

        $response = $this
            ->actingAs($user)
            ->delete('/colaboradors/' . $colaborador->id);
        $response->assertRedirect('/colaboradors');
    }

}
