# CryptoApp

Aplicación móvil desarrollada para una empresa inmobiliaria que permite visualizar información de criptomonedas en tiempo real, utilizando USD como moneda de referencia.

## Características

- Lista completa de criptomonedas con precios en USD
- Búsqueda y filtrado avanzado de criptomonedas
- Vista detallada de cada criptomoneda con información relevante
- Gráficos interactivos de precios por exchange
- Formateo inteligente de números y precios
- Integración con la API de CoinLore
- Soporte para iOS y Android
- Interfaz de usuario moderna y responsiva
- Modo offline con caché de datos

## Tecnologías Utilizadas

- TypeScript
- React Native
- Expo
- Redux Toolkit
- React Navigation
- Axios para peticiones HTTP
- React Native Chart Kit para visualización de datos

## Requisitos Previos

- Node.js >= 14
- npm o yarn
- Expo CLI
- Xcode (para desarrollo en iOS)
- Android Studio (para desarrollo en Android)

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/crypto-app.git
cd crypto-app
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar la aplicación:

```bash
npm start
```

## Ejecución

### iOS

```bash
npm run ios
```

### Android

```bash
npm run android
```

## Estructura del Proyecto

```
src/
├── api/          # Configuración y endpoints de la API
├── components/   # Componentes reutilizables
├── context/      # Contexto global de la aplicación
├── hooks/        # Hooks personalizados
├── navigation/   # Configuración de navegación
├── screens/      # Pantallas de la aplicación
├── services/     # Servicios de API y almacenamiento
├── types/        # Definiciones de tipos TypeScript
└── utils/        # Utilidades y helpers
    └── formatUtils.ts  # Funciones de formateo de números y precios
```

## Funciones de Formateo

La aplicación incluye varias funciones de utilidad para el formateo de números y precios:

- `formatNumber`: Formatea números como moneda USD (ej: $1,234.56)
- `formatPercentage`: Formatea porcentajes con símbolos de incremento/decremento (ej: ▲ 5.23%)
- `formatMarketCap`: Formatea capitalización de mercado con sufijos (ej: $1.5B, $2.3T)
- `formatPrice`: Formatea precios con sufijos para valores grandes (ej: $1.2K, $1.5M)

## Arquitectura

La aplicación sigue los principios de Programación Orientada a Objetos y las mejores prácticas de desarrollo:

- **Arquitectura**: Diseño modular y escalable
- **Estado Global**: Redux Toolkit para manejo de estado
- **Tipado**: TypeScript para type safety y mejor mantenibilidad
- **Servicios**: Capa de servicios para lógica de negocio
- **Componentes**: Componentes reutilizables y modulares
- **Navegación**: React Navigation para manejo de rutas
- **API**: Integración con CoinLore API
- **Utilidades**: Funciones de formateo y helpers reutilizables

## Pruebas

Para ejecutar las pruebas unitarias:

```bash
npm test
```

## Documentación del Código

El código sigue las mejores prácticas de documentación:

- Comentarios descriptivos en funciones y componentes
- Tipos TypeScript bien definidos
- Estructura de carpetas organizada
- Nombres descriptivos para variables y funciones
- Funciones de utilidad documentadas y reutilizables

## Rendimiento

La aplicación está optimizada para:

- Carga rápida de datos
- Caché eficiente
- Manejo optimizado de memoria
- Actualizaciones en tiempo real
- Formateo eficiente de números y precios

## Contribución

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar NuevaCaracteristica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## Contacto

Para más información sobre el proyecto, contactar a:

- Email: hr@millionluxury.com

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.
