<template>
    <div>
        <p>- <slot></slot> -</p>
        <div class="links-area" :style="getBreakPoint">
            <div>
                <ImgLink class="links-box" link="https://x.com/kcat_fun/"
                    style="border-radius: 50%; background-color: black;">
                    <div style="width: 60%; height: 60%; margin: auto;">
                        <img style="filter: invert(100%); width: 100%;" src="~/assets/image/x-twitter-brands-solid.svg"
                            alt="youtube">
                    </div>
                </ImgLink>
            </div>
            <div>
                <ImgLink class="links-box" link="https://www.youtube.com/@kCat-fun/featured">
                    <div style="width: 100%; height: 100%; margin: auto;">
                        <img style="width: 100%;" src="~/assets/image/youtube-brands-solid.svg"
                            alt="youtube">
                    </div>
                </ImgLink>
            </div>
            <div>
                <ImgLink class="links-box" link="https://github.com/kCat-fun">
                    <div style="width: 100%; height: 100%; margin: auto;">
                        <img style="width: 100%;" src="~/assets/image/github-brands-solid.svg"
                            alt="youtube">
                    </div>
                </ImgLink>
            </div>
        </div>
    </div>
</template>

<script>
import Constant from '~/assets/script/constant.json';

export default {
    name: 'MyLinks',
    computed: {
        getBreakPoint() {
            return {
                '--breakPoint': Constant.BREAK_POINT,
            }
        }
    }
}
</script>

<style scoped>
@import "./index.css";
</style>