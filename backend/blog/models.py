from django.db import models
from django.utils import timezone
from safedelete.models import SafeDeleteModel, SOFT_DELETE
from django.utils.text import slugify
from tinymce.models import HTMLField

import uuid

from category.models import Category
from tag.models import Tag


# Create your models here.
class Blog(SafeDeleteModel):
    _safedelete_policy = SOFT_DELETE

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True, editable=False)
    cover = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    content = HTMLField()
    is_published = models.BooleanField(default=False)
    published_date = models.DateField(blank=True, null=True, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # Relations
    categories = models.ManyToManyField(Category, related_name='blogs')
    tags = models.ManyToManyField(Tag, related_name='blogs')

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)

        if self.is_published and not self.published_date:
            self.published_date = timezone.now().date()

        super().save(*args, **kwargs)
