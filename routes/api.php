<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/auth_login', [UserController::class, 'login']);
Route::get('/allUsers', [UserController::class, 'seeAllUser']);
Route::post('/register', [UserController::class, 'registerUser']);
Route::group(["middleware" => ["auth:sanctum"]], function () {
   Route::get('/seeProfil', [UserController::class, 'seeAllUser']);  
});
