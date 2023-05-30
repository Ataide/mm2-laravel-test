<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ColaboradorsApiController;
use App\Http\Controllers\API\EscalaTrabalhoApiController;
use App\Http\Controllers\API\RegistroPontoApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
 */

Route::middleware('api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('api')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);

    Route::get('/colaboradores', [ColaboradorsApiController::class, 'index']);
    Route::post('/colaboradores/search', [ColaboradorsApiController::class, 'show']);
    Route::post('/colaboradores', [ColaboradorsApiController::class, 'store']);
    Route::patch('/colaboradores', [ColaboradorsApiController::class, 'update']);
    Route::delete('/colaboradores', [ColaboradorsApiController::class, 'destroy']);

    Route::get('/escala_trabalho', [EscalaTrabalhoApiController::class, 'index']);
    Route::post('/escala_trabalho', [EscalaTrabalhoApiController::class, 'store']);
    Route::patch('/escala_trabalho', [EscalaTrabalhoApiController::class, 'update']);
    Route::delete('/escala_trabalho', [EscalaTrabalhoApiController::class, 'destroy']);

    Route::get('/registro_ponto', [RegistroPontoApiController::class, 'index']);
    Route::post('/registro_ponto', [RegistroPontoApiController::class, 'store']);

});
