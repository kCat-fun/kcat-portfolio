<template>
    <div class="pc">
        <a :href="url" class="BlogBox" target="_blank">
            <div class="image">
                <img :src="imgPath" :alt="altStr" />
            </div>
            <div class="content">
                <Date>{{ date }}</Date>
                <div class="title">
                    {{ titleStr }}
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
                    {{ titleStr }}
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
        window.addEventListener('resize', this.textTrim);
        setTimeout(() => {
            this.textTrim()
        }, 100);
    },
    methods: {
        textTrim() {
            this.titleTrim();
            this.synopsisTrim();
        },
        titleTrim() {
            // 表示したい行数
            var row = 1;

            // 文末に追加したい文字
            var clamp = '…';

            //CSSプロパティを取得
            const sample = document.getElementsByClassName("title");

            var style = window.getComputedStyle(sample[0]);
            var fontsize = parseFloat(style.fontSize); //font-sizeを取得
            let width = parseFloat(style.width); //widthを取得
            var letterSpacing = parseFloat(style.letterSpacing); //letter-spacingを取得

            width = window.innerWidth < 800 ? 300 * 0.95 : width;

            // 収まる文字数を計算
            var wordCount = Math.floor(width / fontsize) * row;

            // letter-spacingも含めて計算する場合
            // var wordCount = Math.floor(width / (fontsize + letterSpacing)) * row;

            // 文字数を超えたら
            if (this.titleStr.length > wordCount) {
                const str = this.title.substr(0, (wordCount - 1)); //1文字削る
                this.titleStr = str + clamp; //文末にテキストを足す
            }
            else {
                const str = this.title.substr(0, (wordCount - 1)); //1文字削る
                this.titleStr = str + (this.titleStr.length >= this.title.length ? '' : clamp);
            }
        },
        synopsisTrim() {
            // 表示したい行数
            var row = 3;

            // 文末に追加したい文字
            var clamp = '...';

            //CSSプロパティを取得
            const sample = document.getElementsByClassName("synopsis");
            var style = window.getComputedStyle(sample[0]);
            var fontsize = parseFloat(style.fontSize); //font-sizeを取得
            let width = parseFloat(style.width); //widthを取得
            var letterSpacing = parseFloat(style.letterSpacing); //letter-spacingを取得

            width = window.innerWidth < 800 ? 300 * 0.95 : width;

            // 収まる文字数を計算
            var wordCount = Math.floor(width / fontsize) * row;



            // letter-spacingも含めて計算する場合
            // var wordCount = Math.floor(width / (fontsize + letterSpacing)) * row;

            // 文字数を超えたら
            if (this.synopsis.length > wordCount) {
                const str = this.synopsis.substr(0, (wordCount - 2)); //1文字削る
                this.synopsisStr = str + clamp; //文末にテキストを足す
            }
            else {
                const str = this.synopsis.substr(0, (wordCount - 2)); //1文字削る
                this.synopsisStr = str + (this.synopsisStr.length >= this.synopsis.length ? '' : clamp);
            }
        },
    }
}
</script>

<style scoped>
@import "./index.css";
</style>