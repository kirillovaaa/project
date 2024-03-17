# Проверка тестового окружения

Чтобы проверить тестовое окружение и убедиться, что у вас всё установлено верно, сделайте следующее:

1. В корне проекта запустите тестирование.

```bash
npm run test:example
```

2. Раскоментируйте нужные блоки в файле `task-example/index.html`.

Блок main-nav:

```html
<nav class="main-nav">
  ...
</nav>
```

Блок hero:

```html
<section class="hero">
  ...
</section>
```

Блок footer-container:

```html
<div class="footer-container container">
  ...
</div>
```

3. В корне проекта снова запустите тестирование.

```bash
npm run test:example
```

Тесты начнут проходить.
