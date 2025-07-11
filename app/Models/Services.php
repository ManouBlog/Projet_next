<?php

namespace App\Models;

use App\Models\Coiffeurs;
use App\Models\Categories;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Services extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nom_service',
        'description',
        'price',
        'duree',
        'visibilite'
    ];
    public function categorie()
   {
    return $this->belongsTo(Categories::class,'categories_id');
    }
     public function coiffeur()
   {
    return $this->belongsTo(Coiffeurs::class,'coiffeurs_id');
    }
}
