<?php

namespace App\Models;

use App\Models\User;
use App\Models\Employes;
use App\Models\Reservations;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Coiffeurs extends Model
{
    use HasFactory;

    public function employes()
{
    return $this->hasMany(Employes::class);
}
   public function reservations()
{
    return $this->belongsToMany(Reservations::class);
}

  public function user(){
    return $this->belongsTo(User::class);
  }
}
