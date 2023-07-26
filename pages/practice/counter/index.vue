<template>
    <div>
        <div id="number-area">Count : {{ counter }}</div>
        <div id="button-area">
            <myButton color="#888" hoverColor="#444" class="button" @click="increment">increment</myButton>
            <myButton color="#888" hoverColor="#444" class="button" @click="decrement">decrement</myButton>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Counter',

    data: () => {
        return {
            counter: 0,
        }
    },
    methods: {
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        }
    }
}
</script>

<style src="./index.css" scoped></style>