from flask import Flask, jsonify
from flask_cors import CORS
from pydantic import BaseModel
from typing import List

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Dummy data for banners
banners = [
    {'id': 1, 'src': 'https://i.imgur.com/UyIMoX4.jpg'},
    {'id': 2, 'src': 'https://i.imgur.com/47obsLa.jpeg'},
    {'id': 3, 'src': 'https://i.imgur.com/6zyyBVj.jpg'},
]

# Dummy data for discount books
discount_books = [
    {"id": 1, "title": "Leading back", "image_url": "https://i.imgur.com/GMO9fpe.jpg"},
    {"id": 2, "title": "Corporate Finance", "image_url": "https://i.imgur.com/nOj0XCp.jpg"},
    {"id": 3, "title": "Essential finance", "image_url": "https://imgur.com/jKwMzfi.jpg"},
    {"id": 4, "title": "Document Book 4", "image_url": "http://imgur.com/AM29kqr.jpg"}
]

# Dummy data for personal growth books
personal_growth_books = [
    {"id": 1, "title": "Art of Self-Transform", "image_url": "https://i.imgur.com/ZkMWxoz.jpg"},
    {"id": 2, "title": "Personal Growth and Training", "image_url": "https://i.imgur.com/9GLdeAL.jpg"},
    {"id": 3, "title": "Non-taditional methods", "image_url": "https://i.imgur.com/779fPod.jpg"},
    {"id": 4, "title": "Insights on Personal Growth", "image_url": "https://i.imgur.com/eQJ8nJL.jpg"}
]

# Dummy data for bookmarks
bookmarks = [
    {"id": 1, "title": "Magnetic Page Makers", "image_url": "https://i.imgur.com/eQJ8nJL.jpg"},
    {"id": 2, "title": "MACRO book maniac", "image_url": "https://imgur.com/GkB8mx3.jpg"},
    {"id": 3, "title": "Van Gogh Bookmark", "image_url": "https://i.imgur.com/xnFH6i6.jpg"},
    {"id": 4, "title": "Malpe Leaf bookmark", "image_url": "https://i.imgur.com/KVUgVe1.jpg"}
]

# Dummy data for comics
comics = [
    {"id": 1, "title": "Leading back", "image_url": "https://i.imgur.com/GMO9fpe.jpg"},
    {"id": 2, "title": "Corporate Finance", "image_url": "https://i.imgur.com/nOj0XCp.jpg"},
    {"id": 3, "title": "Essential finance", "image_url": "https://imgur.com/jKwMzfi.jpg"},
    {"id": 4, "title": "Document Book 4", "image_url": "http://imgur.com/AM29kqr.jpg"}
]

# Dummy data for Finance books
finance_books = [
    {"id": 1, "title": "Leading Back", "image_url": "https://i.imgur.com/GMO9fpe.jpg"},
    {"id": 2, "title": "Corporate Finance", "image_url": "https://i.imgur.com/nOj0XCp.jpg"},
    {"id": 3, "title": "Essential Finance", "image_url": "https://imgur.com/jKwMzfi.jpg"},
    {"id": 4, "title": "Document Book 4", "image_url": "http://imgur.com/AM29kqr.jpg"}
]

# Dummy data for Kids books
kids_books = [
    {"id": 1, "title": "Art of Self-Transform", "image_url": "https://i.imgur.com/ZkMWxoz.jpg"},
    {"id": 2, "title": "Personal Growth and Training", "image_url": "https://i.imgur.com/9GLdeAL.jpg"},
    {"id": 3, "title": "Non-traditional Methods", "image_url": "https://i.imgur.com/779fPod.jpg"},
    {"id": 4, "title": "Insights on Personal Growth", "image_url": "https://i.imgur.com/eQJ8nJL.jpg"}
]

# Dummy data for Motivation books
motivation_books = [
    {"id": 1, "title": "Magnetic Page Makers", "image_url": "https://i.imgur.com/eQJ8nJL.jpg"},
    {"id": 2, "title": "MACRO Book Maniac", "image_url": "https://imgur.com/GkB8mx3.jpg"},
    {"id": 3, "title": "Van Gogh Bookmark", "image_url": "https://i.imgur.com/xnFH6i6.jpg"},
    {"id": 4, "title": "Malpe Leaf Bookmark", "image_url": "https://i.imgur.com/KVUgVe1.jpg"}
]

# Dummy data for Mythology books
mythology_books = [
    {"id": 1, "title": "Leading Back", "image_url": "https://i.imgur.com/GMO9fpe.jpg"},
    {"id": 2, "title": "Corporate Finance", "image_url": "https://i.imgur.com/nOj0XCp.jpg"},
    {"id": 3, "title": "Essential Finance", "image_url": "https://imgur.com/jKwMzfi.jpg"},
    {"id": 4, "title": "Document Book 4", "image_url": "http://imgur.com/AM29kqr.jpg"}
]


book_urls1 = [
    {"id": 1, "title": "Warren Buffet Accounting", "image_url": "https://www.bookswagon.com/productimages/images200/150/9781939370150.jpg"},
    {"id": 2, "title": "100 to 1", "image_url": "https://www.bookswagon.com/productimages/images200/293/9781626540293.jpg"},
    {"id": 3, "title": "Two books of Market Wisom", "image_url": "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/569/9781946774569.jpg"},
    {"id": 4, "title": "Atomic Habits", "image_url": "https://www.bookswagon.com/productimages/images200/831/9781847941831.jpg"},
    {"id": 5, "title": "Power of Subconscious Mind", "image_url": "https://www.bookswagon.com/productimages/images200/839/9788194790839.jpg"},
    {"id": 6, "title": "Do it Today", "image_url": "https://www.bookswagon.com/productimages/images200/126/9780143452126.jpg"},
    {"id": 7, "title": "Laws of Human Nature", "image_url": "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/191/9781781259191.jpg"},
    {"id": 8, "title": "Think and Grow Rich", "image_url": "https://www.bookswagon.com/productimages/images200/525/9789389931525.jpg"},
    {"id": 9, "title": "Warren Buffet Accounting", "image_url": "https://www.bookswagon.com/productimages/images200/150/9781939370150.jpg"},
    {"id": 10, "title": "100 to 1", "image_url": "https://www.bookswagon.com/productimages/images200/293/9781626540293.jpg"},
]

book_urls2 = [
    {"id": 1, "title": "Warren Buffet Accounting", "image_url": "https://www.bookswagon.com/productimages/images200/150/9781939370150.jpg"},
    {"id": 2, "title": "100 to 1", "image_url": "https://www.bookswagon.com/productimages/images200/293/9781626540293.jpg"},
    {"id": 3, "title": "Two books of Market Wisom", "image_url": "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/569/9781946774569.jpg"},
    {"id": 4, "title": "Atomic Habits", "image_url": "https://www.bookswagon.com/productimages/images200/831/9781847941831.jpg"},
    {"id": 5, "title": "Power of Subconscious Mind", "image_url": "https://www.bookswagon.com/productimages/images200/839/9788194790839.jpg"},
    {"id": 6, "title": "Do it Today", "image_url": "https://www.bookswagon.com/productimages/images200/126/9780143452126.jpg"},
    {"id": 7, "title": "Laws of Human Nature", "image_url": "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/191/9781781259191.jpg"},
    {"id": 8, "title": "Think and Grow Rich", "image_url": "https://www.bookswagon.com/productimages/images200/525/9789389931525.jpg"},
    {"id": 9, "title": "Warren Buffet Accounting", "image_url": "https://www.bookswagon.com/productimages/images200/150/9781939370150.jpg"},
    {"id": 10, "title": "100 to 1", "image_url": "https://www.bookswagon.com/productimages/images200/293/9781626540293.jpg"},
]


cart_items = []
class CartItem(BaseModel):
    book_id: int
    quantity: int



# Dummy data for book descriptions
book_descriptions = [
    {
    "id": 1,
    "title": "The Great Book",
    "image_url": "https://www.bookswagon.com/productimages/images200/150/9781939370150.jpg",
    "release_date": "2023-01-15",
    "author": "Takehiko Inoue",
  "publisher": "Viz Media",
  "imprint": "Viz Media",
    "rating": 4.5,
    "reviews": 120,
    "price": 499.99,
    "discount": 20,
    "mrp": 625.00,
    "shipping_info": "Ships within 10-12 Business Days. Free Shipping in India.",
    "summary": "The Great Book description is a concise summary of a book’s content, intended to entice readers and convey its significance. In the context of the Great Books of the Western World series, a description is not solely a marketing tool, but rather a means to facilitate the “great conversation” about the great ideas and their relevance to contemporary matters."
  },
  {
    "id": 2,
    "title": "Another Great Book",
    "image_url": "https://www.bookswagon.com/productimages/images200/150/9781939370150.jpg",
    "release_date": "2023-02-20",
    "author": "Takehiko Inoue",
  "publisher": "Viz Media",
  "imprint": "Viz Media",
    "rating": 4.0,
    "reviews": 98,
    "price": 299.99,
    "discount": 15,
    "mrp": 350.00,
    "shipping_info": "Ships within 10-12 Business Days. Free Shipping in India.",
    "summary": "The Great Book description is a concise summary of a book’s content, intended to entice readers and convey its significance. In the context of the Great Books of the Western World series, a description is not solely a marketing tool, but rather a means to facilitate the “great conversation” about the great ideas and their relevance to contemporary matters."
  },
    {
    "id": 3,
    "title": "The Great Book",
    "image_url": "https://www.bookswagon.com/productimages/images200/150/9781939370150.jpg",
    "release_date": "2023-01-15",
    "author": "Takehiko Inoue",
  "publisher": "Viz Media",
  "imprint": "Viz Media",
    "rating": 4.5,
    "reviews": 120,
    "price": 499.99,
    "discount": 20,
    "mrp": 625.00,
    "shipping_info": "Ships within 10-12 Business Days. Free Shipping in India.",
    "summary": "The Great Book description is a concise summary of a book’s content, intended to entice readers and convey its significance. In the context of the Great Books of the Western World series, a description is not solely a marketing tool, but rather a means to facilitate the “great conversation” about the great ideas and their relevance to contemporary matters."
  },
  {
    "id": 4,
    "title": "Another Great Book",
    "image_url": "http://example.com/image2.jpg",
    "release_date": "2023-02-20",
    "author": "Takehiko Inoue",
  "publisher": "Viz Media",
  "imprint": "Viz Media",
    "rating": 4.0,
    "reviews": 98,
    "price": 299.99,
    "discount": 15,
    "mrp": 350.00,
    "shipping_info": "Ships within 10-12 Business Days. Free Shipping in India.",
    "summary": "The Great Book description is a concise summary of a book’s content, intended to entice readers and convey its significance. In the context of the Great Books of the Western World series, a description is not solely a marketing tool, but rather a means to facilitate the “great conversation” about the great ideas and their relevance to contemporary matters."
  },
    {
    "id": 5,
    "title": "The Great Book",
    "image_url": "http://example.com/image1.jpg",
    "release_date": "2023-01-15",
    "author": "Takehiko Inoue",
  "publisher": "Viz Media",
  "imprint": "Viz Media",
    "rating": 4.5,
    "reviews": 120,
    "price": 499.99,
    "discount": 20,
    "mrp": 625.00,
    "shipping_info": "Ships within 10-12 Business Days. Free Shipping in India.",
    "summary": "The Great Book description is a concise summary of a book’s content, intended to entice readers and convey its significance. In the context of the Great Books of the Western World series, a description is not solely a marketing tool, but rather a means to facilitate the “great conversation” about the great ideas and their relevance to contemporary matters."
  },
  {
    "id": 6,
    "title": "Another Great Book",
    "image_url": "http://example.com/image2.jpg",
    "release_date": "2023-02-20",
    "author": "Takehiko Inoue",
  "publisher": "Viz Media",
  "imprint": "Viz Media",
    "rating": 4.0,
    "reviews": 98,
    "price": 299.99,
    "discount": 15,
    "mrp": 350.00,
    "shipping_info": "Ships within 10-12 Business Days. Free Shipping in India.",
    "summary": "The Great Book description is a concise summary of a book’s content, intended to entice readers and convey its significance. In the context of the Great Books of the Western World series, a description is not solely a marketing tool, but rather a means to facilitate the “great conversation” about the great ideas and their relevance to contemporary matters."
  },
    {
    "id": 7,
    "title": "The Great Book",
    "image_url": "http://example.com/image1.jpg",
    "release_date": "2023-01-15",
    "author": "Takehiko Inoue",
  "publisher": "Viz Media",
  "imprint": "Viz Media",
    "rating": 4.5,
    "reviews": 120,
    "price": 499.99,
    "discount": 20,
    "mrp": 625.00,
    "shipping_info": "Ships within 10-12 Business Days. Free Shipping in India.",
    "summary": "The Great Book description is a concise summary of a book’s content, intended to entice readers and convey its significance. In the context of the Great Books of the Western World series, a description is not solely a marketing tool, but rather a means to facilitate the “great conversation” about the great ideas and their relevance to contemporary matters."
  },
  {
    "id": 8,
    "title": "Another Great Book",
    "image_url": "http://example.com/image2.jpg",
    "release_date": "2023-02-20",
    "author": "Takehiko Inoue",
  "publisher": "Viz Media",
  "imprint": "Viz Media",
    "rating": 4.0,
    "reviews": 98,
    "price": 299.99,
    "discount": 15,
    "mrp": 350.00,
    "shipping_info": "Ships within 10-12 Business Days. Free Shipping in India.",
    "summary": "The Great Book description is a concise summary of a book’s content, intended to entice readers and convey its significance. In the context of the Great Books of the Western World series, a description is not solely a marketing tool, but rather a means to facilitate the “great conversation” about the great ideas and their relevance to contemporary matters."
  },
    {
    "id": 9,
    "title": "The Great Book",
    "image_url": "http://example.com/image1.jpg",
    "release_date": "2023-01-15",
    "author": "Takehiko Inoue",
  "publisher": "Viz Media",
  "imprint": "Viz Media",
    "rating": 4.5,
    "reviews": 120,
    "price": 499.99,
    "discount": 20,
    "mrp": 625.00,
    "shipping_info": "Ships within 10-12 Business Days. Free Shipping in India.",
    "summary": "The Great Book description is a concise summary of a book’s content, intended to entice readers and convey its significance. In the context of the Great Books of the Western World series, a description is not solely a marketing tool, but rather a means to facilitate the “great conversation” about the great ideas and their relevance to contemporary matters."
  },
  {
    "id": 10,
    "title": "Another Great Book",
    "image_url": "http://example.com/image2.jpg",
    "release_date": "2023-02-20",
    "author": "Takehiko Inoue",
  "publisher": "Viz Media",
  "imprint": "Viz Media",
    "rating": 4.0,
    "reviews": 98,
    "price": 299.99,
    "discount": 15,
    "mrp": 350.00,
    "shipping_info": "Ships within 10-12 Business Days. Free Shipping in India.",
    "summary": "The Great Book description is a concise summary of a book’s content, intended to entice readers and convey its significance. In the context of the Great Books of the Western World series, a description is not solely a marketing tool, but rather a means to facilitate the “great conversation” about the great ideas and their relevance to contemporary matters."
  },
]


@app.route('/book-description/<int:book_id>/', methods=['GET'])
def get_book_description(book_id):
    book = next((book for book in book_descriptions if book["id"] == book_id), None)
    if book:
        return jsonify(book)
    else:
        return jsonify({"error": "Book not found"}), 404

@app.route('/swiper_1/', methods=['GET'])
def get_book_urls1():
    return jsonify(book_urls1)

@app.route('/swiper_2/', methods=['GET'])
def get_book_urls2():
    return jsonify(book_urls2)


@app.route('/banners/', methods=['GET'])
def get_banners():
    return jsonify(banners)

@app.route('/discount-books/', methods=['GET'])
def get_discount_books():
    return jsonify(discount_books)

@app.route('/personal-growth-books/', methods=['GET'])
def get_personal_growth_books():
    return jsonify(personal_growth_books)

@app.route('/bookmarks/', methods=['GET'])
def get_bookmarks():
    return jsonify(bookmarks)

@app.route('/comics/', methods=['GET'])
def get_comics():
    return jsonify(comics)

@app.route('/finance/', methods=['GET'])
def get_finance_books():
    return jsonify(finance_books)

@app.route('/kids/', methods=['GET'])
def get_kids_books():
    return jsonify(kids_books)

@app.route('/motivation/', methods=['GET'])
def get_motivation_books():
    return jsonify(motivation_books)

@app.route('/mythology/', methods=['GET'])
def get_mythology_books():
    return jsonify(mythology_books)

@app.post("/cart/add/")
async def add_to_cart(item: CartItem):
    for existing_item in cart_items:
        if existing_item["book_id"] == item.book_id:
            existing_item["quantity"] += item.quantity
            return {"message": "Quantity updated", "cart": cart_items}
    cart_items.append({"book_id": item.book_id, "quantity": item.quantity})
    return {"message": "Book added to cart", "cart": cart_items}

@app.get("/cart/")
async def get_cart():
    return {"cart": cart_items}

@app.post("/cart/update/")
async def update_cart(item: CartItem):
    for existing_item in cart_items:
        if existing_item["book_id"] == item.book_id:
            existing_item["quantity"] = item.quantity
            return {"message": "Quantity updated", "cart": cart_items}
    raise HTTPException(status_code=404, detail="Item not found in cart")

@app.post("/cart/remove/")
async def remove_from_cart(book_id: int):
    global cart_items
    cart_items = [item for item in cart_items if item["book_id"] != book_id]
    return {"message": "Item removed from cart", "cart": cart_items}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
