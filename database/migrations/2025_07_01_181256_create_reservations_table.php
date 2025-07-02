<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->string('date');
            $table->string('heure');
            $table->integer('montant');
            $table->string('mode_paiement',30);
            $table->string('statut',30);
             $table->foreignId('coiffeur_id')
      ->constrained()
      ->onUpdate('cascade')
      ->onDelete('cascade');

      $table->foreignId('client_id')
      ->constrained()
      ->onUpdate('cascade')
      ->onDelete('cascade');
    
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reservations');
    }
};
