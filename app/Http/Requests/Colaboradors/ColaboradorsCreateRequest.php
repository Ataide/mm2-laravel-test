<?php

namespace App\Http\Requests\Colaboradors;

use Illuminate\Foundation\Http\FormRequest;

class ColaboradorsCreateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'nome' => ['string', 'max:255', 'min:1'],
            'matricula' => ['string', 'max:255', 'min:1'],
            'cpf' => ['string'],
            'escala_trabalho_id' => ['numeric', 'min:1'],

        ];
    }
}
