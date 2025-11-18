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
              :class="{ active: index === 0, 'd-flex': index === activeIndex }"
            >
              <div class="d-flex align-items-center justify-content-between">
                <div class="description">
                  <h2 class="primary">{{ file.title }}</h2>
                  <p>{{ file.content }}</p>
                </div>
                <div class="images">
                  <img :src="file.image" class="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon dark"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon secondary"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  margin-top: 1rem;
}

.carousel-item {
  height: 100%;
}

.carousel-item .d-flex {
  gap: 2rem;
}

.description {
  flex: 1;
  color: #333;
  padding: 1rem;
}

.images {
  flex: 1;
}

.images img {
  border-radius: 12px;
  object-fit: cover;
  height: 400px;
}

#carouselExampleAutoplaying {
  position: relative;
}

/* Sposta le frecce verso l’esterno */
#carouselExampleAutoplaying .carousel-control-prev,
#carouselExampleAutoplaying .carousel-control-next {
  width: auto; /* Non occupano spazio e non coprono il contenuto */
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
}

/* Sposta verso sinistra/destra */
#carouselExampleAutoplaying .carousel-control-prev {
  left: -60px; /* puoi aumentare/diminuire per uscire di più */
}

#carouselExampleAutoplaying .carousel-control-next {
  right: -60px;
}

/* opzionale: rendi le frecce più visibili */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(0.5) brightness(1.5); /* scurisce o schiarisce */
}

@media (max-width: 768px) {
  #carouselExampleAutoplaying .carousel-control-prev {
    left: -30px;
  }
  #carouselExampleAutoplaying .carousel-control-next {
    right: -30px;
  }
}
</style>
