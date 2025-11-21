// Constantes para Picker Select
export const estados = [
  { label: "AC", value: "AC" },
  { label: "AL", value: "AL" },
  { label: "AP", value: "AP" },
  { label: "AM", value: "AM" },
  { label: "BA", value: "BA" },
  { label: "CE", value: "CE" },
  { label: "DF", value: "DF" },
  { label: "ES", value: "ES" },
  { label: "GO", value: "GO" },
  { label: "MA", value: "MA" },
  { label: "MT", value: "MT" },
  { label: "MS", value: "MS" },
  { label: "MG", value: "MG" },
  { label: "PA", value: "PA" },
  { label: "PB", value: "PB" },
  { label: "PR", value: "PR" },
  { label: "PE", value: "PE" },
  { label: "PI", value: "PI" },
  { label: "RJ", value: "RJ" },
  { label: "RN", value: "RN" },
  { label: "RS", value: "RS" },
  { label: "RO", value: "RO" },
  { label: "RR", value: "RR" },
  { label: "SC", value: "SC" },
  { label: "SP", value: "SP" },
  { label: "SE", value: "SE" },
  { label: "TO", value: "TO" },
];

export const instituicoes = [
  { label: "Fatec Zona Sul", value: "Fatec Zona Sul" },
  {
    label: "Etec Carolina Carinhato Sampaio",
    value: "Etec Carolina Carinhato Sampaio",
  },
  { label: "Outra Instituição", value: "Outra Instituição" },
];

export const periodos = [
  { label: "Manhã", value: "Manhã" },
  { label: "Tarde", value: "Tarde" },
  { label: "Noite", value: "Noite" },
];

// Funções dos Inputs Picker Select
export function decideListCurso(instituicaoValue: string) {
  if (instituicaoValue === "Fatec Zona Sul") {
    return [
      {
        label: "Análise e Desenvolvimento de Sistemas",
        value: "Análise e Desenvolvimento de Sistemas",
      },
      {
        label: "Desenvolvimento de Software Multiplataforma",
        value: "Desenvolvimento de Software Multiplataforma",
      },
      { label: "Gestão Empresarial", value: "Gestão Empresarial" },
      { label: "Logística", value: "Logística" },
    ];
  } else if (instituicaoValue === "Etec Carolina Carinhato Sampaio") {
    return [
      { label: "Administração", value: "Administração" },
      { label: "Eletrônica", value: "Eletrônica" },
      { label: "Enfermagem", value: "Enfermagem" },
      { label: "Recursos Humanos", value: "Recursos Humanos" },
    ];
  } else {
    return [
      { label: "Administração", value: "Administração" },
      {
        label: "Análise e Desenvolvimento de Sistemas",
        value: "Análise e Desenvolvimento de Sistemas",
      },
      { label: "Recursos Humanos", value: "Recursos Humanos" },
    ];
  }
}

// Funções para Validação de Resultado
export function validateName(
  text: string,
  setName: Function,
  setNameError: Function
) {
  setName(text);
  if (text === "") {
    setNameError("O nome é obrigatório");
  } else if (text.length < 3) {
    setNameError("O nome deve ter pelo menos 3 caracteres");
  } else {
    setNameError("");
  }
}

export function validateLastname(
  text: string,
  setLastname: Function,
  setLastnameError: Function
) {
  setLastname(text);
  if (text === "") {
    setLastnameError("O sobrenome é obrigatório");
  } else if (text.length < 3) {
    setLastnameError("O sobrenome deve ter pelo menos 3 caracteres");
  } else {
    setLastnameError("");
  }
}

export function validateCpf(
  text: string,
  setCpf: Function,
  setCpfError: Function
) {
  formatCpf(text, setCpf);
  if (text === "") {
    setCpfError("O CPF é obrigatório");
  } else if (text.length < 14) {
    setCpfError("Digite um CPF válido");
  } else {
    setCpfError("");
  }
}

function formatCpf(value: string, setCpf: Function) {
  let newValue = "";

  if (value[value.length - 1] === "." || value[value.length - 1] === "-") {
    for (let v = 0; v <= value.length - 2; v++) {
      newValue += value[v];
    }

    setCpf(newValue);
    return;
  }

  if (value.length === 4) {
    for (let v = 0; v < value.length; v++) {
      if (v === 2) {
        newValue += value[v] + ".";
      } else {
        newValue += value[v];
      }
    }

    setCpf(newValue);
  } else if (value.length === 8) {
    for (let v = 0; v < value.length; v++) {
      if (v === 6) {
        newValue += value[v] + ".";
      } else {
        newValue += value[v];
      }
    }

    setCpf(newValue);
  } else if (value.length === 12) {
    for (let v = 0; v < value.length; v++) {
      if (v === 10) {
        newValue += value[v] + "-";
      } else {
        newValue += value[v];
      }
    }

    setCpf(newValue);
  } else {
    setCpf(value);
  }

  return;
}

export function validateEmail(
  text: string,
  setEmail: Function,
  setEmailError: Function
) {
  setEmail(text);
  if (text === "") {
    setEmailError("O email é obrigatório");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
    setEmailError("Digite um email válido");
  } else {
    setEmailError("");
  }
}

export function validateTelephone(
  text: string,
  setTelephone: Function,
  setTelephoneError: Function
) {
  formatTelephone(text, setTelephone);
  if (text === "") {
    setTelephoneError("O telefone é obrigatório");
  } else if (text.length < 14) {
    setTelephoneError("Digite um telefone válido");
  } else {
    setTelephoneError("");
  }
}

function formatTelephone(value: string, setTelephone: Function) {
  let newValue = "";

  if (
    value[value.length - 1] === "(" ||
    value[value.length - 1] === ")" ||
    value[value.length] === "-"
  ) {
    for (let v = 0; v <= value.length - 2; v++) {
      newValue += [v];
    }

    setTelephone(newValue);
    return;
  }

  if (value.length === 1) {
    newValue = "(" + value[0];

    setTelephone(newValue);
  } else if (value.length === 4) {
    for (let v = 0; v < value.length; v++) {
      if (v === 2) {
        newValue += value[v] + ")";
      } else {
        newValue += value[v];
      }
    }

    setTelephone(newValue);
  } else if (value.length === 10) {
    for (let v = 0; v < value.length; v++) {
      if (v === 8) {
        newValue += value[v] + "-";
      } else {
        newValue += value[v];
      }
    }

    setTelephone(newValue);
  } else {
    setTelephone(value);
  }
}

export function validateCep(
  text: string,
  setCep: Function,
  setCepError: Function
) {
  formatCep(text, setCep);
  if (text === "") {
    setCepError("O CEP é obrigatório");
  } else if (text.length < 9) {
    setCepError("Digite um CEP válido");
  } else {
    setCepError("");
  }
}

function formatCep(value: string, setCep: Function) {
  let newValue = "";

  if (value[value.length - 1] === "-") {
    for (let v = 0; (v = value.length - 2); v++) {
      newValue += [v];
    }

    setCep(newValue);
    return;
  }

  if (value.length === 6) {
    for (let v = 0; v < value.length; v++) {
      if (v === 4) {
        newValue += value[v] + "-";
      } else {
        newValue += value[v];
      }
    }

    setCep(newValue);
  } else {
    setCep(value);
  }
}

export function validateCidade(
  text: string,
  setCidade: Function,
  setCidadeError: Function
) {
  setCidade(text);
  if (text === "") {
    setCidadeError("A cidade é obrigatória");
  } else if (text.length < 3) {
    setCidadeError("A cidade deve ter pelo menos 3 caracteres");
  } else {
    setCidadeError("");
  }
}

export function validateEstado(
  text: string,
  setEstado: Function,
  setEstadoError: Function
) {
  setEstado(text);
  if (text === "") {
    setEstadoError("O estado é obrigatório");
  } else {
    setEstadoError("");
  }
}

export function validateBairro(
  text: string,
  setBairro: Function,
  setBairroError: Function
) {
  setBairro(text);
  if (text === "") {
    setBairroError("O bairro é obrigatório");
  } else if (text.length < 3) {
    setBairroError("O bairro deve ter pelo menos 3 caracteres");
  } else {
    setBairroError("");
  }
}

export function validateRua(
  text: string,
  setRua: Function,
  setRuaError: Function
) {
  setRua(text);
  if (text === "") {
    setRuaError("A rua é obrigatória");
  } else if (text.length < 3) {
    setRuaError("A rua deve ter pelo menos 3 caracteres");
  } else {
    setRuaError("");
  }
}

export function validateNumber(
  text: string,
  setNumber: Function,
  setNumberError: Function
) {
  setNumber(text);
  if (text === "") {
    setNumberError("O número é obrigatório");
  } else {
    setNumberError("");
  }
}

export function validateRaRm(
  text: string,
  setRaRm: Function,
  setRaRmError: Function
) {
  setRaRm(text);
  if (text === "") {
    setRaRmError("O RA/RM é obrigatório");
  } else if (text.length < 13) {
    setRaRmError("Digite um RA/RM válido");
  } else {
    setRaRmError("");
  }
}

export function validateInstituicao(
  value: string,
  setInstituicao: Function,
  setInstituicaoError: Function
) {
  setInstituicao(value);
  if (value === "") {
    setInstituicaoError("A instituição é obrigatória");
  } else {
    setInstituicaoError("");
  }
}

export function validateCurso(
  text: string,
  setCurso: Function,
  setCursoError: Function
) {
  setCurso(text);
  if (text === "") {
    setCursoError("O curso é obrigatório");
  } else if (text.length < 3) {
    setCursoError("O curso deve ter pelo menos 3 caracteres");
  } else {
    setCursoError("");
  }
}

export function validateInicioCurso(
  text: string,
  setInicioCurso: Function,
  setInicioCursoError: Function
) {
  setInicioCurso(text);
  if (text === "") {
    setInicioCursoError("A data de início é obrigatória");
  } else {
    setInicioCursoError("");
  }
}

export function validateFimCurso(
  text: string,
  setFimCurso: Function,
  setFimCursoError: Function
) {
  setFimCurso(text);
  if (text === "") {
    setFimCursoError("A data de término é obrigatória");
  } else {
    setFimCursoError("");
  }
}

export function validatePeriodo(
  text: string,
  setPeriodo: Function,
  setPeriodoError: Function
) {
  setPeriodo(text);
  if (text === "") {
    setPeriodoError("O período de estudo é obrigatório");
  } else {
    setPeriodoError("");
  }
}

export function validatePassword(
  text: string,
  setPassword: Function,
  setPasswordError: Function
) {
  setPassword(text);
  if (text === "") {
    setPasswordError("A senha é obrigatória");
  } else if (text.length < 8) {
    setPasswordError("A senha deve ter pelo menos 8 caracteres");
  } else {
    setPasswordError("");
  }
}

export function validateConfirmPassword(
  text: string,
  password: string,
  setConfirmPassword: Function,
  setConfirmPasswordError: Function
) {
  setConfirmPassword(text);
  if (text === "") {
    setConfirmPasswordError("A confirmação de senha é obrigatória");
  } else if (text !== password) {
    setConfirmPasswordError("As senhas não correspondem");
  } else {
    setConfirmPasswordError("");
  }
}
