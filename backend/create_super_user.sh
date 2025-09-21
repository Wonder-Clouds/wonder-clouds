#!/bin/sh

echo "Verificando si el superusuario existe..."
python manage.py shell -c "from django.contrib.auth import get_user_model; print(get_user_model().objects.filter(username='$DJANGO_SUPERUSER_USERNAME').exists())"

if ! python manage.py shell -c "from django.contrib.auth import get_user_model; print(get_user_model().objects.filter(username='$DJANGO_SUPERUSER_USERNAME').exists())" | grep -q "True"; then
  echo "Creando superusuario..."
  python manage.py createsuperuser --noinput \
    --username "$DJANGO_SUPERUSER_USERNAME" \
    --email "$DJANGO_SUPERUSER_EMAIL"

  echo "Estableciendo la contraseña del superusuario..."
  python manage.py shell -c "from django.contrib.auth import get_user_model; user = get_user_model().objects.get(username='$DJANGO_SUPERUSER_USERNAME'); user.set_password('$DJANGO_SUPERUSER_PASSWORD'); user.save()"

else
  echo "El superusuario ya existe."
fi