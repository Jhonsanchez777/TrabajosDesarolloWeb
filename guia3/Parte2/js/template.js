const template = document.getElementById("card-template");
  const contenedor = document.getElementById("contenedor");

  const productos = [
    {titulo: "Laptop", desc: "16GB RAM", price:400000,img:"imagenes/laptop.jpg"},
    {titulo: "Mouse", desc: "Inalámbrico",price:40000,img:"imagenes/mouse.jpg"},
    {titulo: "Teclado", desc: "Inalámbrico RGB",price:200000,img:"imagenes/teclado.jpg"},
    {titulo: "Audifonos", desc: "PROCESADOR: intel core i9-145444",price:60000,img:"imagenes/Audifonos.jpg"},
    {titulo: "Monitor", desc: "Inalámbrico",price:1400000,img:"imagenes/monitor.jpg"},

  ];

  productos.forEach(p => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = p.titulo;
    clon.querySelector(".desc").textContent = p.desc;
    clon.querySelector(".price").textContent =p.price;
    clon.querySelector("img").src =p.img;
    clon.querySelector("img").alt =p.titulo;
    clon.querySelector(".price").textContent = p.price.toLocaleString("Es-co");

    contenedor.appendChild(clon);
  });
