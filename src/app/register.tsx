import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import BtnBack from "../Components/btnBack";
import { Button } from "../Components/button";
import InputDatePicker from "../Components/inputDatePicker";
import { InputPassword } from "../Components/inputPassword";
import { InputPickerSelect } from "../Components/inputPickerSelect";
import InputText from "../Components/inputText";

export default function Register() {
  const [section, setSection] = useState(0);

  const estados = [
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

  const instituicoes = [
    { label: "Fatec Zona Sul", value: "Fatec Zona Sul" },
    {
      label: "Etec Carolina Carinhato Sampaio",
      value: "Etec Carolina Carinhato Sampaio",
    },
    { label: "Outra Instituição", value: "Outra Instituição" },
  ];

  function upSection() {
    if (section === 0) {
      if (
        name !== "" &&
        lastname !== "" &&
        cpf !== "" &&
        email !== "" &&
        telephone !== "" &&
        nameError === "" &&
        lastnameError === "" &&
        cpfError === "" &&
        emailError === "" &&
        telephoneError === ""
      ) {
        setSection(section + 1);
      } else {
        validateName(name);
        validateLastname(lastname);
        validateCpf(cpf);
        validateEmail(email);
        validateTelephone(telephone);
      }
    } else if (section === 1) {
      if (
        cep !== "" &&
        cidade !== "" &&
        estado !== "" &&
        bairro !== "" &&
        rua !== "" &&
        number !== "" &&
        cepError === "" &&
        cidadeError === "" &&
        estadoError === "" &&
        bairroError === "" &&
        ruaError === "" &&
        numberError === ""
      ) {
        setSection(section + 1);
      } else {
        validateCep(cep);
        validateCidade(cidade);
        validateEstado(estado);
        validateBairro(bairro);
        validateRua(rua);
        validateNumber(number);
      }
    } else if (section === 2) {
      if (
        instituicao !== "" &&
        raRm !== "" &&
        curso !== "" &&
        inicioCurso !== "" &&
        fimCurso !== "" &&
        instituicaoError === "" &&
        raRmError === "" &&
        cursoError === "" &&
        inicioCursoError === "" &&
        fimCursoError === ""
      ) {
        setSection(section + 1);
      } else {
        validateInstituicao(instituicao);
        validateRaRm(raRm);
        validateCurso(curso);
        validateInicioCurso(inicioCurso);
        validateFimCurso(fimCurso);
      }
    } else if (section === 3) {
      if (
        password !== "" &&
        confirmPassword !== "" &&
        passwordError === "" &&
        confirmPasswordError === ""
      ) {
        router.push("/(tabs)/dashboard");
      } else {
        validatePassword(password);
        validateConfirmPassword(confirmPassword);
      }
    }
  }

  function backSection() {
    setSection(section - 1);
  }

  // Register: Usuário
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  // Register: Endereço
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [number, setNumber] = useState("");
  const [complemento, setComplemento] = useState("");

  // Register: Matrícula
  const [instituicao, setInstituicao] = useState("");
  const [raRm, setRaRm] = useState("");
  const [curso, setCurso] = useState("");
  const [inicioCurso, setInicioCurso] = useState("");
  const [fimCurso, setFimCurso] = useState("");

  // Register: Senha
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Mensagens de Erro
  const [nameError, setNameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [cpfError, setCpfError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telephoneError, setTelephoneError] = useState("");
  const [cepError, setCepError] = useState("");
  const [cidadeError, setCidadeError] = useState("");
  const [estadoError, setEstadoError] = useState("");
  const [bairroError, setBairroError] = useState("");
  const [ruaError, setRuaError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [raRmError, setRaRmError] = useState("");
  const [instituicaoError, setInstituicaoError] = useState("");
  const [cursoError, setCursoError] = useState("");
  const [inicioCursoError, setInicioCursoError] = useState("");
  const [fimCursoError, setFimCursoError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Funções de Validação
  function validateName(text: string) {
    setName(text);
    if (text === "") {
      setNameError("O nome é obrigatório");
    } else if (text.length < 3) {
      setNameError("O nome deve ter pelo menos 3 caracteres");
    } else {
      setNameError("");
    }
  }

  function validateLastname(text: string) {
    setLastname(text);
    if (text === "") {
      setLastnameError("O sobrenome é obrigatório");
    } else if (text.length < 3) {
      setLastnameError("O sobrenome deve ter pelo menos 3 caracteres");
    } else {
      setLastnameError("");
    }
  }

  function validateCpf(text: string) {
    setCpf(text);
    if (text === "") {
      setCpfError("O Cpf é obrigatório");
    } else if (text.length < 11) {
      setCpfError("Digite um cpf válido");
    } else {
      setCpfError("");
    }
  }

  function validateEmail(text: string) {
    setEmail(text);
    if (text === "") {
      setEmailError("O email é obrigatório");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
      setEmailError("Digite um email válido");
    } else {
      setEmailError("");
    }
  }

  function validateTelephone(text: string) {
    setTelephone(text);
    if (text === "") {
      setTelephoneError("O telefone é obrigatório");
    } else if (text.length < 10) {
      setTelephoneError("Digite um telefone válido");
    } else {
      setTelephoneError("");
    }
  }

  function validateCep(text: string) {
    setCep(text);
    if (text === "") {
      setCepError("O CEP é obrigatório");
    } else if (text.length < 8) {
      setCepError("Digite um CEP válido");
    } else {
      setCepError("");
    }
  }

  function validateCidade(text: string) {
    setCidade(text);
    if (text === "") {
      setCidadeError("A cidade é obrigatória");
    } else if (text.length < 3) {
      setCidadeError("A cidade deve ter pelo menos 3 caracteres");
    } else {
      setCidadeError("");
    }
  }

  function validateEstado(text: string) {
    setEstado(text);
    if (text === "") {
      setEstadoError("O estado é obrigatório");
    } else {
      setEstadoError("");
    }
  }

  function validateBairro(text: string) {
    setBairro(text);
    if (text === "") {
      setBairroError("O bairro é obrigatório");
    } else if (text.length < 3) {
      setBairroError("O bairro deve ter pelo menos 3 caracteres");
    } else {
      setBairroError("");
    }
  }

  function validateRua(text: string) {
    setRua(text);
    if (text === "") {
      setRuaError("A rua é obrigatória");
    } else if (text.length < 3) {
      setRuaError("A rua deve ter pelo menos 3 caracteres");
    } else {
      setRuaError("");
    }
  }

  function validateNumber(text: string) {
    setNumber(text);
    if (text === "") {
      setNumberError("O número é obrigatório");
    } else {
      setNumberError("");
    }
  }

  function validateRaRm(text: string) {
    setRaRm(text);
    if (text === "") {
      setRaRmError("O RA/RM é obrigatório");
    } else if (text.length < 13) {
      setRaRmError("O RA/RM deve ter 13 caracteres");
    } else {
      setRaRmError("");
    }
  }

  function validateInstituicao(value: string) {
    setInstituicao(value);
    if (value === "") {
      setInstituicaoError("A instituição é obrigatória");
    } else {
      setInstituicaoError("");
    }
  }

  function validateCurso(text: string) {
    setCurso(text);
    if (text === "") {
      setCursoError("O curso é obrigatório");
    } else if (text.length < 3) {
      setCursoError("O curso deve ter pelo menos 3 caracteres");
    } else {
      setCursoError("");
    }
  }

  function validateInicioCurso(text: string) {
    setInicioCurso(text);
    if (text === "") {
      setInicioCursoError("A data de início é obrigatória");
    } else {
      setInicioCursoError("");
    }
  }

  function validateFimCurso(text: string) {
    setFimCurso(text);
    if (text === "") {
      setFimCursoError("A data de término é obrigatória");
    } else {
      setFimCursoError("");
    }
  }

  function validatePassword(text: string) {
    setPassword(text);
    if (text === "") {
      setPasswordError("A senha é obrigatória");
    } else if (text.length < 8) {
      setPasswordError("A senha deve ter pelo menos 8 caracteres");
    } else {
      setPasswordError("");
    }
  }

  function validateConfirmPassword(text: string) {
    setConfirmPassword(text);
    if (text === "") {
      setConfirmPasswordError("A confirmação de senha é obrigatória");
    } else if (text !== password) {
      setConfirmPasswordError("As senhas não correspondem");
    } else {
      setConfirmPasswordError("");
    }
  }

  // Outras funções
  function decideListCurso(instituicaoValue: string) {
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
      return [];
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {section === 0 ? (
          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.titulo}>Bem Vindo!</Text>
              <Text style={styles.subtitulo}>Coloque seu dados pessoais</Text>
            </View>
            {/* Campos de Usuário */}
            <View>
              <Text style={styles.label}>Nome</Text>
              <InputText
                value={name}
                onChangeText={(value) => validateName(value)}
                inputMode="text"
                placeholder="Digite o seu nome"
              />
              {nameError !== "" && (
                <Text style={styles.caption}>{nameError}</Text>
              )}

              <Text style={styles.label}>Sobrenome</Text>
              <InputText
                value={lastname}
                onChangeText={(value) => validateLastname(value)}
                inputMode="text"
                placeholder="Digite o seu sobrenome"
              />
              {lastnameError !== "" && (
                <Text style={styles.caption}>{lastnameError}</Text>
              )}

              <Text style={styles.label}>CPF</Text>
              <InputText
                value={cpf}
                onChangeText={(value) => validateCpf(value)}
                inputMode="numeric"
                placeholder="Digite o seu CPF"
                maxLength={11}
              />
              {cpfError !== "" && (
                <Text style={styles.caption}>{cpfError}</Text>
              )}

              <Text style={styles.label}>E-mail</Text>
              <InputText
                value={email}
                onChangeText={(value) => validateEmail(value)}
                inputMode="email"
                placeholder="Digite o seu e-mail"
              />
              {emailError !== "" && (
                <Text style={styles.caption}>{emailError}</Text>
              )}

              <Text style={styles.label}>Telefone</Text>
              <InputText
                value={telephone}
                onChangeText={(value) => validateTelephone(value)}
                inputMode="tel"
                placeholder="Digite o seu telefone"
                maxLength={11}
              />
              {telephoneError !== "" && (
                <Text style={styles.caption}>{telephoneError}</Text>
              )}
            </View>

            <Button text="Continuar" onPress={upSection} />
          </View>
        ) : section === 1 ? (
          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.titulo}>Continue</Text>
              <Text style={styles.subtitulo}>
                Agora, adicione o seu endereço
              </Text>
            </View>
            {/* Campos de Endereço */}
            <View>
              <Text style={styles.label}>CEP</Text>
              <InputText
                value={cep}
                onChangeText={(value) => validateCep(value)}
                inputMode="numeric"
                placeholder="Digite o seu CEP"
                maxLength={8}
              />
              {cepError !== "" && (
                <Text style={styles.caption}>{cepError}</Text>
              )}

              <View style={styles.cidUfContainer}>
                <View style={styles.cidContainer}>
                  <Text style={styles.label}>Cidade</Text>
                  <InputText
                    value={cidade}
                    onChangeText={(value) => validateCidade(value)}
                    inputMode="text"
                    placeholder="Digite sua cidade"
                  />
                  {cidadeError !== "" && (
                    <Text style={styles.caption}>{cidadeError}</Text>
                  )}
                </View>

                <View style={styles.ufContainer}>
                  <Text style={styles.label}>Estado</Text>
                  <InputPickerSelect
                    change={validateEstado}
                    items={estados}
                    text={"Escolha seu UF"}
                  />
                  {estadoError !== "" && (
                    <Text style={styles.caption}>{estadoError}</Text>
                  )}
                </View>
              </View>
              <Text style={styles.label}>Bairro</Text>
              <InputText
                value={bairro}
                onChangeText={(value) => validateBairro(value)}
                inputMode="text"
                placeholder="Digite seu bairro"
              />
              {bairroError !== "" && (
                <Text style={styles.caption}>{bairroError}</Text>
              )}

              <Text style={styles.label}>Rua</Text>
              <InputText
                value={rua}
                onChangeText={(value) => validateRua(value)}
                inputMode="text"
                placeholder="Digite sua rua"
              />
              {ruaError !== "" && (
                <Text style={styles.caption}>{ruaError}</Text>
              )}

              <View style={styles.numCompContainer}>
                <View style={styles.numContainer}>
                  <Text style={styles.label}>Número</Text>
                  <InputText
                    value={number}
                    onChangeText={(value) => validateNumber(value)}
                    inputMode="numeric"
                    placeholder="Nº"
                  />
                  {numberError !== "" && (
                    <Text style={styles.caption}>{numberError}</Text>
                  )}
                </View>

                <View style={styles.compContainer}>
                  <Text style={styles.label}>Complemento</Text>
                  <InputText
                    value={complemento}
                    onChangeText={(value) => setComplemento(value)}
                    inputMode="text"
                    placeholder="Digite o complemento"
                  />
                </View>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonBack}>
                <BtnBack onPress={backSection} />
              </View>
              <View style={styles.buttonNext}>
                <Button text="Continuar" onPress={upSection} />
              </View>
            </View>
          </View>
        ) : section === 2 ? (
          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.titulo}>Mais um pouco</Text>
              <Text style={styles.subtitulo}>
                Coloque os dados da sua matrícula
              </Text>
            </View>
            {/* Campos de Matrícula */}
            <View>
              <Text style={styles.label}>Instituição</Text>
              <InputPickerSelect
                change={validateInstituicao}
                items={instituicoes}
                text="Escolha sua instituição"
              />
              {instituicaoError !== "" && (
                <Text style={styles.caption}>{instituicaoError}</Text>
              )}

              <Text style={styles.label}>RA/RM</Text>
              <InputText
                value={raRm}
                onChangeText={(value) => validateRaRm(value)}
                inputMode="numeric"
                placeholder="Digite seu RA/RM"
                maxLength={13}
              />
              {raRmError !== "" && (
                <Text style={styles.caption}>{raRmError}</Text>
              )}

              <Text style={styles.label}>Curso</Text>
              <InputPickerSelect
                change={validateCurso}
                items={decideListCurso(instituicao)}
                text="Escolha seu curso"
              />
              {cursoError !== "" && (
                <Text style={styles.caption}>{cursoError}</Text>
              )}

              <Text style={styles.label}>Início do Curso</Text>
              <InputDatePicker change={validateInicioCurso} />
              {inicioCursoError !== "" && (
                <Text style={styles.caption}>{inicioCursoError}</Text>
              )}

              <Text style={styles.label}>Fim do Curso</Text>
              <InputDatePicker change={validateFimCurso} />
              {fimCursoError !== "" && (
                <Text style={styles.caption}>{fimCursoError}</Text>
              )}
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonBack}>
                <BtnBack onPress={backSection} />
              </View>
              <View style={styles.buttonNext}>
                <Button text="Continuar" onPress={upSection} />
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.titulo}>Por Fim</Text>
              <Text style={styles.subtitulo}>
                Coloque e confirme a sua senha
              </Text>
            </View>
            {/* Campos de Senha */}
            <View>
              <Text style={styles.label}>Senha</Text>
              <InputPassword
                type="password"
                value={password}
                onChangeText={(value) => validatePassword(value)}
                inputMode="text"
                placeholder="Digite sua senha"
                secureTextEntry
              />
              {passwordError !== "" && (
                <Text style={styles.caption}>{passwordError}</Text>
              )}

              <Text style={styles.label}>Confirmar Senha</Text>
              <InputPassword
                type="password"
                value={confirmPassword}
                onChangeText={(value) => validateConfirmPassword(value)}
                inputMode="text"
                placeholder="Confirme sua senha"
                secureTextEntry
              />
              {confirmPasswordError !== "" && (
                <Text style={styles.caption}>{confirmPasswordError}</Text>
              )}
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonBack}>
                <BtnBack onPress={backSection} />
              </View>
              <View style={styles.buttonNext}>
                <Button text="Finalizar" onPress={upSection} />
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 48,
    gap: 32,
    backgroundColor: "#FFF",
  },
  scrollContainer: {
    paddingTop: 48,
    width: "100%",
    flexGrow: 1,
  },
  inputContainer: {
    gap: 32,
    paddingBottom: 60,
  },
  titulo: {
    fontSize: 48,
    color: "#B9030F",
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 16,
    color: "#707070",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  buttonBack: {
    width: "20%",
  },
  buttonNext: {
    width: "80%",
  },
  label: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 16,
  },

  cidUfContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cidContainer: {
    width: "62%",
  },
  ufContainer: {
    width: "35%",
  },
  numCompContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  numContainer: {
    width: "30%",
  },
  compContainer: {
    width: "67%",
  },

  caption: {
    fontSize: 12,
    color: "#B9030F",
    marginLeft: 10,
  },
});
