<template>
	<div id="app">
		<my-select :options="options"></my-select>
	</div>
</template>

<script>
	import MySelect from './components/MySelect';

	export default {
		name: 'app',
		data() {
			return {
				options: [{ text: 'a', value: 'a' }, { text: 'b', value: 'b' }, { text: 'c', value: 'c' }]
			}

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