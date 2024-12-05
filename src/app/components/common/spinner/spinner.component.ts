import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  template: `
    <svg class="pl" viewBox="0 0 32 32" width="32px" height="32px">
	<clipPath id="ring-clip">
		<polygon points="0 0,32 0,32 32,0 32,0 30,14 16.1,0 16.1" />
	</clipPath>
	<g fill="none" stroke="currentcolor" stroke-width="3" transform="rotate(90,16,16)">
		<g opacity="0.2">
			<circle r="3" cx="6.5" cy="16" stroke-dasharray="14.737 4.712" />
			<circle r="9.5" cx="19" cy="16" clip-path="url(#ring-clip)" />
		</g>
		<g stroke-linecap="round">
			<circle class="pl__worm1" r="3" cx="6.5" cy="16" stroke-dasharray="14.137 64.4" />
			<circle class="pl__worm2" r="9.5" cx="19" cy="16" stroke-dasharray="14.137 64.4" stroke-dashoffset="14.137" transform="rotate(180,19,16)" />
		</g>
	</g>
</svg>`,
  styles: [`
:root {
	--hue: 223;
	--bg: hsl(var(--hue),10%,90%);
	--fg: hsl(var(--hue),10%,10%);
	--trans-dur: 0.3s;
	font-size: clamp(16px,0.95rem + 0.25vw,20px);
}
body {
	background-color: var(--bg);
	color: var(--fg);
	display: flex;
	font: 1em/1.5 sans-serif;
	height: 100vh;
  display:flex;
	transition:
		background-color var(--trans-dur),
		color var(--trans-dur);
}
.pl {
	display: block;
	margin: auto;
  position:relative;
  top:200px;
	width: 12em;
	height: auto;

	&__worm1,
	&__worm2 {
		animation: worm1-move 1.5s cubic-bezier(0.37,0,0.63,1) infinite;
	}
	&__worm2 {
		animation-name: worm2-move;
	}
}

@media (prefers-color-scheme: dark) {
	:root {
		--bg: hsl(var(--hue),10%,10%);
		--fg: hsl(var(--hue),10%,90%);
	}
}

@keyframes worm1-move {
	from {
		stroke-dashoffset: -2.355;
	}
	to {
		stroke-dashoffset: 76.185;
	}
}
@keyframes worm2-move {
	from {
		stroke-dashoffset: 16.492;
	}
	to {
		stroke-dashoffset: -62.045;
	}
}
  `]
})
export class SpinnerComponent { }
