<?php

namespace App\Http\Controllers;

use App\Http\Requests\EscalaTrabalhoRequest;
use App\Interfaces\EscalaTrabalhoRepositoryInterface;
use App\Models\EscalaTrabalho;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class EscalaTrabalhoController extends Controller
{
    private EscalaTrabalhoRepositoryInterface $escalaTrabalhoRepository;

    public function __construct(EscalaTrabalhoRepositoryInterface $escalaTrabalhoRepository)
    {
        $this->escalaTrabalhoRepository = $escalaTrabalhoRepository;

    }
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $escalas = EscalaTrabalho::all();
        return Inertia::render('EscalaTrabalho/Index', [
            'escalas' => $escalas,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('EscalaTrabalho/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EscalaTrabalhoRequest $request)
    {
        $request->validated();

        EscalaTrabalho::create([
            'nome' => $request->nome,
            'inicio' => $request->inicio,
            'fim' => $request->fim,
            'status' => 1,
        ]);

        return Redirect::route('escala-trabalho.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(EscalaTrabalho $escalaTrabalho)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id): Response
    {
        $escala = EscalaTrabalho::where('id', $id)->first();
        return Inertia::render('EscalaTrabalho/Edit', [
            'escala' => $escala,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EscalaTrabalhoRequest $request)
    {
        $updated_escala = EscalaTrabalho::where('id', $request->id)->first();
        $updated_escala->fill($request->validated());
        $updated_escala->save();
        return Redirect::route('escala-trabalho.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(EscalaTrabalho $escalaTrabalho)
    {

    }
}
