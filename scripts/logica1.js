document.addEventListener('DOMContentLoaded', function() {
    const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const editModal = document.getElementById('editModal');
    const editForm = document.getElementById('editForm');
    const editLogin = document.getElementById('editLogin');
    const editSenha = document.getElementById('editSenha');
    const closeModal = document.getElementsByClassName('close')[0];
    
    function loadUsers() {
        userTable.innerHTML = '';
        for (let i = 0; i < localStorage.length; i++) {
            const login = localStorage.key(i);
            const row = userTable.insertRow();
            const cellLogin = row.insertCell(0);
            const cellActions = row.insertCell(1);
            cellLogin.textContent = login;
            cellActions.innerHTML = `
                <button onclick="editUser('${login}')">Editar</button>
                <button onclick="deleteUser('${login}')">Remover</button>
            `;
        }
    }


    window.editUser = function(login) {
        editLogin.value = login;
        editSenha.value = '';
        editModal.style.display = 'flex';
    };

    window.deleteUser = function(login) {
        if (confirm(`Tem certeza que deseja remover o usuário ${login}?`)) {
            localStorage.removeItem(login);
            loadUsers();
        }
    };


    editForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newSenha = editSenha.value;
        if (newSenha) {
            localStorage.setItem(editLogin.value, newSenha);
            editModal.style.display = 'none';
            loadUsers();
        } else {
            alert('A nova senha não pode estar vazia.');
        }
    });


    closeModal.onclick = function() {
        editModal.style.display = 'none';
    };


    window.onclick = function(event) {
        if (event.target == editModal) {
            editModal.style.display = 'none';
        }
    };

    loadUsers();
});
