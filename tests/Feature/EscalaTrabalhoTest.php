<?php

namespace Tests\Feature;

use App\Models\EscalaTrabalho;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class EscalaTrabalhoTest extends TestCase
{
    use RefreshDatabase;

    public function test_escala_de_trabalho_index_page_is_displayed(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('/escala-trabalho');

        $response->assertOk();
    }

    public function test_escala_de_trabalho_create_page_is_displayed(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('/escala-trabalho/create');

        $response->assertOk();
    }

    public function test_escala_de_trabalho_edit_page_is_displayed(): void
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get('/escala-trabalho/edit/1');
        $response->assertOk();
    }
    public function test_new_escala_de_trabalho_can_store(): void
    {
        $user = User::factory()->create();

        $response = $this
            ->actingAs($user)
            ->post('/escala-trabalho', [
                'nome' => 'Escalada Padrão',
                'inicio' => '9:00',
                'fim' => '10:00',
            ]);

        $response->assertValid();
        $response->assertRedirect('/escala-trabalho');
    }

    public function test_if_escala_can_updated(): void
    {
        $user = User::factory()->create();

        $escala = EscalaTrabalho::factory()->create();

        $response = $this
            ->actingAs($user)
            ->patch('/escala-trabalho', [
                "id" => $escala->id,
                "nome" => "Escala Padrao",
            ]);

        $response->assertRedirect('/escala-trabalho');

        $escala->refresh();

        $this->assertSame('Escala Padrao', $escala->nome);
    }

}
