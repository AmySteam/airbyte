import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ListBox } from "./ListBox";

const listOptions = [
  {
    label: "one",
    value: "value",
    icon: <FontAwesomeIcon icon={faEdit} size="2x" />,
  },
  {
    label: "two",
    value: "value",
  },
  {
    label: "three",
    value: "value",
  },
];

export default {
  title: "Ui/ListBox",
  component: ListBox,
  argTypes: {
    options: listOptions,
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: listOptions,
};
