<?php

namespace App\Http\Controllers;

use App\Http\Requests\Colaboradors\ColaboradorsCreateRequest;
use App\Models\Colaborador;
use App\Models\EscalaTrabalho;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ColaboradorController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $colaboradors = Colaborador::all()->load('escala_trabalho');
        return Inertia::render('Colaboradors/Index', [
            "colaboradors" => $colaboradors,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request): Response
    {
        $escalas = EscalaTrabalho::all();
        return Inertia::render('Colaboradors/Create', [
            'escalas' => $escalas,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ColaboradorsCreateRequest $request)
    {
        $request->validated();

        Colaborador::create([
            'nome' => $request->nome,
            'matricula' => $request->matricula,
            'cpf' => $request->cpf,
            'escala_trabalho_id' => $request->escala_trabalho_id,
        ]);

        return Redirect::route('colaboradors.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id): Response
    {
        $colaborador = Colaborador::where('id', $id)->first();

        $escalas = EscalaTrabalho::all();

        return Inertia::render('Colaboradors/Edit', [
            'colaborador' => $colaborador,
            'escalas' => $escalas,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ColaboradorsCreateRequest $request)
    {
        $colaborador = Colaborador::where('id', $request->id)->first();

        $colaborador->fill($request->validated());

        $colaborador->save();

        return Redirect::route('colaboradors.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        $colaborador = Colaborador::where('id', $id)->first();

        $colaborador->delete();

        return Redirect::route('colaboradors.index');

    }
}
