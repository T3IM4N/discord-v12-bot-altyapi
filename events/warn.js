var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
module.exports = e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'Düzeltildi')));
};
