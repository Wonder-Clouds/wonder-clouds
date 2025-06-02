from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session
from models.category import Category
from database.engine import get_session
from services import category


router = APIRouter()

@router.get("/categories/", response_model=list[Category])
def get_categories(session: Session = Depends(get_session)):
    return category.get_categories(session)


router.get("/category/{category_id}", response_model=Category)
def get_category(category_id: int, session: Session = Depends(get_session)):
    category_item = category.get_category(session, category_id)

    if not category_id:
        raise HTTPException(status_code=404, detail="Category not found")
    
    return category_item
