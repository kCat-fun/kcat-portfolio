<script>
export default {
    name: 'SkillCategory',
    props: {
        category: {
            type: String,
            required: true,
        },
        skills: {
            type: Array,
            required: true,
        },
    },
}
</script>

<template>
    <div>
        <div class="skill-category">
            <div class="category">{{ category }}</div>
            <div class="skills">
                <div v-for="item in skills" :key="item.text" class="skill">
                    <SkillBlock :level="Number(item.level)" :text="item.text" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import './index.css';
</style>