<template>
    <div>
        <p>- <slot></slot> -</p>
        <div class="links-area" :style="getBreakPoint">
            <div>
                <ImgLink class="links-box" link="https://twitter.com/kcat_fun/">
                    <img style="border-radius: 50%;"
                        src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?w=740&t=st=1698399850~exp=1698400450~hmac=3ed0bc10cf2cbaf6500182a17f4e4d48058ff742da8bd902b8fe8edcfabd2324"
                        alt="youtube">
                </ImgLink>
            </div>
            <div>
                <ImgLink class="links-box" link="https://www.youtube.com/@kCat-fun/featured">
                    <img src="https://cdn.icon-icons.com/icons2/622/PNG/512/youtube-play-button_icon-icons.com_57042.png"
                        alt="youtube">
                </ImgLink>
            </div>
            <div>
                <ImgLink class="links-box" link="https://github.com/kCat-fun">
                    <img src="https://cdn.icon-icons.com/icons2/936/PNG/512/github-logo_icon-icons.com_73546.png"
                        alt="youtube">
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