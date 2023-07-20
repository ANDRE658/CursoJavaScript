const numeroPrompt = Number(prompt('Digite um número:'));
const numeroTitle = document.querySelector ("#numeroTitle");
const texto = document.getElementById('texto');

numeroTitle.innerHTML = numeroPrompt;
texto.innerHTML = `<p>Raiz quadrada: ${numeroPrompt ** 0.5}</p>
<p>${numeroPrompt} é inteiro? = ${Number.isInteger(numeroPrompt)}</p>
<p>É NaN: ${Number.isNaN(numeroPrompt)}</p>
<p>Arredondando o número para baixo ${Math.floor(numeroPrompt)}</p>
<p>Arredondando o número para cima ${Math.ceil(numeroPrompt)}</p>
<p>Com duas casas decimas: ${numeroPrompt.toFixed(2)}</p>`;

