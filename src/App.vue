<template>
	<div id="app">
		<h1>基础</h1>
		<my-select :options="options"></my-select>

		<h1>禁用</h1>
		<my-select :options="options" disabled></my-select>

		<h1>可编辑</h1>
		<my-select :options="options" editable></my-select>

		<h1>支持多选</h1>
		<my-select :options="options" multiple></my-select>
	</div>
</template>

<script>
import MySelect from './components/MySelect';

export default {
    name: 'app',
    data() {
        return {
            options: [{
                text: 'a',
                value: 'a',
            }, {
                text: 'b',
                value: 'b',
            }, {
                text: 'c',
                value: 'c',
            }, {
                text: 'd',
                value: 'd',
            }, {
                text: 'e',
                value: 'e',
            }, {
                text: 'f',
                value: 'f',
            }, {
                text: 'g',
                value: 'g',
            }, {
                text: 'h',
                value: 'h',
            }, {
                text: 'i',
                value: 'i',
            }, {
                text: 'j',
                value: 'j',
            }],
        };
    },
    components: {
        MySelect,
    },
};
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
