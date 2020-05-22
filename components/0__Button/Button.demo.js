import React from 'react';
import Button from '../../src/components/Button/Button';
import Icon from '@material-ui/core/Icon'

export default {
  route: '/button',
  title: 'Button',
  category: 'Form',
  component: Button,
  initialProps: {
    children: 'Click Me',
    color: 'primary',
    variant: 'contained'
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Disabled',
          transformProps: ({ className, ...props }) => ({
            ...props,
            disabled: true
          })
        },
        {
          label: 'Full width',
          transformProps: props => ({
            ...props,
            fullWidth: true
          })
        }
      ]
    },
    {
      label: 'Component',
      type: 'radio',
      states: [
        {
          label: 'Contained Variant',
          transformProps: props => ({
            ...props,
            variant: 'contained'
          })
        },
        {
          label: 'Outlined Variant',
          transformProps: props => ({
            ...props,
            variant: 'outlined'
          })
        },
        {
          label: 'Text Varient',
          transformProps: props => ({
            ...props,
            variant: 'text'
          })
        }
      ]
    },
    {
      label: 'Colour',
      type: 'radio',
      states: [
        {
          label: 'Primary',
          transformProps: props => ({
            ...props,
            color: 'primary'
          })
        },
        {
          label: 'Secondary',
          transformProps: props => ({
            ...props,
            color: 'Secondary'
          })
        },
        {
          label: 'Inherit',
          transformProps: props => ({
            ...props,
            color: 'inherit'
          })
        },
      ]
    },
    {
      label: 'Icon',
      type: 'radio',
      states: [
        {
          label: 'No Icon',
          transformProps: props => props
        },
        {
          label: 'Home Icon',
          transformProps: props => ({
            ...props,
            startIcon: <Icon>home</Icon>
          })
        },
      ]
    }
  ]
};
