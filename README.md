# Dra. Juliana Peron

Site editorial de harmonização facial baseado no template Premium Vendas V4. Inclui hero com retrato claro no desktop, narrativa da profissional, galeria de sete comparativos com ampliação, navegação responsiva e favicon JP.

## Desenvolvimento

Requer Node.js 20.9 ou superior.

```sh
npm ci
npm run dev
```

## Verificação

```sh
npm run typecheck
npm run build
```

## Vercel

Importe este repositório na Vercel. O framework é Next.js e o diretório raiz é `./`. Os comandos padrão de instalação e build são suficientes. Não há variáveis de ambiente obrigatórias.

## Conteúdo

Os dados e links ficam em `data/site.ts`. O botão de agendamento usa o endereço `va.link/sdyjz`, mostrado na referência do perfil fornecida pelo solicitante. Como não foi informado endereço completo ou telefone direto, o site mostra apenas Barra da Tijuca, Rio de Janeiro, e usa o link público de agendamento. As fotos e os registros de resultados enviados pelo solicitante são exibidos sem retoque visual. Os resultados são individuais.

O favicon está em `app/icon.svg`. A imagem de compartilhamento enviada pelo solicitante está em `public/og-juliana-peron.jpg`, otimizada para 1200 × 630 pixels.
