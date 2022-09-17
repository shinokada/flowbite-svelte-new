<script>
  import { Card, Progressbar } from '$lib';
  const sizeClasses = {
    xs: 'h-1',
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
    xl: 'h-6'
  };
</script>

<h1 class="my-16 text-4xl">Progress</h1>

<Progressbar
  progress="50"
  size="h-3"
  labelInside
  color="green"
  labelInsideClass="bg-blue-600 text-blue-100 text-xs font-medium text-center p-0 leading-none rounded-full"
  class="my-4"
  labelOutside="Size h-3" />

<Progressbar
  progress="50"
  size="h-10"
  labelInside
  color="red"
  labelInsideClass="bg-blue-600 text-blue-100 text-2xl font-medium text-center p-2 leading-none rounded-full"
  class="my-4"
  labelOutside="Size h-10" />

<Progressbar
  progress="50"
  size="h-6"
  labelInside
  labelInsideClass="bg-blue-600 text-blue-100 text-base font-medium text-center p-1 leading-none rounded-full"
  class="my-4"
  labelOutside="Size h-6" />

<Card>
  <Progressbar progress="50" size={sizeClasses.xs} labelOutside={sizeClasses.xs} />
</Card>
<Card>
  <Progressbar progress="50" size={sizeClasses.md} labelOutside={sizeClasses.md} />
</Card>
<Card>
  <Progressbar progress="50" size={sizeClasses.lg} labelOutside={sizeClasses.lg} />
</Card>
<Card>
  <Progressbar progress="50" size={sizeClasses.xl} labelOutside={sizeClasses.xl} />
</Card>
