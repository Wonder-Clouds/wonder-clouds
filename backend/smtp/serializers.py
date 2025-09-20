from rest_framework import serializers


class SubscribeSerializer(serializers.Serializer):
    email = serializers.EmailField()


class ContactSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    last_name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    phone_number = serializers.CharField(max_length=15)
    message = serializers.CharField()
    subject = serializers.CharField()
