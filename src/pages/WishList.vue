<script>
export default {
  name: "WishList",
};
</script>

<template>
  <h2>Wishlist</h2>
  <!-- 
  <div v-if="wishlist.length === 0" class="empty">
      <p>La tua wishlist è vuota 😢</p>
    </div> 
    <div v-else class="wishlist-items">
      <div
        class="wishlist-item"
        v-for="item in wishlist"
        :key="item.id"
      >
        <img :src="item.image" alt="item.title" />
        <div class="info">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <button @click="removeFromWishlist(item.id)">Rimuovi</button>
        </div>
      </div>
    </div>
  </div>
    -->
</template>

<style scoped>
.wishlist-container {
  padding: 2rem;
}

.empty {
  font-size: 1.2rem;
  color: #555;
}

.wishlist-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.wishlist-item {
  display: flex;
  gap: 1rem;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
}

.wishlist-item img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
}

.wishlist-item .info h3 {
  margin: 0;
  font-size: 1.2rem;
}

.wishlist-item .info p {
  margin: 0.5rem 0;
  color: #666;
}

.wishlist-item .info button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
}

.wishlist-item .info button:hover {
  background-color: #d32f2f;
}
</style>
