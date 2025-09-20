from rest_framework import serializers
from .models import  Blog
from category.serializers import CategorySerializer
from tag.serializers import TagSerializer
from category.models import Category
from tag.models import Tag


class BlogSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True, read_only=True)
    tags = TagSerializer(many=True, read_only=True)
    category_ids = serializers.PrimaryKeyRelatedField(
        many=True, write_only=True, queryset=Category.objects.all(), source='categories'
    )
    tag_ids = serializers.PrimaryKeyRelatedField(
        many=True, write_only=True, queryset=Tag.objects.all(), source='tags'
    )

    class Meta:
        model = Blog
        fields = [
            'id', 'title', 'cover', 'content', 'is_published',
            'published_date', 'created_at', 'updated_at', 'categories', 'tags',
            'category_ids', 'tag_ids'
        ]