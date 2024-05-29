export function hoverChangeDescription(nameCard, text) {
  var changeDescription = document.querySelector(".hoverChangeDescription");

  document.querySelector(nameCard).addEventListener("mouseover", () => {
    changeDescription.innerHTML = text;
  });

  document.querySelector(nameCard).addEventListener("mouseout", () => {
    changeDescription.innerHTML = `*passe o cursor do mouse no card para ler*`;
  });
}

hoverChangeDescription(
  ".html",
  "<strong>HTML</strong> é uma linguagem de marcação usada para criar e estruturar o conteúdo de páginas web."
);
hoverChangeDescription(
  ".css",
  "<strong>CSS</strong> é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "<strong>JavaScript</strong> é uma linguagem de programação que adiciona interatividade e comportamento dinâmico às páginas web."
);
9;
hoverChangeDescription(
  ".react",
  "<strong>React</strong> é uma biblioteca JavaScript com foco em criar interfaces de usuário com componentes reutilizáveis"
);

hoverChangeDescription(
  ".tailwind",
  "<strong>Tailwind CSS</strong> é um framework utilitário que fornece classes CSS predefinidas, permitindo estilizar diretamente no HTML de forma rápida e eficiente."
);
hoverChangeDescription(
  ".git",
  "<strong>Git</strong> é um sistema de controle de versão que rastreia mudanças no código e facilita a colaboração entre desenvolvedores."
);
hoverChangeDescription(
  ".github",
  "<strong>GitHub</strong> é uma plataforma de hospedagem de código que usa Git, facilitando a colaboração, revisão de código e integração contínua."
);
hoverChangeDescription(
  ".vscode",
  "<strong>Visual Studio Code</strong> é um editor de código-fonte desenvolvido pela Microsoft, conhecido por sua leveza, extensibilidade e suporte a múltiplas linguagens."
);
hoverChangeDescription(
  ".figma",
  "<strong>Figma</strong> é uma ferramenta de design de interface baseada na web que permite colaboração em tempo real para criar protótipos e designs de UI/UX."
);
hoverChangeDescription(
  ".ai",
  "<strong>Adobe Illustrator</strong> é um editor de gráficos vetoriais usado para criar ilustrações, logotipos, ícones e designs gráficos escaláveis."
)