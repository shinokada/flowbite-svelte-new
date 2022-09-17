<script lang="ts">
  import { Card, Select } from '$lib';
  import type { SelectOptionType } from '$lib/types';

  const items: SelectOptionType[] = [
    { name: 'aaa', value: '0' },
    { name: 'bbb', value: '1' },
    { name: 'ccc', value: '2' }
  ];
  const items2: SelectOptionType[] = [
    { name: 'zero', value: '0' },
    { name: 'one', value: '1' },
    { name: 'two', value: '2' }
  ];
</script>

<Card class="my-16">
  type of <code
    >value" is "number"
    <Select items={items2} value={'0'} />
  </code></Card>
<Card>
  type of "value" is "string"
  <Select {items} value={'0'} />
</Card>
