<template>
    <div id="ComponentTest">
        <TriangleButton>◆</TriangleButton>
        <TitleBar class="titleBar"></TitleBar>
        <div class="box-test">
            <Tag>テスト</Tag>
            <Date>2023/09/02</Date>
        </div>
        <ImgLink>
            <div style="width: auto; height: 100px;">
                <img style="width: auto; height:100%;" src="https://cdn.icon-icons.com/icons2/4029/PNG/512/twitter_x_new_logo_x_rounded_icon_256078.png" alt="youtube">
            </div>
        </ImgLink>
        <ImgLink>
            <div style="width: auto; height: 100px;">
                <img style="width: auto; height:100%;" src="https://cdn.icon-icons.com/icons2/622/PNG/512/youtube-play-button_icon-icons.com_57042.png" alt="youtube">
            </div>
        </ImgLink>
        <ImgLink>
            <div style="width: auto; height: 100px;">
                <img style="width: auto; height:100%;" src="https://cdn.icon-icons.com/icons2/936/PNG/512/github-logo_icon-icons.com_73546.png" alt="youtube">
            </div>
        </ImgLink>
        <img src="~/assets/image/testCaseImg.jpg" alt="">
    </div>
</template>

<script>
export default {
    name: 'ComponentTest',
}
</script>

<style scoped>
#ComponentTest {
    width: 100%;
    min-height: 1000px;
}

.titleBar {
    width: 80%;
}

.box-test {
    display: flex;
    margin: 50px;
    width: 350px;
    justify-content: space-around;
    border: 1px solid black;
    padding: 20px 5px;
}
</style>