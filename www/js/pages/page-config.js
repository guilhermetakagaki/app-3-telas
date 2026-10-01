class PageConfig extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header translucent="true">
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button default-href="/perfil"></ion-back-button>
          </ion-buttons>
          <ion-title>Configurações</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content class="ion-padding">
        <h2>Tela de Configurações</h2>
        <p>
          Esta é a terceira tela da pilha (Home → Perfil → Configurações).
          O botão de voltar aqui te leva de volta para o Perfil, e de lá,
          de novo para a Home — em qualquer um dos dois casos, tanto faz se
          você usa o botão da tela ou o gesto/botão do Android.
        </p>

        <app-counter></app-counter>

        <ion-button expand="block" color="medium" id="btn-home-root">
          Voltar direto para a Home (limpando a pilha)
        </ion-button>
      </ion-content>
    `;

    // Exemplo de navegação com direção "root": em vez de empilhar mais uma
    // tela, isso substitui toda a pilha de navegação pela Home. Útil para
    // fluxos como "finalizar cadastro" ou "logout".
    this.querySelector('#btn-home-root')
      .addEventListener('click', () => {
        document.querySelector('ion-router').push('/', 'root');
      });
  }
}

customElements.define('page-config', PageConfig);
