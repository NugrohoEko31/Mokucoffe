<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Moku Coffe</title>

    <link rel="icon" href="{{ asset('images/LOGOMOKU.png') }}" type="image/png">
    <link rel="shortcut icon" href="{{ asset('images/LOGOMOKU.png') }}" type="image/png">
    <link rel="apple-touch-icon" href="{{ asset('images/LOGOMOKU.png') }}">

    <!-- Scripts -->
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    @inertiaHead
</head>
<body class="font-sans antialiased">
    @inertia
</body>
</html>
