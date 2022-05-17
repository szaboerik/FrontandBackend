<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TesztController;
use App\Http\Controllers\KategoriaController;

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
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::get('/tesztek', [TesztController::class, 'index']);
Route::get('/tesztek/kategoria/{id}', [TesztController::class, 'szures']);
Route::get('/kategoria', [KategoriaController::class, 'index']);

require __DIR__.'/auth.php';
