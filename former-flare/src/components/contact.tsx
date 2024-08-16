import { zodResolver } from "@hookform/resolvers/zod"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { useForm, Controller } from "react-hook-form"
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-8">
        <FormField
          control={form.control}
          name="typeOfContact"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Razão de Contacto</FormLabel>
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
            <FormItem>
              <FormLabel>Nome</FormLabel>
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
            <FormItem>
              <FormLabel>Email</FormLabel>
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
                <FormItem>
                  <FormLabel>Cidade</FormLabel>
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
                <FormItem>
                  <FormLabel>Matrícula do Veículo</FormLabel>
                  <FormControl>
                    <Input placeholder="AB-11-BA" {...field} />
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
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Olá, tudo bem?"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
