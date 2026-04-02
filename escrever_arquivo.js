const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// Caminhos
const pasta = path.join(__dirname, 'storage');
const arquivo = path.join(pasta, 'aula05.txt');

// Conteúdo do arquivo (VOCÊ define aqui)
const conteudo = `Aula 05 - Manipulação de arquivos com Node.js.

Arquivo criado com sucesso durante a atividade final.`;

// Criar pasta se não existir
if (!fs.existsSync(pasta)) {
    console.log(chalk.yellow('📁 Criando pasta storage...'));
    fs.mkdirSync(pasta);
}

// Criar arquivo automaticamente
fs.writeFile(arquivo, conteudo, (err) => {
    if (err) {
        console.log(chalk.red('Erro ao criar arquivo'));
        return;
    }

    console.log(chalk.green('Arquivo criado com sucesso!'));

    // Ler arquivo depois de criar
    fs.readFile(arquivo, 'utf8', (err, data) => {
        console.log(chalk.cyan('\nConteúdo do arquivo:'));
        console.log(data);
    });
});