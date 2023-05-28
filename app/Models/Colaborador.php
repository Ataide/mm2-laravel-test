<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Colaborador extends Model
{
    use HasFactory;

    protected $fillable = [
        "id",
        'nome',
        'matricula',
        'cpf',
        'status',
        'escala_trabalho_id',
    ];

    public function escala_trabalho(): HasOne
    {
        return $this->hasOne(EscalaTrabalho::class);
    }
}
