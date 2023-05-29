<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class EscalaTrabalho extends Model
{
    use HasFactory;

    protected $table = "escala_trabalho";

    protected $fillable = [
        'id',
        'nome',
        'inicio',
        'fim',
        'status',
    ];

    public function colaboradors(): HasMany
    {
        return $this->hasMany(Colaborador::class, 'escala_trabalho_id');
    }

}
