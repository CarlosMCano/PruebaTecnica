


export class BaseFormComponent {
    public loanding: boolean = false;
    public loanding2: boolean = false;

    constructor()
    {

    }

    getErrorMessage(dato: string) {
        switch (dato) {
            case 'user':
                return 'Debes ingresar un usuario';
                break;
            case 'pass':
                return 'Debes ingresar una contraseña';
                break;
            case 'email':
                return 'Debes ingresar un correo valido';
                break;
            case 'rpass':
                return '';
                break;
            default:
                return 'Falta el campo: ' + dato;
                break;
        }
    }

    fechaHoy() {
        const currentDate = new Date();
        return currentDate.toISOString().substring(0, 10);
    }

    error(error: string) {
        alert(error);
    }


}