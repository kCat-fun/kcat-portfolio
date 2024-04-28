<template>
    <div id="counter">
        <div id="number-area">Count : {{ counter }}</div>
        <div id="button-area">
            <Button color="#888" hoverColor="#444" class="button" @click="increment">increment</Button>
            <Button color="#888" hoverColor="#444" class="button" @click="decrement">decrement</Button>
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

<style scoped>
@import "./index.css"; 
</style>