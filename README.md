# NFC Caelline — Cartão de visitas digital

Site de apresentação profissional da **Caelline Costa Jardim**, fisioterapeuta neurofuncional pediátrica em Minaçu (GO). O projeto foi pensado para abrir facilmente no celular ao aproximar um cartão NFC: uma apresentação acolhedora, informações profissionais e formas diretas de contato.

## O que você encontra

- Apresentação e fotografia profissional;
- Formações, abordagem terapêutica e áreas de atuação;
- Acesso direto ao WhatsApp, Instagram e e-mail;
- Layout responsivo, navegação por teclado e opção de reduzir animações;
- Metadados para buscadores e compartilhamento.

## Tecnologias

- **React + TypeScript** para a interface e seus componentes;
- **Vite** para desenvolvimento e compilação;
- **CSS** para o design responsivo;
- **GitHub Actions + GitHub Pages** para publicação.

Não há backend nem banco de dados: o cartão é um site estático, e isso torna a manutenção e a hospedagem mais simples.

## Como executar

Requisitos: Node.js 22 ou superior e npm.

```bash
npm install
npm run dev
```

Abra o endereço local exibido pelo Vite. Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Organização

```text
src/
  App.tsx         # Conteúdo e componentes da página
  main.tsx        # Inicialização do React
  styles.css      # Estilos e responsividade
assets/           # Logomarca e fotografia originais
index.html        # HTML de entrada e metadados
vite.config.ts    # Configuração do Vite para GitHub Pages
.github/workflows/deploy.yml # Publicação automatizada
```

## Publicação

O workflow em `.github/workflows/deploy.yml` publica a branch `main` no GitHub Pages. Em **Settings → Pages**, configure **Source: GitHub Actions**. O build também copia a pasta `assets/` para o site publicado.

Endereço esperado após ativar o Pages: https://joao-gabriel-g-costa.github.io/NFC_CAELLINE/

Grave esse endereço no cartão NFC. A gravação é feita em um aplicativo compatível com seu cartão.

## Personalização

Os textos e links de contato ficam em `src/App.tsx`; cores, tipografia e espaçamentos em `src/styles.css`. As imagens originais estão em `assets/`. Confirme com a profissional qualquer alteração em credenciais, serviços e dados de contato antes de publicar.

## Observações

- Este projeto não coleta dados pessoais e não contém formulários.
- O conteúdo descreve informações profissionais e não substitui avaliação individual.
- As imagens e a identidade visual pertencem aos respectivos titulares; sua presença no repositório não significa licença de reutilização.
