<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RegistroPonto extends Model
{
    use HasFactory;

    protected $fillable = [
        "colaboradors_id",
        "longitude",
        "latitude",
    ];

    public function colaboradors(): BelongsTo
    {
        return $this->belongsTo(Colaborador::class);
    }
}
