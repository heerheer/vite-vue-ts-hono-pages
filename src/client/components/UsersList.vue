<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

const users = ref<User[]>([]);
const isLoading = ref(false);
const error = ref<string | null>(null);

const fetchUsers = async () => {
  isLoading.value = true;
  error.value = null;
  
  try {
    const response = await fetch('/api/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    users.value = await response.json();
  } catch (err) {
    console.error('Error fetching users:', err);
    error.value = err instanceof Error ? err.message : 'Failed to load users';
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchUsers();
});
</script>

<template>
  <div class="users-container">
    <h2 class="text-2xl font-bold mb-4">Users - with D1</h2>
    
    <button 
      @click="fetchUsers" 
      class="btn mb-4 flex items-center gap-2"
      :disabled="isLoading"
    >
      <iconify-icon 
        v-if="isLoading" 
        icon="svg-spinners:90-ring" 
        width="20" 
        height="20"
      ></iconify-icon>
      <iconify-icon 
        v-else 
        icon="material-symbols:refresh" 
        width="20" 
        height="20"
      ></iconify-icon>
      Refresh Users
    </button>

    <div v-if="error" class="alert alert-error mb-4">
      <span>{{ error }}</span>
    </div>

    <div v-if="isLoading && users.length === 0" class="text-center py-8">
      <span class="loading loading-spinner loading-lg"></span>
      <p class="mt-2">Loading users...</p>
    </div>

    <div v-else-if="users.length === 0" class="text-center py-8 text-gray-500">
      No users found
    </div>

    <div v-else class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" class="hover">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ new Date(user.created_at).toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
@reference '@/style.css';
.users-container {
  @apply p-4 bg-base-100 rounded-lg shadow-md;
  max-width: 1000px;
  margin: 2rem auto;
}

table {
  @apply w-full border-collapse;
}

th, td {
  @apply p-3 border-b border-base-200;
}

th {
  @apply bg-base-200 text-left;
}

tr:hover {
  @apply bg-base-200 opacity-50;
}

.alert {
  @apply p-4 rounded-lg;
}

.alert-error {
  @apply bg-error text-error-content;
}
</style>
