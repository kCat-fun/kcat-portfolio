<template>
    <div>
        <blockquote class="twitter-tweet">
            <a :href=getTweetLink()></a>
        </blockquote>
    </div>
</template>

<script>
export default {
    name: 'TweetBox',
    props: {
        id: {
            type: String,
            required: true,
        }
    },
    mounted() {
        window.twttr.widgets.load();
        setTimeout(() => {
            let tweetScript = document.createElement('script')
            tweetScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
            tweetScript.setAttribute('async', 'true')
            document.head.appendChild(tweetScript)
        }, 100);
    },
    methods : {
        getTweetLink() {
            return "https://twitter.com/kcat_fun/status/" + this.id;
        }
    },
}
</script>

<style src="./index.css" scoped></style>