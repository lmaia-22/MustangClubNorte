"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { OrbitingMetrics } from "@/components/orbiting_metrics";
import { ResumeCard } from "@/components/resume-card";
import { TeamMemberCard } from "@/components/team-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import { MarqueeDemo } from "@/components/portfolio";
import { ProfileForm } from "@/components/contact";

const BLUR_FADE_DELAY = 1.00;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
        <section id="hero">
          <div className="mx-auto w-full space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`${DATA.name}`} />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY} 
                  text={DATA.description} />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="w-44 h-36">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Sobre
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Sobre Nós e Quem Somos
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Como nascemos e como vamos viver
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert mt-4">
              {DATA.summary}
            </Markdown>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert">
              {DATA.summary1}
            </Markdown>
          </BlurFade>
        </section>
        <section id="misson">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Missão
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Os principais objetivos do clube.
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Como todos os bons projetos devem existir objectivos e nós temos estes.
                </p>
              </div>
            </div>
          </BlurFade>
          <ul className="list-inside list-square mt-4">
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <li key="mission1" className="max-w-full text-pretty font-sans text-base text-muted-foreground">
                {DATA.mission1}
              </li>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <li key="mission2" className="max-w-full text-pretty font-sans text-base text-muted-foreground">
                {DATA.mission2}
              </li>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <li key="mission3" className="max-w-full text-pretty font-sans text-base text-muted-foreground">
                {DATA.mission3}
              </li>
            </BlurFade>
          </ul>
        </section>
        <section id="metrics">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Clube
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    O nosso Clube
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {DATA.metrics}
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <OrbitingMetrics></OrbitingMetrics>
            </BlurFade>
          </div>
        </section>
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-5">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Conquistas
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Lista de Cidades Conquistadas pelo Clube
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Devagar se vai ao longe, vamos conquisrtar Portugal inteiro!
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="flex flex-wrap gap-2 mx-auto">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={id} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="team">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Equipa
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Os membros da Administração
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Conheça os carros e nomes dos administradores.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="flex flex-col-2  items-center justify-center mx-auto gap-4 mt-4">
              {DATA.team.map((team, id) => (
                <BlurFade key={id+1} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <TeamMemberCard
                    key={id}
                    name={team.name}
                    role={team.role}
                    picture={team.image}
                    social={team.instagram} />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Portfolio
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Espreitem as nossas melhores &apos;chapas&apos;!
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    As fotografias dos passeos e eventos tiradas pelo fotografio do Clube e também alguns membros.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="flex gap-3 s mx-auto">
              <MarqueeDemo />
            </div>
          </div>
        </section>
        <section id="hackathons">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Passeios anteriores
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    O nosso Histórico
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Os passeios efetuados desde a criação do Clube.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                {DATA.hackathons.map((project, id) => (
                  <BlurFade
                    key={project.title + project.dates}
                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                  >
                    <HackathonCard
                      title={project.title}
                      description={project.description}
                      location={project.location}
                      dates={project.dates}
                      image={project.image}
                      links={project.links} />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    FAQ
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Questões mais frequentes.
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Como tirar as dúvidas de forma rápida.
                  </p>
                </div>
              </div>
            </BlurFade>
            {DATA.faq.map((work, id) => (
              <BlurFade
                key={work.question}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.question}
                  title={work.question}
                  description={work.answer} />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contactos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Entre em contacto
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-4">
                  Quer entrar para o clube?{" "}
                  Quer fazer alguma parceria? Quer saber mais sobre o Clube?
                </p>
                <ProfileForm />
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
  );
}
