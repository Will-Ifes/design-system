import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque illo quasi, saepe nostrum, aliquam dignissimos magnam error consectetur maxime ut fuga ipsum? Deleniti, cumque? Officia distinctio delectus cumque, alias dolorum adipisci veritatis voluptatibus deserunt non recusandae consectetur temporibus, quasi laboriosam nihil culpa odit nam architecto vero ullam perferendis iste optio.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
