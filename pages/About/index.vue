<template>
    <div class="About">
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
            <IntroBox :title=jsonProfile.circle.title class="introBoxs">
                <p><span v-for="(item, index) in jsonProfile.circle.circles.position2.cirlces">
                    <a :href="item.twitter" class="link" target="_blank">{{ item.name }}</a>
                    <span v-if="index != jsonProfile.circle.circles.position2.cirlces.length-1">, </span>
                </span></p>
            </IntroBox>
            <IntroBox :title=jsonProfile.skills.title class="introBoxs">
                <SkillsIntro />
                <SkillCategory v-for="item in jsonProfile.skills.content" :key="item.category" :category="item.category" :skills="item.skills" />
            </IntroBox>
            <IntroBox :title=jsonProfile.license.title class="introBoxs">
                <ul v-for="item in jsonProfile.license.text">
                    <li>
                        <p v-html="item" />
                    </li>
                </ul>
            </IntroBox>
            <IntroBox :title=jsonProfile.work.title class="introBoxs">
                <ul v-for="item in jsonProfile.work.text">
                    <li>
                        <p v-html="item.date" />
                        <p><a :href="item.url" v-html="item.name" class="link"></a></p>
                    </li>
                </ul>
            </IntroBox>
        </div>
    </div>
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

<style scoped>
@import "./index.css"; 
</style>
