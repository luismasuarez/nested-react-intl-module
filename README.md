# 📦 nested-react-intl

**nested-react-intl** es una biblioteca para manejar la internacionalización en proyectos React. Incluye un provider y hooks personalizados para facilitar el manejo de idiomas y traducciones en tu aplicación de manera anidada.

## 🚀 Instalación

Puedes instalar el paquete usando npm o yarn:

```bash
npm install nested-react-intl
```

O con yarn:

```bash
yarn add nested-react-intl
```

## 🔧 Uso

### Provider

El provider `NestedIntlProvider` proporciona el contexto para la internacionalización. Envuelve tu aplicación con este provider en el nivel más alto.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { INestedMessages, NestedIntlProvider } from "./dist/index";
import en from "./locales/en.json";
import es from "./locales/es.json";

export type Locale = "en" | "es";

export const LocalesLibrary: Record<Locale, INestedMessages> = {
  en,
  es,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NestedIntlProvider locales={LocalesLibrary}>
      <App />
    </NestedIntlProvider>
  </React.StrictMode>
);
```

### Hooks

#### `useTranslate`

El hook `useTranslate` proporciona una función para traducir las claves de los mensajes.

```jsx
import React from "react";
import { useTranslate } from "nested-react-intl";

const AppTitleBar = () => {
  const { t } = useTranslate();

  return <h1>{t("app.title")}</h1>;
};

export default AppTitleBar;
```

#### `useNestedIntlContext`

El hook `useNestedIntlContext` proporciona una función para seleccionar los idiomas.

```jsx
import React from "react";
import useNestedIntlContext from "./src/hooks/useNestedIntlContext";
import { Locale } from "./main";

const LanguageSwitcher = () => {
  const { selectLanguage } = useNestedIntlContext();
  return (
    <div>
      <select
        name="lang"
        id="lang"
        onChange={(e) => selectLanguage(e.target.value as Locale)}
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
```

## 🔍 Ejemplo

Aca te muestro un ejemplo completo de cómo utilizar el módulo:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { NestedIntlProvider } from "nested-react-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import AppTitleBar from "./AppTitleBar";

const App = () => (
  <div>
    <AppTitleBar />
    <LanguageSwitcher />
  </div>
);

export default App;
```

## 📝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor, abre un issue o un pull request para cualquier mejora o corrección.

## 🛠️ Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

---

**¡Gracias por usar nested-react-intl!** 😃
