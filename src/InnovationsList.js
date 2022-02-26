let InnovationsList = [
    {
      name: "EasyGold",
      mainImg: "./assets/img/gold.png",
      Category: "Application web",
      OImg: [
        {img:"./assets/img/gold.png", id:1}, 
        {img:"assets/img/goldcap.jpeg"}, 
      ],
      rate:[1,2,3,4],
      Desc: "Incontournable dans la gestion de l'or au sein du marché, l'application est convoitée par les plus grandes firmes.",
      service:[
        {title:"Automatisation des barêmes"},
        {title:"Vente et achat d'or des clients enrégistrés et temporaires"},
        {title:"Dépôt et rétrait des clients enrégistrés et temporaires"},
        {title:"Change de money automatisé"},
        {title:"Transfert d'argent automatisé"},
        {title:"Utilisable sur PC et mobile"},
      ],
      isActive:true,
    },
    {
      name: "E-Transfert",
      mainImg: "./assets/img/logo2.png",
      Category: "Application web",
      OImg: [
        {img:"./assets/img/logo2.png", id:1}, 
        {img:"assets/img/etcap.jpeg"},
        {img:"assets/img/etcap1.jpeg"}, 
      ],
      rate:[1,2,3,4,5],
      Desc: "Incontournable dans la gestion des transferts des élèves vers d'autres établissement, E-transfert facilite et automatise les tâches du ministère de l'éducation.",
      service:[
        {title:"Automatisation des transferts"},
        {title:"Gestion des établissements"},
        {title:"Gestion des élèves"},
        {title:"Automatisation des décisions"},
        {title:"Automatisation des tâches inter-departement"},
        {title:"Utilisable sur PC et mobile"},
      ],
      isActive:false,
    },
    
    {
      name: "Iot app",
      mainImg: "//via.placeholder.com/500x400/31f?text=1",
      Category: "IOT",
      OImg: ["assets/img/portfolio/portfolio-1.jpg", "assets/img/portfolio/portfolio-2.jpg", "assets/img/portfolio/portfolio-3.jpg"],
      rate:4,
      Desc: "Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.",
    },
  ];
  
  export function getInnovations() {
    return InnovationsList;
  }
  export function getInnovationItem (name){
    return InnovationsList.find(item => item.name === name);
  }