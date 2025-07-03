<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Clients;
use App\Models\Coiffeurs;
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

       $request->validate([
            "email" => "required|email",
            "password" => "required"
        ]);
        $user = User::where("email", "=", $request->email)->first();
    
        if (!$user) {
            return response()->json([
                "status" => false,
                "message" => "L'email n'existe pas dans la base de donnée.",
            ], 400);
        }
        if (Hash::check($request->password,$user->password)){
                $token = $user->createToken("auth_token")->plainTextToken;
            return response()->json([
                "status" => true,
                "access_token" => $token,
            ], 200);
            }else{
                return response()->json([
                "status" => false,
                "message" => "Le mot de passe est incorrect.",
            ], 400);
            }
    }

   // le model contient la facon d'afficher la premiere
   // lettre en Maj.
    public function seeAllUser(){
        $Alluser = new User();
        $user = $Alluser->get();
         return response()->json([
            "status" => true,
            "data" => $user
        ], 201);
    }

    /**
     * Store a new user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function registerUser(Request $request){
       $user = new User();
    
          $validator = Validator::make($request->all(), [
    'email' => 'required|email|unique:users',
    'password' => 'required'
], [
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
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();
         
        if($user->id){
           if($request->isClient){
           return $this->saveClients($request, $user->id);
           }else{
            return $this->saveCoiffeurs($request, $user->id);
           }
        
        }
        
    }

/**
     * Store a new user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    private function saveClients(Request $request, $userIdentifiant){
        
      $clients = new Clients();
    
       $validator = Validator::make($request->all(), [
    'nom' => 'required|min:3',
    'prenoms' => 'required|min:3',
    'email' => 'required|email|unique:clients', // J'ai changé 'users' en 'clients' si c'est votre table
    'sexe' => 'required|in:homme,femme', // Supposant que sexe peut être 'homme' ou 'femme'
    'birthday' => 'required|date',
    'phone' => 'required|min:10|max:10' // Adaptation selon le format de téléphone attendu
], [
    'nom.required' => 'Le nom est obligatoire',
    'nom.min' => 'Le nom doit contenir au moins 3 caractères',
    'prenoms.required' => 'Le prénom est obligatoire',
    'prenoms.min' => 'Le prénom doit contenir au moins 3 caractères',
    'email.required' => 'L\'email est obligatoire',
    'email.email' => 'Veuillez entrer une adresse email valide',
    'email.unique' => 'Cet email est déjà utilisé',
    'sexe.required' => 'Le sexe est obligatoire',
    'sexe.in' => 'Le sexe doit être homme ou femme',
    'birthday.required' => 'La date de naissance est obligatoire',
    'birthday.date' => 'Veuillez entrer une date valide',
    'phone.required' => 'Le téléphone est obligatoire',
    'phone.min' => 'Le téléphone doit contenir au moins 8 caractères',
    'phone.max' => 'Le téléphone ne doit pas dépasser 15 caractères'
]);

if ($validator->fails()) {
    $user = User::find($userIdentifiant);
        
        // Supprimer l'utilisateur
        $user->delete();

    return response()->json([
                'status' => false,
                'message' => $validator->errors(),
            ], 400);
}

       $clients->nom = $request->nom;
        $clients->prenoms = $request->prenoms;
        $clients->email = $request->email;
        $clients->sexe = $request->sexe;
        $clients->birthday = $request->birthday;
        $clients->phone = $request->phone;
        $clients->user_id = $userIdentifiant;
        $clients->save();
        return response()->json([
            "status" => true,
            "message" =>'Inscription reussie' 
        ], 201);
    }


     private function saveCoiffeurs(Request $request, $userIdentifiant){
        
      $coiffeurs = new Coiffeurs();
    
     $validator = Validator::make($request->all(), [
    'nom_entreprise' => 'required|min:3|max:100',
    'email' => 'required|email|unique:coiffeurs,email',
    'photo_profil' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // 2MB max
    'phone' => 'required|digits:10|regex:/^0[1-9][0-9]{8}$/' // Format français
], [
    'nom_entreprise.required' => 'Le nom de l\'entreprise est obligatoire',
    'nom_entreprise.min' => 'Le nom doit contenir au moins 3 caractères',
    'nom_entreprise.max' => 'Le nom ne doit pas dépasser 100 caractères',
    'email.required' => 'L\'email est obligatoire',
    'email.email' => 'Veuillez entrer une adresse email valide',
    'email.unique' => 'Cet email est déjà utilisé par un autre coiffeur',
    'photo_profil.required' => 'La photo de profil est obligatoire',
    'photo_profil.image' => 'Le fichier doit être une image',
    'photo_profil.mimes' => 'Les formats autorisés sont: jpeg, png, jpg, gif',
    'photo_profil.max' => 'La taille de l\'image ne doit pas dépasser 2MB',
    'phone.required' => 'Le numéro de téléphone est obligatoire',
    'phone.digits' => 'Le téléphone doit contenir exactement 10 chiffres',
    'phone.regex' => 'Le numéro doit commencer par 0 et contenir 10 chiffres valides'
]);

if ($validator->fails()) {
    $user = User::find($userIdentifiant);
        
        // Supprimer l'utilisateur
        $user->delete();
    return response()->json([
                'status' => false,
                'message' => $validator->errors(),
            ], 400);
}

       $coiffeurs->nom_entreprise = $request->nom_entreprise;
        $coiffeurs->email = $request->email;
        if ($request->hasFile('photo_profil')) {
    $image = $request->file('photo_profil');
    $ext = $image->extension();
    $fileName = time() . '.' . $ext;
    $image->storeAs('public/images', $fileName);
    $coiffeurs->photo_profil = 'images/' . $fileName;
      }
        $coiffeurs->phone = $request->phone;
        $coiffeurs->user_id = $userIdentifiant;
        $coiffeurs->save();
        return response()->json([
            "status" => true,
            "message" =>'Inscription reussie' 
        ], 201);
    }
}

