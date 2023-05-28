<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EscalaTrabalhoRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'nome' => ['string', 'min:1'],
            'inicio' => ['string', 'min:1'],
            'fim' => ['string', 'min:1'],
        ];
    }
}
