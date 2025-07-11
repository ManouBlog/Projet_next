<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoriesController extends Controller
{
    /**
     * Add categorie.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addCategorie(Request $request){
     $Categorie = new Categories();
     $validator = Validator::make($request->all(), [
        'categorie' => 'required|min:3|unique:categories'
    ], [
        'categorie.min' => 'Le nom doit contenir au moins 3 caractères',
        'categorie.unique' => 'Cette categorie existe déjà dans la base de données',
        'categorie.required' => 'la catégorie est obligatoire'
    ]);
if ($validator->fails()) {
    return response()->json([
                'status' => false,
                'message' => $validator->errors(),
            ], 400);
}
     $Categorie->categorie = $request->categorie;
     $Categorie->save();
     return response()->json([
                "status" => false,
                "data" => $Categorie,
            ], 200);
    }

    public function getListCategorie(){
     $categorie = Categories::get();
     return response()->json([
                "status" => false,
                "data" => $categorie,
            ], 400);
    }
    /**
     * Update role.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateCategorie(Request $request,$id){

     $categorie = Categories::find($id);

       if (!$categorie) {
        return response()->json([
            'status' => false,
            'message' => 'Catégorie non trouvée',
        ], 404);
    }
   $validator = Validator::make($request->all(), [
        'categorie' => 'required|min:3'
    ], [
        'categorie.min' => 'Le nom doit contenir au moins 3 caractères',
        'categorie.required' => 'Le libellé est obligatoire'
    ]);
if ($validator->fails()) {
    return response()->json([
                'status' => false,
                'message' => $validator->errors(),
            ], 400);
}
     $categorie->categorie = !empty($request->categorie) ? $request->categorie:$categorie->categorie;

     $categorie->save();

     return response()->json([
                "status" => true,
                "data" => $categorie,
            ], 200);
    }
}


