<?php

namespace App\Http\Controllers;

use App\Models\Services;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ServicesController extends Controller
{
    /**
     * Add service.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addService(Request $request){
     $Categorie = new Services();
    $validator = Validator::make($request->all(), [
    'categorie_id' => 'required',
    'coiffeur_id' => 'required',
    'nom_service' => 'required|min:3|max:50',
    'description' => 'required|min:5|max:90',
    'price' => 'required|min:0',
    'duree' => 'required|min:1',
    'visibilite' => 'required|in:1,0',
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
    
    /**
     * Update service.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateService(Request $request){
     $Categorie = new Services();
    $validator = Validator::make($request->all(), [
    'nom_service' => 'min:3|max:50',
    'description' => 'min:5|max:90',
    'price' => 'min:0',
    'duree' => 'min:1',
    'visibilite' => 'in:1,0',
    ],[
    'nom_service.min' => 'Le nom du service doit contenir au moins 3 caractères',
    'nom_service.max' => 'Le nom du service ne doit pas dépasser 50 caractères',
    
    'description.min' => 'La description doit contenir au moins 5 caractères',
    'description.max' => 'La description ne doit pas dépasser 90 caractères',
    
    'price.min' => 'Le prix ne peut pas être négatif',

    'duree.min' => 'La durée doit être d\'au moins 1 minute',
    
    'visibilite.in' => 'La visibilité doit être 0 (invisible) ou 1 (visible)',
]);
if ($validator->fails()) {
    return response()->json([
                'status' => false,
                'message' => $validator->errors(),
            ], 400);
}
     $Categorie->categorie_id = !empty($request->categorie_id) ? $request->categorie_id:$Categorie->categorie_id;
     $Categorie->coiffeur_id = !empty($request->coiffeur_id) ? $request->coiffeur_id:$Categorie->coiffeur_id;
     $Categorie->nom_service = !empty($request->nom_service) ? $request->nom_service:$Categorie->nom_service ;
     $Categorie->description = !empty($request->description) ? $request->description:$Categorie->description ;
     
     $Categorie->price = !empty($request->price) ? $request->price:$Categorie->price;
     $Categorie->duree = !empty($request->duree) ? $request->duree:$Categorie->duree;

     $Categorie->visibilite = !empty($request->visibilite) ? $request->visibilite:$Categorie->visibilite;
     
     $Categorie->save();

     return response()->json([
                "status" => false,
                "data" => $Categorie,
            ], 400);
    }
    public function getListServices(){

     $service = Services::get();

     return response()->json([
                "status" => true,
                "data" => $service,
            ], 400);
    }
}
