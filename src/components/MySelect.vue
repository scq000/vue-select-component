<template>
<div class="select">

	<div class="select-input" @click="handleSelect">

		<span v-if="multiple" class="select-multiple">
			<span class="label" v-for="item in selectedItems">
				<span class="label__text">{{item.text}}</span>
				<i class="label__clear" @click.stop="clearLabel(item)">X</i>
			</span>
		</span>
		<input class="select-input__box" type="text" :placeholder="isChoose ? '' : placeholder" :readonly="!editable" :value="selected" v-model="multiple ? '' : selected"
		@keypress.enter="visible = false"
		/>
		<i class="select-input__caret"></i>
	</div>

	<div class="select-content" v-show="visible">
		<ul class="select-content__wrapper">
			<li class="select-content__item" v-for="option in options" :value="option.value" @click.stop="selectItem(option)" :class="isSelected(option)">
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
            required: true,
        },
        editable: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        multiple: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            default: '请选择',
        },
    },
    data() {
        return {
            visible: false,
            selected: '',
            selectedItems: [],
        };
    },

    computed: {
        isChoose() {
            return this.multiple && this.selectedItems.length > 0;
        },
    },

    methods: {
        handleSelect() {
            if (!this.disabled) {
                this.visible = !this.visible;
            }
        },
        selectItem(option) {
            if (!this.multiple) {
                this.selected = option.value;
                this.visible = false;
            } else {
                const selectedSet = new Set(this.selectedItems);
                if (selectedSet.has(option)) {
                    selectedSet.delete(option);
                } else {
                    selectedSet.add(option);
                }

                this.selectedItems = [...selectedSet];
                option.selected = !option.selected;
            }
        },
        clearLabel(option) {
            const selectedSet = new Set(this.selectedItems);
            selectedSet.delete(option);
            this.selectedItems = [...selectedSet];
        },
        isSelected(option) {
            return this.multiple && new Set(this.selectedItems).has(option) ? 'selected' : '';
        },
    },

    created() {
        document.addEventListener('click', (e) => {
            if (!this.$el.contains(e.target)) {
                this.visible = false;
            }
        });
    },
};
</script>

<style lang="less">
.select {
    width: 240px;
    position: relative;

	&-multiple {
		position: absolute;
		top: 5px;
	}

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
	    position: absolute;
		z-index: 1024;
	    left: 0px;
	    right: 0px;

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
			max-height: 240px;
			overflow: scroll;
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

			&.selected {
				color: #fff;
				background: #38adff;
				outline: 1px solid;
			}
        }
    }
}

.label {
	width: 100px;
    height: 24px;
    background: rgba(38,160,255,.2);
    border: 1px solid;
    color: #38adff;
    border-radius: 3px;
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 8px;
    font-size: 14px;

	&__clear {
		cursor: pointer;
		&:hover {
			background: #38adff;
			color: #fff;
			border: 1px solid;
			border-radius: 50%;
		}
	}
}

</style>
