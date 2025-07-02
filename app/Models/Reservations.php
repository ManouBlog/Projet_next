<?php

namespace App\Models;

use App\Models\Clients;
use App\Models\Coiffeurs;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Reservations extends Model
{
    use HasFactory;

    public function coiffeurs()
{
    return $this->belongsToMany(Coiffeurs::class);
}
   public function clients()
{
    return $this->belongsToMany(Clients::class);
}
}
