// Array para armazenar os carros selecionados para comparação (máximo 2).
let carsToCompare = [];

class Car {
  // O construtor foi corrigido para não modificar um array global.
  constructor(
    nome,
    preco,
    alturaCacamba,
    alturaVeiculo,
    alturaSolo,
    capacidadeCarga,
    motor,
    potencia,
    volumeCacamba,
    roda,
    image
  ) {
    this.nome = nome;
    this.preco = preco;
    this.alturaCacamba = alturaCacamba;
    this.alturaVeiculo = alturaVeiculo;
    this.alturaSolo = alturaSolo;
    this.capacidadeCarga = capacidadeCarga;
    this.motor = motor;
    this.potencia = potencia;
    this.volumeCacamba = volumeCacamba;
    this.roda = roda;
    this.image = image;
  }
}

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, car) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].nome === car.nome) return i;
  }
  return -1;
}

function SetCarToCompare(element, car) {
  if (car instanceof Car) {
    if (element.checked) {
      // Verifica se já existem 2 carros selecionados.
      if (carsToCompare.length === 2) {
        alert("Você só pode selecionar 2 carros para comparar.");
        element.checked = false; // Desmarca o checkbox.
        return;
      }
      // Adiciona o carro ao array de comparação.
      carsToCompare.push(car);
    } else {
      // Remove o carro do array de comparação.
      const index = GetCarArrPosition(carsToCompare, car);
      if (index > -1) {
        carsToCompare.splice(index, 1);
      }
    }
  } else {
    throw "You need set a Car Class";
  }
}

function ShowCompare() {
  // Verifica se exatamente 2 carros foram selecionados.
  if (carsToCompare.length !== 2) {
    alert("Precisa marcar 2 carros para apresentar a comparação");
    return;
  }

  UpdateCompareTable();
  // Exibe a div de comparação.
  document.getElementById("compare").style.display = "block";
}

function HideCompare() {
  // Oculta a div de comparação.
  document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
  // Itera pelos 2 carros selecionados para preencher a tabela.
  for (let i = 0; i < carsToCompare.length; i++) {
    const car = carsToCompare[i];

    // Formata o preço para o padrão brasileiro.
    const formattedPrice = car.preco.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    document.getElementById(
      `compare_image_${i}`
    ).innerHTML = `<img src="${car.image}" width="150" />`;
    document.getElementById(`compare_modelo_${i}`).innerText = car.nome;
    document.getElementById(`compare_alturacacamba_${i}`).innerText =
      car.alturaCacamba;
    document.getElementById(`compare_alturaveiculo_${i}`).innerText =
      car.alturaVeiculo;
    document.getElementById(`compare_alturasolo_${i}`).innerText =
      car.alturaSolo;
    document.getElementById(`compare_capacidadecarga_${i}`).innerText =
      car.capacidadeCarga;
    document.getElementById(`compare_motor_${i}`).innerText = car.motor;
    document.getElementById(`compare_potencia_${i}`).innerText = car.potencia;
    document.getElementById(`compare_volumecacamba_${i}`).innerText =
      car.volumeCacamba;
    document.getElementById(`compare_roda_${i}`).innerText = car.roda;
    document.getElementById(`compare_preco_${i}`).innerText = formattedPrice;
  }
}
