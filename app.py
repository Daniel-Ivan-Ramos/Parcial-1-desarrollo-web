from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def formulario():
    return render_template('index.html')

@app.route('/resultado', methods=['POST'])
def resultado():
    datos = {
        "codigo": request.form.get("codigo"),
        "nombre": request.form.get("nombre"),
        "editorial": request.form.get("editorial"),
        "autor": request.form.get("autor"),
        "fecha_edicion": request.form.get("fecha_edicion"),
        "cantidad": request.form.get("cantidad"),
        "fecha_salida": request.form.get("fecha_salida")
    }
    return render_template('resultado.html', datos=datos)

if __name__ == '__main__':
    app.run(debug=True)
