<script setup lang="ts">
import { DEFAULT_DIRECTION, DEFAULT_IMAGES } from '@/props/DefaultValues';

const direction = DEFAULT_DIRECTION[0];
const images = DEFAULT_IMAGES.slice(0, 2);
</script>

<template>
    <section id="direction">
        <div class="direction">
            <div class="direction-img-container">
                <img :src="direction.image_url" :alt="direction.title" loading="lazy" decoding="async">
                <p class="direction-title">{{ direction.title }}</p>
                <a :href="direction.google_map" target="_blank" rel="noopener noreferrer">
                    <button class="direction-btn">
                        <font-awesome-icon :icon="['fas', 'location-dot']" />
                        Get Direction
                    </button>
                </a>
            </div>
            <div v-for="(image, index) in images" :key="image.id"
                :class="['side-image-container', index === 0 ? 'left' : 'right']">
                <img :src="image.image_url" :alt="image.title" loading="lazy" decoding="async">
            </div>
        </div>
    </section>
</template>
