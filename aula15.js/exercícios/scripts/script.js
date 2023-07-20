const numeroPrompt = Number(prompt('Digite um número:'));
const numeroTitle = document.querySelector ("#numeroTitle");
const texto = document.getElementById('texto');

numeroTitle.innerHTML = numeroPrompt;
texto.innerHTML += `<p>Raiz quadrada: ${numeroPrompt ** 0.5}</p>`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numeroPrompt)}</p>`
texto.innerHTML += `<p>${numeroPrompt} é inteiro? = ${Number.isInteger(numeroPrompt)}</p>`
texto.innerHTML += `<p>Arredondando o número para baixo ${Math.floor(numeroPrompt)}</p>`
texto.innerHTML += `<p>Arredondando o número para cima ${Math.ceil(numeroPrompt)}</p>`
texto.innerHTML += `<p>Com duas casas decimas: ${numeroPrompt.toFixed(2)}</p>`;

