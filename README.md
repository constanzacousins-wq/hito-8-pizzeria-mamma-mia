# Pizzería Mamma Mía - Hito 8

Proyecto desarrollado con **React y Vite** para el Bootcamp Full Stack JavaScript de Desafío Latam.

## Descripción

En este hito final se implementa la **autenticación real de usuarios mediante JWT (JSON Web Token)**, conectando la aplicación React con un backend desarrollado en Node.js y Express.

Se utiliza Context API para administrar la sesión del usuario, permitiendo registrarse, iniciar sesión, consultar el perfil, cerrar sesión y realizar una simulación de compra.

El proyecto continúa el desarrollo realizado en los hitos anteriores de Pizzería Mamma Mía.

## Funcionalidades

- Visualización de pizzas desde una API.
- Consulta de detalles de cada pizza mediante rutas dinámicas y `useParams`.
- Carrito de compras administrado con Context API.
- Registro de usuarios mediante `/api/auth/register`.
- Inicio de sesión mediante `/api/auth/login`.
- Almacenamiento del token JWT y correo electrónico.
- Consulta del perfil autenticado mediante `/api/auth/me`.
- Cierre de sesión desde Profile y Navbar.
- Protección de las rutas Profile, Login y Register.
- Envío del carrito al backend mediante `/api/checkouts`.
- Mensaje de confirmación cuando la compra se realiza correctamente.

## Tecnologías

- React
- JavaScript
- CSS3
- React Router DOM
- Context API
- Vite
- JWT (JSON Web Token)
- Fetch API
- Node.js y Express (backend proporcionado como material de apoyo)

## Instalación

### Frontend

Clonar el repositorio e instalar las dependencias:

```bash
git clone https://github.com/constanzacousins-wq/hito-8-pizzeria-mamma-mia.git
cd hito-8-pizzeria-mamma-mia
npm install
npm run dev
```

La aplicación estará disponible en:

`http://localhost:5173/hito-8-pizzeria-mamma-mia/`

### Backend

Para utilizar las funcionalidades de autenticación y compra, es necesario ejecutar el backend proporcionado por Desafío Latam.

1. Descargar y descomprimir el material de apoyo Backend Pizzas.
2. Abrir la carpeta del backend.
3. Instalar las dependencias con `npm install`.
4. Iniciar el servidor con `npm run dev`.

El backend debe ejecutarse en:

`http://localhost:5000`

## Endpoints utilizados

| Método | Endpoint | Descripción |
|---|---|---|
| POST | `/api/auth/register` | Registrar usuario |
| POST | `/api/auth/login` | Iniciar sesión |
| GET | `/api/auth/me` | Obtener perfil autenticado |
| POST | `/api/checkouts` | Simular compra del carrito |

Las rutas protegidas requieren un token JWT mediante el encabezado `Authorization: Bearer`.

## Repositorio

https://github.com/constanzacousins-wq/hito-8-pizzeria-mamma-mia

## Demo

Pendiente de publicación en GitHub Pages.

**Nota:** La aplicación requiere un backend ejecutándose en `localhost:5000` para utilizar las funcionalidades de autenticación y compra. La demo estática de GitHub Pages no incluye el backend.

## Autoría

**Constanza Cousins**

Bootcamp Full Stack JavaScript — Desafío Latam.