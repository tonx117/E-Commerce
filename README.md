
# E-Commerce

## Descripción
Este proyecto es un backend para una aplicación de comercio electrónico. Está construido con Node.js y organiza sus funcionalidades en controladores, modelos, rutas, servicios, y middleware.

## Requisitos Previos
- Node.js vXX.X o superior
- npm vX.X o superior

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tonx117/e-commerce.git
   ```

2. Ve al directorio del proyecto:

  ```bash
  cd e-commerce 
  ```
3. Instala las dependencias:

  ```bash
  npm install
  ```
4. Configura las variables de entorno:
   crea un .env con las siguientes variables:
   - DB_DRIVER=""
   - DB_USERNAME=""
   - DB_PASSWORD=""
   - DB_HOST=""
   - DB_PORT=""
   - DB_NAME=""


## Estructura del Proyecto

```plaintext
E-COMMERCE/
├── node_modules/
├── src/
│   ├── controllers/        # Controladores para manejar las peticiones de la API
│   │   ├── CartController.js
│   │   ├── OrderController.js
│   │   ├── ProductController.js
│   │   └── UserController.js
│   ├── db/
│   │   └── Database.js      # Configuración de la base de datos
│   ├── middleware/
│   │   └── Auth.js          # Middleware de autenticación
│   ├── models/              # Modelos para representar datos
│   │   ├── Cart.js
│   │   ├── Order.js
│   │   ├── Product.js
│   │   └── User.js
│   ├── routes/              # Definición de las rutas de la API
│   │   ├── Cart.routes.js
│   │   ├── Order.routes.js
│   │   ├── Products.routes.js
│   │   └── User.routes.js
│   ├── services/            # Lógica de negocio y comunicación con la base de datos
│   │   ├── CartService.js
│   │   ├── OrderService.js
│   │   ├── ProductService.js
│   │   └── UserService.js
│   └── validations/         # Validaciones de datos para las entradas de la API
│       ├── ProductValidation.js
│       └── UserValidation.js
├── .env.development         # Configuración del entorno de desarrollo
├── .env.production          # Configuración del entorno de producción
├── .gitignore
├── index.js                 # Archivo de entrada del proyecto
├── package-lock.json
└── package.json










