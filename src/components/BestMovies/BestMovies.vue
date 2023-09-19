<template>
  <div id="bestMovies">
    <h1>Melhores Filmes lançados em 2023</h1>
    <div class="movies">
      <div :key="index" v-for="(movie, index) in movies" class="card">
        <img
          :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
          alt="Poster"
          class="card-image"
        />
        <div>
          <h2 class="card-title">{{ movie.title }}</h2>
          <p>{{ movie.release_date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { API_Key } from "../../config/key";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      movies: [],
      apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${API_Key}&primary_release_year=2023&region=BR&language=pt-BR'`,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped lang="scss">
.movies {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
.card {
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 10px;
  max-width: 400px;

  &-image {
    width: 150px;
    height: auto;
    margin-right: 20px;
  }

  &-title {
    font-size: 1.2em;
    font-weight: bold;
  }
}
</style>
