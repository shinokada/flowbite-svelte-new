---
layout: typographyLayout
dir: Typography
title: Text
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Span, P, A, Heading, Breadcrumb, BreadcrumbItem } from '$lib'

  import componentProps from '../props/P.json'
  import componentProps2 from '../props/Span.json'

  // Props table
  let items1 = componentProps.props
  let items2 = componentProps2.props

  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>Learn how to customize text-related styles and properties such as font size, font style, text decoration, font weight and more</CompoDescription>

<ExampleDiv>
<GitHubSource href="buttongroups/A.svelte">P</GitHubSource>
<GitHubSource href="buttongroups/Span.svelte">Span</GitHubSource>
</ExampleDiv>

Get started with a collection of text customization examples to learn how to update the size, font weight, style, decoration and spacing of inline text elements.

<Htwo label="Font size" />

Use this example to set the font size of inline text elements using the `size` prop.

<ExampleDiv class="flex flex-wrap items-center space-x-4">
  <P size="xs">Aa</P>
  <P size="sm">Aa</P>
  <P size="base">Aa</P>
  <P size="lg">Aa</P>
  <P size="xl">Aa</P>
  <P size="2xl">Aa</P>
  <P size="3xl">Aa</P>
  <P size="4xl">Aa</P>
  <P size="5xl">Aa</P>
  <P size="6xl">Aa</P>
  <P size="7xl">Aa</P>
  <P size="8xl">Aa</P>
  <P size="9xl">Aa</P>
</ExampleDiv>

```html
<P size="xs">Aa</P>
<P size="sm">Aa</P>
<P size="base">Aa</P>
<P size="lg">Aa</P>
<P size="xl">Aa</P>
<P size="2xl">Aa</P>
<P size="3xl">Aa</P>
<P size="4xl">Aa</P>
<P size="5xl">Aa</P>
<P size="6xl">Aa</P>
<P size="7xl">Aa</P>
<P size="8xl">Aa</P>
<P size="9xl">Aa</P>
```

<Htwo label="Font weight" />

This example can be used to the font weight of an inline text element using the `weight` prop.

<ExampleDiv class="flex flex-wrap items-center space-x-4">
  <P size="4xl" weight="thin">Aa</P>
  <P size="4xl" weight="extralight">Aa</P>
  <P size="4xl" weight="light">Aa</P>
  <P size="4xl" weight="normal">Aa</P>
  <P size="4xl" weight="medium">Aa</P>
  <P size="4xl" weight="semibold">Aa</P>
  <P size="4xl" weight="bold">Aa</P>
  <P size="4xl" weight="extrabold">Aa</P>
  <P size="4xl" weight="black">Aa</P>
</ExampleDiv>

```html
<P size="4xl" weight="thin">Aa</P>
<P size="4xl" weight="extralight">Aa</P>
<P size="4xl" weight="light">Aa</P>
<P size="4xl" weight="normal">Aa</P>
<P size="4xl" weight="medium">Aa</P>
<P size="4xl" weight="semibold">Aa</P>
<P size="4xl" weight="bold">Aa</P>
<P size="4xl" weight="extrabold">Aa</P>
<P size="4xl" weight="black">Aa</P>
```

<Htwo label="Text color" />

Use the `color` prop to set the color of the inline text.

<ExampleDiv>
  <P color="text-blue-700 dark:text-blue-500">This text is in the blue color.</P>
  <P color="text-green-700 dark:text-green-500">This text is in the green color.</P>
  <P color="text-red-700 dark:text-red-500">This text is in the red color.</P>
  <P color="text-purple-700 dark:text-purple-500">This text is in the purple color.</P>
  <P color="text-teal-700 dark:text-teal-500">This text is in the teal color.</P>
</ExampleDiv>

```html
<P color="text-blue-700 dark:text-blue-500">This text is in the blue color.</P>
<P color="text-green-700 dark:text-green-500">This text is in the green color.</P>
<P color="text-red-700 dark:text-red-500">This text is in the red color.</P>
<P color="text-purple-700 dark:text-purple-500">This text is in the purple color.</P>
<P color="text-teal-700 dark:text-teal-500">This text is in the teal color.</P>
```

<Htwo label="Letter spacing" />

Increase or decrease the spacing between letters using the `space` prop.

<ExampleDiv>
  <P space="tighter"
    >Flowbite app will help you improve yourself by analysing your everyday life.</P>
  <P space="tight">Flowbite app will help you improve yourself by analysing your everyday life.</P>
  <P space="normal">Flowbite app will help you improve yourself by analysing your everyday life.</P>
  <P space="wide">Flowbite app will help you improve yourself by analysing your everyday life.</P>
  <P space="wider">Flowbite app will help you improve yourself by analysing your everyday life.</P>
  <P space="widest">Flowbite app will help you improve yourself by analysing your everyday life.</P>
</ExampleDiv>

```html
<P space="tighter">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P space="tight">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P space="normal">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P space="wide">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P space="wider">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P space="widest">Flowbite app will help you improve yourself by analysing your everyday life.</P>
```

<Htwo label="Text decoration" />

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Underline</Heading>

Update the text decoration style using the `underline` and `decorationClass` props.

<ExampleDiv>
<P>Track work across the enterprise through an open, collaborative platform. <Span underline>Link issues across Jira</Span> and ingest data from other <Span underline decorationClass="decoration-blue-500 decoration-double">software development</Span> tools, so your IT support and operations teams have richer contextual information to rapidly respond to <Span underline decorationClass="decoration-green-500 decoration-dotted">requests</Span>, <Span underline decorationClass="decoration-4 decoration-red-500 decoration-dashed">incidents</Span>, and <Span underline decorationClass="decoration-sky-500 decoration-wavy">changes</Span>.</P>
</ExampleDiv>

```html
<P>Track work across the enterprise through an open, collaborative platform. <Span underline>Link issues across Jira</Span> and ingest data from other <Span underline decorationClass="decoration-blue-500 decoration-double">software development</Span> tools, so your IT support and operations teams have richer contextual information to rapidly respond to <Span underline decorationClass="decoration-green-500 decoration-dotted">requests</Span>, <Span underline decorationClass="decoration-4 decoration-red-500 decoration-dashed">incidents</Span>, and <Span underline decorationClass="decoration-sky-500 decoration-wavy">changes</Span>.</P>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Line through</Heading>

Set a strikethrough line on a text element using the `line-through` class.

<ExampleDiv>
<Span class="line-through">$109</Span><Span class='ml-3'>$79</Span>
</ExampleDiv>

```html
<Span class="line-through">$109</Span><Span class='ml-3'>$79</Span>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Uppercase</Heading>

Force uppercase characters for a given portion of text using the uppercase class.

<ExampleDiv>
<P>The crypto <Span class='uppercase'>identity</Span> primitive.</P>
</ExampleDiv>

```html
<P>The crypto <Span class='uppercase'>identity</Span> primitive.</P>
```

<Htwo label="Font style" />

Set italic or non italic styles with the props.

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Italic</Heading>

Use the `italic` prop to set italic font style to a text element.

<ExampleDiv>
  <P italic>The crypto identity primitive.</P>
</ExampleDiv>

```html
<P italic>The crypto identity primitive.</P>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Normal</Heading>

Text elements by default are non-italic.

<ExampleDiv>
  <P>The crypto identity primitive.</P>
</ExampleDiv>

```html
<P>The crypto identity primitive.</P>
```

<Htwo label="Line Height" />

Set the height between lines using the `height` prop.

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Leading normal</Heading>

Use the `height="normal"` (default) prop to set default line height.

<ExampleDiv>
  <P size="3xl" height="normal" class="max-w-lg" weight="semibold"
    >The Al-powered app will help you improve yourself by analysing your everyday life.</P>
</ExampleDiv>

```html
<P size="3xl" height="normal" class="max-w-lg" weight="semibold">The Al-powered app will help you improve yourself by analysing your everyday life.</P>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Leading relaxed</Heading>

Use the `height="relaxed"` prop to increase the space between lines.

<ExampleDiv>
  <P size="3xl" height="relaxed" class="max-w-lg" weight="semibold"
    >The Al-powered app will help you improve yourself by analysing your everyday life.</P>
</ExampleDiv>

```html
<P size="3xl" height="relaxed" class="max-w-lg" weight="semibold">The Al-powered app will help you improve yourself by analysing your everyday life.</P>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Leading loose</Heading>

Use the `height="loose"` prop to set a large amount of space between text lines.

<ExampleDiv>
  <P size="3xl" height="loose" class="max-w-lg" weight="semibold"
    >The Al-powered app will help you improve yourself by analysing your everyday life.</P>
</ExampleDiv>

```html
<P size="3xl" height="loose" class="max-w-lg" weight="semibold">The Al-powered app will help you improve yourself by analysing your everyday life.</P>
```

<Htwo label="Text Align" />

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Left</Heading>

<ExampleDiv>
  <P align="left"
    >Get started with an enterprise-level, profesionally designed, fully responsive, and HTML
    semantic set of web pages, sections and over 400+ components crafted with the utility classes
    from Tailwind CSS and based on the Flowbite component library</P>
</ExampleDiv>

```html
<P align="left">Get started with an enterprise-level, profesionally designed, fully responsive, and HTML
semantic set of web pages, sections and over 400+ components crafted with the utility classes
from Tailwind CSS and based on the Flowbite component library</P>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Center</Heading>

<ExampleDiv>
  <P align="center"
    >Get started with an enterprise-level, profesionally designed, fully responsive, and HTML
    semantic set of web pages, sections and over 400+ components crafted with the utility classes
    from Tailwind CSS and based on the Flowbite component library</P>
</ExampleDiv>

```html
<P align="center">Get started with an enterprise-level, profesionally designed, fully responsive, and HTML
semantic set of web pages, sections and over 400+ components crafted with the utility classes
from Tailwind CSS and based on the Flowbite component library</P>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Right</Heading>

Use the `align="right"` prop to align the text element to the right side of the page.

<ExampleDiv>
  <P align="right"
    >Get started with an enterprise-level, profesionally designed, fully responsive, and HTML
    semantic set of web pages, sections and over 400+ components crafted with the utility classes
    from Tailwind CSS and based on the Flowbite component library</P>
</ExampleDiv>

```html
<P align="right">Get started with an enterprise-level, profesionally designed, fully responsive, and HTML
semantic set of web pages, sections and over 400+ components crafted with the utility classes
from Tailwind CSS and based on the Flowbite component library</P>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Text justify</Heading>

Use the `justify` prop to justify the text content.

<ExampleDiv>
  <P justify
    >Get started with an enterprise-level, profesionally designed, fully responsive, and HTML
    semantic set of web pages, sections and over 400+ components crafted with the utility classes
    from Tailwind CSS and based on the Flowbite component library</P>
</ExampleDiv>

```html
<P justify>Get started with an enterprise-level, profesionally designed, fully responsive, and HTML
semantic set of web pages, sections and over 400+ components crafted with the utility classes
from Tailwind CSS and based on the Flowbite component library</P>
```

<Htwo label="Whitespace" />

Configure the whitespace behaviour of inline text elements using the `whitespace` prop.

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Normal</Heading>

Use the `whitespace="normal"` prop to set the default whitespace behaviour.

<ExampleDiv>
  <P whitespace="normal"
    >This is some text. This is some text. This is some text. This is some text. This is some text.
    This is some text. This is some text. This is some text. This is some text.</P>
</ExampleDiv>

```html
<P whitespace="normal">This is some text. This is some text. This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text. This is some text.</P>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Nowrap</Heading>

Use the `whitespace="nowrap"` prop to prevent text being added to a new line when the full width has been reached.

<ExampleDiv class="overflow-y-scroll">
  <P whitespace="nowrap">
    This is some text. This is some text. This is some text. This is some text. This is some text.
    This is some text. This is some text. This is some text. This is some text.
  </P>
</ExampleDiv>

```html
<P whitespace="nowrap">
  This is some text. This is some text. This is some text. This is some text. This is some text.
  This is some text. This is some text. This is some text. This is some text.
</P>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Pre line</Heading>

Use the `whitespace="preline'` prop to add whitespace exactly how it has been set from the source code.

<!-- prettier-ignore -->
<ExampleDiv>
  <P whitespace="preline">
    This is some text. This is some text. This is some text. 
    This is some text. This is some text. This is some text. 
    This is some text. This is some text. This is some text.
  </P>
</ExampleDiv>

```html
<P whitespace="preline">
  This is some text. This is some text. This is some text. 
  This is some text. This is some text. This is some text. 
  This is some text. This is some text. This is some text.
</P>
```

<Htwo label="Text Decoration Style" />

Update the text decoration style using the `underline` and `decorationClass` props.

<ExampleDiv>
<P>Track work across the enterprise through an open, collaborative platform. <Span underline>Link issues across Jira</Span> and ingest data from other <Span underline decorationClass="decoration-blue-500 decoration-double">software development</Span> tools, so your IT support and operations teams have richer contextual information to rapidly respond to <Span underline decorationClass="decoration-green-500 decoration-dotted">requests</Span>, <Span underline decorationClass="decoration-4 decoration-red-500 decoration-dashed">incidents</Span>, and <Span underline decorationClass="decoration-sky-500 decoration-wavy">changes</Span>.</P>
</ExampleDiv>

```html
<P>Track work across the enterprise through an open, collaborative platform. <Span underline>Link issues across Jira</Span> and ingest data from other <Span underline decorationClass="decoration-blue-500 decoration-double">software development</Span> tools, so your IT support and operations teams have richer contextual information to rapidly respond to <Span underline decorationClass="decoration-green-500 decoration-dotted">requests</Span>, <Span underline decorationClass="decoration-4 decoration-red-500 decoration-dashed">incidents</Span>, and <Span underline decorationClass="decoration-sky-500 decoration-wavy">changes</Span>.</P>
```

<Htwo label="Opacity" />

Use the `opacity` and `color` props to set the opacity of inline text elements.

<ExampleDiv>
<P size='xl' opacity={100} color="text-blue-600 dark:text-blue-500">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P size='xl' opacity={75} color="text-blue-600 dark:text-blue-500">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P size='xl' opacity={50} color="text-blue-600 dark:text-blue-500">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P size='xl' opacity={25} color="text-blue-600 dark:text-blue-500">Flowbite app will help you improve yourself by analysing your everyday life.</P>
</ExampleDiv>

```html
<P size='xl' opacity={100} color="text-blue-600 dark:text-blue-500">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P size='xl' opacity={75} color="text-blue-600 dark:text-blue-500">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P size='xl' opacity={50} color="text-blue-600 dark:text-blue-500">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P size='xl' opacity={25} color="text-blue-600 dark:text-blue-500">Flowbite app will help you improve yourself by analysing your everyday life.</P>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <A href="/pages/types">types page</A> for type information.

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">P</Heading>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Span</Heading>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>
