<template>
    <a :href="url" class="BlogBox">
        <div class="image">
            <img :src="imgPath" :alt="altStr" />
        </div>
        <div class="content">
            <Date>{{ date }}</Date>
            <div class="title">
                <slot />
            </div>
            <p class="synopsis">
                {{ synopsis }}
            </p>
            <ul>
                <li id="tags" v-for="tag in tags">
                    <Tag>{{ tag }}</Tag>
                </li>
            </ul>
        </div>
    </a>
</template>

<script>
export default {
    name: 'BlogBox',
    props: {
        tags: {
            type: Array,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        synopsis: {
            type: String,
            required: true,
        },
        imgPath: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        altStr: {
            type: String,
            required: false,
        }
    },
}
</script>

<style src="./index.css" scoped />