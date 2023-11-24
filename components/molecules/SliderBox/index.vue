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
            slideCount: 0,
        }
    },
    methods: {
        onClickRight() {
            // console.log("click");
            this.slideCount = this.slideCount + 1 <= (screen.width / 440 + 4) ? this.slideCount + 1 : this.slideCount;
            document.getElementById(this.idName).scroll({
                left: this.slideCount * 440,
                top: 0,
                behavior: "smooth",
            });
        },
        onClickLeft() {
            // console.log("click");
            this.slideCount = this.slideCount - 1 >= 0 ? this.slideCount - 1 : this.slideCount;
            document.getElementById(this.idName).scroll({
                left: this.slideCount * 440,
                top: 0,
                behavior: "smooth",
            });
        },
    }
}
</script>

<style src="./index.css" scoped></style>