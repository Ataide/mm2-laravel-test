<?php

use App\Http\Controllers\ColaboradorController;
use App\Http\Controllers\EscalaTrabalhoController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/colaboradors', [ColaboradorController::class, 'index'])->name('colaboradors.index');
    Route::get('/colaboradors/create', [ColaboradorController::class, 'create'])->name('colaboradors.create');
    Route::get('/colaboradors/edit/{id}', [ColaboradorController::class, 'edit'])->name('colaboradors.edit');

    Route::post('/colaboradors', [ColaboradorController::class, 'store'])->name('colaboradors.store');
    Route::patch('/colaboradors', [ColaboradorController::class, 'update'])->name('colaboradors.update');
    Route::delete('/colaboradors/{id}', [ColaboradorController::class, 'destroy'])->name('colaboradors.destroy');

    Route::get('/escala-trabalho', [EscalaTrabalhoController::class, 'index'])->name('escala-trabalho.index');
    Route::get('/escala-trabalho/create', [EscalaTrabalhoController::class, 'create'])->name('escala-trabalho.create');
    Route::get('/escala-trabalho/edit/{id}', [EscalaTrabalhoController::class, 'edit'])->name('escala-trabalho.edit');

    Route::post('/escala-trabalho', [EscalaTrabalhoController::class, 'store'])->name('escala-trabalho.store');
    Route::patch('/escala-trabalho', [EscalaTrabalhoController::class, 'update'])->name('escala-trabalho.update');
    Route::delete('/escala-trabalho', [EscalaTrabalhoController::class, 'destroy'])->name('escala-trabalho.destroy');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
