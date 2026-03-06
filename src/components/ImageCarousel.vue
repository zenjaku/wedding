<script setup lang="ts">
import { DEFAULT_IMAGES } from '@/props/DefaultValues';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const slides = DEFAULT_IMAGES;
const totalSlides = slides.length
const currentIndex = ref(Math.floor(totalSlides / 2))
const touchStartX = ref<number | null>(null)
const AUTO_PLAY_MS = 5000
const SWIPE_THRESHOLD = 40

let intervalId: ReturnType<typeof setInterval> | null = null

function normalizeIndex(index: number) {
    return (index + totalSlides) % totalSlides
}

function setCurrentIndex(index: number, resetAutoplay = false) {
    currentIndex.value = normalizeIndex(index)
    if (resetAutoplay) startAutoplay()
}

function shiftSlide(step: number) {
    setCurrentIndex(currentIndex.value + step)
}

function goToSlide(index: number) {
    setCurrentIndex(index, true)
}

function startAutoplay() {
    stopAutoplay()
    intervalId = setInterval(() => shiftSlide(1), AUTO_PLAY_MS)
}

function stopAutoplay() {
    if (!intervalId) return
    clearInterval(intervalId)
    intervalId = null
}

function handleTouchStart(event: TouchEvent) {
    touchStartX.value = event.changedTouches[0]?.clientX ?? null
}

function handleTouchEnd(event: TouchEvent) {
    if (touchStartX.value === null) return
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.value
    const deltaX = endX - touchStartX.value

    if (Math.abs(deltaX) >= SWIPE_THRESHOLD) {
        shiftSlide(deltaX < 0 ? 1 : -1)
        startAutoplay()
    }

    touchStartX.value = null
}

function getRelativePosition(index: number) {
    let diff = index - currentIndex.value
    if (diff > totalSlides / 2) diff -= totalSlides
    if (diff < -totalSlides / 2) diff += totalSlides
    return diff
}

function getSlideStyle(index: number) {
    const relative = getRelativePosition(index)

    const baseStyle = {
        opacity: relative === 0 ? 1 : relative === 1 || relative === -1 ? 0.72 : 0,
        filter: relative === 0 ? 'blur(0px)' : relative === 1 || relative === -1 ? 'blur(3.4px)' : 'blur(6px)',
        zIndex: relative === 0 ? 3 : relative === 1 || relative === -1 ? 2 : 1
    }

    if (relative === 0) return { ...baseStyle, transform: 'translateX(-50%) scale(1)' }
    if (relative === -1) return { ...baseStyle, transform: 'translateX(calc(-50% - 52%)) scale(0.9)' }
    if (relative === 1) return { ...baseStyle, transform: 'translateX(calc(-50% + 52%)) scale(0.9)' }

    return {
        ...baseStyle,
        transform: `translateX(calc(-50% + ${relative < 0 ? '-135%' : '135%'})) scale(0.82)`
    }
}

onMounted(startAutoplay)
onBeforeUnmount(stopAutoplay)

</script>

<template>
    <section id="carousel">
        <h2>Our Love Story</h2>
        <div class="carousel-container" @touchstart.passive="handleTouchStart" @touchend.passive="handleTouchEnd">
            <div v-for="(slide, index) in slides" :key="slide.image_url" class="carousel-img-container"
                :class="{ active: index === currentIndex }" :style="getSlideStyle(index)">
                <img :src="slide.image_url" :alt="slide.title">
            </div>
            <div class="carousel-indicator">
                <button v-for="(slide, index) in slides" :key="`${slide.image_url}-indicator`" type="button"
                    :aria-label="`Go to slide ${index + 1}`" :class="{ active: index === currentIndex }"
                    @click="goToSlide(index)" />
            </div>
        </div>
    </section>
</template>
