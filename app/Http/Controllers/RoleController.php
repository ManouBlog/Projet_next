<?php

namespace App\Http\Controllers;

use App\Models\Roles;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class RoleController extends Controller
{

    /**
     * Add role.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addRole(Request $request){
     $role = new Roles();
     $validator = Validator::make($request->all(), [
    'libelle' => 'min:3'
], [
    'libelle.min' => 'Le nom doit contenir au moins 3 caractères',
]);
if ($validator->fails()) {
    return response()->json([
                'status' => false,
                'message' => $validator->errors(),
            ], 400);
}
     $role->libelle = $request->libelle;
     $role->save();
     return response()->json([
                "status" => false,
                "data" => $role,
            ], 400);
    }

    public function getListRole(){
     $role = Roles::get();
     return response()->json([
                "status" => false,
                "data" => $role,
            ], 400);
    }

    /**
     * Update role.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateRole(Request $request,$id){
     $role = Roles::find($id);
       if (!$role) {
        return response()->json([
            'status' => false,
            'message' => 'Rôle non trouvé',
        ], 404);
    }
     $validator = Validator::make($request->all(), [
    'libelle' => 'min:3'
], [
    'libelle.min' => 'Le nom doit contenir au moins 3 caractères',
]);
if ($validator->fails()) {
    return response()->json([
                'status' => false,
                'message' => $validator->errors(),
            ], 400);
}
     $role->libelle = !empty($request->libelle) ? $request->libelle:$role->libelle;

     $role->save();

     return response()->json([
                "status" => false,
                "data" => $role,
            ], 400);
    }
}
