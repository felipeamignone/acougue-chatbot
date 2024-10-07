const productsData = [
  {
    id: 1,
    title: "Picanha",
    category: "Carne Bovina",
    description: "Picanha maturada",
    price: 49.9,
    urlImage:
      "https://lh3.googleusercontent.com/proxy/JEllSwPXuxIwYp_lDAgZH4JIs6SiS4Zqfmr9R7mR0wHqyd_RLsEIUg5RgsWYW9uviOKPy6YT2HOwI0H4QKIIlYfdw7mMJ45k2auFj4mJwnwsUDO1ASO9H4k",
  },
  {
    id: 2,
    title: "Alcatra",
    category: "Carne Bovina",
    description: "Alcatra fresca",
    price: 39.9,
    urlImage:
      "https://lh3.googleusercontent.com/proxy/JEllSwPXuxIwYp_lDAgZH4JIs6SiS4Zqfmr9R7mR0wHqyd_RLsEIUg5RgsWYW9uviOKPy6YT2HOwI0H4QKIIlYfdw7mMJ45k2auFj4mJwnwsUDO1ASO9H4k",
  },
  {
    id: 3,
    title: "Fraldinha",
    category: "Carne Bovina",
    description: "Fraldinha para churrasco",
    price: 34.9,
    urlImage:
      "https://lh3.googleusercontent.com/proxy/JEllSwPXuxIwYp_lDAgZH4JIs6SiS4Zqfmr9R7mR0wHqyd_RLsEIUg5RgsWYW9uviOKPy6YT2HOwI0H4QKIIlYfdw7mMJ45k2auFj4mJwnwsUDO1ASO9H4k",
  },
  {
    id: 4,
    title: "Maminha",
    category: "Carne Bovina",
    description: "Maminha macia",
    price: 42.9,
    urlImage:
      "https://lh3.googleusercontent.com/proxy/JEllSwPXuxIwYp_lDAgZH4JIs6SiS4Zqfmr9R7mR0wHqyd_RLsEIUg5RgsWYW9uviOKPy6YT2HOwI0H4QKIIlYfdw7mMJ45k2auFj4mJwnwsUDO1ASO9H4k",
  },
  {
    id: 5,
    title: "Contrafilé",
    category: "Carne Bovina",
    description: "Contrafilé saboroso",
    price: 44.9,
    urlImage:
      "https://lh3.googleusercontent.com/proxy/JEllSwPXuxIwYp_lDAgZH4JIs6SiS4Zqfmr9R7mR0wHqyd_RLsEIUg5RgsWYW9uviOKPy6YT2HOwI0H4QKIIlYfdw7mMJ45k2auFj4mJwnwsUDO1ASO9H4k",
  },
  {
    id: 6,
    title: "Costela Suína",
    category: "Carne Suína",
    description: "Costela suína para assar",
    price: 29.9,
    urlImage:
      "https://lh3.googleusercontent.com/proxy/JEllSwPXuxIwYp_lDAgZH4JIs6SiS4Zqfmr9R7mR0wHqyd_RLsEIUg5RgsWYW9uviOKPy6YT2HOwI0H4QKIIlYfdw7mMJ45k2auFj4mJwnwsUDO1ASO9H4k",
  },
  {
    id: 7,
    title: "Lombo",
    category: "Carne Suína",
    description: "Lombo suculento",
    price: 34.9,
    urlImage:
      "https://lh3.googleusercontent.com/proxy/JEllSwPXuxIwYp_lDAgZH4JIs6SiS4Zqfmr9R7mR0wHqyd_RLsEIUg5RgsWYW9uviOKPy6YT2HOwI0H4QKIIlYfdw7mMJ45k2auFj4mJwnwsUDO1ASO9H4k",
  },
  {
    id: 8,
    title: "Linguiça",
    category: "Carne Suína",
    description: "Linguiça temperada",
    price: 24.9,
    urlImage:
      "https://lh3.googleusercontent.com/proxy/JEllSwPXuxIwYp_lDAgZH4JIs6SiS4Zqfmr9R7mR0wHqyd_RLsEIUg5RgsWYW9uviOKPy6YT2HOwI0H4QKIIlYfdw7mMJ45k2auFj4mJwnwsUDO1ASO9H4k",
  },
  {
    id: 9,
    title: "Pernil",
    category: "Carne Suína",
    description: "Pernil suculento",
    price: 32.9,
    urlImage:
      "https://lh3.googleusercontent.com/proxy/JEllSwPXuxIwYp_lDAgZH4JIs6SiS4Zqfmr9R7mR0wHqyd_RLsEIUg5RgsWYW9uviOKPy6YT2HOwI0H4QKIIlYfdw7mMJ45k2auFj4mJwnwsUDO1ASO9H4k",
  },
  {
    id: 10,
    title: "Bacon",
    category: "Carne Suína",
    description: "Bacon crocante",
    price: 34.9,
    urlImage:
      "https://lh3.googleusercontent.com/proxy/JEllSwPXuxIwYp_lDAgZH4JIs6SiS4Zqfmr9R7mR0wHqyd_RLsEIUg5RgsWYW9uviOKPy6YT2HOwI0H4QKIIlYfdw7mMJ45k2auFj4mJwnwsUDO1ASO9H4k",
  },
  {
    id: 11,
    title: "Frango Inteiro",
    category: "Aves",
    description: "Frango inteiro fresco",
    price: 15.9,
    urlImage:
      "https://lh3.googleusercontent.com/proxy/JEllSwPXuxIwYp_lDAgZH4JIs6SiS4Zqfmr9R7mR0wHqyd_RLsEIUg5RgsWYW9uviOKPy6YT2HOwI0H4QKIIlYfdw7mMJ45k2auFj4mJwnwsUDO1ASO9H4k",
  },
  {
    id: 12,
    title: "Coxa e Sobrecoxa",
    category: "Aves",
    description: "Coxa e sobrecoxa",
    price: 17.9,
    urlImage:
      "https://lh3.googleusercontent.com/proxy/JEllSwPXuxIwYp_lDAgZH4JIs6SiS4Zqfmr9R7mR0wHqyd_RLsEIUg5RgsWYW9uviOKPy6YT2HOwI0H4QKIIlYfdw7mMJ45k2auFj4mJwnwsUDO1ASO9H4k",
  },
  {
    id: 13,
    title: "Peito de Frango",
    category: "Aves",
    description: "Peito de frango sem osso",
    price: 22.9,
    urlImage:
      "https://lh3.googleusercontent.com/proxy/JEllSwPXuxIwYp_lDAgZH4JIs6SiS4Zqfmr9R7mR0wHqyd_RLsEIUg5RgsWYW9uviOKPy6YT2HOwI0H4QKIIlYfdw7mMJ45k2auFj4mJwnwsUDO1ASO9H4k",
  },
  {
    id: 14,
    title: "Asa de Frango",
    category: "Aves",
    description: "Asa de frango para grelhar",
    price: 18.9,
    urlImage:
      "https://lh3.googleusercontent.com/proxy/JEllSwPXuxIwYp_lDAgZH4JIs6SiS4Zqfmr9R7mR0wHqyd_RLsEIUg5RgsWYW9uviOKPy6YT2HOwI0H4QKIIlYfdw7mMJ45k2auFj4mJwnwsUDO1ASO9H4k",
  },
  {
    id: 15,
    title: "Espetinho",
    category: "Especialidades",
    description: "Espetinho diversos sabores",
    price: 5.0,
    urlImage:
      "https://lh3.googleusercontent.com/proxy/JEllSwPXuxIwYp_lDAgZH4JIs6SiS4Zqfmr9R7mR0wHqyd_RLsEIUg5RgsWYW9uviOKPy6YT2HOwI0H4QKIIlYfdw7mMJ45k2auFj4mJwnwsUDO1ASO9H4k",
  },
  {
    id: 16,
    title: "Hambúrguer Artesanal",
    category: "Especialidades",
    description: "Hambúrguer artesanal",
    price: 7.0,
    urlImage:
      "https://lh3.googleusercontent.com/proxy/JEllSwPXuxIwYp_lDAgZH4JIs6SiS4Zqfmr9R7mR0wHqyd_RLsEIUg5RgsWYW9uviOKPy6YT2HOwI0H4QKIIlYfdw7mMJ45k2auFj4mJwnwsUDO1ASO9H4k",
  },
  {
    id: 18,
    title: "Farofa Temperada",
    category: "Acompanhamentos",
    description: "Farofa temperada crocante",
    price: 15.0,
    urlImage:
      "https://lh3.googleusercontent.com/proxy/JEllSwPXuxIwYp_lDAgZH4JIs6SiS4Zqfmr9R7mR0wHqyd_RLsEIUg5RgsWYW9uviOKPy6YT2HOwI0H4QKIIlYfdw7mMJ45k2auFj4mJwnwsUDO1ASO9H4k",
  },
  {
    id: 19,
    title: "Vinagrete",
    category: "Acompanhamentos",
    description: "Vinagrete caseiro",
    price: 10.0,
    urlImage:
      "https://lh3.googleusercontent.com/proxy/JEllSwPXuxIwYp_lDAgZH4JIs6SiS4Zqfmr9R7mR0wHqyd_RLsEIUg5RgsWYW9uviOKPy6YT2HOwI0H4QKIIlYfdw7mMJ45k2auFj4mJwnwsUDO1ASO9H4k",
  },
];

export default productsData;
