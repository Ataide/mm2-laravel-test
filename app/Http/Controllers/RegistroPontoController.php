<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistroPontoRequest;
use App\Models\Colaborador;
use App\Models\RegistroPonto;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class RegistroPontoController extends Controller
{
    public function index(): Response
    {
        $registros = RegistroPonto::all()->load('colaboradors');
        return Inertia::render('RegistroPonto/Index', [
            'registros' => $registros,
        ]);

    }
    public function create(): Response
    {
        $colaboradors = Colaborador::all();
        return Inertia::render('RegistroPonto/Create', [
            'colaboradors' => $colaboradors,
        ]);
    }

    public function store(RegistroPontoRequest $request)
    {
        $request->validated();

        RegistroPonto::create([
            'colaboradors_id' => $request->colaboradors_id,
            'longitude' => $request->longitude,
            'latitude' => $request->latitude,
        ]);

        return Redirect::route('registro-ponto.index');
    }
}
