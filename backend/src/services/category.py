from models.category import Category
from sqlmodel import Session, select
from fastapi import HTTPException


def create_category(session: Session, category: Category) -> Category:
    session.add(category)
    session.commit()
    session.refresh(category)
    return category


def get_category(session: Session, category_id: int) -> Category | None:
    return session.get(Category, category_id)


def get_categories(session: Session) -> list[Category]:
    return session.exec(select(Category)).all()


def update_category(session: Session, category_id: int, category_data: dict) -> Category | None:
    db_category = session.get(Category, category_id)
    if not db_category:
        return None
    
    for key, value in category_data.items():
        setattr(db_category, key, value)
    session.commit()
    session.refresh(db_category)
    return db_category


def patch_category(session: Session, category_id: int, category_data: Category) -> Category | None:
    db_category = session.get(Category, category_id)

    if not db_category:
        raise HTTPException(status_code=404, detail="Category not found")
    
    category_dict = category_data.model_dump(exclude_unset=True)
    for key, value in category_dict.items():
        setattr(db_category, key, value)

    session.add(db_category)
    session.commit()
    session.refresh(db_category)

    return db_category
    

def delete_category(session: Session, category_id: int) -> bool:
    db_category = session.get(Category, category_id)

    if not db_category:
        return False
    session.delete(db_category)
    session.commit()

    return True
