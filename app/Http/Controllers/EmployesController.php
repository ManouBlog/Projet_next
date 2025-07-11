<?php

namespace App\Http\Controllers;

use App\Models\Employes;
use App\Models\Coiffeurs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EmployesController extends Controller
{
    public function getListEmployerCoiffeur(){
     $CoiffeurId = auth()->user()->id;

     $coiffeur = Coiffeurs::where('user_id',$CoiffeurId)->first();

     $employes = Employes::where('coiffeur_id',$coiffeur->id)
     ->with('coiffeur','user')
     ->get();

     return response()->json([
                "status" => true,
                "data" => $employes,
            ], 200);
    }
}
