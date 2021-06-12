import React from 'react';

function Contact() {
    return (
        <div id="contact">
            <h1>Boor your table</h1>
            <form>
                <input type="text" placeholder="Nome Completo" />
                <input type="email" placeholder="E-mail" />
                <textarea placeholder="Messagem......"></textarea>
                <input type="submit" value="Enviar" />

            </form>
        </div>
    )
}

export default Contact
