<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseApiController;
use App\Models\Colaborador;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Validator;

class ColaboradorsApiController extends BaseApiController
{
    public function __construct()
    {
        auth()->setDefaultDriver('api');
    }

    public function index(Request $request): JsonResponse
    {
        $colaboradores = Colaborador::all();
        return $this->sendResponse($colaboradores, '');
    }

    public function show(Request $request): JsonResponse
    {

        $params = $request->only(['nome', 'cpf', 'matricula', 'escala_trabalho']);

        if (!$params) {
            return $this->sendError('no params provider. nothing to show.', ["restrict_params" => ['nome', 'cpf', 'matricula', 'escala_trabalho']], 400);
        }

        $result = Colaborador::where('nome', 'LIKE', '%' . $request['nome'] . '%')
            ->where('cpf', 'LIKE', '%' . $request['cpf'] . '%')
            ->where('matricula', 'LIKE', '%' . $request['matricula'] . '%')
            ->get();

        return $this->sendResponse($result, '');
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'nome' => 'required',
            'matricula' => 'required',
            'cpf' => 'required',
            'escala_trabalho_id' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Erro de validação', $validator->errors(), 400);
        }

        $resultado = Colaborador::create([
            'nome' => $request->nome,
            'matricula' => $request->matricula,
            'cpf' => $request->cpf,
            'escala_trabalho_id' => $request->escala_trabalho_id,
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

        $updated_colaborador = Colaborador::where('id', $request->id)->first();

        if (!$updated_colaborador) {
            return $this->sendError('resource or object not found', $validator->errors(), 404);
        }

        $updated_colaborador->fill($request->all());
        $updated_colaborador->save();

        return $this->sendResponse($updated_colaborador, 'Update Success;', 200);

    }

    public function destroy(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->sendError('validation error', $validator->errors(), 400);
        }

        $updated_colaborador = Colaborador::where('id', $request->id)->first();

        if (!$updated_colaborador) {
            return $this->sendError('resource or object not found', $validator->errors(), 404);
        }

        $updated_colaborador->delete();

        return $this->sendResponse(null, null, 204);

    }

}
