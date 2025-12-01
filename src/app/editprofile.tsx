import InputText from "@/src/Components/inputText";
import InputDatePicker from "../Components/inputDatePicker";
import { InputPassword } from "../Components/inputPassword";
import { InputPickerSelect } from "../Components/inputPickerSelect";

import { useContext, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "../Components/button";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import { UsuarioContext } from "@/context/UsuarioContext";
import { useUser } from "@/hooks/useUser";
import {
  decideListCurso,
  estados,
  instituicoes,
  periodos,
  validateBairro,
  validateCep,
  validateCidade,
  validateCpf,
  validateCurso,
  validateEmail,
  validateEstado,
  validateFimCurso,
  validateInicioCurso,
  validateInstituicao,
  validateLastname,
  validateName,
  validateNumber,
  validatePassword,
  validatePeriodo,
  validateRaRm,
  validateRua,
  validateTelephone,
} from "../Components/funValidate";
import TxtTitle from "../Components/txtTitle";

export default function EditProfile() {
  // Register: Usuário
  // const [name, setName] = useState("David");
  // const [lastname, setLastname] = useState("Vasconcelos");
  const [cpf, setCpf] = useState("123.456.789-00");
  // const [email, setEmail] = useState("exemplo@email.com");
  const [telephone, setTelephone] = useState("(11)91234-5678");

  // Register: Endereço
  const [cep, setCep] = useState("05818-270");
  const [cidade, setCidade] = useState("São Paulo");
  const [estado, setEstado] = useState("SP");
  const [bairro, setBairro] = useState("Jardim São Luís");
  const [rua, setRua] = useState("Rua Frederico Grotte");
  const [number, setNumber] = useState("322");
  const [complemento, setComplemento] = useState("");

  // Register: Matrícula
  const [instituicao, setInstituicao] = useState("Fatec Zona Sul");
  const [raRm, setRaRm] = useState("1234567890123");
  const [curso, setCurso] = useState("Análise e Desenvolvimento de Sistemas");
  const [inicioCurso, setInicioCurso] = useState("2022-01-01");
  const [fimCurso, setFimCurso] = useState("2025-12-31");
  const [periodo, setPeriodo] = useState("Manhã");

  // Register: Senha
  const [password, setPassword] = useState("********");

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

  const { atualizarUsuario } = useUser();
  const ctx = useContext(UsuarioContext);
  const [name, setName] = useState(ctx!.user!.nome);
  const [lastname, setLastName] = useState(ctx!.user!.sobrenome);
  const [email, setEmail] = useState(ctx!.user!.email);
  const [msg, setMsg] = useState("");
  // const [number, setNumber] = useState(ctx!.user!.tel);

  const updateUser = () => {
    try {
      const formDados = {
        nome: name,
        sobrenome: lastname,
        email: email,
      };
      // atualizarUsuario(formDados);
      setMsg(`Aluno atualizado com sucesso!`);
    } catch (e) {
      setMsg(`Erro na atualização do aluno: ${e}`);
    }
  };

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
        <View style={styles.photoContainer}>
          <View style={styles.photoCard}>
            <Image
              style={styles.photo}
              source={require("@/assets/images/perfil_teste.png")}
            />
          </View>
          <TouchableOpacity style={styles.btnCam}>
            <FontAwesome name="camera" size={24} color="#B9030F" />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <TxtTitle text="Dados Pessoais" />
          <View style={styles.inputsContainer}>
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
                validateLastname(value, setLastName, setLastnameError)
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
              onChangeText={(value) => validateCpf(value, setCpf, setCpfError)}
              inputMode="numeric"
              placeholder="Digite o seu CPF"
              maxLength={14}
            />
            {cpfError !== "" && <Text style={styles.caption}>{cpfError}</Text>}

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

            <Text style={styles.label}>Telefone</Text>
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
            )}
          </View>
          <TxtTitle text="Endereço" />
          <View style={styles.inputsContainer}>
            <Text style={styles.label}>CEP</Text>
            <InputText
              value={cep}
              onChangeText={(value) => validateCep(value, setCep, setCepError)}
              inputMode="numeric"
              placeholder="Digite o seu CEP"
              maxLength={9}
            />
            {cepError !== "" && <Text style={styles.caption}>{cepError}</Text>}

            <View style={styles.cidUfContainer}>
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
              onChangeText={(value) => validateRua(value, setRua, setRuaError)}
              inputMode="text"
              placeholder="Digite sua rua"
            />
            {ruaError !== "" && <Text style={styles.caption}>{ruaError}</Text>}

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
          <TxtTitle text="Educação" />
          <View style={styles.inputsContainer}>
            <Text style={styles.label}>Instituição</Text>
            <InputPickerSelect
              change={(value: string) =>
                validateInstituicao(value, setInstituicao, setInstituicaoError)
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
                validateInicioCurso(value, setInicioCurso, setInicioCursoError)
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
          </View>
          <TxtTitle text="Senha" />
          <View style={styles.inputsContainer}>
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
          </View>

          <View style={styles.passwordResetContainer}>
            <TouchableOpacity
              style={styles.passwrdResetButton}
              onPress={() => console.log("clicado")}
            >
              <Text style={styles.passwrdResetButtonText}>Mudar Senha</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.compButton}>
        <Button text="Salvar Alterações" onPress={updateUser} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    width: "100%",
    flexGrow: 1,
  },
  photoContainer: {
    width: "100%",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  photoCard: {
    width: 200,
    height: 200,

    borderRadius: 200,
    borderColor: "#B9030F",
    borderWidth: 3,
    marginBottom: 12,
  },
  photo: {
    width: "100%",
    height: "100%",
    aspectRatio: undefined,
    borderRadius: 100,
  },
  btnCam: {
    position: "absolute",
    bottom: 34,
    right: "28%",

    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#B9030F",
    backgroundColor: "#ececec",
  },
  infoContainer: {
    marginBottom: 20,
    // paddingHorizontal: 24,
  },
  inputsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  label: {
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
  passwordResetContainer: {
    alignItems: "center",
    paddingHorizontal: 24,
  },
  passwrdResetButton: {
    height: 44,
    width: "70%",
    borderRadius: 18,
    backgroundColor: "#161917",
    fontWeight: "bold",
    fontSize: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  passwrdResetButtonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
  },
  compButton: {
    width: "100%",
    paddingTop: 15,
    paddingHorizontal: 24,
    paddingBottom: 40,
    borderTopWidth: 5,
    borderTopColor: "#F6F6F6",
  },

  caption: {
    fontSize: 12,
    color: "#B9030F",
    marginLeft: 10,
  },
});
