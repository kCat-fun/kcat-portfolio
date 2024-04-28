<template>
    <div class="main">
        <PageTitle>Blog</PageTitle>
        <p>※スマホ表示だとデザインが崩れます。すみません。現在修正中...</p>
        <div>
            <BlogBox class="BlogBlox" v-for="blog in blogs" :title="blog.title" :tags='blog.tag' :date="blog.data" :synopsis="blog.context" :imgPath="blog.image" :url="blog.url" altStr="ブログ画像" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Blog',
    data: () => {
        return {
            ctx: useRuntimeConfig().public,
            blogs: "",
        }
    },
    mounted() {
        this.doGet();
    },
    methods: {
        doGet() {
            fetch(
                this.ctx.blogToken, {
                method: "GET",
                header: {
                    "Content-Type": "application/json",
                    "charset": "UTF-8",
                },
            }
            ).then((response) => response.json())
                .then((data) => {
                    this.blogs = data;
                    // console.log(this.blogs);
                    for (let i = 0; i < this.blogs.length; i++) {
                        this.blogs[i].tag = this.blogs[i].tag.split(',');
                    }
                });
        }
    }
}
</script>

<style scoped>
@import "./index.css"; 
</style>