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
    try{
        await api.post('/alunos/register', formDados)
    } catch(e:any){
        console.log("Erro no cadastro do aluno", e.response.data)
    }
}

export async function registerPresencaAluno(token: string, formDados: object){
    try{
        await api.post(
            '/presenca', 
            formDados,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        )
        console.log('Presença registrada!')
    }
    catch(e: any){
        console.log("Erro no cadastro da presenca do aluno", e.response.data)
    }
}

export async function getPresencaAlunos(id: number){
    console.log(id)
    try {
        const presencas = await api.get(`/presenca/aluno/${id}`)
        console.log('as presenças', presencas)
        return presencas
    }
    catch(e: any){
        console.log("Erro na coleta de presenças do aluno", e.response.data)
    } 
}
