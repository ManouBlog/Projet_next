<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Roles;
use App\Models\Clients;
use App\Models\Employes;
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
        // Hacher ton mot de passe avec le terminal et laravel
        // php artisan tinker
       // Hash::make('monpassword')

       $request->validate([
            "email" => "required|email",
            "password" => "required"
        ]);
        $user = User::where("email", "=", $request->email)->with(['client', 'coiffeur','role'])->first();
    
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
                "data"=>$user
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
        $user = $Alluser::with('role')->get();
         return response()->json([
            "status" => true,
            "data" => $user
        ], 200);
    }

   public function seeProfilUserConnect(){
    $infoUser=null;
     $user = auth()->user(); // Récupère l'utilisateur connecté
     $userConnect = User::where("email", "=", $user->email)->with(['client', 'coiffeur'])->first();
     if($userConnect->client){
        $infoUser = $userConnect->client;
     }
     if($userConnect->coiffeur){
     $infoUser = $userConnect->coiffeur;
     }
    return response()->json([
            "status" => true,
            "data" => $infoUser
        ], 200);
   }

   /**
     * Update user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
   public function updateInfoUser(Request $request){

     // when use update with method put
     // use form onto postman: x-www-form-urlencode 
     // if you want update with method POST : use form-data on postman

     $user = auth()->user(); // Récupère l'utilisateur connecté
     $userConnect = User::where("email", "=", $user->email)->with(['client', 'coiffeur'])->first();
      if($userConnect->client){
         $validator = Validator::make($request->all(), [
    'nom' => 'min:3',
    'prenoms' => 'min:3',
    'email' => 'email|unique:clients', // J'ai changé 'users' en 'clients' si c'est votre table
    'sexe' => 'in:homme,femme', // Supposant que sexe peut être 'homme' ou 'femme'
    'birthday' => 'date',
    'phone' => 'min:10|max:10' // Adaptation selon le format de téléphone attendu
], [
    'nom.min' => 'Le nom doit contenir au moins 3 caractères',
    'prenoms.min' => 'Le prénom doit contenir au moins 3 caractères',
    'email.email' => 'Veuillez entrer une adresse email valide',
    'email.unique' => 'Cet email est déjà utilisé',
    'sexe.in' => 'Le sexe doit être homme ou femme',
    'birthday.date' => 'Veuillez entrer une date valide',
    'phone.min' => 'Le téléphone doit contenir au moins 8 caractères',
    'phone.max' => 'Le téléphone ne doit pas dépasser 15 caractères'
]);
if ($validator->fails()) {
    return response()->json([
                'status' => false,
                'message' => $validator->errors(),
            ], 400);
}
        $ClientConnect = Clients::where("email", "=", $user->email)->with('user')->first();
        
        $Client = Clients::findOrFail($ClientConnect->id);

        $Client->nom = !empty($request->nom) ? $request->nom : $Client->nom;
        $Client->prenoms = !empty($request->prenoms) ? $request->prenoms : $Client->prenoms;
      if(!empty($request->email)){
         $Client->email = !empty($request->email) ? $request->email : $Client->email;
         $userConnect->email = !empty($request->email) ? $request->email : $userConnect->email;
        }
        $Client->sexe = !empty($request->sexe) ? $request->sexe : $Client->sexe;
        $Client->phone = !empty($request->phone) ? $request->phone : $Client->phone;
        $Client->save();
     }

     if($userConnect->coiffeur){
         $validator = Validator::make($request->all(), [
    'nom_entreprise' => 'min:3|max:100',
    'email' => 'email|unique:coiffeurs,email',
    'photo_profil' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // 2MB max
    'phone' => 'digits:10|regex:/^0[1-9][0-9]{8}$/' // Format français
], [
  
    'nom_entreprise.min' => 'Le nom doit contenir au moins 3 caractères',
    'nom_entreprise.max' => 'Le nom ne doit pas dépasser 100 caractères',
    'email.email' => 'Veuillez entrer une adresse email valide',
    'email.unique' => 'Cet email est déjà utilisé par un autre coiffeur',
    'photo_profil.image' => 'Le fichier doit être une image',
    'photo_profil.mimes' => 'Les formats autorisés sont: jpeg, png, jpg, gif',
    'photo_profil.max' => 'La taille de l\'image ne doit pas dépasser 2MB',
    'phone.digits' => 'Le téléphone doit contenir exactement 10 chiffres',
    'phone.regex' => 'Le numéro doit commencer par 0 et contenir 10 chiffres valides'
]);
if ($validator->fails()) {
    return response()->json([
                'status' => false,
                'message' => $validator->errors(),
            ], 400);
}

     $CoiffeurConnect = Coiffeurs::where("email", "=", $user->email)->with('user')->first();
     $Coiffeur = Coiffeurs::findOrFail($CoiffeurConnect->id);
     $Coiffeur->nom_entreprise = !empty($request->nom_entreprise) ? $request->nom_entreprise : $Coiffeur->nom_entreprise;
     
     if(!empty($request->email)){
     $Coiffeur->email = !empty($request->email) ? $request->email : $Coiffeur->email;
      $userConnect->email = !empty($request->email) ? $request->email : $userConnect->email;
     }
   
     $Coiffeur->phone = !empty($request->phone) ? $request->phone : $Coiffeur->phone;
     
      if ($request->hasFile('photo_profil')) {
     $image = $request->file('photo_profil');
     $ext = $image->extension();
     $fileName = time() . '.' . $ext;
     $image->storeAs('public/images', $fileName);
     $Coiffeur->photo_profil = 'images/' . $fileName;
      }
     $Coiffeur->save();
     }
      $userConnect->save();
     return response()->json([
            "status" => true,
            "message" => "mis à jour des informations."
        ], 200);
     
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
    'password' => 'required',
    'role_id'=> 'required|exists:roles,id'
], [
    'role_id.exists' => 'Le role sélectionnée n\'existe pas.',
    'email.required' => 'L\'email est obligatoire',
    'email.email' => 'Veuillez entrer une adresse email valide',
    'email.unique' => 'Cet email est déjà utilisé',
    'password.required' => 'Le mot de passe est obligatoire',
    'role_id.required' => 'le role_id est requis'
]);
if ($validator->fails()) {
    return response()->json([
                'status' => false,
                'message' => $validator->errors(),
            ], 400);
}
        $user->email = $request->email;
        $user->role_id = $request->role_id;
        $user->password = Hash::make($request->password);
        $user->save();
         
        if($user->id){
            $RoleUser = Roles::where("id", "=", $user->role_id)->first();
    
           if($RoleUser->libelle === 'Clients'){
           return $this->saveClients($request, $user->id);
           }
           if($RoleUser->libelle === 'Coiffeur'){
            return $this->saveCoiffeurs($request, $user->id);
           }
           if($RoleUser->libelle === 'Employe'){
             return $this->saveEmployes($request, $user->id);
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
    'phone' => 'required|min:10|max:10',// Adaptation selon le format de téléphone attendu
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

    public function saveEmployes(Request $request, $userIdentifiant){
     $employes = new Employes();
    
    $validator = Validator::make($request->all(), [
    'user_id' => 'required|exists:users,id',
    'coiffeur_id' => 'required|exists:coiffeurs,id',
    'nom' => 'required|min:3|max:50',
    'prenoms' => 'required|min:5|max:90',
    'email' => 'required|email|unique:coiffeurs,email',
    'photo_profil' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
    'phone' => 'required|digits:10|regex:/^0[1-9][0-9]{8}$/'
], [
    'user_id.required' => 'L\'utilisateur est obligatoire.',
    'user_id.exists' => 'L\' utilisateur sélectionnée n\'existe pas.',
    'coiffeur_id.required' => 'Le coiffeur est obligatoire.',
    'coiffeur_id.exists' => 'Le coiffeur sélectionné n\'existe pas.',
    'nom.required' => 'Le nom est obligatoire.',
    'nom.min' => 'Le nom doit contenir au moins 3 caractères.',
    'nom.max' => 'Le nom ne doit pas dépasser 50 caractères.',
    'prenoms.required' => 'Les prénoms sont obligatoires.',
    'prenoms.min' => 'Les prénoms doivent contenir au moins 5 caractères.',
    'prenoms.max' => 'Les prénoms ne doivent pas dépasser 90 caractères.',
    'email.required' => 'L\'email est obligatoire.',
    'email.email' => 'Veuillez entrer une adresse email valide.',
    'email.unique' => 'Cet email est déjà utilisé par un autre coiffeur.',
    'photo_profil.required' => 'La photo de profil est obligatoire.',
    'photo_profil.image' => 'Le fichier doit être une image.',
    'photo_profil.mimes' => 'L\'image doit être de type jpeg, png, jpg ou gif.',
    'photo_profil.max' => 'La taille de l\'image ne doit pas dépasser 2MB.',
    'phone.required' => 'Le numéro de téléphone est obligatoire.',
    'phone.digits' => 'Le numéro de téléphone doit contenir 10 chiffres.',
    'phone.regex' => 'Le numéro de téléphone doit être au format français valide (0X XX XX XX XX).'
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
        $employes->user_id = $userIdentifiant;
        $employes->coiffeur_id = $request->coiffeur_id;
        $employes->nom = $request->nom;
        $employes->prenoms = $request->prenoms;
        $employes->email = $request->email;
        $employes->phone = $request->phone;
        if ($request->hasFile('photo_profil')) {
    $image = $request->file('photo_profil');
    $ext = $image->extension();
    $fileName = time() . '.' . $ext;
    $image->storeAs('public/images', $fileName);
    $employes->photo_profil = 'images/' . $fileName;
      }
        $employes->save();
        return response()->json([
            "status" => true,
            "message" =>'Inscription reussie' 
        ], 201);
    }
}

