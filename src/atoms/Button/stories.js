// @flow

import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react/dist/client/preview';
import { select, text, boolean, number } from '@storybook/addon-knobs';

import Button from './Button';
import Text from '../Text';

const ButtonText = 'Badger Pay';

storiesOf('Button', module)
	.add(
		'default',
		() => (
			<Button step={'fresh'}>
				<Text>{ButtonText}</Text>
			</Button>
		),
		{
			notes:
				'Button is a stateful controlled component which is the primary visual indicator for the badger payment process',
		}
	)
	.add(
		'payment pending',
		() => (
			<Button step={'pending'}>
				<Text>{ButtonText}</Text>
			</Button>
		),
		{
			notes: 'Awaiting a confirmation or cancellation of Badger popup',
		}
	)
	.add(
		'payment complete',
		() => (
			<Button step={'complete'}>
				<Text>{ButtonText}</Text>
			</Button>
		),
		{
			notes: 'Payment received, at least on the front-end',
		}
	)
	.add(
		'login prompt',
		() => (
			<Button step={'login'}>
				<Text>{ButtonText}</Text>
			</Button>
		),
		{
			notes: 'user not logged in, prompt to login',
		}
	)
	.add(
		'install prompt',
		() => (
			<Button step={'install'}>
				<Text>{ButtonText}</Text>
			</Button>
		),
		{
			notes: 'Badger plugin not installed, prompt user to install Badger',
		}
	);
