#!/bin/sh

# Espera a que la base de datos esté disponible
until nc -z -v -w30 database 5432
do
  echo "Esperando a que la base de datos esté disponible..."
  sleep 1
done

echo "Base de datos lista. Ejecutando migraciones..."

# Ejecutar makemigrations solo para las aplicaciones específicas que se indican
python manage.py makemigrations blog category client smtp tag -noinput

# Ejecutar migrate para aplicar las migraciones pendientes de las aplicaciones especificadas
python manage.py migrate --noinput