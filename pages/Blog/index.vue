<template>
    <main>
        <PageTitle>Blog</PageTitle>
        <div>
            <BlogBox v-for="blog in blogs" :tags='blog.tag' :date="blog.data" :synopsis="blog.context" :imgPath="blog.image" :url="blog.url" altStr="ブログ画像">{{blog.title}}</BlogBox>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Blog',
    data: () => {
        return {
            blogs: "",
        }
    },
    mounted() {
        this.doGet();
    },
    methods: {
        doGet() {
            fetch(
                "https://script.google.com/macros/s/AKfycby_JXJTBTazUIr9x-eqKeN2_Ws1vUnsBd_mA1MxNtxXUzfaSaFCPALQlkyvjYfw_BtFMw/exec?p=Blog", {
                method: "GET",
                header: {
                    "Content-Type": "application/json",
                    "charset": "UTF-8",
                },
            }
            ).then((response) => response.json())
                .then((data) => {
                    this.blogs = data;
                    console.log(this.blogs);
                    for (let i = 0; i < this.blogs.length; i++) {
                        this.blogs[i].tag = this.blogs[i].tag.split(',');
                    }
                });
        }
    }
}
</script>

<style src="./index.css" scoped></style>