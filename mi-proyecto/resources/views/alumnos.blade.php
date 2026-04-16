<!DOCTYPE html>
<html>
<head>
    <title>Lista de alumnos</title>
</head>
<body>

<h1>Lista de alumnos</h1>

@foreach ($alumnose as $alumno)
    {{ $alumno->nombres }} <br>
@endforeach

</body>
</html>