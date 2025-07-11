<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\CategoriesController;

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

    Route::prefix('profil')->group(function () {
    Route::get('/seeProfil', [UserController::class, 'seeProfilUserConnect']);
    Route::post('/updateInfoUser',[UserController::class, 'updateInfoUser']);
    });

    Route::prefix('role')->middleware('admin')->group(function () {
    Route::post('/add', [RoleController::class, 'addRole']);
    Route::put('/update/{id}', [RoleController::class, 'updateRole']);
    Route::get('/list', [RoleController::class, 'getListRole']);
    });

    Route::prefix('categorie')->middleware('admin')->group(function () {
    Route::post('/add', [CategoriesController::class, 'addCategorie']);
    Route::put('/update/{id}', [CategoriesController::class, 'updateCategorie']);
    Route::get('/list', [CategoriesController::class, 'getListCategorie']);
    });

    Route::prefix('service')->middleware('coiffeur')->group(function () {
    Route::post('/add', [ServicesController::class, 'addservice']);
    Route::put('/update/{id}', [ServicesController::class, 'updateService']);
    Route::get('/list', [ServicesController::class, 'getListService']);
    });

    //  Route::prefix('employe')->middleware('admin')->group(function () {
    // Route::post('/add', [ServicesController::class, 'addservice']);
    // Route::put('/update/{id}', [ServicesController::class, 'updateService']);
    // Route::get('/list', [ServicesController::class, 'getListService']);
    // });
     
  
});
