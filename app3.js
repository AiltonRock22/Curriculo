// Acessa os elementos do DOM para interagir com a página
const authContainer = document.getElementById('auth-container');
const registerContainer = document.getElementById('register-container');
const todoContainer = document.getElementById('todo-container');

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const logoutButton = document.getElementById('logout-button');
const showRegisterButton = document.getElementById('show-register');
const showLoginButton = document.getElementById('show-login');

// Adiciona elementos para exibir mensagens de erro na tela
// É necessário adicionar um <p id="login-error-message"> e <p id="register-error-message">
// no seu HTML, dentro dos respectivos formulários.
const loginError = document.getElementById('login-error-message');
const registerError = document.getElementById('register-error-message');

// Função auxiliar para exibir mensagens de erro
const displayError = (element, message) => {
    element.textContent = message;
    element.style.color = '#dc3545';
    element.style.marginTop = '10px';
    element.style.display = 'block';
};

// Função para limpar as mensagens de erro
const clearErrors = () => {
    if (loginError) loginError.textContent = '';
    if (registerError) registerError.textContent = '';
};

// ----- Lógica para alternar entre as telas de login e registro -----

showRegisterButton.addEventListener('click', () => {
    authContainer.style.display = 'none';
    registerContainer.style.display = 'block';
    clearErrors();
});

showLoginButton.addEventListener('click', () => {
    authContainer.style.display = 'block';
    registerContainer.style.display = 'none';
    clearErrors();
});

// ----- Lógica do Firebase Authentication -----

// Esta função monitora o estado de autenticação do usuário
// e atualiza a interface de acordo.
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // Usuário logado
        authContainer.style.display = 'none';
        registerContainer.style.display = 'none';
        todoContainer.style.display = 'block';
        clearErrors();
        console.log("Usuário logado:", user.email);
    } else {
        // Usuário deslogado
        authContainer.style.display = 'block';
        registerContainer.style.display = 'none';
        todoContainer.style.display = 'none';
        clearErrors();
        console.log("Nenhum usuário logado.");
    }
});

// Lidar com o formulário de REGISTRO
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();
    const email = registerForm['register-email'].value;
    const password = registerForm['register-password'].value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((cred) => {
            console.log("Usuário criado com sucesso:", cred.user.email);
            registerForm.reset();
        })
        .catch((error) => {
            console.error("Erro ao registrar:", error.message);
            if (registerError) displayError(registerError, "Erro ao registrar: " + error.message);
        });
});

// Lidar com o formulário de LOGIN
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((cred) => {
            console.log("Usuário logado com sucesso:", cred.user.email);
            loginForm.reset();
        })
        .catch((error) => {
            console.error("Erro ao fazer login:", error.message);
            if (loginError) displayError(loginError, "Erro ao fazer login: " + error.message);
        });
});

// Lidar com o botão de LOGOUT
logoutButton.addEventListener('click', () => {
    firebase.auth().signOut()
        .then(() => {
            console.log("Usuário deslogado com sucesso.");
        })
        .catch((error) => {
            console.error("Erro ao fazer logout:", error.message);
        });
});
