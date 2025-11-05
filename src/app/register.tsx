import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import BtnBack from "../Components/btnBack";
import { Button } from "../Components/button";
import InputText from "../Components/inputText";

export default function Register() {
  const [section, setSection] = useState(0);

  function upSection() {
    setSection(section + 1);

    if (section > 3) {
      router.push("/dashboard");
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
                onChangeText={(value) => setName(value)}
                inputMode="text"
                placeholder="Digite o seu nome"
              />
              <Text style={styles.label}>Sobrenome</Text>
              <InputText
                value={lastname}
                onChangeText={(value) => setLastname(value)}
                inputMode="text"
                placeholder="Digite o seu sobrenome"
              />
              <Text style={styles.label}>CPF</Text>
              <InputText
                value={cpf}
                onChangeText={(value) => setCpf(value)}
                inputMode="numeric"
                placeholder="Digite o seu CPF"
              />
              <Text style={styles.label}>E-mail</Text>
              <InputText
                value={email}
                onChangeText={(value) => setEmail(value)}
                inputMode="email"
                placeholder="Digite o seu e-mail"
              />
              <Text style={styles.label}>Telefone</Text>
              <InputText
                value={telephone}
                onChangeText={(value) => setTelephone(value)}
                inputMode="tel"
                placeholder="Digite o seu telefone"
              />
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
                onChangeText={(value) => setCep(value)}
                inputMode="numeric"
                placeholder="Digite o seu CEP"
              />
              <View style={styles.cidUfContainer}>
                <View style={styles.cidContainer}>
                  <Text style={styles.label}>Cidade</Text>
                  <InputText
                    value={cidade}
                    onChangeText={(value) => setCidade(value)}
                    inputMode="text"
                    placeholder="Digite sua cidade"
                  />
                </View>
                <View style={styles.ufContainer}>
                  <Text style={styles.label}>Estado</Text>
                  <InputText
                    value={estado}
                    onChangeText={(value) => setEstado(value)}
                    inputMode="text"
                    placeholder="Digite seu UF"
                  />
                </View>
              </View>
              <Text style={styles.label}>Bairro</Text>
              <InputText
                value={bairro}
                onChangeText={(value) => setBairro(value)}
                inputMode="text"
                placeholder="Digite seu bairro"
              />
              <Text style={styles.label}>Rua</Text>
              <InputText
                value={rua}
                onChangeText={(value) => setRua(value)}
                inputMode="text"
                placeholder="Digite sua rua"
              />

              <View style={styles.numCompContainer}>
                <View style={styles.numContainer}>
                  <Text style={styles.label}>Número</Text>
                  <InputText
                    value={number}
                    onChangeText={(value) => setNumber(value)}
                    inputMode="numeric"
                    placeholder="Digite o número"
                  />
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
              <InputText
                value={instituicao}
                onChangeText={(value) => setInstituicao(value)}
                inputMode="text"
                placeholder="Digite sua instituição"
              />
              <Text style={styles.label}>RA/RM</Text>
              <InputText
                value={raRm}
                onChangeText={(value) => setRaRm(value)}
                inputMode="text"
                placeholder="Digite seu RA/RM"
              />
              <Text style={styles.label}>Curso</Text>
              <InputText
                value={curso}
                onChangeText={(value) => setCurso(value)}
                inputMode="text"
                placeholder="Digite seu curso"
              />
              <Text style={styles.label}>Início do Curso</Text>
              <InputText
                value={inicioCurso}
                onChangeText={(value) => setInicioCurso(value)}
                inputMode="numeric"
                placeholder="Digite a data de início"
              />
              <Text style={styles.label}>Fim do Curso</Text>
              <InputText
                value={fimCurso}
                onChangeText={(value) => setFimCurso(value)}
                inputMode="numeric"
                placeholder="Digite a data de término"
              />
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
              <InputText
                value={password}
                onChangeText={(value) => setPassword(value)}
                inputMode="text"
                placeholder="Digite sua senha"
                secureTextEntry
              />
              <Text style={styles.label}>Confirmar Senha</Text>
              <InputText
                value={confirmPassword}
                onChangeText={(value) => setConfirmPassword(value)}
                inputMode="text"
                placeholder="Confirme sua senha"
                secureTextEntry
              />
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
});
