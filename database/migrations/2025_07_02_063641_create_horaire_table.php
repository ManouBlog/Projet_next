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
        Schema::create('horaire', function (Blueprint $table) {
            $table->id();
             $table->foreignId('user_id')
              ->constrained()
              ->onUpdate('cascade')
              ->onDelete('cascade');
            $table->string('hour_open',32);
            $table->string('hour_close',100);
            $table->date('date_debut_job')->nullable();
            $table->date('date_fin_job')->nullable();
            $table->string('day_week',100)->nullable();
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
        Schema::dropIfExists('horaire');
    }
};
