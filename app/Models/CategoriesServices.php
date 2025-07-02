<?php

namespace App\Models;

use App\Models\Services;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CategoriesServices extends Model
{
    use HasFactory;
    public function service()
{
    return $this->hasMany(Services::class);
}
}
