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
        Schema::create('all_services', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('categorie_id');
 
      $table->foreign('categorie_id')->references('id')->on('category');

      $table->foreignId('coiffeur_id')
      ->constrained()
      ->onUpdate('cascade')
      ->onDelete('cascade');
            $table->string('nom_service',32);
            $table->string('description',100);
            $table->integer('price');
            $table->string('duree',30);
            $table->boolean('visibilite');
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
        Schema::dropIfExists('all_services');
    }
};
