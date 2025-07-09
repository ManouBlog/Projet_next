<?php

namespace App\Http\Controllers;

use App\Models\Employes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EmployesController extends Controller
{
    /**
     * Add service.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addEmploye(Request $request){
     $Categorie = new Employes();
    $validator = Validator::make($request->all(), [
    'categorie_id' => 'required',
    'coiffeur_id' => 'required',
    'nom' => 'required|min:3|max:50',
    'prenoms' => 'required|min:5|max:90',
    'email' => 'required|min:0',
    'photo_profil' => 'required|min:1',
], [
    'categorie_id.required' => 'La catégorie est obligatoire',
    // 'categorie_id.exists' => 'La catégorie sélectionnée est invalide',
    
    'coiffeur_id.required' => 'Le coiffeur est obligatoire',
    // 'coiffeur_id.exists' => 'Le coiffeur sélectionné est invalide',
    
    'nom_service.required' => 'Le nom du service est obligatoire',
    'nom_service.min' => 'Le nom du service doit contenir au moins 3 caractères',
    'nom_service.max' => 'Le nom du service ne doit pas dépasser 50 caractères',
    
    'description.required' => 'La description est obligatoire',
    'description.min' => 'La description doit contenir au moins 5 caractères',
    'description.max' => 'La description ne doit pas dépasser 90 caractères',
    
    'price.required' => 'Le prix est obligatoire',
    // 'price.numeric' => 'Le prix doit être un nombre',
    'price.min' => 'Le prix ne peut pas être négatif',
    
    'duree.required' => 'La durée est obligatoire',
    // 'duree.integer' => 'La durée doit être un nombre entier',
    'duree.min' => 'La durée doit être d\'au moins 1 minute',
    
    'visibilite.required' => 'La visibilité est obligatoire',
    'visibilite.in' => 'La visibilité doit être 0 (invisible) ou 1 (visible)',
]);
if ($validator->fails()) {
    return response()->json([
                'status' => false,
                'message' => $validator->errors(),
            ], 400);
}
     $Categorie->categorie_id = $request->categorie_id;
     $Categorie->coiffeur_id = $request->coiffeur_id;
     $Categorie->nom_service = $request->nom_service;
     $Categorie->description = $request->description;
     $Categorie->price = $request->price;
     $Categorie->duree = $request->duree;
     $Categorie->visibilite = $request->visibilite;
     
     $Categorie->save();
     return response()->json([
                "status" => false,
                "data" => $Categorie,
            ], 400);
    }
    
}
