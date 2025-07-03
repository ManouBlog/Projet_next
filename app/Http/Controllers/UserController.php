<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{
    /**
     * Store a new user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request){

        $user = new User();
    
         $validator = Validator::make($request->all(), [
    'nom' => 'required|min:3',
    'email' => 'required|email|unique:users',
    'password' => 'required'
], [
    'nom.required' => 'Le nom est obligatoire',
    'nom.min' => 'Le nom doit contenir au moins 3 caractères',
    'email.required' => 'L\'email est obligatoire',
    'email.email' => 'Veuillez entrer une adresse email valide',
    'email.unique' => 'Cet email est déjà utilisé',
    'password.required' => 'Le mot de passe est obligatoire'
]);
if ($validator->fails()) {
    return response()->json([
                'status' => false,
                'message' => $validator->errors(),
            ], 400);
}
        $user->nom = $request->nom;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        
        $user->save();
        return response()->json([
            "status" => true,
            "data" => $user
        ], 201);
    }
}
