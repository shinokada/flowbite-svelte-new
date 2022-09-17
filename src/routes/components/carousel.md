---
layout: componentLayout
dir: Components
title: Carousel
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Carousel, CarouselTransition, Breadcrumb, BreadcrumbItem, Heading, P, A } from '$lib'
   import { quartInOut, sineInOut, bounceInOut, quintOut } from 'svelte/easing';
  import { images } from './imageData/+server.js';
  import componentProps from '../props/Carousel.json'
  import componentProps2 from '../props/CarouselTransition.json'
  // Props table
  let items = componentProps.props
  let items2 = componentProps2.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let showThumbs=false
  let showIndicators=false
  let showCaptions=false
  let slideControls=false
  let iconSize =20
  let iconClass = 'text-white dark:text-red-500';

  let hidden = true;
  const handleMouseover = ()=>{
    hidden = false
  }
  const handleMouseout = ()=>{
    hidden = true
  }
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>Use the carousel component to slide through multiple elements and images using custom controls, indicators, intervals, and options</CompoDescription>

<ExampleDiv>
<GitHubSource href="carousels/Carousel.svelte">Carousel</GitHubSource>
<GitHubSource href="carousels/CarouselTransition.svelte">CarouselTransition</GitHubSource>
</ExampleDiv>

The carousel component can be used to cycle through a set of elements using custom options, controls, and indicators.

<Htwo label="Setup" />

```html
<script>
  import { Carousel, CarouselTransition } from 'flowbite-svelte'
</script>
```

<Htwo label="Default Carousel" />

<ExampleDiv>
  <div class="max-w-4xl">
    <Carousel {images} />
  </div>
</ExampleDiv>

```html
<script>
  ...
  const images = [
  {
    id: 0,
    name: "Cosmic timetraveler",
    imgurl: "/images/carousel/cosmic-timetraveler-pYyOZ8q7AII-unsplash.webp",
    attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
  },
  {
    id: 1,
    name: "Cristina Gottardi",
    imgurl: "/images/carousel/cristina-gottardi-CSpjU6hYo_0-unsplash.webp",
    attribution: "cristina-gottardi-CSpjU6hYo_0-unsplash.com",
  },
  {
    id: 2,
    name: "Johannes Plenio",
    imgurl: "/images/carousel/johannes-plenio-RwHv7LgeC7s-unsplash.webp",
    attribution: "johannes-plenio-RwHv7LgeC7s-unsplash.com",
  },
  {
    id: 3,
    name: "Jonatan Pie",
    imgurl: "/images/carousel/jonatan-pie-3l3RwQdHRHg-unsplash.webp",
    attribution: "jonatan-pie-3l3RwQdHRHg-unsplash.com",
  },
  {
    id: 4,
    name: "Mark Harpur",
    imgurl: "/images/carousel/mark-harpur-K2s_YE031CA-unsplash.webp",
    attribution: "mark-harpur-K2s_YE031CA-unsplash",
  },
  {
    id: 5,
    name: "Pietro De Grandi",
    imgurl: "/images/carousel/pietro-de-grandi-T7K4aEPoGGk-unsplash.webp",
    attribution: "pietro-de-grandi-T7K4aEPoGGk-unsplash",
  },
  {
    id: 6,
    name: "Sergey Pesterev",
    imgurl: "/images/carousel/sergey-pesterev-tMvuB9se2uQ-unsplash.webp",
    attribution: "sergey-pesterev-tMvuB9se2uQ-unsplash",
  },
  {
    id: 7,
    name: "Solo travel goals",
    imgurl: "/images/carousel/solotravelgoals-7kLufxYoqWk-unsplash.webp",
    attribution: "solotravelgoals-7kLufxYoqWk-unsplash",
  },
];
</script>

<div class="max-w-4xl">
  <Carousel {images} />
</div>
```

<Htwo label="Loop" />

<p>Use `loop` prop to loop the carousel. Use `duration=number` to set the interval</p>

<ExampleDiv>
	<div class="max-w-4xl">
		<Carousel {images} loop {showCaptions} {showThumbs} duration="3000"/>
	</div>
</ExampleDiv>

```html
<script>
  let showThumbs=false
  let showCaptions=false
</script>

<div class="max-w-4xl">
  <Carousel {images} loop {showCaptions} {showThumbs} duration="3000" />
</div>
```

<Htwo label="Without thumbnails"/>

<p>The `showThumbs` is set to `true`. Set it to `false` to hide it.</p>

<ExampleDiv>
  <div class="max-w-4xl">
    <Carousel {images} {showThumbs}/>
  </div>
</ExampleDiv>

```html
<script>
    let showThumbs=false
</script>

<div class="max-w-4xl">
  <Carousel {images} {showThumbs}/>
</div>
```

<Htwo label="Without caption" />

<p>To hide the caption, set `showCaptions` to `false`.</p>

<ExampleDiv>
  <div class="max-w-4xl">
    <Carousel {images} {showThumbs} {showCaptions}/>
  </div>
</ExampleDiv>

```html
<script>
  let showThumbs=false
  let showCaptions=false
</script>

<div class="max-w-4xl">
  <Carousel {images} {showThumbs} {showCaptions}/>
</div>
```

<Htwo label="Without indicators" />

<p>To hide the indicators, set `showIndicators` to `false`.</p>

<ExampleDiv>
  <div class="max-w-4xl">
    <Carousel {images} {showThumbs} {showCaptions} {showIndicators}/>
  </div>
</ExampleDiv>

```html
<script>
  let showThumbs=false
  let showCaptions=false
  let showIndicators=false
</script>

<div class="max-w-4xl">
  <Carousel {images} {showThumbs} {showCaptions} {showIndicators}/>
</div>
```

<Htwo label="Without slide controllers" />

<p>To hide the slide controllers, set `slideControls` to `false`.</p>

<ExampleDiv>
  <div class="max-w-4xl">
    <Carousel {images} {showThumbs} {showCaptions} {slideControls}/>
  </div>
</ExampleDiv>

```html
<script>
  let showThumbs=false
  let showCaptions=false
  let slideControls=false
</script>

<div class="max-w-4xl">
  <Carousel {images} {showThumbs} {showCaptions} {slideControls}/>
</div>
```

<Htwo label="Custom slide controllers" />

<p>You can add custom slide controllers using <a href="/icons/heroicons">Svelte-Heros icons</a>. Change the size using the `iconSize` prop and style with the `iconClass` prop.</p>

```html
<script>
  import {ChevronDoubleLeft, ChevronDoubleRight } from 'svelte-heros-v2'
  let icons={
    next: ChevronDoubleRight,
    prev: ChevronDoubleLeft,
  }
  let iconSize =20
  let iconClass = 'text-white dark:text-red-500';
</script>

<div class="max-w-4xl">
  <Carousel {images} {showThumbs} {showCaptions} {icons} {iconSize} {iconClass}/>
</div>
```

<Htwo label="Carousel transition" />

<ExampleDiv>
  <div class="max-w-4xl">
    <CarouselTransition {images} transitionType="fade" transitionParams="{{delay: 300, duration: 500}}"/>
  </div>
</ExampleDiv>

```html
<script>
  import { CarouselTransition } from 'flowbite-svelte';
</script>

<div class="max-w-4xl">
  <CarouselTransition {images} transitionType="slide" transitionParams="{{delay: 300, duration: 500}}"/>
</div>
```

<Htwo label="Loop" />

<p>Use `loop` prop to loop the carousel. Use `duration=number` to set the interval</p>

<ExampleDiv>
	<div class="max-w-4xl">
		<CarouselTransition {images} loop transitionType="fade" transitionParams="{{ duration: 1000 }}" {showCaptions} {showThumbs} duration="5000" />
	</div>
</ExampleDiv>

```html
<script>
  let showThumbs=false
  let showCaptions=false
</script>

<div class="max-w-4xl">
  <CarouselTransition {images} loop transitionType="fade" transitionParams="{{ duration: 1000 }}" {showCaptions} {showThumbs} duration="5000" />
</div>
```

<Htwo label="Fly example" />

<ExampleDiv>
  <div class="max-w-4xl">
    <CarouselTransition {images} transitionType="fly" transitionParams="{{delay: 250, duration: 300, x: 100}}" />
  </div>
</ExampleDiv>

```html
<CarouselTransition {images} transitionType="fly" transitionParams="{{delay: 250, duration: 300, x: 100}}" />
```

<Htwo label="Slide example" />

<ExampleDiv>
  <div class="max-w-4xl">
    <CarouselTransition {images} transitionType="slide" transitionParams="{{duration: 1500, easing: bounceInOut}}"/>
  </div>
</ExampleDiv>

```html
<script>
  import { CarouselTransition } from 'flowbite-svelte';
  import { bounceInOut } from 'svelte/easing';
</script>

<div class="max-w-4xl">
  <CarouselTransition {images} transitionType="slide" transitionParams="{{duration: 1500, easing: bounceInOut}}"/>
</div>
```

<Htwo label="Custom slide controllers" />

<p>You can add custom slide controllers using <a href="/icons/heroicons">Svelte-Heros icons</a>. Change the size using the `iconSize` prop and style with the `iconClass` prop. Please read <a href="/carousels/default#Custom_slide_controllers">Carousel default for more details</a>.</p>

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3 class='text-xl w-full dark:text-white py-4'>Carousel</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>CarouselTransition</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<Htwo label="References" />

<P>
  <A href="https://flowbite.com/docs/components/carousel/" target="_blank" class="link"
    >Flowbite carousel</A
  >
</P>
