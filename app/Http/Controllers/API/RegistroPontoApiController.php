<?php

namespace App\Http\Controllers\API;

use App\Jobs\RegistroCreated;
use App\Models\RegistroPonto;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Validator;

class RegistroPontoApiController extends BaseApiController
{
    public function index(): JsonResponse
    {
        $registros = RegistroPonto::all();

        return $this->sendResponse($registros, '');
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'colaboradors_id' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Erro de validação', $validator->errors(), 400);
        }

        RegistroCreated::dispatch([
            'colaboradors_id' => $request->colaboradors_id,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
        ]);

        // $resultado = RegistroPonto::create([
        //     'colaboradors_id' => $request->colaboradors_id,
        //     'latitude' => $request->latitude,
        //     'longitude' => $request->longitude,
        // ]);

        return $this->sendResponse(array(
            'colaboradors_id' => $request->colaboradors_id,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
        ), 'Queued', 202);

    }
}
