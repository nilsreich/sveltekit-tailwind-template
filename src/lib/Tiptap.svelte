<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import Underline from '@tiptap/extension-underline';
	import TextAlign from '@tiptap/extension-text-align';
	import NodeView from '$lib/Extension.js'

	let element: HTMLElement;
	export let editor: Editor;

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [
				StarterKit,
				Underline,
				TextAlign.configure({
					types: ['heading', 'paragraph']
				}),
				NodeView,
			],
			editorProps: {
				attributes: {
					class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none'
				}
			},
			content: `<p>Hello World! 🌍️ </p> <node-view>
          <p>This is editable.</p>
        </node-view>`,
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			}
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<div bind:this={element} />
