# Alejandro Arana Fernández  2220232039
# Perfil Digital como landing page con TailWind y Next.js


##  Inicio rápido

# 1. Instalar dependencias
npm install

# 2. Correr en modo desarrollo
npm run dev

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

##  Build de producción

npm run build
npm start

## 📁 Estructura

```
├── app/
│   ├── globals.css      # Estilos globales, animaciones, fuentes
│   ├── layout.tsx       # Layout raíz con metadata
│   └── page.tsx         # Página principal (Hero, About, Skills, Contact)
├── tailwind.config.ts   # Configuración de colores, fuentes y keyframes
├── postcss.config.js
└── tsconfig.json
```

## 🎨 Diseño

- **Paleta**: Negro profundo `#050508` + Azul `#2563EB` / `#3B82F6`
- **Tipografía**: Cormorant Garamond (display) + DM Sans (cuerpo)
- **Secciones**: Hero · Sobre mí · Habilidades · Contacto
- **Animaciones**: Fade-up al scroll, shimmer en barras de progreso, floating orbs

## ✏️ Personalización

Para actualizar tus datos, edita las constantes al inicio de `app/page.tsx`:

- `skills` → tus habilidades y niveles (0-100)
- `certifications` → tus certificados
- Email y textos en los componentes `Contact` y `Hero`
