# 🌍 Estado Global en React con Context y useReducer

Cuando una aplicación crece, pasar información de componente en
componente usando `props` se vuelve difícil de mantener.\
React nos ofrece **Context** para compartir información de forma global
y **useReducer** para manejar estados más complejos.

## 🧠 ¿Qué es Context en React?

**Context** permite compartir información entre componentes sin
necesidad de pasar props manualmente.

## 🔁 ¿Por qué usar useReducer?

`useReducer` es ideal cuando el estado es complejo y varias partes de la
app lo modifican.

## 🏗️ Arquitectura General

Usamos: - createContext - StoreProvider - useReducer - Reducer - Hook
personalizado

## 📦 Creación del Contexto

``` js
const StoreContext = createContext();
```

## 🚀 StoreProvider

``` js
export function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore());

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}
```

## 🧩 Estado Inicial

``` js
export const initialStore = () => ({
  message: null,
  pokemonList: [],
  pokemonListByPage: []
});
```

## ⚙️ Reducer

``` js
export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'setPokemonList':
      return { ...store };
    default:
      throw Error('Acción desconocida');
  }
}
```

## 🪝 Hook Personalizado

``` js
export default function useGlobalReducer() {
  const { dispatch, store } = useContext(StoreContext);
  return { dispatch, store };
}
```

## 🌐 Envolviendo la App

``` js
<StoreProvider>
  <RouterProvider router={router} />
</StoreProvider>
```

## ✅ Resumen

Context + useReducer nos permiten manejar estado global de forma clara y
escalable.
