import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import DarkToast, { DarkToastProps } from './DarkToast';

export default {
    title: 'Components/Notifications/Dark Toast',
    component: DarkToast,
    tags: ['autodocs'],
    argTypes: {
        type: { control: { type: 'select', options: ['copied', 'exportation', 'printer', 'action done', 'waiting', 'no connection'] } },
        label: { control: 'text' },
        addSubtitle: { control: 'boolean' },
        addIcon: { control: 'boolean' },
        addCloseIcon: { control: 'boolean' },
    },
    parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn<DarkToastProps> = (args) => <DarkToast {...args} />;
export const Exportation = Template.bind({});
export const Copied = Template.bind({});
export const Printer = Template.bind({});
export const ActionDone = Template.bind({});
export const Waiting = Template.bind({});
export const NoConnection = Template.bind({});

Exportation.args = {
    label: 'Exportation en cours...',
    type: 'exportation',
    addSubtitle: true,
    addIcon: true,
    addCloseIcon: true,
    subtitle: 'Veuillez patienter...',
};

Copied.args = {
    label: 'Le lien est désormais copié !',
    type: 'copied',
    addSubtitle: false,
    addIcon: true,
    addCloseIcon: true,
};



Printer.args = {
    label: 'Transfert du fichier en cours...',
    type: 'printer',
    addSubtitle: true,
    addIcon: true,
    addCloseIcon: true,
    subtitle: 'Veuillez patienter...',
};  

ActionDone.args = {
    label: 'Action effectuée avec succès',
    type: 'action done',
    addSubtitle: false,
    addIcon: true,
    addCloseIcon: true,
};

Waiting.args = {
    label: 'Veuillez patienter...',
    type: 'waiting',
    addSubtitle: false,
    addIcon: true,
    addCloseIcon: false,
};

NoConnection.args = {
    label: 'Pas de connexion internet',
    type: 'no connection',
    addSubtitle: false,
    addIcon: true,
    addCloseIcon: true,
}