// Classe do carousel da página
class Carousel {
  // Propriedades estáticas para armazenar os itens e o índice atual
  static items = [];
  static currentIndex = 0;
  static autoPlayInterval = null;

  constructor(imageUrl, title, linkUrl) {
    this.imageUrl = imageUrl;
    this.title = title;
    this.linkUrl = linkUrl;
  }

  // Método estático para iniciar o carrossel com uma lista de itens
  static Start(items) {
    Carousel.items = items;
    Carousel.createIndicators();
    Carousel.showSlide(0);
    Carousel.startAutoPlay();

    // Adiciona um evento de clique no carrossel
    document.getElementById("carousel").addEventListener("click", () => {
      // Verifica se o slide atual é o primeiro (índice 0)
      if (Carousel.currentIndex === 0) {
        window.location.href = Carousel.items[0].linkUrl;
      }
    });
  }

  // Cria os indicadores (bolinhas) do carrossel
  static createIndicators() {
    const indicatorsContainer = document.getElementById("indicators");
    indicatorsContainer.innerHTML = "";

    Carousel.items.forEach((item, index) => {
      const indicator = document.createElement("div");
      indicator.className = "indicator";
      indicator.onclick = () => Carousel.goToSlide(index);
      indicatorsContainer.appendChild(indicator);
    });
  }

  // Exibe um slide específico
  static showSlide(index) {
    if (Carousel.items.length === 0) return;

    Carousel.currentIndex = index;
    const currentItem = Carousel.items[Carousel.currentIndex];
    const carouselDiv = document.getElementById("carousel");
    const titleDiv = document.getElementById("carousel-title");

    carouselDiv.style.backgroundImage = `url(img/${currentItem.imageUrl})`;
    titleDiv.innerHTML = `<a href="${currentItem.linkUrl}">${currentItem.title}</a>`;

    Carousel.updateIndicators();
  }

  // Atualiza os indicadores para mostrar qual está ativo
  static updateIndicators() {
    const indicators = document.querySelectorAll(".indicator");
    indicators.forEach((indicator, index) => {
      if (index === Carousel.currentIndex) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  // Avança para o próximo slide
  static next() {
    const nextIndex = (Carousel.currentIndex + 1) % Carousel.items.length;
    Carousel.showSlide(nextIndex);
  }

  // Volta para o slide anterior
  static previous() {
    const prevIndex =
      (Carousel.currentIndex - 1 + Carousel.items.length) %
      Carousel.items.length;
    Carousel.showSlide(prevIndex);
  }

  // Vai para um slide específico
  static goToSlide(index) {
    Carousel.showSlide(index);
    Carousel.resetAutoPlay();
  }

  // Inicia a reprodução automática
  static startAutoPlay() {
    Carousel.autoPlayInterval = setInterval(Carousel.next, 5000);
  }

  // Reseta o timer de reprodução automática
  static resetAutoPlay() {
    clearInterval(Carousel.autoPlayInterval);
    Carousel.startAutoPlay();
  }
}

// Função para mudar o slide manualmente (chamada pelos botões)
function mudarSlide(direction) {
  if (direction === 1) {
    Carousel.next();
  } else {
    Carousel.previous();
  }
  Carousel.resetAutoPlay();
}
