<?php

namespace App\Models;

use App\Models\CategorieService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Services extends Model
{
    use HasFactory;
public function categorie_service()
{
    return $this->belongsTo(CategorieService::class);
}

}
