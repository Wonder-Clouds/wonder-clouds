from django.core.mail import send_mail
from django.conf import settings
import threading


def send_email(subject, message, recipient_email, name, last_name, phone_number):
    send_mail(
        subject,
        message,
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[recipient_email],
        fail_silently=False
    )

    # Email interno para Wonder Clouds
    internal_subject = f"New contact from {name} {last_name}"
    internal_message = (
        f"Name: {name}\n"
        f"Last Name: {last_name}\n"
        f"Email: {recipient_email}\n"
        f"Phone: {phone_number}\n"
        f"Subject: {subject}\n"
        f"Message:\n{message}"
    )
    send_mail(
        internal_subject,
        internal_message,
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[settings.DEFAULT_FROM_EMAIL],
        fail_silently=False
    )


class EmailThread(threading.Thread):
    def __init__(self, subject, message, recipient_email, name, last_name, phone_number):
        super().__init__()
        self.subject = subject
        self.message = message
        self.recipient_email = recipient_email
        self.name = name
        self.last_name = last_name
        self.phone_number = phone_number

    def run(self):
        send_email(
            self.subject,
            self.message,
            self.recipient_email,
            self.name,
            self.last_name,
            self.phone_number
        )
