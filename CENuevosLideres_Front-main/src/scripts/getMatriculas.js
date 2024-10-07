const url = 'https://project-nuevos-lideres-2.onrender.com';

const getAllRegister = async () => {
    try {
        const token = localStorage.getItem('authToken');

        console.log('Token recuperado:', token);

        const response = await axios.get(`${url}/register/allRegister`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const matriculas = response.data.data
        populateTable(matriculas);
    } catch (error) {
        alert(error.message);
    }
};

const populateTable = (matriculas) => {
    const tableBody = document.querySelector('table tbody');
    tableBody.innerHTML = '';

    matriculas.forEach((matricula, index) => {
        const row = document.createElement('tr');

        const cellIndex = document.createElement('th');
        cellIndex.scope = 'row';
        cellIndex.textContent = index + 1;
        row.appendChild(cellIndex);

        const cellDocument = document.createElement('td');
        cellDocument.textContent = matricula.nameAlumn;
        row.appendChild(cellDocument);

        const cellName = document.createElement('td');
        cellName.textContent = matricula.docNum;
        row.appendChild(cellName);


        const cellInfo = document.createElement('td');
        const infoButton = document.createElement('button');
        infoButton.className = 'btn btn-info';
        infoButton.textContent = 'INFO';
        cellInfo.appendChild(infoButton);
        row.appendChild(cellInfo);

        tableBody.appendChild(row);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    getAllRegister();
});