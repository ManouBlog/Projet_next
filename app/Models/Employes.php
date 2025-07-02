<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employes extends Model
{
    use HasFactory;

    public function coiffeur()
{
    return $this->belongsTo(Coiffeurs::class);
}
}
