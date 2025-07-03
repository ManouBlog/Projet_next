<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Clients;
use App\Models\Favoris;
use App\Models\Horaires;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getNomAttribute($value)
{
    return ucfirst(strtolower($value));
}

 public function client()
{
    return $this->hasOne(Clients::class);
}
public function coiffeur()
{
    return $this->hasOne(Coiffeurs::class);
}
public function favori()
{
    return $this->hasMany(Favoris::class);
}
public function horaire()
{
    return $this->hasOne(Horaires::class);
}
}
