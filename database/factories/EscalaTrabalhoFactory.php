<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\EscalaTrabalho>
 */
class EscalaTrabalhoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nome' => fake()->jobTitle(),
            'inicio' => fake()->time('H:i'),
            'fim' => fake()->time('H:i'),
            'status' => 1,
        ];
    }
}
