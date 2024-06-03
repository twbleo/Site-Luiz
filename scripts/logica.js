document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var errorMessage = document.getElementById('error-message');

    if (!login || !senha) {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    var storedPassword = localStorage.getItem(login);
    if (storedPassword) {
        if (senha === storedPassword) {
            window.location.href = 'back.html'; 
        } else {
            errorMessage.textContent = 'Usuário encontrado, mas a senha está incorreta.';
        }
    } else {
        errorMessage.textContent = 'Login ou senha incorretos. Tente novamente.';
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var newLogin = document.getElementById('newLogin').value;
    var newSenha = document.getElementById('newSenha').value;
    var adminSenha = document.getElementById('adminSenha').value;
    var registerMessage = document.getElementById('register-message');

    if (!newLogin || !newSenha || !adminSenha) {
        registerMessage.style.color = 'red';
        registerMessage.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    if (adminSenha !== 'leo200418') {
        registerMessage.style.color = 'red';
        registerMessage.textContent = 'Senha de administrador incorreta.';
        return;
    }

    if (localStorage.getItem(newLogin)) {
        registerMessage.style.color = 'red';
        registerMessage.textContent = 'Este login já está em uso. Tente outro.';
    } else {
        localStorage.setItem(newLogin, newSenha);
        registerMessage.style.color = 'green';
        registerMessage.textContent = 'Registro bem-sucedido! Você pode agora fazer login.';
    }
});

document.getElementById('login').addEventListener('input', function() {
    checkLoginFields();
});

document.getElementById('senha').addEventListener('input', function() {
    checkLoginFields();
});

document.getElementById('newLogin').addEventListener('input', function() {
    checkRegisterFields();
});

document.getElementById('newSenha').addEventListener('input', function() {
    checkRegisterFields();
});

document.getElementById('adminSenha').addEventListener('input', function() {
    checkRegisterFields();
});

document.getElementById('showRegister').addEventListener('click', function() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('registerSection').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', function() {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('registerSection').style.display = 'none';
});

function checkLoginFields() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    document.getElementById('loginSubmit').disabled = !login || !senha;
}

function checkRegisterFields() {
    var newLogin = document.getElementById('newLogin').value;
    var newSenha = document.getElementById('newSenha').value;
    var adminSenha = document.getElementById('adminSenha').value;
    document.getElementById('registerSubmit').disabled = !newLogin || !newSenha || !adminSenha;
}


checkLoginFields();
checkRegisterFields();
