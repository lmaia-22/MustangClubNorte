"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { BorderBeam } from "./magicui/border-beam";
import { CoolMode } from "./magicui/cool-mode";

const typeOfContacts = [
  { label: "Dúvidas", value: "doubt" },
  { label: "Pedido de Inscrição no Clube", value: "participate" },
] as const

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Nome deve ter mais que 1 caracter.",
  }),
  email: z.string().email().includes("@", {
    message: "O email não é válido.",
  }),
  message: z.string().min(1, {
    message: "Mensagem não pode estar vazia.",
  }),
  typeOfContact: z.string({
    required_error: "Por favor escolhe uma das razões de contacto.",
  }),
  city: z.string().optional(),
  picture: z.any().optional(),
  licensePlate: z.string().optional(),
  
}).refine((data) => {
  if (data.typeOfContact === "participate") {
    return data.city && data.licensePlate;
  }
  return true;
}, {
  message: "City and License Plate are required for participation.",
  path: ["city"],
});

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      typeOfContact: "",
      username: "",
      email: "",
      message: "",
      city: "",
      licensePlate: ""
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg">
    <BorderBeam />
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-8">
        <FormField
          control={form.control}
          name="typeOfContact"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="mx-auto text-center text-black">Razão de Contacto</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[100%] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? typeOfContacts.find(
                            (typeOfContact) => typeOfContact.value === field.value
                          )?.label
                        : "Selecione a razão"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[100%] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Escolha a razão de contacto"
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {typeOfContacts.map((typeOfContact) => (
                          <CommandItem
                            value={typeOfContact.label}
                            key={typeOfContact.value}
                            onSelect={() => {
                              form.setValue("typeOfContact", typeOfContact.value)
                            }}
                          >
                            {typeOfContact.label}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                typeOfContact.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="mx-auto text-center text-black">Nome</FormLabel>
              <FormControl>
                <Input placeholder="Fábio Santos" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="mx-auto text-center text-black">Email</FormLabel>
              <FormControl>
                <Input placeholder="mustang@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.watch("typeOfContact") === "participate" && (
          <>
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="mx-auto text-center text-black">Cidade</FormLabel>
                  <FormControl>
                    <Input placeholder="Porto" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="licensePlate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="mx-auto text-center text-black">Matrícula do Veículo</FormLabel>
                  <FormControl>
                    <Input placeholder="AB-11-BA" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
            control={form.control}
            name="picture"
            render={({ field }) => (
            <FormItem className="flex flex-col">
                <FormLabel className="mx-auto text-center text-black">Foto do Veículo</FormLabel>
                <FormControl>
                <Input id="picture" type="file" />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />
        </>
                )}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="mx-auto text-center text-black">Mensagem</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Olá, tudo bem?"
                  className="resize-none bg-background"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <CoolMode
          options={{
            particle:
              "/logo_no_bk.png",
          }}
        >
            <Button type="submit" 
            className="w-full font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:text-gray-200"
            > Submit</Button>
        </CoolMode>
      </form>
    </Form>
    </div>
  )
}
