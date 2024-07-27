# 📦 nested-react-intl

**nested-react-intl** es una biblioteca para manejar la internacionalización en proyectos React. Incluye un provider y hooks personalizados para facilitar el manejo de idiomas y traducciones en tu aplicación.

## 🚀 Instalación

Puedes instalar el módulo usando npm o yarn:

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
import React from 'react';
import NestedIntlProvider from 'nested-react-intl';

const App = () => (
  <NestedIntlProvider>
    <YourApp />
  </NestedIntlProvider>
);

export default App;
```

### Hooks

#### `useLocale`

El hook `useLocale` proporciona la funcionalidad para gestionar el idioma actual y cambiarlo.

```jsx
import React from 'react';
import { useLocale } from 'nested-react-intl';

const LanguageSwitcher = () => {
  const { locale, switchLocale } = useLocale();

  return (
    <div>
      <button onClick={() => switchLocale('en')}>English</button>
      <button onClick={() => switchLocale('es')}>Español</button>
    </div>
  );
};

export default LanguageSwitcher;
```

#### `useTranslate`

El hook `useTranslate` proporciona una función para traducir las claves de los mensajes.

```jsx
import React from 'react';
import { useTranslate } from 'nested-react-intl';

const Greeting = () => {
  const { t } = useTranslate();

  return <h1>{t('hello')}</h1>;
};

export default Greeting;
```

## 🔍 Ejemplo

Aquí hay un ejemplo completo de cómo utilizar el módulo:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import NestedIntlProvider from 'nested-react-intl';
import LanguageSwitcher from './LanguageSwitcher';
import Greeting from './Greeting';

const App = () => (
  <NestedIntlProvider>
    <div>
      <LanguageSwitcher />
      <Greeting />
    </div>
  </NestedIntlProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

## 📚 Archivos de Traducción

Los archivos de traducción por defecto están en `src/locales/en.json` y `src/locales/es.json`. Puedes agregar más idiomas simplemente creando nuevos archivos JSON en la misma carpeta con el formato adecuado.

## 🔧 Utilidades

- **`flattenMessages`**: Convierte mensajes anidados en un formato plano.
- **`getStoredLocale`** y **`setStoredLocale`**: Funciones para obtener y guardar el idioma en el almacenamiento local.

## 📝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor, abre un issue o un pull request para cualquier mejora o corrección.

## 🛠️ Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

---

**¡Gracias por usar nested-react-intl!** 😃