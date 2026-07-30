import { ComoFunciona } from '@/components/sections/ComoFunciona';
import { Faq } from '@/components/sections/Faq';
import { Footer } from '@/components/sections/Footer';
import { Hero } from '@/components/sections/Hero';
import { Nav } from '@/components/sections/Nav';
import { PorQueConfiar } from '@/components/sections/PorQueConfiar';
import { ProvaSocial } from '@/components/sections/ProvaSocial';
import { Servicos } from '@/components/sections/Servicos';
import { Sinais } from '@/components/sections/Sinais';
import { Unidades } from '@/components/sections/Unidades';

export default function Home() {
  // `overflow-x: clip` e não `hidden`: os dois cortam o transbordo lateral, mas
  // `hidden` cria um contexto de rolagem e mata o `sticky` da nav.
  return (
    <div style={{ position: 'relative', background: 'var(--rp-black)', overflowX: 'clip' }}>
      <Nav />
      <Hero />
      <Sinais />
      <Servicos />
      <ComoFunciona />
      <PorQueConfiar />
      <ProvaSocial />
      <Faq />
      <Unidades />
      <Footer />
    </div>
  );
}
