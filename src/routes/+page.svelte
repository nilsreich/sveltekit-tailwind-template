<script lang="ts">
	import Tiptap from '$lib/Tiptap.svelte';
	import type { Editor } from '@tiptap/core';

	let editor: Editor;

	const bold = () => {
		editor.chain().focus().toggleBold().run();
	};

	const italic = () => {
		editor.chain().focus().toggleItalic().run();
	};

	const underline = () => {
		editor.chain().focus().toggleUnderline().run();
	};

	const strike = () => {
		editor.chain().focus().toggleStrike().run();
	};

	const code = () => {
		editor.chain().focus().toggleCode().run();
	};

	const codeBlock = () => {
		editor.chain().focus().toggleCodeBlock().run();
	};

	const blockquote = () => {
		editor.chain().focus().toggleBlockquote().run();
	};

	const orderedList = () => {
		editor.chain().focus().toggleOrderedList().run();
	};

	const bulletList = () => {
		editor.chain().focus().toggleBulletList().run();
	};

	const heading = () => {
		editor.chain().focus().toggleHeading({ level: 1 }).run();
	};

	const heading2 = () => {
		editor.chain().focus().toggleHeading({ level: 2 }).run();
	};

	const heading3 = () => {
		editor.chain().focus().toggleHeading({ level: 3 }).run();
	};

	const heading4 = () => {
		editor.chain().focus().toggleHeading({ level: 4 }).run();
	};

	const heading5 = () => {
		editor.chain().focus().toggleHeading({ level: 5 }).run();
	};

	const heading6 = () => {
		editor.chain().focus().toggleHeading({ level: 6 }).run();
	};

	const paragraph = () => {
		editor.chain().focus().setParagraph().run();
	};

	const horizontalRule = () => {
		editor.chain().focus().setHorizontalRule().run();
	};

	const hardBreak = () => {
		editor.chain().focus().setHardBreak().run();
	};

const alignLeft = () => {
		editor.chain().focus().setTextAlign('left').run();
	};

	const alignCenter = () => {
		editor.chain().focus().setTextAlign('center').run();
	};

	const alignRight = () => {
		editor.chain().focus().setTextAlign('right').run();
	};

	const alignJustify = () => {
		editor.chain().focus().setTextAlign('justify').run();
	};

	const undo = () => {
		editor.chain().focus().undo().run();
	};

	const redo = () => {
		editor.chain().focus().redo().run();
	};

	const format = (style:string) => {
		switch (style) {
			case 'heading1':
				heading();
				break;
			case 'heading2':
				heading2();
				break;
			case 'heading3':
				heading3();
				break;
			case 'heading4':
				heading4();
				break;
			case 'heading5':
				heading5();
				break;
			case 'heading6':
				heading6();
				break;
			case 'paragraph':
				paragraph();
				break;
			case 'default':
				paragraph();
		}
	};
</script>

<div class="flex">
	<div class="flex h-screen flex-col bg-white border-r text-neutral-600">
		<div class="m-2 p-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="mt-20 h-6 w-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
				/>
			</svg>
		</div>
		<div class="m-2 rounded-md bg-neutral-200 p-4 text-neutral-800">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="h-6 w-6"
			>
				<path
					fill-rule="evenodd"
					d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
		<div class="m-2 p-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-6 w-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
				/>
			</svg>
		</div>
		<div class="m-2 p-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-6 w-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
				/>
			</svg>
		</div>
		<div class="m-2 p-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-6 w-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
				/>
			</svg>
		</div>
	</div>
	<div class="grow flex flex-col">
		<div class="ml-12 mt-8 flex items-center text-gray-800">
			<div class="rounded-md bg-slate-200 px-1 py-0.5">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
					/>
				</svg>
			</div>

			<div class="ml-6 text-lg font-medium">
				Umbrella Coorperation <span class="ml-2 rounded bg-slate-200 p-1 text-sm font-normal"
					>Saved</span
				>
			</div>
		</div>
		<div class="my-3 ml-[6.5rem] flex gap-6 text-sm font-medium text-gray-800">
			<div>File</div>
			<div>Edit</div>
			<div>Insert</div>
			<div>Format</div>
		</div>
		<div class="flex border-t border-b py-3 pl-12 gap-4 text-gray-800 items-center">
			<button on:click={undo}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
					/>
				</svg>
			</button>
			<button on:click={redo}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
					/>
				</svg>
			</button>

			<select
				value={editor?.isActive('heading')
					? 'heading1'
					: editor?.isActive('heading2')
					? 'heading2'
					: editor?.isActive('heading3')
					? 'heading3'
					: editor?.isActive('heading4')
					? 'heading4'
					: editor?.isActive('heading5')
					? 'heading5'
					: editor?.isActive('paragraph')
					? 'paragraph'
					: ''}
				on:change={(event) => format(event.target.value)}
				class="border-l border-slate-300 bg-white pl-4 pr-12 text-xs font-medium tracking-wide outline-none"
			>
				<option value="heading1" class="">Heading 1</option>
				<option value="heading2" class="">Heading 2</option>
				<option value="heading3" class="">Heading 3</option>
				<option value="heading4" class="">Heading 4</option>
				<option value="heading5" class="">Heading 5</option>
				<option value="paragraph" class="">Paragraph</option>
			</select>

			<button
				on:click={bold}
				class={`${editor?.isActive('bold') ? 'bg-neutral-200' : 'bg-white'} p-2 rounded`}
			>
				<svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M5.10505 12C4.70805 12 4.4236 11.912 4.25171 11.736C4.0839 11.5559 4 11.2715 4 10.8827V4.11733C4 3.72033 4.08595 3.43588 4.25784 3.26398C4.43383 3.08799 4.71623 3 5.10505 3C6.42741 3 8.25591 3 9.02852 3C10.1373 3 11.0539 3.98153 11.0539 5.1846C11.0539 6.08501 10.6037 6.81855 9.70327 7.23602C10.8657 7.44851 11.5176 8.62787 11.5176 9.48128C11.5176 10.5125 10.9902 12 9.27734 12C8.77742 12 6.42626 12 5.10505 12ZM8.37891 8.00341H5.8V10.631H8.37891C8.9 10.631 9.6296 10.1211 9.6296 9.29877C9.6296 8.47643 8.9 8.00341 8.37891 8.00341ZM5.8 4.36903V6.69577H8.17969C8.53906 6.69577 9.27734 6.35939 9.27734 5.50002C9.27734 4.64064 8.48047 4.36903 8.17969 4.36903H5.8Z"
						fill="currentColor"
					/></svg
				>
			</button>
			<button
				on:click={underline}
				class={`${editor?.isActive('underline') ? 'bg-neutral-200' : 'bg-white'} p-2 rounded`}
			>
				<svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M5.00001 2.75C5.00001 2.47386 4.77615 2.25 4.50001 2.25C4.22387 2.25 4.00001 2.47386 4.00001 2.75V8.05C4.00001 9.983 5.56702 11.55 7.50001 11.55C9.43301 11.55 11 9.983 11 8.05V2.75C11 2.47386 10.7762 2.25 10.5 2.25C10.2239 2.25 10 2.47386 10 2.75V8.05C10 9.43071 8.88072 10.55 7.50001 10.55C6.1193 10.55 5.00001 9.43071 5.00001 8.05V2.75ZM3.49998 13.1001C3.27906 13.1001 3.09998 13.2791 3.09998 13.5001C3.09998 13.721 3.27906 13.9001 3.49998 13.9001H11.5C11.7209 13.9001 11.9 13.721 11.9 13.5001C11.9 13.2791 11.7209 13.1001 11.5 13.1001H3.49998Z"
						fill="currentColor"
						fill-rule="evenodd"
						clip-rule="evenodd"
					/></svg
				>
			</button>
			<button
				on:click={italic}
				class={`${editor?.isActive('italic') ? 'bg-neutral-200' : 'bg-white'} p-2 rounded`}
			>
				<svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M5.67494 3.50017C5.67494 3.25164 5.87641 3.05017 6.12494 3.05017H10.6249C10.8735 3.05017 11.0749 3.25164 11.0749 3.50017C11.0749 3.7487 10.8735 3.95017 10.6249 3.95017H9.00587L7.2309 11.05H8.87493C9.12345 11.05 9.32493 11.2515 9.32493 11.5C9.32493 11.7486 9.12345 11.95 8.87493 11.95H4.37493C4.1264 11.95 3.92493 11.7486 3.92493 11.5C3.92493 11.2515 4.1264 11.05 4.37493 11.05H5.99397L7.76894 3.95017H6.12494C5.87641 3.95017 5.67494 3.7487 5.67494 3.50017Z"
						fill="currentColor"
						fill-rule="evenodd"
						clip-rule="evenodd"
					/></svg
				>
			</button>
			<button
				on:click={strike}
				class={`${editor?.isActive('strike') ? 'bg-neutral-200' : 'bg-white'} p-2 rounded`}
			>
				<svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M5.00003 3.25C5.00003 2.97386 4.77617 2.75 4.50003 2.75C4.22389 2.75 4.00003 2.97386 4.00003 3.25V7.10003H2.49998C2.27906 7.10003 2.09998 7.27912 2.09998 7.50003C2.09998 7.72094 2.27906 7.90003 2.49998 7.90003H4.00003V8.55C4.00003 10.483 5.56703 12.05 7.50003 12.05C9.43303 12.05 11 10.483 11 8.55V7.90003H12.5C12.7209 7.90003 12.9 7.72094 12.9 7.50003C12.9 7.27912 12.7209 7.10003 12.5 7.10003H11V3.25C11 2.97386 10.7762 2.75 10.5 2.75C10.2239 2.75 10 2.97386 10 3.25V7.10003H5.00003V3.25ZM5.00003 7.90003V8.55C5.00003 9.93071 6.11932 11.05 7.50003 11.05C8.88074 11.05 10 9.93071 10 8.55V7.90003H5.00003Z"
						fill="currentColor"
						fill-rule="evenodd"
						clip-rule="evenodd"
					/></svg
				>
			</button>
			<button
				on:click={alignLeft}
				class={`${editor?.isActive({ textAlign: 'left' }) ? 'bg-neutral-200' : 'bg-white'} p-2 rounded`}
			>
				<svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H7.5C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H10.5C10.7761 10 11 10.2239 11 10.5C11 10.7761 10.7761 11 10.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z"
						fill="currentColor"
						fill-rule="evenodd"
						clip-rule="evenodd"
					/></svg
				>
			</button>
			<button
				on:click={alignCenter}
				class={`${editor?.isActive({ textAlign: 'center' }) ? 'bg-neutral-200' : 'bg-white'} p-2 rounded`}
			>
				<svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM4 7.5C4 7.22386 4.22386 7 4.5 7H10.5C10.7761 7 11 7.22386 11 7.5C11 7.77614 10.7761 8 10.5 8H4.5C4.22386 8 4 7.77614 4 7.5ZM3 10.5C3 10.2239 3.22386 10 3.5 10H11.5C11.7761 10 12 10.2239 12 10.5C12 10.7761 11.7761 11 11.5 11H3.5C3.22386 11 3 10.7761 3 10.5Z"
						fill="currentColor"
						fill-rule="evenodd"
						clip-rule="evenodd"
					/></svg
				></button
			>
			<button
				on:click={alignRight}
				class={`${editor?.isActive({ textAlign: 'right' }) ? 'bg-neutral-200' : 'bg-white'} p-2 rounded`}
			>
				<svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM7 7.5C7 7.22386 7.22386 7 7.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H7.5C7.22386 8 7 7.77614 7 7.5ZM4 10.5C4 10.2239 4.22386 10 4.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H4.5C4.22386 11 4 10.7761 4 10.5Z"
						fill="currentColor"
						fill-rule="evenodd"
						clip-rule="evenodd"
					/></svg
				>
			</button>
			<button
				on:click={alignJustify}
				class={`${editor?.isActive({ textAlign: 'justify' }) ? 'bg-neutral-200' : 'bg-white'} p-2 rounded`}
			>
				<svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z"
						fill="currentColor"
						fill-rule="evenodd"
						clip-rule="evenodd"
					/></svg
				>
			</button>
		</div>
		<div class="bg-gray-200 grow lg:pt-20 pt-0 flex flex-col ">
			<div class="bg-white px-20 py-12 grow mx-auto max-w-5xl w-full "><Tiptap bind:editor /></div>
		</div>
	</div>
</div>
