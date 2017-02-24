<template>
<div class="select">

	<div class="select-input" @click="handleSelect">
		<input class="select-input__box" type="text" placeholder="请选择" :readonly="!editable" :value="selected" />
		<i class="select-input__caret"></i>
	</div>

	<div class="select-content" v-show="visible">
		<ul class="select-content__wrapper">
			<li class="select-content__item" v-for="option in options" :value="option.value" @click.stop="selectItem(option.value)">
				<span>{{option.text}}</span>
			</li>
		</ul>
	</div>

</div>
</template>

<script type="text/javascript">

export default {
	name: 'my-select',
	props: {
		options: {
			type: Array,
			required: true
	},
		editable: {
			type: Boolean,
			default: false
		},
	},
	data() {
		return {
			visible: false,
			selected: ''
		}
	},

	methods: {
		handleSelect() {
			this.visible = !this.visible;
		},
		selectItem(value) {
			this.selected = value;
			this.visible = false;
		}
	},

	created() {
		document.addEventListener('click', (e) => 　{
			if (!this.$el.contains(e.target)) {
				this.visible = false;
			}
		});
	}
};
</script>

<style lang="less">
.select {
    width: 240px;
    position: relative;

    &-input {
        width: 100%;
        position: relative;

        &__box {
            width: 100%;
            height: 25px;
            border-radius: 5px;
            box-shadow: none;
            text-indent: 1em;
            font-size: 14px;
            cursor: pointer;
        }

        &__caret {}
    }

    &-content {

        &__wrapper {
            list-style: none;
            padding: 6px 0;
            margin: 0;
            box-sizing: border-box;
            border: 1px solid #d1dbe5;
            border-radius: 2px;
            background-color: #fff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
            box-sizing: border-box;
            margin: 5px 0;
        }

        &__item {
            font-size: 14px;
            position: relative;
            white-space: nowrap;
            text-overflow: ellipsis;
            text-align: left;
            text-indent: 0.5em;
            color: rgb(72, 87, 106);
            height: 36px;
            line-height: 1.5;
            box-sizing: border-box;
            cursor: pointer;
            padding: 8px 10px;
            overflow: hidden;
            &:hover {
                background: #EAEAEA;
            }
        }
    }
}
</style>
