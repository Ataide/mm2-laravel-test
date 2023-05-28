<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
