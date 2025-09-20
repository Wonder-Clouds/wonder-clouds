from rest_framework.routers import DefaultRouter
from .views import SubscribeViewSet, ContactViewSet

router = DefaultRouter()
router.register(r'subscribe', SubscribeViewSet, basename='subscribe')
router.register(r'contact', ContactViewSet, basename='contact')

urlpatterns = router.urls
