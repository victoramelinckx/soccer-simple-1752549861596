
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Juega Fútbol con Diversión y Pasión" subheadline="Enseñamos fútbol a niños con un enfoque simple y apasionado, eliminado el estrés de los padres." cta1="Únete Hoy" />
<How step1Title="Registra a tu hijo" step1Desc="Inscripción fácil para niños interesados en soccer." step2Title="Entrenamiento divertido" step2Desc="Sesiones creativas que capturan el interés de los niños." step3Title="Comunicamos avances" step3Desc="Informamos a padres sobre el progreso de sus hijos." />
<Aboutus headline="Soccer Simple: Diversión y Habilidad" subheadline="Enseñamos fútbol sencillo, sin estrés parental." beneficiotitulo1="Aprendizaje Divertido" beneficio1="Fútbol accesible y fácil para niños." beneficiotitulo2="Sin Estrés" beneficio2="Metodología amigable para padres involucrados." />
<Services heading="Soccer Simple: Juego Fácil, Diversión Máxima" description="Enseñamos soccer efectivo a tus hijos y reducimos tus preocupaciones." services={[{"name":"Clases Introductorias","icon":"soccer-ball","description":"Inicia con fundamentos básicos del soccer."},{"name":"Entrenamiento Divertido","icon":"smile","description":"Métodos lúdicos para aprender mientras juegan."},{"name":"Técnica Personalizada","icon":"person","description":"Adaptamos técnicas a cada niño."},{"name":"Sesiones de Grupo","icon":"group","description":"Fomenta el trabajo en equipo y la amistad."},{"name":"Comentarios Continuos","icon":"comment","description":"Retroalimentación constante para mejorar."},{"name":"Mini Partidos","icon":"trophy","description":"Práctica real en un entorno seguro."}]} />
<BeforeAndAfter subheadline="Transformamos tus habilidades en el campo con resultados visibles garantizados." />
<Faq faqs={[{"pregunta":"¿Cómo puedo aprender a jugar soccer simple con Soccer Simple?","respuesta":"En Soccer Simple, te enseñamos a jugar soccer de manera fácil y divertida. Nuestros entrenadores son expertos y te ayudarán a mejorar tus habilidades mientras te diviertes. ¡Ven a jugar con nosotros y descubre lo divertido que puede ser el soccer!"},{"pregunta":"¿Qué beneficios obtengo al jugar soccer con Soccer Simple?","respuesta":"Al jugar con Soccer Simple, te volverás más fuerte, harás nuevos amigos y aprenderás a trabajar en equipo. Además, mejorarás tus habilidades de soccer de manera efectiva. ¡Es el lugar perfecto para crecer como jugador y divertirte mucho!"},{"pregunta":"¿Qué pasa si mis padres son muy problemáticos?","respuesta":"En Soccer Simple, entendemos que tus padres quieren lo mejor para ti. Trabajamos en equipo con ellos para asegurar que te diviertas y aprendas en un ambiente positivo. Nuestra meta es que todos estén contentos y apoyen tu amor por el soccer."},{"pregunta":"¿Cuáles son los servicios que ofrece Soccer Simple?","respuesta":"Soccer Simple ofrece clases de soccer para niños de 5 a 10 años, entrenamientos personalizados y partidos amistosos. Todo está diseñado para que tú aprendas jugando y te diviertas al máximo con tus amigos."},{"pregunta":"¿Cómo es el entrenamiento en Soccer Simple?","respuesta":"El entrenamiento en Soccer Simple es divertido y educativo. Usamos juegos y ejercicios diseñados para que mejores tus habilidades de soccer sin darte cuenta. ¡Es como jugar con tus amigos mientras aprendes a ser mejor jugador!"}]} />
<BookAppointment 
                      heading="Aprende Soccer Simple y Efectivo" 
                      description="Descubre cómo el juego puede ser divertido y educativo para tus niños. Inscríbelos hoy y ve cómo crecen mientras juegan."
                      formPostUrl="api/contact-us"
                      projectId="Z5hsrrfCl1dzcgsersz1wIun6jE2"
                    />
    </main>
  );
}
