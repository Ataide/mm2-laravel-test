<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseApiController;
use App\Models\EscalaTrabalho;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Validator;

class EscalaTrabalhoApiController extends BaseApiController
{
    public function __construct()
    {
        auth()->setDefaultDriver('api');
    }

    public function index(Request $request): JsonResponse
    {
        $escala_trabalho = EscalaTrabalho::all();
        return $this->sendResponse($escala_trabalho, '');
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'nome' => 'required',
            'inicio' => 'required',
            'fim' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Erro de validação', $validator->errors(), 400);
        }

        $resultado = EscalaTrabalho::create([
            'nome' => $request->nome,
            'inicio' => $request->inicio,
            'fim' => $request->fim,
        ]);

        return $this->sendResponse($resultado, '', 201);

    }

    public function update(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->sendError('validation error', $validator->errors(), 400);
        }

        $updated_escala = EscalaTrabalho::where('id', $request->id)->first();

        if (!$updated_escala) {
            return $this->sendError('resource or object not found', $validator->errors(), 404);
        }

        $updated_escala->fill($request->all());
        $updated_escala->save();

        return $this->sendResponse($updated_escala, 'Update Success;', 200);

    }

    public function destroy(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->sendError('validation error', $validator->errors(), 400);
        }

        $updated_escala = EscalaTrabalho::where('id', $request->id)->first();

        if (!$updated_escala) {
            return $this->sendError('resource or object not found', $validator->errors(), 404);
        }

        $updated_escala->delete();

        return $this->sendResponse(null, null, 204);

    }

}
