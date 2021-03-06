import React, { useState, useLayoutEffect, useEffect } from 'react'
import { StyleSheet, View, Button} from 'react-native';
import Registro from '../components/Registro';
import { getData } from '../services/ApiClimaCidades';

export default function Home({ navigation }) {

  const [dataPassoFundo, setDataPassoFundo] = useState([{}])
  const [dataMarau, setDataMarau] = useState(["Nd"])
  const [dataCarazinho, setDataCarazinho] = useState(["Nd"])
  const [dataSoledade, setDataSoledade] = useState(["Nd"])
  const [dataErechim, setDataErechim] = useState(["Nd"])

  var data = new Date()
  var dia = String(data.getDate()).padStart(2, '0')
  var mes = String(data.getMonth() + 1).padStart(2, '0')
  var ano = String(data.getFullYear())
  var dataAtual = dia + '/' + mes + '/' + ano

  useEffect(() => {
    let unmounted = false

    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate("Sobre")}
          title="Sobre"
          color="black"
        />
      ),
    })

    if (!unmounted) {
      getData("4314100", dataAtual)
        .then(dados => setDataPassoFundo(dados))
        .catch(erro => console.log(erro))

      getData("4311809", dataAtual)
        .then(dados => setDataMarau(dados))
        .catch(erro => console.log(erro))

      getData("4304705", dataAtual)
        .then(dados => setDataCarazinho(dados))
        .catch(erro => console.log(erro))

      getData("4320800", dataAtual)
        .then(dados => setDataSoledade(dados))
        .catch(erro => console.log(erro))

      getData("4307005", dataAtual)
        .then(dados => setDataErechim(dados))
        .catch(erro => console.log(erro))
    }
    return () => {
      unmounted = true
    }

  }, [dataErechim, dataPassoFundo, dataSoledade, dataMarau, dataCarazinho])

  return (
    <View>
      <Registro
        data={dataPassoFundo}
        navigation={navigation}
      />
      <Registro
        data={dataMarau}
        navigation={navigation}
      />
      <Registro
        data={dataCarazinho}
        navigation={navigation}

      />
      <Registro
        data={dataSoledade}
        navigation={navigation}
      />
      <Registro
        data={dataErechim}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fff',
    alignItems: "center",
  },
  textInput: {
    width: 200,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    textAlign: "center"
  },
  text: {
    fontSize: 25,
    fontWeight: "bold"
  },
  menu: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    margin: 5

  }, linha: {
    flexDirection: "row",
    alignSelf: "center"
  }
});