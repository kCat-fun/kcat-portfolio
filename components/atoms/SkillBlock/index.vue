<script>
export default {
    name: 'SkillBlock',
    props: {
        level: {
            type: Number,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    },
}
</script>

<template>
    <div>
        <div class="skill-block">
            <div class="level">
                <span v-for="i in level" :key="i">★</span>
                <span v-for="j in 5-level" :key="j">☆</span>
            </div>
            <div class="text">
                <p>{{ text }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import './index.css';
</style>