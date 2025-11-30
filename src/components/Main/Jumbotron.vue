<script>
export default {
  name: "Jumbotron",
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

<!-- <template>
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
</template> -->
<template>
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
            <!-- Layout column su mobile, row su md+ con immagine più larga -->
            <div
              class="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
            >
              <div class="images flex-shrink-0 flex-md-7">
                <img :src="file.image" class="img-fluid rounded" alt="..." />
              </div>
              <div class="description text-center text-md-start flex-md-5">
                <h2 class="title">{{ file.title }}</h2>
                <p class="content">{{ file.content }}</p>
                <button class="btn btn-primary mt-2">Scopri Ora</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Carousel controls -->
        <button
          class="carousel-control-prev carousel-button"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next carousel-button"
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
</template>

<style scoped>
.images img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
}

.description {
  padding: 1rem;
}

.description .title {
  font-size: 1.5rem;
}

.description .content {
  font-size: 0.95rem;
}

@media (min-width: 768px) {
  #carouselExampleAutoplaying {
    position: relative;
    min-height: 450px; /* altezza fissa */
    display: block; /* niente flex */
    align-items: unset; /* rimuove flex centering */
  }

  .carousel-inner {
    height: 450px; /* mantiene il carosello stabile */
  }

  .description .title {
    font-size: 2rem;
  }
  .description .content {
    font-size: 1rem;
  }

  .carousel-button {
    position: absolute;
    top: 225px; /* metà di 450px */
    transform: translateY(0);
  }
}

@media (min-width: 1200px) {
  .description .title {
    font-size: 2.5rem;
  }
  .description .content {
    font-size: 1.1rem;
  }
}

@media (max-width: 767px) {
  .images img {
    max-height: 250px;
  }
}

/* Il carosello diventa il punto di riferimento fisso */
#carouselExampleAutoplaying {
  position: relative;
  min-height: 450px; /* altezza fissa del carosello */
  display: flex;
  align-items: center;
}

/* Carousel controls responsivi */
.carousel-button {
  position: absolute !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  width: auto;
  z-index: 20;
}

/* Desktop: frecce ai lati esterni */
@media (min-width: 768px) {
  .carousel-control-prev.carousel-button {
    left: -60px;
  }
  .carousel-control-next.carousel-button {
    right: -60px;
  }
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 35px;
    height: 35px;
    filter: brightness(0);
    color: black;
  }
}

/* Mobile: frecce rientrano nei bordi del carosello */
@media (max-width: 767px) {
  .carousel-control-prev.carousel-button {
    left: 10px;
  }
  .carousel-control-next.carousel-button {
    right: 10px;
  }
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 25px;
    height: 25px;
    filter: brightness(0);
    color: black;
  }
}
</style>
