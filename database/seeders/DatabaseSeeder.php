<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\EscalaTrabalho;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@email.com',
        ]);

        EscalaTrabalho::factory()->create([
            'nome' => 'Escala Padrao',
            'inicio' => '08:00',
            'fim' => "17:00",
        ]);

    }
}
