<?php

namespace App\Models;

use App\Models\CategoriesServices;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Services extends Model
{
    use HasFactory;
public function categorie_service()
{
    return $this->belongsTo(CategoriesServices::class);
}

}
