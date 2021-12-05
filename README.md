# Server API Proxy

Un proxy es un simple servidor que trabaja como un punto intermedio entre el front-end y una Web API,
este intercepta un endpoint del cliente front-end y realiza la petición a la API que podrá responder
sin errores de CORS, ya que agrega algunos encabezados a la petición que permite acceso a todos los dominios.

`Access-Control-Allow-Origin: *`

## Para usar el proyecto:

### 1. Clonar el repositorio

```
git clone https://github.com/JhonEsteban/server-api-proxy.git
```

### 2. Instalar los módulos de node

```
npm install
```

### 3. Crear un archivo .env y agregar las siguientes variables de entorno

```
API_BASE=
PORT=
```

### 4. Arrancar el servidor de desarrollo

```
npm run dev
```

### My Linkedin 👋🏼

- [Linkedin](https://www.linkedin.com/in/jhon-esteban-herrera/ 'My Linkendin')
