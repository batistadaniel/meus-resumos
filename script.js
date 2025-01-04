// // funcao para alternar o estado expandido/contraido (fica allternando entre abrir e fechar)
// const toggleAll = () => {
//     document.querySelectorAll('.content').forEach(content => {
//         content.classList.toggle('expandido');
//     });
// };

// funcao para contrair tudo
const collapseAll = () => {
    document.querySelectorAll('.conteudo-materia').forEach(conteudoMateia => {
        conteudoMateia.classList.remove('expandido');
    });
    document.querySelectorAll('.conteudo').forEach(conteudo => {
        conteudo.classList.remove('expandido');
    });
}

// quando clicar no atalho tbm chama a funcao de fechar tudo
document.getElementById('control-collapse').addEventListener('click', collapseAll);

// atalho de teclado Ctrl + /
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key == '/') {
        collapseAll();
    }
});

// exibe o content ao clicar no titulo
document.querySelectorAll('.titulo').forEach(titulo => {
    titulo.addEventListener('click', () => {
        const proximocontent = titulo.nextElementSibling;
        if (proximocontent) {
            proximocontent.classList.toggle('expandido');
        }
    });
});