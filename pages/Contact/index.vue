<template>
    <div class="Contact">
        <PageTitle>Contact</PageTitle>
        <div class="inquiry-forms">
            <div class="forms">
                <p>ニックネーム</p>
                <input type="text" id="fromContactName">
            </div>
            <div class="forms">
                <p>メールアドレス</p>
                <input type="email" id="fromContactMail">
            </div>
            <div class="forms">
                <p>お問い合わせ内容</p>
                <textarea id="fromContactContent"></textarea>
            </div>
            <div class="button" :onclick=send>送信</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    mounted() {
        emailjs.init('2ormQroNbdWEwc7sv');
    },
    methods: {
        send() {
            // console.log("send");
            const name = document.getElementById("fromContactName");
            const mail = document.getElementById("fromContactMail");
            const msg = document.getElementById("fromContactContent");

            const check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
            // console.log(name.value, mail.value, msg.value);

            if (name.value == "") {
                alert("※お名前、またはニックネームを入力してください。");
            }
            else if (mail.value == "") {
                alert("※メールアドレスを入力してください。");
            }
            else if (!check.test(mail.value)) {
                alert("※メールアドレスを正しく入力してください。");
            }
            else if (msg.value == "") {
                alert("※お問い合わせ内容を入力してください。");
            }
            else {
                emailjs.send("service_iszh0a2", "template_n7sgqbu", {
                    user_name: name.value,
                    user_email: mail.value,
                    message: msg.value,
                });
                alert("お問い合わせを受け付けました。");
                name.value = "";
                mail.value = "";
                msg.value = "";
            }
        }
    }
}
</script>

<style scoped>
@import "./index.css"; 
</style>