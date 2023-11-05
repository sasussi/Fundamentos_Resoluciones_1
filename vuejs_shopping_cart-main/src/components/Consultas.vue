<template>
    <div class="order-form">
        <h2>Consulta</h2>
        <form action="../../agradecimiento.html" method="get">
            <label for="first-name">Nombre:</label>
            <input type="text" id="first-name" name="first-name" required>

            <label for="last-name">Apellido:</label>
            <input type="text" id="last-name" name="last-name" required>

            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required>

            <br><br>

            <label for="phone">Teléfono:</label>
            <input type="tel" id="phone" name="phone" required>

            <br><br>

            <label for="message">Consulta:</label>
            <textarea id="message" name="message" rows="10" cols="30" style="width: 100%;" required></textarea>

            <div class="button-container">
                <input type="submit" value="Enviar Consulta" class="custom-button">
            </div>
        </form>
    </div>
</template>

<style>

.order-form {
            background-color: #f4f4f4;
            padding: 20px;
            border-radius: 10px;
            margin: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        .order-form h2 {
            font-size: 24px;
            color: #333;
            margin-bottom: 20px;
        }

        .order-form label {
            display: block;
            margin-bottom: 5px;
        }

        .order-form input[type="text"],
        .order-form input[type="email"],
        .order-form input[type="number"],
        .order-form select {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .order-form button {
            background-color: #007d60;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .order-form button:hover {
            background-color: #005145;
        }

        .button-container {
        margin-top: 15px; /* Puedes ajustar la cantidad de separación según tus preferencias */
        }

</style>