import React, { createContext, ReactNode, useState } from "react";

// tipo de dados do objeto usuario
export type userType = {
  nome: string;
  sobrenome: string;
  email: string;
  cpf: string;
  cep: number;
  numero_residencia: string;
  complemento: string;
  id: number;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
};

// tipo dos dados em geral
export type user = {
  user: userType | null;
  setUser: (u: userType | null) => void;
  token: string | null;
  setToken: (t: string | null) => void;
};

// tipo do children
type userProvider = {
  children: ReactNode;
};

// criando context
export const UsuarioContext = createContext<user | null>(null);

// definindo os dados globais pelo provider
export const UsuarioProvider = ({ children }: userProvider) => {
  const [user, setUser] = useState<userType | null>(null);
  const [token, setToken] = useState<string | null>(null);

  return (
    <UsuarioContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};
