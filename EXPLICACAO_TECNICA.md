# Como funciona o site da High Design — Explicação para não-programadores

---

## 1. A ideia geral

Imagine que o site é como uma **revista impressa digital**. Alguém precisou:

1. Escrever o conteúdo (textos, imagens, cores)
2. Diagramar as páginas (como cada bloco aparece na tela)
3. Imprimir e distribuir (publicar online para qualquer pessoa acessar)

No mundo do desenvolvimento web, cada uma dessas etapas tem uma ferramenta. Neste projeto:

| Etapa | Ferramenta usada |
|---|---|
| Escrever o conteúdo | Arquivos de texto com código (TypeScript) |
| Diagramar as páginas | Next.js + Tailwind CSS |
| Publicar online | Vercel |

---

## 2. O código — o que é e onde fica

### O que é código, afinal?

Código é texto. Não é nada mágico — são arquivos de texto com instruções que o computador entende. Por exemplo, uma instrução pode dizer "coloque este título em cor areia, com fonte grande, centralizado na tela".

### As linguagens usadas

O site usa três "idiomas" principais:

- **TypeScript** — a linguagem principal. É usada para dizer *o que existe* na página (um botão, um título, um formulário) e *como ele se comporta* (quando clicado, o menu abre).
- **Tailwind CSS** — linguagem de estilos. Define *como as coisas aparecem*: cor, tamanho, espaçamento, posição.
- **HTML** (gerado automaticamente) — a linguagem que o navegador (Chrome, Safari etc.) realmente lê. O Next.js converte o TypeScript em HTML antes de entregar ao visitante.

---

## 3. O repositório — a pasta compartilhada na nuvem

### O que é um repositório?

Um repositório (ou "repo") é como uma **pasta compartilhada com histórico completo de todas as alterações já feitas**. Ele fica hospedado no GitHub, uma plataforma gratuita para guardar código.

Repositório deste projeto: **`danielmschaves/high-design-website`** no GitHub.

### Por que usar um repositório?

- **Histórico**: toda alteração feita no código fica registrada, com data e descrição. Se algo quebrar, é possível voltar para uma versão anterior.
- **Colaboração**: várias pessoas podem trabalhar ao mesmo tempo sem sobrescrever o trabalho umas das outras.
- **Gatilho de publicação**: quando o código é enviado para o repositório, a Vercel detecta automaticamente e publica o site atualizado.

### Como funciona na prática

```
Desenvolvedor edita arquivos no computador
        ↓
Salva as alterações localmente (commit)
        ↓
Envia para o repositório no GitHub (push)
        ↓
Vercel detecta a chegada do novo código
        ↓
Site atualizado em produção em ~1 minuto
```

---

## 4. A estrutura do projeto — o que está em cada pasta

O projeto está organizado assim (simplificado):

```
high-design-website/
│
├── app/                    ← As páginas do site
│   ├── page.tsx            ← Página principal (landing page)
│   ├── blog/               ← Seção de blog
│   └── privacidade/        ← Política de privacidade
│
├── components/             ← Os "blocos" reutilizáveis da página
│   ├── sections/           ← Cada seção da landing page
│   │   ├── Navbar.tsx      ← Barra de navegação
│   │   ├── Hero.tsx        ← Bloco inicial (título + chamada)
│   │   ├── Sobre.tsx       ← Seção "Sobre a HD"
│   │   ├── Diferenciais.tsx← Os 8 diferenciais
│   │   ├── Esteira.tsx     ← Serviços (accordion expansível)
│   │   ├── Portfolio.tsx   ← Galeria de projetos
│   │   ├── Depoimentos.tsx ← Depoimentos de clientes
│   │   ├── Contato.tsx     ← Formulário de contato
│   │   └── Footer.tsx      ← Rodapé
│   └── ui/                 ← Botões flutuantes (WhatsApp, voltar ao topo)
│
├── lib/
│   └── blog.ts             ← Todo o conteúdo dos artigos do blog
│
├── public/
│   └── assets/             ← Imagens, logos e fontes
│
└── styles/
    └── tokens.css          ← As cores e fontes oficiais da marca
```

### Como a página principal é montada

A página principal (`app/page.tsx`) funciona como um **roteiro de montagem**. Ela simplesmente lista os blocos na ordem certa:

```
Hero → Sobre → Diferenciais → Para quem é → Serviços → Como funciona → Portfólio → Blog → Depoimentos → Contato
```

Cada bloco é um arquivo separado dentro de `components/sections/`. Isso facilita editar uma seção sem mexer nas outras.

---

## 5. O sistema de design — cores e fontes no código

Um site profissional tem cores e fontes definidas em um lugar único, para garantir consistência. Aqui esse lugar é o arquivo `styles/tokens.css`.

É como uma **tabela de estilos oficiais da marca**:

```css
--color-brand-primary:   #786169   /* Taupe (cor principal) */
--color-brand-secondary: #e8e1d7   /* Cream (fundo claro) */
--color-brand-accent:    #ba9e84   /* Sand (destaques) */
--color-brand-dark:      #3d3035   /* Deep Taupe (fundos escuros) */
--color-brand-white:     #f5f2ee   /* Warm White (texto claro) */
```

Quando uma cor precisa mudar, altera-se apenas nesse arquivo e **o site inteiro atualiza automaticamente**.

As fontes seguem a mesma lógica:
- **Century Gothic Pro** — usada em títulos e texto corrido
- **JetBrains Mono** — usada apenas em etiquetas técnicas, capítulos e rodapé

---

## 6. O blog — como os artigos funcionam

O blog **não usa um banco de dados** nem um sistema como WordPress. Todo o conteúdo dos artigos está escrito diretamente no arquivo `lib/blog.ts`, em formato estruturado (chamado "tipado").

Cada artigo tem campos definidos:

```
título, slug (endereço URL), data, categoria, resumo, capa, autor, conteúdo
```

O "conteúdo" é uma lista de blocos: parágrafo, subtítulo, lista, destaque, passo-a-passo, etc.

**Vantagem**: simples, sem dependências externas, tudo versionado junto com o código.
**Limitação**: para publicar um novo artigo, é necessário editar esse arquivo e republicar o site.

---

## 7. O formulário de contato

O formulário da seção "Contato" usa um serviço externo chamado **Formspree**. Quando alguém preenche e envia o formulário:

1. O navegador envia os dados para os servidores do Formspree
2. O Formspree encaminha o e-mail para `contato@highdesign.arq.br`
3. A pessoa vê uma mensagem de confirmação na tela

Isso evita a necessidade de configurar um servidor de e-mail próprio. A integração é feita por um código de 8 caracteres (`NEXT_PUBLIC_FORMSPREE_ID`) nas configurações do projeto.

---

## 8. A Vercel — onde o site vive na internet

### O que é a Vercel?

A Vercel é uma **plataforma de hospedagem especializada para sites Next.js**. É onde o site "mora" na internet, disponível 24h por dia para qualquer visitante.

### Como funciona a publicação automática

A Vercel está conectada diretamente ao repositório do GitHub. O fluxo é:

```
Código novo chega ao GitHub (branch "main")
              ↓
Vercel detecta automaticamente em segundos
              ↓
Executa o processo de "build" (monta o site)
              ↓
Site publicado em produção (~60 segundos)
```

Não é necessário fazer nada manualmente. A publicação é **automática a cada atualização de código**.

### O que a Vercel faz nos bastidores

Quando recebe o código, a Vercel:

1. Instala todas as dependências do projeto (`npm install`)
2. Compila o TypeScript para JavaScript que o navegador entende
3. Gera as páginas estáticas (HTML prontos para serem entregues rapidamente)
4. Distribui os arquivos em servidores espalhados pelo mundo (CDN), garantindo velocidade de carregamento para visitantes de qualquer lugar

### Configurações secretas (variáveis de ambiente)

Informações sensíveis — como o número do WhatsApp, o código do Formspree e URLs de redes sociais — **não ficam no código**. Elas ficam guardadas no painel da Vercel como "variáveis de ambiente":

| Variável | O que controla |
|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Botão flutuante do WhatsApp |
| `NEXT_PUBLIC_FORMSPREE_ID` | Formulário de contato |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Link do Instagram no rodapé |
| `NEXT_PUBLIC_LINKEDIN_URL` | Link do LinkedIn no rodapé |

Isso significa que essas informações podem ser atualizadas no painel da Vercel sem precisar alterar o código.

---

## 9. Desenvolvimento local com Docker

Antes de publicar qualquer alteração, o desenvolvedor testa o site no próprio computador. Para isso, usa-se o **Docker** — uma ferramenta que cria um ambiente isolado (como uma "máquina virtual pequena") onde o site roda localmente.

- O site local fica acessível em `http://localhost:3000` (só no computador do desenvolvedor)
- Alterações nos arquivos aparecem instantaneamente no navegador
- Nada do que é feito localmente afeta o site publicado até que o código seja enviado para o GitHub

---

## 10. Resumo visual do fluxo completo

```
┌─────────────────────────────────────────────────────────┐
│                   DESENVOLVIMENTO                        │
│                                                         │
│  Desenvolvedor edita arquivos  →  Testa em localhost    │
│          (VS Code, etc.)              :3000             │
└───────────────────────┬─────────────────────────────────┘
                        │ git push
                        ▼
┌─────────────────────────────────────────────────────────┐
│                    REPOSITÓRIO                           │
│                                                         │
│              GitHub — danielmschaves/                   │
│              high-design-website                        │
│        (histórico completo de todas as versões)         │
└───────────────────────┬─────────────────────────────────┘
                        │ deploy automático
                        ▼
┌─────────────────────────────────────────────────────────┐
│                    PRODUÇÃO                              │
│                                                         │
│   Vercel compila e publica o site em ~60 segundos       │
│   Visitantes de qualquer lugar acessam o site           │
│   (highdesign.arq.br ou domínio configurado)            │
└─────────────────────────────────────────────────────────┘
```

---

## 11. O que precisa ser feito para o site estar 100% funcional

Itens pendentes de configuração na Vercel:

- [ ] Adicionar número do WhatsApp (`NEXT_PUBLIC_WHATSAPP_NUMBER`)
- [ ] Adicionar código do Formspree (`NEXT_PUBLIC_FORMSPREE_ID`) — necessário para o formulário enviar e-mails de verdade
- [ ] Adicionar link do Instagram (`NEXT_PUBLIC_INSTAGRAM_URL`)
- [ ] Adicionar link do LinkedIn (`NEXT_PUBLIC_LINKEDIN_URL`)
- [ ] Substituir depoimentos de exemplo por depoimentos reais de clientes

---

*Documento gerado em junho de 2026 para uso interno da High Design Arquitetura.*
