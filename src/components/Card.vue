files: [ { id: 1, title: "Scoperta di una nuova specie di papera di gomma",
content: "Scoperta di una nuova specie di papera di gomma.", tags: "geo, tech",
author: "Diana Rossi", published: "2023-02-11", image: "/img/rubber-duck.jpg",
}, { id: 2, title: "Esplorando le profondità marine: il mistero degli abissi",
content: "Esplorando le profondità marine: il mistero degli abissi", tags:
"viaggi, geo", author: "Fabio Mari", published: "2023-03-14", image:
"/img/deep-sea.jpg", }, { id: 3, title: "Viaggio culinario: alla ricerca dei
sapori perduti", content: "Esplorazione di tradizioni culinarie dimenticate e la
ricerca di sapori autentici.", tags: "cucina", author: "Marta Bianchi",
published: "2023-04-20", image: "/img/kitchen-food.jpg", }, { id: 4, title:
"Arte moderna: oltre i confini convenzionali", content: "Un'analisi delle
tendenze e delle sfide nell'arte contemporanea, con interviste a artisti
emergenti.", tags: "arte, tech", author: "Gabriele Neri", published:
"2023-05-29", image: "/img/modern-art.jpg", }, ],

<template>
  <div class="container my-5">
    <div class="row g-4">
      <div class="col-md-6 col-lg-3" v-for="file in files" :key="file.id">
        <div class="card h-100 shadow-sm">
          <img
            :src="file.image"
            class="card-img-top"
            :alt="file.title"
            style="object-fit: cover; height: 180px"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ file.title }}</h5>
            <p class="card-text small text-muted mb-1">
              <strong>Autore:</strong> {{ file.author }}
            </p>
            <p class="card-text flex-grow-1">{{ file.content }}</p>

            <div class="mt-auto">
              <p class="mb-1">
                <span
                  class="badge bg-secondary me-1"
                  v-for="tag in parseTags(file.tags)"
                  :key="tag"
                >
                  {{ tag }}
                </span>
              </p>

              <p class="fw-bold mb-2">
                {{ file.price > 0 ? file.price.toFixed(2) + " €" : "Gratis" }}
              </p>

              <button class="btn btn-primary w-100">Acquista</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
