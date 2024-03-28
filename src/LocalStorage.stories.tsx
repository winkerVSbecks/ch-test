import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

const LocalStorage = ({ label }: { label: string }) => {
  const [state, setState] = useState({
    foo: '',
    bar: '',
    baz: '',
  });

  useEffect(() => {
    const foo = localStorage.getItem('foo')!;
    const bar = localStorage.getItem('bar')!;
    const baz = localStorage.getItem('baz')!;
    setState({ foo, bar, baz });
  }, [setState]);

  return (
    <pre style={{ padding: 16, borderRadius: 4, background: '#ccc' }}>
      <code>{`label: ${label}
foo  : ${state.foo}
bar  : ${state.bar}
baz  : ${state.baz}`}</code>
    </pre>
  );
};

const meta = {
  title: 'Example/LocalStorage',
  component: LocalStorage,
  parameters: {
    layout: 'centered',
  },
  loaders: [
    async ({ args }) => {
      localStorage.clear();
      localStorage.setItem('foo', `${args.label}-foo`);
      localStorage.setItem('bar', `${args.label}-bar`);
      localStorage.setItem('baz', `${args.label}-baz`);
    },
  ],
} satisfies Meta<typeof LocalStorage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary',
  },
};
