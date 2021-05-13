import {Button} from '@material-ui/core';
const Contacto = () => {
return (
<div className = "Contacto">
    <h2>Contacta con Nosotros</h2>
    <form>
        <label>Nombre:</label>
        <input
            type= "text"
            required
        />
        <label>Apellido:</label>
        <input
            type= "text"
            required
        />
        <label>Telefono:</label>
        <input
            type= "text"
            required
        />
        <label>Correo:</label>
        <input
            type= "text"
            required
        />
         <label>Asunto:</label>
         <textarea
            required
        ></textarea>
        <Button variant="contained" color="primary">
        Enviar
        </Button>
    </form>
</div>
);

}

export default Contacto;