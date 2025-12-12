import { useUser } from "@/hooks/useUser";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BtnBack from "../Components/btnBack";
import { Button } from "../Components/button";
import { InputPassword } from "../Components/inputPassword";

import {
  validateBairro,
  validateCep,
  validateCidade,
  validateConfirmPassword,
  validateCpf,
  validateEmail,
  validateEstado,
  validateLastname,
  validateName,
  validateNumber,
  validatePassword,
  validateRua,
  validateTelephone,
} from "../Components/funValidate";
import InputText from "../Components/inputText";

export default function Register() {
  const [section, setSection] = useState(0);

  const { registrarAluno } = useUser();
  function registrarUser() {
    const formDados = {
      nome: name,
      sobrenome: lastname,
      email: email,
      cpf: cpf,
      cep: 0,
      complemento: complemento,
      numero_residencia: number,
      password: password,
      is_active: true,
      is_superuser: false,
      is_verified: false,
    };
    console.log(formDados);
    registrarAluno(formDados);
  }

  function upSection() {
    if (section === 0) {
      if (
        name !== "" &&
        lastname !== "" &&
        cpf !== "" &&
        email !== "" &&
        // telephone !== "" &&
        nameError === "" &&
        lastnameError === "" &&
        cpfError === "" &&
        emailError === ""
        // telephoneError === ""
      ) {
        setSection(section + 1);
      } else {
        validateName(name, setName, setNameError);
        validateLastname(lastname, setLastname, setLastnameError);
        validateCpf(cpf, setCpf, setCpfError);
        // validateEmail(email, setEmail, setEmailError);
        validateTelephone(telephone, setTelephone, setTelephoneError);
      }
    } else if (section === 1) {
      if (
        cep !== "" &&
        // cidade !== "" &&
        // estado !== "" &&
        // bairro !== "" &&
        // rua !== "" &&
        // number !== "" &&
        // cepError === "" &&
        // cidadeError === "" &&
        // estadoError === "" &&
        // bairroError === "" &&
        // ruaError === "" &&
        numberError === ""
      ) {
        // console.log("oi");
        registrarUser();
      } else {
        validateCep(cep, setCep, setCepError);
        validateCidade(cidade, setCidade, setCidadeError);
        validateEstado(estado, setEstado, setEstadoError);
        validateBairro(bairro, setBairro, setBairroError);
        validateRua(rua, setRua, setRuaError);
        validateNumber(number, setNumber, setNumberError);
      }
    }
    // else if (section === 2) {
    //   if (
    //     instituicao !== "" &&
    //     raRm !== "" &&
    //     curso !== "" &&
    //     inicioCurso !== "" &&
    //     fimCurso !== "" &&
    //     periodo !== "" &&
    //     instituicaoError === "" &&
    //     raRmError === "" &&
    //     cursoError === "" &&
    //     periodoError === "" &&
    //     inicioCursoError === "" &&
    //     fimCursoError === "" &&
    //     password !== "" &&
    //     confirmPassword !== "" &&
    //     passwordError === "" &&
    //     confirmPasswordError === ""
    //   ) {
    //   } else {
    //     validateInstituicao(instituicao, setInstituicao, setInstituicaoError);
    //     validateRaRm(raRm, setRaRm, setRaRmError);
    //     validateCurso(curso, setCurso, setCursoError);
    //     validatePeriodo(periodo, setPeriodo, setPeriodoError);
    //     validateInicioCurso(inicioCurso, setInicioCurso, setInicioCursoError);
    //     validateFimCurso(fimCurso, setFimCurso, setFimCursoError);
    //   }
    // }
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
  const [periodo, setPeriodo] = useState("");

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
  const [periodoError, setPeriodoError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 25}
    >
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
                onChangeText={(value) =>
                  validateName(value, setName, setNameError)
                }
                inputMode="text"
                placeholder="Digite o seu nome"
              />
              {nameError !== "" && (
                <Text style={styles.caption}>{nameError}</Text>
              )}

              <Text style={styles.label}>Sobrenome</Text>
              <InputText
                value={lastname}
                onChangeText={(value) =>
                  validateLastname(value, setLastname, setLastnameError)
                }
                inputMode="text"
                placeholder="Digite o seu sobrenome"
              />
              {lastnameError !== "" && (
                <Text style={styles.caption}>{lastnameError}</Text>
              )}

              <Text style={styles.label}>CPF</Text>
              <InputText
                value={cpf}
                onChangeText={(value) =>
                  validateCpf(value, setCpf, setCpfError)
                }
                inputMode="numeric"
                placeholder="Digite o seu CPF"
                maxLength={14}
              />
              {cpfError !== "" && (
                <Text style={styles.caption}>{cpfError}</Text>
              )}

              <Text style={styles.label}>E-mail</Text>
              <InputText
                value={email}
                onChangeText={(value) =>
                  validateEmail(value, setEmail, setEmailError)
                }
                inputMode="email"
                placeholder="Digite o seu e-mail"
              />
              {emailError !== "" && (
                <Text style={styles.caption}>{emailError}</Text>
              )}

              {/* <Text style={styles.label}>Telefone</Text>
              <InputText
                value={telephone}
                onChangeText={(value) =>
                  validateTelephone(value, setTelephone, setTelephoneError)
                }
                inputMode="tel"
                placeholder="Digite o seu telefone"
                maxLength={14}
              />
              {telephoneError !== "" && (
                <Text style={styles.caption}>{telephoneError}</Text>
              )} */}
            </View>

            <Button text="Continuar" onPress={upSection} />
          </View>
        ) : (
          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.titulo}>Continue</Text>
              <Text style={styles.subtitulo}>
                Agora, adicione o seu endereço e senha
              </Text>
            </View>
            {/* Campos de Endereço */}
            <View>
              <Text style={styles.label}>CEP</Text>
              <InputText
                value={cep}
                onChangeText={(value) =>
                  validateCep(value, setCep, setCepError)
                }
                inputMode="numeric"
                placeholder="Digite o seu CEP"
                maxLength={9}
              />
              {cepError !== "" && (
                <Text style={styles.caption}>{cepError}</Text>
              )}

              {/* <View style={styles.cidUfContainer}>
                <View style={styles.cidContainer}>
                  <Text style={styles.label}>Cidade</Text>
                  <InputText
                    value={cidade}
                    onChangeText={(value) =>
                      validateCidade(value, setCidade, setCidadeError)
                    }
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
                    change={(value: string) =>
                      validateEstado(value, setEstado, setEstadoError)
                    }
                    items={estados}
                    text={"Escolha seu UF"}
                    value={estado}
                  />
                  {estadoError !== "" && (
                    <Text style={styles.caption}>{estadoError}</Text>
                  )}
                </View>
              </View>
              <Text style={styles.label}>Bairro</Text>
              <InputText
                value={bairro}
                onChangeText={(value) =>
                  validateBairro(value, setBairro, setBairroError)
                }
                inputMode="text"
                placeholder="Digite seu bairro"
              />
              {bairroError !== "" && (
                <Text style={styles.caption}>{bairroError}</Text>
              )}

              <Text style={styles.label}>Rua</Text>
              <InputText
                value={rua}
                onChangeText={(value) =>
                  validateRua(value, setRua, setRuaError)
                }
                inputMode="text"
                placeholder="Digite sua rua"
              />
              {ruaError !== "" && (
                <Text style={styles.caption}>{ruaError}</Text>
              )} */}

              <View style={styles.numCompContainer}>
                <View style={styles.numContainer}>
                  <Text style={styles.label}>Número</Text>
                  <InputText
                    value={number}
                    onChangeText={(value) =>
                      validateNumber(value, setNumber, setNumberError)
                    }
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
            {/* <View style={styles.buttonContainer}>
              <View style={styles.buttonBack}>
                <BtnBack onPress={backSection} />
              </View>
              <View style={styles.buttonNext}>
                <Button text="Continuar" onPress={upSection} />
              </View>
            </View> */}
            <View>
              <Text style={styles.label}>Senha</Text>
              <InputPassword
                type="password"
                value={password}
                onChangeText={(value) =>
                  validatePassword(value, setPassword, setPasswordError)
                }
                placeholder="Digite sua senha"
              />
              {passwordError !== "" && (
                <Text style={styles.caption}>{passwordError}</Text>
              )}

              <Text style={styles.label}>Confirmar Senha</Text>
              <InputPassword
                type="password"
                value={confirmPassword}
                onChangeText={(value) =>
                  validateConfirmPassword(
                    value,
                    password,
                    setConfirmPassword,
                    setConfirmPasswordError
                  )
                }
                placeholder="Confirme sua senha"
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
        {/* : (
          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.titulo}>Mais um pouco</Text>
              <Text style={styles.subtitulo}>
                Coloque os dados da sua matrícula
              </Text>
            </View>
            * Campos de Matrícula *
            <View>
              <Text style={styles.label}>Instituição</Text>
              <InputPickerSelect
                change={(value: string) =>
                  validateInstituicao(
                    value,
                    setInstituicao,
                    setInstituicaoError
                  )
                }
                items={instituicoes}
                text="Escolha sua instituição"
                value={instituicao}
              />
              {instituicaoError !== "" && (
                <Text style={styles.caption}>{instituicaoError}</Text>
              )}

              <Text style={styles.label}>RA/RM</Text>
              <InputText
                value={raRm}
                onChangeText={(value) =>
                  validateRaRm(value, setRaRm, setRaRmError)
                }
                inputMode="numeric"
                placeholder="Digite seu RA/RM"
                maxLength={13}
              />
              {raRmError !== "" && (
                <Text style={styles.caption}>{raRmError}</Text>
              )}

              <Text style={styles.label}>Curso</Text>
              <InputPickerSelect
                change={(value: string) =>
                  validateCurso(value, setCurso, setCursoError)
                }
                items={decideListCurso(instituicao)}
                text="Escolha seu curso"
                value={curso}
              />
              {cursoError !== "" && (
                <Text style={styles.caption}>{cursoError}</Text>
              )}

              <Text style={styles.label}>Período</Text>
              <InputPickerSelect
                change={(value: string) =>
                  validatePeriodo(value, setPeriodo, setPeriodoError)
                }
                items={periodos}
                text="Escolha o período"
                value={periodo}
              />
              {periodoError !== "" && (
                <Text style={styles.caption}>{periodoError}</Text>
              )}

              <Text style={styles.label}>Início do Curso</Text>
              <InputDatePicker
                change={(value: string) =>
                  validateInicioCurso(
                    value,
                    setInicioCurso,
                    setInicioCursoError
                  )
                }
                value={inicioCurso}
              />
              {inicioCursoError !== "" && (
                <Text style={styles.caption}>{inicioCursoError}</Text>
              )}

              <Text style={styles.label}>Fim do Curso</Text>
              <InputDatePicker
                change={(value: string) =>
                  validateFimCurso(value, setFimCurso, setFimCursoError)
                }
                value={fimCurso}
              />
              {fimCursoError !== "" && (
                <Text style={styles.caption}>{fimCursoError}</Text>
              )}
            </View> */}
      </ScrollView>
    </KeyboardAvoidingView>
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
