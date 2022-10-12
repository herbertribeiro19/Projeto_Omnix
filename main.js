const init = () => {
    const inputCep = document.querySelector('input[type="cep"]');
    const submitButton = document.querySelector('#sub');
    console.log(inputCep, sub);

    if(submitButton){
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            fetch('http://viacep.com.br/ws/${cep}/json/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cep: inputCep.value,
                })
            }).then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data)
            })
        })
    }
}

window.onload = init;
