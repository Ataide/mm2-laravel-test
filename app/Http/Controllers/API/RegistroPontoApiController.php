<?php

namespace App\Http\Controllers\API;

use App\Models\RegistroPonto;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Validator;

class RegistroPontoApiController extends BaseApiController
{
    public function index(): JsonResponse
    {
        $registros = RegistroPonto::all()->load('colaboradors');
        return $this->sendResponse($registros, '');
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'colaboradors_id' => 'required',
        ]);

        // if(request()->hasfile('selfie')){
        //     $avatarName = time().'.'.request()->selfie->getClientOriginalExtension();
        //     request()->selfie->move(public_path('avatars'), $avatarName);
        // }

        if ($validator->fails()) {
            return $this->sendError('Erro de validação', $validator->errors(), 400);
        }

        $resultado = RegistroPonto::create([
            'colaboradors_id' => $request->colaboradors_id,
        ]);

        return $this->sendResponse($resultado, '', 201);

    }
}
