<?php

namespace App\Http\Controllers;

use App\Models\Services;
use App\Models\Coiffeurs;
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
    'categories_id' => 'required|exists:categories,id',
    'coiffeurs_id' => 'required|exists:categories,id',
    'nom_service' => 'required|min:3|max:50',
    'description' => 'required|min:5|max:90',
    'price' => 'required|min:0',
    'duree' => 'required|min:1',
    'visibilite' => 'required|in:1,2',
], [
    'categories_id.required' => 'La catégorie est obligatoire',
    'categories_id.exists' => 'La catégorie sélectionnée est invalide',
    
    'coiffeurs_id.required' => 'Le coiffeur est obligatoire',
    'coiffeurs_id.exists' => 'Le coiffeur sélectionné est invalide',
    
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
    'visibilite.in' => 'La visibilité doit être 1 (invisible) ou 2 (visible)',
]);
if ($validator->fails()) {
    return response()->json([
                'status' => false,
                'message' => $validator->errors(),
            ], 400);
}
     $Categorie->categories_id = $request->categories_id;
     $Categorie->coiffeurs_id = $request->coiffeurs_id;
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
    public function updateService(Request $request,$id){

       $service = Services::find($id);

       if (!$service) {
        return response()->json([
            'status' => false,
            'message' => 'Service non trouvée',
        ], 404);
    }
//     $validator = Validator::make($request->all(), [
//     'nom_service' => 'min:3|max:50',
//     'description' => 'min:5|max:90',
//     'price' => 'min:0',
//     'duree' => 'min:1',
//     'visibilite' => 'in:1,0',
//     ],[
//     'nom_service.min' => 'Le nom du service doit contenir au moins 3 caractères',
//     'nom_service.max' => 'Le nom du service ne doit pas dépasser 50 caractères',
    
//     'description.min' => 'La description doit contenir au moins 5 caractères',
//     'description.max' => 'La description ne doit pas dépasser 90 caractères',
    
//     'price.min' => 'Le prix ne peut pas être négatif',

//     'duree.min' => 'La durée doit être d\'au moins 1 minute',
    
//     'visibilite.in' => 'La visibilité doit être 0 (invisible) ou 1 (visible)',
// ]);
// if ($validator->fails()) {
//     return response()->json([
//                 'status' => false,
//                 'message' => $validator->errors(),
//             ], 400);
// }
     $service->categories_id = !empty($request->categories_id) ? $request->categories_id:$service->categories_id;
     $service->coiffeurs_id = !empty($request->coiffeurs_id) ? $request->coiffeurs_id:$service->coiffeurs_id;
     $service->nom_service = !empty($request->nom_service) ? $request->nom_service:$service->nom_service ;
     $service->description = !empty($request->description) ? $request->description:$service->description ;
     
     $service->price = !empty($request->price) ? $request->price:$service->price;
     $service->duree = !empty($request->duree) ? $request->duree:$service->duree;

     $service->visibilite = !empty($request->visibilite) ? $request->visibilite:$service->visibilite;
     
     $service->save();

     return response()->json([
                "status" => false,
                "data" => $service,
            ], 400);
    }
    public function getListServicesCoiffeur(){
     $CoiffeurId = auth()->user()->id;

     $coiffeur = Coiffeurs::where('user_id',$CoiffeurId)->first();

     $services = Services::where('coiffeurs_id',$coiffeur->id)->get();

     return response()->json([
                "status" => true,
                "data" => $services,
            ], 200);
    }

    public function getListAllServices(){
   
      $services = Services::with('coiffeur','categorie')->get();

     return response()->json([
                "status" => true,
                "data" => $services,
            ], 200);
    }
}
