<script>
export default {
  name: "Main",
  data() {
    return {
      files: [
        {
          id: 1,
          title: "Scoperta di una nuova specie di papera di gomma",
          content: "Scoperta di una nuova specie di papera di gomma.",
          tags: "geo, tech",
          author: "Diana Rossi",
          published: "2023-02-11",
          image: "/img/rubber-duck.jpg",
        },
        {
          id: 2,
          title: "Esplorando le profondità marine: il mistero degli abissi",
          content: "Esplorando le profondità marine: il mistero degli abissi",
          tags: "viaggi, geo",
          author: "Fabio Mari",
          published: "2023-03-14",
          image: "/img/deep-sea.jpg",
        },
        {
          id: 3,
          title: "Viaggio culinario: alla ricerca dei sapori perduti",
          content:
            "Esplorazione di tradizioni culinarie dimenticate e la ricerca di sapori autentici.",
          tags: "cucina",
          author: "Marta Bianchi",
          published: "2023-04-20",
          image: "/img/kitchen-food.jpg",
        },
        {
          id: 4,
          title: "Arte moderna: oltre i confini convenzionali",
          content:
            "Un'analisi delle tendenze e delle sfide nell'arte contemporanea, con interviste a artisti emergenti.",
          tags: "arte, tech",
          author: "Gabriele Neri",
          published: "2023-05-29",
          image: "/img/modern-art.jpg",
        },
      ],
    };
  },
};
</script>

<template>
  <main class="layout" style="height: 500px">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div
              class="carousel-item"
              v-for="(file, index) in files"
              :key="file.id"
              :class="{ active: index === 0 }"
            >
              <div class="description">
                <h2>{{ file.title }}</h2>
                <p>{{ file.content }}</p>
              </div>
              <div class="images">
                <img :src="file.image" class="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
