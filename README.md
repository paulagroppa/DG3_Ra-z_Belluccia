# DG3_Raiz_Belluccia
Página web de remodelación de muebles
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>RAÍZ - Restauración de muebles</title>

  <!-- Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">

  <!-- GSAP -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

  <link rel="stylesheet" href="css/styles.css" />
</head>

<body class="bg-[#F5F2EB] text-gray-900 font-[Inter]">

<!-- NAV -->
<header class="sticky top-0 z-50 bg-[#F5F2EB]/80 backdrop-blur border-b">
  <div class="max-w-6xl mx-auto flex items-center justify-between p-4">
    <div class="text-sm">☰</div>
    <h1 class="font-['Playfair_Display'] text-2xl tracking-widest">RAÍZ</h1>
    <div class="relative">
      🛒
      <span class="absolute -top-2 -right-2 bg-[#F233B9] text-white text-xs px-2 rounded-full">0</span>
    </div>
  </div>
</header>

<!-- HERO -->
<section class="min-h-[90vh] flex items-center">
  <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-6 items-center">

    <div class="hero-text">
      <h2 class="text-5xl md:text-6xl font-['Playfair_Display'] leading-tight">
        Muebles con historia
      </h2>
      <p class="italic mt-3 text-lg">Diseñados para una nueva generación.</p>

      <div class="flex gap-4 mt-6 flex-wrap">
        <button class="btn-primary">APRENDÉ EL OFICIO →</button>
        <button class="btn-secondary">CONOCER EL PROCESO</button>
      </div>
    </div>

    <img class="rounded-xl shadow-xl"
      src="https://source.unsplash.com/800x900/?interior,furniture"
      alt="mueble restaurado" />
  </div>
</section>

<!-- HISTORIA -->
<section class="py-24">
  <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-6 items-center">

    <div>
      <span class="text-[#F233B9] font-semibold">1. HISTORIA</span>
      <h3 class="text-4xl font-['Playfair_Display'] mt-3">Cada pieza tiene una historia</h3>
      <p class="mt-4 text-gray-700">
        Rescatamos muebles olvidados, los restauramos y los reinterpretamos para que vuelvan a formar parte de la vida cotidiana.
      </p>
      <a class="text-[#63F263] mt-4 inline-block font-semibold">SOBRE RAÍZ →</a>
    </div>

    <img class="rounded-xl"
      src="https://source.unsplash.com/800x800/?sofa,design"
      alt="sillón" />
  </div>
</section>

<!-- ANTES Y DESPUÉS -->
<section class="py-24 bg-white/40">
  <div class="max-w-6xl mx-auto p-6">

    <span class="text-[#F233B9] font-semibold">2. ANTES Y DESPUÉS</span>
    <h3 class="text-4xl font-['Playfair_Display'] mt-3 mb-10">Transformación real</h3>

    <div class="grid md:grid-cols-2 gap-6">
      <img class="rounded-xl"
        src="https://source.unsplash.com/800x800/?old,chair"
        alt="antes" />

      <img class="rounded-xl"
        src="https://source.unsplash.com/800x800/?blue,chair"
        alt="después" />
    </div>

    <div class="flex gap-6 mt-6 text-sm font-medium">
      <span>✔ Rescatado</span>
      <span>✔ Restaurado</span>
      <span>✔ Reinterpretado</span>
    </div>
  </div>
</section>

<!-- CURSO -->
<section class="py-24 bg-[#F2C94C]">
  <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-6 items-center">

    <div>
      <span class="text-[#F233B9] font-semibold">3. CURSO</span>
      <h3 class="text-4xl font-['Playfair_Display'] mt-3">Aprendé el oficio</h3>
      <p class="mt-4">Transformá muebles y creá piezas únicas.</p>

      <button class="mt-6 bg-[#F233B9] text-white px-6 py-3 rounded-full">
        APRENDÉ EL OFICIO →
      </button>
    </div>

    <img class="rounded-xl"
      src="https://source.unsplash.com/800x800/?painting,chair"
      alt="curso" />
  </div>
</section>

<!-- COLECCIÓN -->
<section class="py-24">
  <div class="max-w-6xl mx-auto p-6">

    <span class="font-semibold">4. COLECCIÓN</span>
    <h3 class="text-4xl font-['Playfair_Display'] mt-3 mb-10">Piezas destacadas</h3>

    <div class="grid md:grid-cols-3 gap-6">

      <!-- CARD -->
      <div class="card group">
        <img src="https://source.unsplash.com/600x600/?chair,color" class="rounded-xl" />
        <h4 class="mt-3 font-semibold">Silla Azul Raíz</h4>
        <p>$120</p>
        <button class="add-btn">Añadir al carrito</button>
      </div>

      <div class="card group">
        <img src="https://source.unsplash.com/600x600/?wood,furniture" class="rounded-xl" />
        <h4 class="mt-3 font-semibold">Sillón Renacido</h4>
        <p>$250</p>
        <button class="add-btn">Añadir al carrito</button>
      </div>

      <div class="card group">
        <img src="https://source.unsplash.com/600x600/?table,vintage" class="rounded-xl" />
        <h4 class="mt-3 font-semibold">Mesa Original</h4>
        <p>$180</p>
        <button class="add-btn">Añadir al carrito</button>
      </div>

    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="bg-black text-[#F5F2EB] py-16">
  <div class="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">

    <div>
      <h3 class="text-2xl font-['Playfair_Display']">Sumate a la nueva generación de restauradores</h3>

      <div class="mt-4 flex gap-2">
        <input class="p-3 w-full text-black" placeholder="Email" />
        <button class="bg-[#63F263] px-4">OK</button>
      </div>
    </div>

    <div class="text-sm">
      <p>Instagram | TikTok | Contacto</p>
      <p class="mt-4">© RAÍZ 2026</p>
    </div>
  </div>
</footer>

<script src="js/script.js"></script>
</body>
</html>
