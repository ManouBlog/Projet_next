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
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->foreignId('coiffeurs_id')
      ->constrained()
      ->onUpdate('cascade')
      ->onDelete('cascade');
      $table->foreignId('categories_id')
      ->constrained()
      ->onUpdate('cascade')
      ->onDelete('cascade');
      $table->string('nom_service',50);
      $table->string('description',90);
      $table->string('price',20);
      $table->string('duree');
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
        Schema::dropIfExists('services');
    }
};
