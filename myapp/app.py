from flask import Flask, render_template, request, redirect, url_for, jsonify

app = Flask(__name__)

# Lista de productos (simulación de una base de datos)
products = [
    {'id': 1, 'name': 'Neumático', 'price': 79.999, 'stock': 100, 'image_url': 'static/img/neumatico.png'},
    {'id': 2, 'name': 'Valvula', 'price': 9.999, 'stock': 50, 'image_url': 'static/img/valvula_1.jpeg'},
    {'id': 3, 'name': 'Pastillas de freno', 'stock': 200, 'price': 14.999, 'image_url': 'static/img/pastillas_freno_2.jpeg'},
    {'id': 4, 'name': 'Bujías', 'stock': 75, 'price': 15.999, 'image_url': 'static/img/bujias_1.jpeg'},
    {'id': 5, 'name': 'Filtro de aire', 'stock': 120, 'price': 9.999, 'image_url': 'static/img/filtro_aire.png'},
    {'id': 6, 'name': 'Batería', 'stock': 150, 'price': 49.999, 'image_url': 'static/img/bateria.png'},
    {'id': 7, 'name': 'Llantas', 'stock': 30, 'price': 99.999, 'image_url': 'static/img/llanta.webp'},
    {'id': 8, 'name': 'Amortiguadores', 'stock': 25, 'price': 40.999, 'image_url': 'static/img/amortiguadores.webp'},
    {'id': 9, 'name': 'Correa de transmisión', 'stock': 60, 'price': 10.999, 'image_url': 'static/img/correa_transmision.jpeg'},
    {'id': 10, 'name': 'Filtros de aceite', 'stock': 80, 'price': 3.999, 'image_url': 'static/img/filtro_aceite.jpeg'}
    
]

@app.route('/')
def index():
    return render_template('index.html', products=products)

@app.route('/get_product/<int:product_id>', methods=['GET'])
def get_product(product_id):
    product = next((product for product in products if product["id"] == product_id), None)
    if product:
        return render_template('product_detail.html', product=product)
    else:
        return jsonify({'error': 'Producto no encontrado'})


# Ruta para agregar un producto (formulario)
@app.route('/add_product', methods=['GET', 'POST'])
def add_product():
    if request.method == 'POST':
        name = request.form['name']
        price = float(request.form['price'])
        stock = int(request.form['stock'])
        new_id = max(product["id"] for product in products) + 1
        new_product = {"id": new_id, "name": name, "price": price, "stock": stock}
        products.append(new_product)
        return redirect(url_for('index'))
    return render_template('add_product.html')

# Ruta para editar un producto (formulario)
@app.route('/edit_product/<int:product_id>', methods=['GET', 'POST'])
def edit_product(product_id):
    product_to_edit = next((product for product in products if product["id"] == product_id), None)
    if request.method == 'POST' and product_to_edit:
        product_to_edit["name"] = request.form['name']
        product_to_edit["price"] = float(request.form['price'])
        product_to_edit["stock"] = int(request.form['stock'])
        return redirect(url_for('index'))
    return render_template('edit_product.html', product=product_to_edit)

# Ruta para eliminar un producto
@app.route('/delete_product/<int:product_id>')
def delete_product(product_id):
    global products
    products = [product for product in products if product["id"] != product_id]
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)



