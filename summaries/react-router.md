# 🧭 Guía completa de React Router v6.4+

Esta guía explica **cómo funciona React Router v6.4+** de forma clara y estructurada, cubriendo:

- `RouterProvider`
- el `router`
- `Route` y sus props
- `Outlet`
- `errorElement`
- rutas dinámicas
- hooks principales de `react-router-dom`

Ideal como **documento de referencia** o para exportar.

---

## 1️⃣ ¿Qué es React Router?

React Router es el sistema de **navegación** de una aplicación React.

Se encarga de:
- Leer la URL del navegador
- Decidir qué componentes renderizar
- Navegar sin recargar la página
- Gestionar parámetros, estado y errores

---

## 2️⃣ `RouterProvider`: el punto de entrada

```jsx
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return <RouterProvider router={router} />;
}
```

### ¿Qué hace?

- Conecta el router con React
- Escucha cambios de URL
- Renderiza la ruta correcta
- Proporciona el contexto para todos los hooks

📌 **Sin `RouterProvider`, el routing no funciona.**

---

## 3️⃣ El `router` (`createBrowserRouter`)

```js
export const router = createBrowserRouter(...);
```

El router es un **objeto de configuración** que contiene:
- Todas las rutas
- Sus jerarquías
- Componentes asociados
- Gestión de errores

`createBrowserRouter`:
- Usa la History API del navegador
- Permite navegación sin recarga
- Trabaja con URLs normales (`/demo`, `/users/1`)

---

## 4️⃣ `Route`: definición de rutas

```jsx
<Route path="/demo" element={<Demo />} />
```

Un `Route` **no renderiza JSX directamente**. Solo declara una regla:

> Cuando la URL coincida con este `path`, renderiza este `element`.

---

### Props principales de `Route`

#### `path`
```jsx
<Route path="/demo" />
```
Define la URL.

---

#### `element`
```jsx
<Route element={<Demo />} />
```
Componente que se renderiza.

---

#### `children` (rutas anidadas)

```jsx
<Route element={<Layout />}>
  <Route path="demo" element={<Demo />} />
</Route>
```

Permite crear **layouts y jerarquías**.

---

#### `index`
```jsx
<Route index element={<Home />} />
```

Ruta por defecto del padre (equivale a `path=""`).

---

#### `errorElement`
```jsx
<Route
  element={<Layout />}
  errorElement={<ErrorPage />}
/>
```

Se renderiza cuando:
- La ruta no existe
- Falla un loader/action
- Se lanza un error

Funciona como un **Error Boundary del router**.

---

## 5️⃣ `Outlet`: el hueco dinámico

```jsx
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
```

### ¿Qué es?

- Un marcador de posición
- El router inserta ahí la ruta hija activa

📌 **Si un `Route` tiene hijos, su componente debe tener `<Outlet />`.**

---

### Render mental

URL: `/demo`

```jsx
<Layout>
  <Demo />
</Layout>
```

Esto lo hace internamente React Router.

---

## 6️⃣ Rutas dinámicas

```jsx
<Route path="/single/:theId" element={<Single />} />
```

`:theId` es un parámetro dinámico.

URL:
```
/single/42
```

En el componente:

```js
import { useParams } from "react-router-dom";

const { theId } = useParams(); // "42"
```

⚠️ Los parámetros siempre llegan como `string`.

---

## 7️⃣ Hooks principales de `react-router-dom`

### `useNavigate`

```js
const navigate = useNavigate();

navigate("/demo");
navigate(-1); // volver atrás
```

---

### `useParams`

```js
const { id } = useParams();
```

Lee parámetros dinámicos de la URL.

---

### `useLocation`

```js
const location = useLocation();

location.pathname;
location.search;
location.state;
```

Información completa de la URL actual.

---

### `useSearchParams`

```js
const [searchParams, setSearchParams] = useSearchParams();

searchParams.get("page");
setSearchParams({ page: 2 });
```

Manejo de query params (`?page=2`).

---


## 8️⃣  El componente `Link`

El componente `Link` de `react-router-dom` permite la **navegación interna** entre rutas de la aplicación sin recargar la página.

### ¿Por qué usar `Link`?
- Evita recargas completas del navegador (SPA)
- Cambia la URL y renderiza la ruta correspondiente
- Mantiene el estado de la app y la navegación fluida

### Uso básico

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/demo">Demo</Link>
      <Link to="/single/42">Detalle</Link>
    </nav>
  );
}
```

### Props principales
- `to`: la ruta a la que navegar (string o location object)
- `replace`: si es `true`, reemplaza la entrada actual en el historial
- Puedes usar estilos, clases, etc. como en un `<a>` normal

### Ejemplo con parámetros dinámicos

```jsx
<Link to={`/single/${theId}`}>Ver detalle</Link>
```

### Diferencias con `<a>`
- `<Link>` **no recarga** la página, `<a>` sí
- `<Link>` es para rutas internas, `<a>` para enlaces externos

---


## 9️⃣ Flujo completo del router

1. `RouterProvider` monta el router
2. El router lee la URL
3. Busca rutas coincidentes
4. Renderiza el `element` padre
5. Inserta la ruta hija en el `<Outlet />`
6. Los hooks funcionan gracias al contexto

---

## 9️ Mapa mental final

```
RouterProvider
   ↓
router (configuración)
   ↓
Route (padres e hijas)
   ↓
Layout (estructura)
   ↓
Outlet (hueco)
   ↓
Página activa
```

---

## ✅ Resumen rápido

- `RouterProvider` conecta el router con React
- `router` define las rutas
- `Route` describe reglas de render
- `element` indica el componente
- `Outlet` es el hueco para rutas hijas
- `errorElement` maneja errores
- Rutas dinámicas usan `:id`
- Hooks permiten navegar y leer la URL

---

[Documentacion oficial](https://reactrouter.com/)

---



