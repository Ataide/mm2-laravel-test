<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

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

    public function escala_trabalho(): BelongsTo
    {
        return $this->belongsTo(EscalaTrabalho::class);
    }
    public function registro_pontos(): HasMany
    {
        return $this->hasMany(RegistroPonto::class, 'colaboradors_id');
    }

}
