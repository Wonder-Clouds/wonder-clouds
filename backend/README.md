# Wonder Clouds

**Wonder Clouds** es un proyecto fullstack compuesto por un backend en **Django + PostgreSQL** y un frontend en **Next.js (React + TypeScript)**.  

El sistema integra API, autenticación, lógica de negocio y una interfaz web moderna.

---

## 🛠 Tecnologías principales

### Backend
- Python / Django
- Django REST Framework
- PostgreSQL
- CORS, CSRF
- SMTP para correos

### Frontend
- Next.js (React + TypeScript)
- TailwindCSS (estilos)
- Axios / Fetch para consumo de la API

### DevOps
- GitHub Actions (CI/CD)
- Variables de entorno `.env`
- Despliegue recomendado en contenedores o servicios cloud

---

## 📂 Estructura del proyecto

```
wonder-clouds/
├── backend/             # Proyecto Django (API, modelos, settings)
│   ├── manage.py
│   ├── requirements.txt
│   ├── README.md
│   ├── .env.example    # Ejemplo de variables de entorno
│   └── ...
│
├── frontend/            # Aplicación Next.js (UI)
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
│
├── .github/             # Workflows de GitHub Actions
└── .gitignore
```

---

## ⚙️ Configuración del entorno

Clona el repositorio:

```bash
git clone https://github.com/Wonder-Clouds/wonder-clouds.git
cd wonder-clouds
```

### 🔹 Backend (Django)

1. Entra al directorio:

   ```bash
   cd backend
   ```

2. Crea un entorno virtual e instala dependencias:

   ```bash
   python3 -m venv venv
   source venv/bin/activate    # Linux/macOS
   # venv\Scripts\activate   # Windows

   pip install -r requirements.txt
   ```

3. Configura tu archivo `.env` (basado en `.env.example` que se incluye):

   ```bash
   cp .env.example .env
   ```

4. Levanta tu base de datos PostgreSQL que esta dentro del archivo podman-compose.yml
    ```bash
    podman-compose  up -d 
    ```

4. Aplica migraciones y levanta el servidor:

   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

5. (Opcional) Crear superusuario:

   ```bash
   python manage.py createsuperuser
   ```

El backend estará disponible en: **http://localhost:8000**

---

### 🔹 Frontend (Next.js)

1. Entra al directorio:

   ```bash
   cd frontend
   ```

2. Instala dependencias:

   ```bash
   pnpm install
   ```

3. Crea el archivo `.env.local` con las variables necesarias para el frontend (ej. URL de la API):

   ```dotenv
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

4. Levanta el servidor de desarrollo:

   ```bash
   pnpm run dev
   ```

El frontend estará disponible en: **http://localhost:3000**

---

## 📋 Variables del entorno (`.env.example` Backend)

Ejemplo de `.env.example` para el backend:

```dotenv
# Database
POSTGRES_USER=tu_usuario
POSTGRES_PASSWORD=tu_contraseña
POSTGRES_DB=nombre_de_tu_bd
HOST_DB=localhost
PORT_DB=5432

# Django Settings
SECRET_KEY=tu_secret_key
DEBUG=True
CORS_ALLOWED_ORIGINS=https://tudominio.com,https://api.tudominio.com
ALLOWED_HOSTS=tudominio.com,www.tudominio.com,api.tudominio.com
CSRF_TRUSTED_ORIGINS=https://tudominio.com,https://api.tudominio.com

# SMTP
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=tu_correo@gmail.com
EMAIL_HOST_PASSWORD=tu_password_o_app_password
EMAIL_USE_TLS=True
```

> ⚠️ Importante: No subas tu `.env` real al repositorio. Usa `.env.example` como guía.

---

## ✅ Uso

- Backend: expone API REST para autenticación, usuarios, etc.  
- Frontend: consume la API y presenta la interfaz web.  
- SMTP: configurado para envío de correos (notificaciones, recuperación de contraseña, etc.).  

---

## 🧪 Pruebas

### Backend
```bash
python manage.py test
```

### Frontend
```bash
npm run test
```

---

## 🚀 Producción / despliegue

1. Configura las variables reales en `.env` y `.env.local`.  
2. Usa servicios como Docker, Gunicorn + Nginx (backend) y Vercel/Netlify (frontend).  
3. Configura HTTPS, correo en producción y monitoreo.  

---

## 📞 Contacto

Si deseas contactarme:  
**Cristian Monzon Guzman**  
[wonderclouds.dev](https://wonderclouds.dev)