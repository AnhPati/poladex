'use client'

import { useState } from 'react';
import * as Form from '@radix-ui/react-form';
import { Button, Flex, Text } from '@radix-ui/themes';

const DrinkerForm = ({ addBeer, userId, beerId }: { addBeer: any, userId: string, beerId: string }) => {
    const [drinkerValues, setDrinkerValue] = useState({
        drinkerId: userId,
        beerId: beerId,
        location: '',
        content: ''
    })

    const handleChange = (e: any) => {
        const newValues = { ...drinkerValues, [e.target.name]: e.target.value }
        setDrinkerValue(newValues)
    }

    const saveDrinkerDetails = () => {
        console.log(drinkerValues)
        addBeer(drinkerValues)
    }

    return (
        <Form.Root>
            <Form.Field name={'location'}>
                <Flex direction={'column'}>
                    <Form.Label>Lieu de la dégustation :</Form.Label>
                    <Form.Message match={'valueMissing'}>
                        Veuillez renseigner le lieu de votre dégustation.
                    </Form.Message>
                    <Form.Control asChild>
                        <input type={'text'} required onChange={handleChange} />
                    </Form.Control>
                </Flex>
            </Form.Field>
            <Form.Field name={'content'}>
                <Flex direction={'column'}>
                    <Form.Label>Commentaires :</Form.Label>
                    <Form.Control asChild>
                        <textarea onChange={handleChange} />
                    </Form.Control>
                </Flex>
            </Form.Field>
            <Form.Submit asChild>
                <Button onSubmit={saveDrinkerDetails}>
                    <Text>
                        Sauver
                    </Text>
                </Button>

            </Form.Submit>
        </Form.Root>
    )
}

export default DrinkerForm