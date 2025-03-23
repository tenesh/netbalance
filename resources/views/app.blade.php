<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>netbalance</title>

    @vite(['resources/js/app.ts'])
    @routes
    @inertiaHead
</head>
<body class="antialiased font-display">
@inertia
</body>
</html>
