<?php

namespace Database\Factories;

use App\Models\EscalaTrabalho;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\EscalaTrabalho>
 */
class ColaboradorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $escala = EscalaTrabalho::factory()->create();
        return [
            'nome' => fake()->company(),
            'matricula' => fake()->macAddress(),
            'cpf' => fake()->randomNumber(),
            'escala_trabalho_id' => $escala->id,

        ];
    }
}
