// Cada "tela" é um Web Component puro (HTMLElement), sem framework nenhum.
// O ion-route do index.html aponta para a tag <page-home> definida aqui.
class PageHome extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header translucent="true">
        <ion-toolbar color="primary">
          <ion-title>Início</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content class="ion-padding">
        <h2>Tela Inicial</h2>
        <p>
          Use os botões abaixo para navegar entre as telas. A partir da
          próxima tela, teste também o <strong>gesto de voltar</strong> e o
          <strong>botão de voltar do Android</strong> — eles vão te trazer de
          volta sem nenhum código adicional.
        </p>

        <app-counter></app-counter>

        <ion-button expand="block" id="btn-perfil">
          Ir para Perfil
        </ion-button>

        <ion-button expand="block" color="secondary" id="btn-config">
          Ir para Configurações
        </ion-button>
      </ion-content>
    `;

    // Navegação por botão: pega a instância do <ion-router> e manda "empilhar"
    // (push) uma nova rota. É exatamente essa chamada que o Ionic também usa
    // internamente quando o back-button ou o gesto do Android disparam uma
    // navegação "para trás" (só que na direção contrária).
    this.querySelector('#btn-perfil')
      .addEventListener('click', () => {
        document.querySelector('ion-router').push('/perfil');
      });

    this.querySelector('#btn-config')
      .addEventListener('click', () => {
        document.querySelector('ion-router').push('/config');
      });
  }
}

customElements.define('page-home', PageHome);
