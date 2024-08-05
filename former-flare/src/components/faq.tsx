import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  // Define an array of items for the accordion
  const accordionItems = [
    {
      value: "item-1",
      trigger: "Como me posso juntar ao Clube?",
      content: "Basta preenhcer o formulário no fim da página e desde que cumpra os requisitos entramos em contacto consigo.",
    },
    {
      value: "item-2",
      trigger: "Quais são as condições necessárias para pertencer ao clube?",
      content: "Ser o propietário de um mustang em condições de circular na estrada e auto-estrada com o devido seguro e viver no Norte de Portugal.",
    },
    {
      value: "item-3",
      trigger: "Posso ser expulso do clube?",
      content: "Sim, pode ser expulso se houver razão para tal e a adminsitração assim o decidir.",
    },
    {
      value: "item-4",
      trigger: "Posso ser expulso do clube?",
      content: "Sim, pode ser expulso se houver razão para tal e a adminsitração assim o decidir.",
    },
    {
      value: "item-5",
      trigger: "Há regras do clube?",
      content: "Sim, se cumprir os requisitos depois partilhamos o regulamento interno do clube.",
    },
    {
      value: "item-6",
      trigger: "Quantos eventos há por ano?",
      content: "No mínimo 12 eventos ao ano.",
    },
    {
      value: "item-7",
      trigger: "Os eventos são todos pagos?",
      content: "Cada membro paga as suas despesas.",
    },
    {
      value: "item-8",
      trigger: "Posso levar quem quiser para os eventos?",
      content: "Sim claro, desde que o número de pessoas seja previamente notificado.",
    },
    {
      value: "item-9",
      trigger: "Existe alguma restrição?",
      content: "Carros por restaurar ou ainda por arranjar ou reparar não podem pertencer ao clube.",
    },
  ];
  
  // AccordionDemo component
  export function AccordionFaq() {
    return (
      <Accordion type="single" collapsible className="w-full mt-3">
        {accordionItems.map((item) => (
          <AccordionItem className="border mb-4 rounded-lg" key={item.value} value={item.value}>
            <AccordionTrigger className="flex justify-between items-center w-full p-4 bg-gray-100 font-bold hover:bg-gray-200 transition-colors">{item.trigger}</AccordionTrigger>
            <AccordionContent className="p-4 bg-white">{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }
  