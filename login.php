<!DOCTYPE html>
<html lang="fa" dir="rtl">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Js learning</title>
  <link rel="stylesheet" href="login.css">
</head>

<body class="flex items-center justify-center h-screen w-full bg-gray-50 font-[YekanBakh-Medium]">

  <div class="login-form flex flex-col items-center justify-center w-[320px] space-y-4 bg-white border p-5 pt-10 pb-10 rounded-[1.5rem]">

    <header class="form-header flex items-center justify-center w-[400px] gap-2 text-xl text-slate-800 mb-2">
      <span class="font-YekanBakh-Boldt inline ">ورود</span>
    </header>

    <main class="w-full space-y-3">
      <div class="input-card space-y-1">
        <input type="text" placeholder="نام کاربری ..." class="input" autocomplete="off" />
        <p class="message hide-message success text-center text-sm">نام کاربری صحیح است</p>
      </div>
    </main>

    <footer class="w-full space-y-5">
      <button class="login-button bg-blue-600 text-white rounded-md w-full h-10 transition duration-150 hover:opacity-90 focus:ring-2">ورود</button>

      <div class="continue-with relative flex items-center justify-center h-px w-full bg-black/10">
      </div>
    </footer>

  </div>

  <script src="login.js"></script>
</body>

</html>
