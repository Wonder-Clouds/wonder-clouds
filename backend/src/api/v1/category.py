from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session
from ...models.category import Category
from ...database.engine import get_session
from ...services import category


router = APIRouter()

@router.get("/categories/", response_model=list[Category])
def get_categories(session: Session = Depends(get_session)):
    return category.get_categories(session)


@router.get("/category/{category_id}", response_model=Category)
def get_category(category_id: int, session: Session = Depends(get_session)):
    category_item = category.get_category(session, category_id)

    if not category_item:
        raise HTTPException(status_code=404, detail="Category not found")
    
    return category_item


@router.post("/category/", response_model=Category)
def post_category(category_item: Category, session: Session = Depends(get_session)):
    return category.create_category(session, category_item)


@router.put("/category/{category_id}", response_model=Category)
def put_category(category_data: Category, category_id: int, session: Session = Depends(get_session)):
    updated = category.update_category(session, category_id, category_data.model_dump())
    if not updated:
        raise HTTPException(status_code=404, detail="Category not found")
    return updated


@router.patch("/category/{category_id}", response_model=Category | None)
def patch_category(category_data: Category, category_id: int, session: Session = Depends(get_session)):
    updated = category.patch_category(session, category_id, category_data)
    if not updated:
        raise HTTPException(status_code=404, detail="Category not found")
    return updated


@router.delete("/category/{category_id}")
def delete_category(category_id: int, session: Session = Depends(get_session)):
    deleted = category.delete_category(session, category_id)

    if not deleted:
        raise HTTPException(status_code=404, detail="Category not found")
    
    return {"message": "category deleted"}