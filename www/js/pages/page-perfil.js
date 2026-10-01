class PagePerfil extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header translucent="true">
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <!--
              ion-back-button: o botão de voltar "na tela". Ele conversa
              direto com a pilha do ion-router-outlet: se existir uma tela
              anterior de verdade (esta é a situação normal aqui, veio da
              Home), ele volta para ela. default-href só é usado se não
              houver histórico (ex: o usuário abriu essa rota direto).
            -->
            <ion-back-button default-href="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Perfil</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content class="ion-padding">
        <h2>Tela de Perfil</h2>
        <p>
          Toque no botão "Voltar" no topo, ou use o gesto/botão de voltar do
          Android: os dois caminhos levam de volta para a Home, porque ambos
          disparam a mesma navegação de histórico por baixo dos panos.
        </p>

        <app-counter></app-counter>

        <ion-button expand="block" id="btn-config">
          Ir para Configurações
        </ion-button>
      </ion-content>
    `;

    this.querySelector('#btn-config')
      .addEventListener('click', () => {
        document.querySelector('ion-router').push('/config');
      });
  }
}

customElements.define('page-perfil', PagePerfil);
