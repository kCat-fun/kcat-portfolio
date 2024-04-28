<template>
    <div>
        <div class="buttons-area">
            <TriangleButton class="trig-button" @click="onClickLeft">◀</TriangleButton>
            <TriangleButton class="trig-button" @click="onClickRight">▶</TriangleButton>
        </div>

        <div class="content-area" :id="idName">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SliderBox',
    props: {
        idName: {
            type: String,
            required: true,
        },
    },
    data: () => {
        return {
            windowWidth: 0,
            slideDist: 440,
            slideCount: 0,
        }
    },
    mounted() {
        window.addEventListener('resize', this.resizeWindow);
        this.windowWidth = window.innerWidth;
        this.slideDist = this.setslideDist();
    },
    methods: {
        setslideDist() {
            return (this.windowWidth < 500 ? this.windowWidth * 0.915 : 440);
        },
        resizeWindow() {
            this.windowWidth = window.innerWidth;
            this.slideDist = this.setslideDist();
        },
        onClickRight() {
            // console.log("click");
            this.slideCount = this.slideCount + 1 <= (10 - Math.floor(this.windowWidth/this.slideDist)) ? this.slideCount + 1 : this.slideCount;
            document.getElementById(this.idName).scroll({
                left: this.slideCount * this.slideDist,
                top: 0,
                behavior: "smooth",
            });
        },
        onClickLeft() {
            // console.log("click");
            this.slideCount = this.slideCount - 1 >= 0 ? this.slideCount - 1 : this.slideCount;
            document.getElementById(this.idName).scroll({
                left: this.slideCount * this.slideDist,
                top: 0,
                behavior: "smooth",
            });
        },
    }
}
</script>

<style scoped>
@import "./index.css";
</style>