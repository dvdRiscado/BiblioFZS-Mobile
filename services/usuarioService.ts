import api from './api';

// comunicacoes logicas com a api de usuario
export async function loginUsuarioApi(formDados: object){
    // pegando token de autenticacao
    const response = await api.post("/alunos/auth/jwt/login", formDados, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
    const token = response.data.access_token
    const me = await getMe(token)
    return {user:me.data, token: token};
}

export async function getMe(token: string){
    const me = await api.get("/alunos/me", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return me
}

export async function updateMe(token: string, dadosAtualizados: object){
    await api.patch(
        'alunos/update/me', 
        dadosAtualizados, 
        {
            headers: { Authorization: `Bearer ${token}` },
        }
    )
}

export async function registerAluno(formDados: object){
    await api.post('/alunos/register', formDados, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    })
}