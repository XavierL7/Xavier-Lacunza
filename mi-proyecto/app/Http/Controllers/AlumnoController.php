<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class AlumnoController extends Controller
{
    public function index()
    {
        $alumnose = DB::table('alumnos')->get();

        return view('alumnos', compact('alumnose'));
    }
}