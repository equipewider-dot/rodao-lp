/** Dados de contato/endereço em um lugar só — trocar aqui propaga na página inteira. */
export const site = {
  name: 'Rodão Pneus',
  whatsapp: 'https://wa.me/5527000000000',
  address: {
    line1: 'Av. Brg. Eduardo Gomes, 200',
    line2: 'Jardim Limoeiro, Serra - ES',
    zip: '29163-396',
  },
  /* `href` no formato E.164 para o discador do celular; `label` é o que aparece
     na tela. DDD 27 assumido pela praça (Serra-ES) — CONFERIR com o cliente. */
  phones: [
    { label: '(27) 3328-0202', href: 'tel:+552733280202' },
    { label: '(27) 3218-3717', href: 'tel:+552732183717' },
  ],
  hours: {
    weekdays: '7:30 às 17:30',
    saturday: '7:30 às 12:00',
  },
  mapsEmbed:
    'https://www.google.com/maps?q=Av.+Brg.+Eduardo+Gomes,+200+-+Jardim+Limoeiro,+Serra+-+ES,+29163-396&output=embed',
  social: {
    instagram: 'https://www.instagram.com/rodaopneus',
    facebook: 'https://www.facebook.com/rodaopneus',
    /* CONFERIR: veio só como "YouTube: Rodão Pneus", sem endereço. Este é o
       formato de handle, deduzido a partir das outras redes. */
    youtube: 'https://www.youtube.com/@rodaopneus',
    linkedin: 'https://www.linkedin.com/company/rodaopneus',
  },
} as const;
