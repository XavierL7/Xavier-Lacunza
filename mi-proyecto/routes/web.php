<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::get('/hola', function () {
    return 'Hola mundo';
});

use App\Http\Controllers\AlumnoController;

Route::get('/alumnos', [AlumnoController::class, 'index']);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
