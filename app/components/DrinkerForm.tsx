'use client'

import { useRouter } from 'next/dist/client/components/navigation';
import { useForm } from 'react-hook-form'
import * as Form from '@radix-ui/react-form';
import { Button, Flex, Link, Text } from '@radix-ui/themes';

interface DrinkedForm {
    drinkerId: string
    beerId: string
    location: string
    content: string
}

const DrinkerForm = ({ userId, beerId }: { userId: string, beerId: string }) => {
    const router = useRouter()
    const { register, handleSubmit } = useForm<DrinkedForm>({
        defaultValues: {
            drinkerId: userId,
            beerId: beerId
        }
    })
    console.log(register('location'))

    return (
        <Form.Root onSubmit={handleSubmit(async (data) => {
            await fetch('/api/beer', {
                method: "POST",
                body: JSON.stringify(data)
            })
            router.push('/poladex')
        })}>
            <Form.Field name={'location'}>
                <Flex direction={'column'}>
                    <Form.Label>Lieu de la dégustation :</Form.Label>
                    <Form.Message match={'valueMissing'}>
                        Veuillez renseigner le lieu de votre dégustation.
                    </Form.Message>
                    <Form.Control asChild>
                        <input type={'text'} required {...register('location')} />
                    </Form.Control>
                </Flex>
            </Form.Field>
            <Form.Field name={'content'}>
                <Flex direction={'column'}>
                    <Form.Label>Commentaires :</Form.Label>
                    <Form.Control asChild>
                        <textarea {...register('content')} />
                    </Form.Control>
                </Flex>
            </Form.Field>
            <Form.Submit asChild>
                <Button>
                    <Link href={'/poladex'}>
                        <Text>
                            Sauver
                        </Text>
                    </Link>
                </Button>
            </Form.Submit>
        </Form.Root>
    )
}

export default DrinkerForm