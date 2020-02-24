import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {
	state = {
		cep: '',
		data: {}
	};

	buscar = async () => {
		let data = await fetch(`https://viacep.com.br/ws/${this.state.cep}/json/`);
		data = await data.json();

		this.setState({ data });
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.body}>
					<Text style={styles.textLogo}>Buscar por CEP</Text>
					<TextInput
						style={styles.inputText}
						placeholder="Digite o CEP: "
						onChangeText={(text) => this.setState({ cep: text })}
					/>

					<Button style={styles.button} title="Buscar" onPress={() => this.buscar()} />
				</View>

				<View style={styles.content}>
					<Text style={styles.resultText}>CEP: {this.state.data.cep || ''}</Text>
					<Text style={styles.resultText}>Logradouro: {this.state.data.logradouro || ''}</Text>
					<Text style={styles.resultText}>Complemento: {this.state.data.complemento || ''}</Text>
					<Text style={styles.resultText}>Bairro: {this.state.data.bairro || ''}</Text>
					<Text style={styles.resultText}>Localidade: {this.state.data.localidade || ''}</Text>
					<Text style={styles.resultText}>UF: {this.state.data.uf || ''}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fafafa',
		paddingTop: 24
	},
	body: {
		flex: 1,
		backgroundColor: '#23588C',
		justifyContent: 'center',
		alignItems: 'stretch',
		paddingHorizontal: 10
	},
	textLogo: {
		fontSize: 25,
		textAlign: 'center',
		color: '#fff',
		marginBottom: 15
	},
	inputText: {
		borderWidth: 1,
		borderColor: '#fff',
		height: 60,
		backgroundColor: '#fff',
		paddingHorizontal: 10,
		marginBottom: 5
	},
	button: {
		width: 70,
		paddingVertical: 15,
		color: '#fff',
		backgroundColor: '#23588C',
		borderColor: '#fff',
		alignItems: 'center',
		marginTop: 10
	},
	content: {
		paddingHorizontal: 10,
		flex: 2,
		backgroundColor: '#23588C',
		alignItems: 'stretch'
	},
	resultText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: '600',
		marginBottom: 15
	}
});
