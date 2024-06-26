const translations = {
  en: {
    "page-title": "MASTER - Applied Meteorology to Regional Weather Systems",
    "menu-produtos": "Numerical Products",
    "submenu-modelos-globais": "Global Models",
    "submenu-modelos-regionais": "Regional Models",
    "submenu-exposicao-sol": "Sun Exposure",
    "submenu-queimadas": "Burns",
    "submenu-comparacao-modelos": "Model Comparison",
    "menu-dados": "Observed Data",
    "submenu-imagens-satelite": "Satellite Images",
    "submenu-radiossondagem": "Radiosonde",
    "submenu-inmet": "INMET - Automatic Stations",
    "submenu-metar": "METAR - Airports",
    "submenu-synop": "SYNOP",
    "menu-laboratorio": "Laboratory",
    "submenu-equipe": "Team",
    "submenu-ensino": "Teaching",
    "submenu-projeto-lba": "LBA Project",
    "submenu-artigos": "Articles",
    "submenu-historico": "History",
    "submenu-solicitar-dados": "Request Data",
    "submenu-fale-conosco": "Contact Us",
    "attention-title": "ATTENTION",
    "attention-text":
      "The meteorological information on this site is automatically generated without quality control carried out visually by a meteorologist. The products are intended for education, research, training, and general dissemination. We are NOT responsible for the use of this information!",
    "footer-title":
      "<b>MASTER</b> | Applied Meteorology to Regional Weather Systems<br /><span>Institute of Astronomy, Geophysics and Atmospheric Sciences<br />University of São Paulo</span>",
    "footer-link-mapa": "Site Map",
    "footer-link-solicitar-dados": "Request Data",
    "footer-link-fale-conosco": "Contact Us",
  },
  es: {
    "page-title":
      "MASTER - Meteorología Aplicada a Sistemas Meteorológicos Regionales",
    "menu-produtos": "Productos Numéricos",
    "submenu-modelos-globais": "Modelos Globales",
    "submenu-modelos-regionais": "Modelos Regionales",
    "submenu-exposicao-sol": "Exposición al Sol",
    "submenu-queimadas": "Quemaduras",
    "submenu-comparacao-modelos": "Comparación de Modelos",
    "menu-dados": "Datos Observados",
    "submenu-imagens-satelite": "Imágenes de Satélite",
    "submenu-radiossondagem": "Radiosondeo",
    "submenu-inmet": "INMET - Estaciones Automáticas",
    "submenu-metar": "METAR - Aeropuertos",
    "submenu-synop": "SYNOP",
    "menu-laboratorio": "Laboratorio",
    "submenu-equipe": "Equipo",
    "submenu-ensino": "Enseñanza",
    "submenu-projeto-lba": "Proyecto LBA",
    "submenu-artigos": "Artículos",
    "submenu-historico": "Historia",
    "submenu-solicitar-dados": "Solicitar Datos",
    "submenu-fale-conosco": "Contáctenos",
    "attention-title": "ATENCIÓN",
    "attention-text":
      "La información meteorológica en este sitio se genera automáticamente sin control de calidad realizado visualmente por un meteorólogo. Los productos están destinados a la educación, la investigación, la capacitación y la difusión general. ¡NO nos responsabilizamos por el uso de esta información!",
    "footer-title":
      "<b>MASTER</b> | Meteorología Aplicada a Sistemas Meteorológicos Regionales<br /><span>Instituto de Astronomía, Geofísica y Ciencias Atmosféricas<br />Universidad de São Paulo</span>",
    "footer-link-mapa": "Mapa del Sitio",
    "footer-link-solicitar-dados": "Solicitar Datos",
    "footer-link-fale-conosco": "Contáctenos",
  },
  pt: {
    "page-title":
      "MASTER - Meteorologia Aplicada a Sistemas de Tempo Regionais",
    "menu-produtos": "Produtos Numéricos",
    "submenu-modelos-globais": "Modelos Globais",
    "submenu-modelos-regionais": "Modelos Regionais",
    "submenu-exposicao-sol": "Exposição ao Sol",
    "submenu-queimadas": "Queimadas",
    "submenu-comparacao-modelos": "Comparação entre Modelos",
    "menu-dados": "Dados Observados",
    "submenu-imagens-satelite": "Imagens de Satélite",
    "submenu-radiossondagem": "Radiossondagem",
    "submenu-inmet": "INMET - Estações Automáticas",
    "submenu-metar": "METAR - Aeroportos",
    "submenu-synop": "SYNOP",
    "menu-laboratorio": "Laboratório",
    "submenu-equipe": "Equipe",
    "submenu-ensino": "Ensino",
    "submenu-projeto-lba": "Projeto LBA",
    "submenu-artigos": "Artigos",
    "submenu-historico": "Histórico",
    "submenu-solicitar-dados": "Solicitar Dados",
    "submenu-fale-conosco": "Fale Conosco",
    "attention-title": "ATENÇÃO",
    "attention-text":
      "As informações meteorológicas contidas neste site são geradas de maneira automática sem controle de qualidade realizado visualmente por um meteorologista. Os produtos têm finalidade de ensino, pesquisa, treinamento e divulgação geral. NÃO nos responsabilizamos pela utilização destas informações!",
    "footer-title":
      "<b>MASTER</b> | Meteorologia Aplicada a Sistemas de Tempo Regionais<br /><span>Instituto de Astronomia, Geofísica e Ciências Atmosféricas<br />Universidade de São Paulo</span>",
    "footer-link-mapa": "Mapa do site",
    "footer-link-solicitar-dados": "Solicitar dados",
    "footer-link-fale-conosco": "Fale conosco",
  },
};

function changeLanguage(language) {
  const elements = document.querySelectorAll("[id]");
  elements.forEach((element) => {
    const key = element.id;
    if (translations[language][key]) {
      element.innerHTML = translations[language][key];
    }
  });
}
