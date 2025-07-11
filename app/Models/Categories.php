<?php

namespace App\Models;

use App\Models\Services;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Categories extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'categorie'
    ];
     public function services()
   {
    return $this->hasMany(Services::class);
    }
}
