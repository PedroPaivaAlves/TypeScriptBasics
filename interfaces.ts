interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUsuario(): Usuario {
    return {
        nome: "Pedro",
        email: "123"
    }
}

function setusuario ( usuario: Usuario) {
    //...
}