<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnggotaController;

Route::get('anggota', [AnggotaController::class, 'index']);
Route::post('anggota', [AnggotaController::class, 'create']);
Route::get('anggota/{id}', [AnggotaController::class, 'detail']);
Route::put('anggota/{id}', [AnggotaController::class, 'update']);
Route::delete('anggota/{id}', [AnggotaController::class, 'delete']);