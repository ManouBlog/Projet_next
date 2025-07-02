<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Clients extends Model
{
    use HasFactory;

    public function user()
{
    return $this->belongsTo(User::class);
}

public function reservations()
{
    return $this->belongsToMany(Reservations::class);
}
}
