<template>
    <div>
        <div class="movie">
            <video id="video" poster="@/assets/movie/kcat-icon-animation.mp4" webkit-playsinline playsinline muted autoplay loop>
                <!--
                poster：動画ファイルが利用できない環境で代替表示される画像
                webkit-playsinline：iOS 9までのSafari用インライン再生指定
                playsinline：iOS 10以降のSafari用インライン再生指定
                muted：音声をミュートさせる
                autoplay：動画を自動再生させる
                loop：動画をループさせる
                controls：コントロールバーを表示する
                -->
                <source src="@/assets/movie/kcat-icon-animation.mp4" type="video/mp4">
                <p>動画を再生できる環境ではありません。</p>
            </video>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeTopMovie',
}
</script>

<style scoped>
@import "./index.css";
</style>