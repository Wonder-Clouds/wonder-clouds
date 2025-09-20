from rest_framework import viewsets, status
from rest_framework.response import Response
from client.models import Client
from .functions import EmailThread


class SubscribeViewSet(viewsets.ViewSet):
    def create(self, request):
        email = request.data.get('email')
        if not email:
            return Response({"error": "Email is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            client = Client.objects.get(email=email)
            client.subscribed = True
            client.save()
            return Response({"message": "Subscription updated successfully."}, status=status.HTTP_200_OK)
        except Client.DoesNotExist:
            client = Client.objects.create(email=email, subscribed=True)
            client.save()
            return Response({"message": "Subscribed successfully."}, status=status.HTTP_201_CREATED)


class ContactViewSet(viewsets.ViewSet):
    def create(self, request):
        name = request.data.get('name')
        last_name = request.data.get('last_name')
        email = request.data.get('email')
        phone_number = request.data.get('phone_number')
        message = request.data.get('message')
        subject = request.data.get('subject')

        if not all([name, last_name, email, phone_number, message, subject]):
            return Response({"error": "All fields are required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            client = Client.objects.get(email=email)

            # Cliente ya existe → se actualiza
            client.name = name
            client.last_name = last_name
            client.phone_number = phone_number
            client.save()
            EmailThread(subject, message, email, name, last_name, phone_number).start()
            return Response({"message": "Contact information updated successfully."}, status=status.HTTP_200_OK)

        except Client.DoesNotExist:
            # Cliente nuevo → se crea y se envía correo
            client = Client.objects.create(
                name=name,
                last_name=last_name,
                email=email,
                phone_number=phone_number
            )
            client.save()
            EmailThread(subject, message, email, name, last_name, phone_number).start()
            return Response({"message": "Contact information created successfully."}, status=status.HTTP_201_CREATED)
