'use client'

import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

import emailjs from '@emailjs/browser'
import { useToast } from "../ui/use-toast";
import { useState } from "react";

export function ContactForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const contactSchema = z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email({ message: 'Email is required' }),
    message: z.string().min(10, { message: 'Message too short' })
  })

  type TContactSchema = z.infer<typeof contactSchema>

  const form = useForm<TContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  async function onSubmit(event: any) {
    const serviceKey = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY as string
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string

    const message = `${form.getValues('name')} - ${form.getValues('email')} - ${form.getValues('message')}`

    try {
      setLoading(true)
      emailjs.init(publicKey)
      await emailjs.send(serviceKey, templateId, {
        to_email: 'gcamargo.dev@gmail.com',
        subject: 'New contact request',
        message,
      },
      )
      toast({
        title: 'Email sent',
        description: 'As soon as possible I will answer you!'
      })
      form.reset()
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! An unexpected error happened!'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name here" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="The best email you have here" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Describe what you need" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <Button className="w-full mt-6" type="submit" disabled={loading}>Send message</Button>
      </form>
    </Form>
  )
}