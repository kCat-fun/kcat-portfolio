<template>
    <main>
        <PageTitle>About</PageTitle>
        <div id="profile">
            <div id="imgBox">
                <img src="~/assets/image/iconCircle.png" alt="">
            </div>
            <IntroBox title="Profile" class="IntroBox">
                <ul id="profileList">
                    <li class="profileItmes" v-for="item in jsonProfile.infomations">
                        <div class="key">{{ item.key }}</div>：
                        <div class="value">
                            <p v-html="item.value" />
                        </div>
                    </li>
                </ul>
            </IntroBox>
        </div>
        <div class="introductions">
            <IntroBox :title=jsonProfile.comment.title class="introBoxs">
                <p v-html="jsonProfile.comment.text" />
            </IntroBox>
            <IntroBox :title=jsonProfile.circle.title class="introBoxs">
                <p v-html="jsonProfile.circle.text" />
            </IntroBox>
            <IntroBox :title=jsonProfile.skills.title class="introBoxs">
                <ul v-for="item in jsonProfile.skills.text">
                    <li>
                        <p v-html="item" />
                    </li>
                </ul>
            </IntroBox>
            <IntroBox :title=jsonProfile.license.title class="introBoxs">
                <ul v-for="item in jsonProfile.license.text">
                    <li>
                        <p v-html="item" />
                    </li>
                </ul>
            </IntroBox>
        </div>
    </main>
</template>

<script>
import JsonProfile from './text/profile.json';

export default {
    name: 'About',
    data: () => {
        return {
            jsonProfile: JsonProfile,
        }
    },
}
</script>

<style src="./index.css" scoped></style>