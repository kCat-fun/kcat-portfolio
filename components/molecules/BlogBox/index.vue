<template>
    <div class="pc">
        <a :href="url" class="BlogBox" target="_blank">
            <div class="image">
                <img :src="imgPath" :alt="altStr" />
            </div>
            <div class="content">
                <Date>{{ date }}</Date>
                <div class="title">
                    <p>{{ titleStr }}</p>
                </div>
                <p class="synopsis">
                    {{ synopsisStr }}
                </p>
                <ul>
                    <li id="tags" v-for="tag in tags">
                        <Tag>{{ tag }}</Tag>
                    </li>
                </ul>
            </div>
        </a>
    </div>
    <div class="mobile">
        <a :href="url" class="BlogBox mobile" target="_blank">
            <div class="image">
                <img :src="imgPath" :alt="altStr" />
            </div>
            <div class="content">
                <Date><span class="date">{{ date }}</span></Date>
                <div class="title">
                    <p>{{ titleStr }}</p>
                </div>
                <p class="synopsis">
                    {{ synopsisStr }}
                </p>
                <ul>
                    <li id="tags" v-for="tag in tags">
                        <Tag>{{ tag }}</Tag>
                    </li>
                </ul>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'BlogBox',
    props: {
        title: {
            type: String,
            required: true,
        },
        tags: {
            type: Object,
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
    data: () => {
        return {
            titleStr: "",
            synopsisStr: "",
        }
    },
    mounted() {
        this.titleStr = this.title;
        this.synopsisStr = this.synopsis;
        // window.addEventListener('resize', this.textTrim);
        // setTimeout(() => {
        //     this.textTrim()
        // }, 100);
    },
}
</script>

<style scoped>
@import "./index.css";
</style>