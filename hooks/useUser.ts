import { UsuarioContext, userType } from "@/context/UsuarioContext";
import { getMe, loginUsuarioApi, registerAluno, updateMe } from "@/services/usuarioService";
import { useContext } from "react";

export function useUser(){
    const ctx = useContext(UsuarioContext)

    function setUserContext(dados: userType){
        ctx!.setUser({
            nome: dados.nome!,
            sobrenome: dados.sobrenome!,
            email: dados.email!,
            cpf: dados.cpf!,
            cep: dados.cep!,
            numero_residencia: dados.numero_residencia!,
            complemento: dados.complemento!,
            id: dados.id!,
            is_active: dados.is_active!,
            is_superuser: dados.is_superuser!,
            is_verified: dados.is_verified!,
        });
    }
    async function registrarAluno(formDados: object){
        registerAluno(formDados)
    }

    async function loginUsuario(formDados: object){
        const dados = await loginUsuarioApi(formDados)        
        setUserContext(dados.user)
        ctx?.setToken(dados.token)
    }

    async function atualizarUsuario(formDados: object ){
        await updateMe(ctx!.token!, formDados)
        const me = await getMe(ctx!.token!)
        setUserContext(me.data) 
    }

    // async function cadastrarUsuario(formDados: object){
    //     await registerAluno(formDados)
    // }

    return {loginUsuario, atualizarUsuario, registrarAluno}

}