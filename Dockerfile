# Usa una imagen liviana de Node.js
FROM node:20-alpine

# Crea el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de definición de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el proyecto al contenedor
COPY . .

# Expone el puerto de tu API (ajústalo si usas otro)
EXPOSE 3000

# Comando para ejecutar directamente con tsx (no compila, ejecuta desde src)
CMD ["npx", "tsx", "src/index.ts"]
