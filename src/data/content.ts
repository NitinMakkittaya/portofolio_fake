export const site = {
  name: "Veln",
  year: "2026",
  tagline: "FRAMES THAT REFUSE TO STAY STILL",
  email: "studio@veln.art",
  hero: {
    kicker: "between",
    left: "Graphite",
    right: "Cinema",
  },
  manifesto: {
    titleLead: "Let the",
    title: "Line Live",
    body: [
      "Drawing has always been the first machine. Before the solver, before the volume, a mark on paper decides what the light is allowed to know.",
      "The sketches are not discarded. They are the bones. Every still on this site began as graphite and was asked, slowly, to breathe.",
    ],
    caption: "FIELD OF MIND — 18 JUNE 2026",
  },
};

export type WorkImage = {
  src: string;
  sketch?: string;
  alt: string;
  size: "xs" | "sm" | "md" | "lg" | "xl" | "wide";
};

export type Collection = {
  slug: string;
  title: string;
  date: string;
  category: "Portrait" | "VFX" | "CGI" | "Sketch" | "Animation";
  excerpt: string;
  body: string[];
  cover: string;
  layout: "a" | "b" | "c";
  images: WorkImage[];
};

export const collections: Collection[] = [
  {
    slug: "mira",
    title: "Mira",
    date: "28 OCTOBER 2026",
    category: "Portrait",
    excerpt:
      "A face still holds more weather than any simulation. Mira sat for graphite first, then for the camera of light.",
    body: [
      "Ordinary portraiture, asked to remain strange. The sitting began with a 6B on cream stock — three hours, no talking — then a second day under split theatrical lights.",
      "The CGI skin is not a replacement. It is a second drawing, made of specular and pore, laid over the first until they argue.",
    ],
    cover: "/images/mira-beauty.jpg",
    layout: "a",
    images: [
      { src: "/images/mira-sketch.jpg", alt: "Graphite study of Mira", size: "sm" },
      { src: "/images/mira-hat.jpg", sketch: "/images/mira-hat-sk.jpg", alt: "Mira with hat, split light", size: "lg" },
      { src: "/images/mira-beauty.jpg", sketch: "/images/mira-beauty-sk.jpg", alt: "Mira beauty still, crimson and teal", size: "md" },
      { src: "/images/mira-recline.jpg", sketch: "/images/mira-recline-sk.jpg", alt: "Mira reclining in red practical light", size: "wide" },
      { src: "/images/mira-beauty-sk.jpg", alt: "Pencil translation of the beauty still", size: "sm" },
    ],
  },
  {
    slug: "thorn-choir",
    title: "Thorn Choir",
    date: "14 OCTOBER 2026",
    category: "VFX",
    excerpt:
      "Neon magical light, a veil, a forest that never existed. Arcane studies of a figure the pencil named before the renderer did.",
    body: [
      "A series of stills and a short volume pass in a forest built from scans of thorn and wet bark. The halo is not jewelry. It is a rig of thin emitters, then a drawing of the same rig.",
      "See the graphite under the cobalt. The veil was charcoal before it was a shader.",
    ],
    cover: "/images/thorn-halo.jpg",
    layout: "b",
    images: [
      { src: "/images/thorn-halo.jpg", sketch: "/images/thorn-halo-sk.jpg", alt: "Veiled figure with sunburst halo", size: "xl" },
      { src: "/images/thorn-antlers.jpg", sketch: "/images/thorn-antlers-sk.jpg", alt: "Antlered cloak in a night forest", size: "lg" },
      { src: "/images/thorn-antlers-sk.jpg", alt: "Graphite study, antlered figure", size: "sm" },
      { src: "/images/thorn-halo-sk.jpg", alt: "Pencil halo study", size: "sm" },
      { src: "/images/thorn-wide.jpg", alt: "Wide crop, forest still", size: "wide" },
    ],
  },
  {
    slug: "pulse",
    title: "Pulse",
    date: "19 SEPTEMBER 2026",
    category: "Animation",
    excerpt:
      "Gesture drawings that refuse to sit. Motion captured, then drawn back on top of the capture until the body is both true and invented.",
    body: [
      "A dancer, a room of magenta practicals, and a stack of charcoal gesture pages timed to the same breath. The composite keeps the smear of the pencil.",
      "Animation here is not a cycle. It is a sitting that happens to move.",
    ],
    cover: "/images/pulse-recline.jpg",
    layout: "c",
    images: [
      { src: "/images/pulse-recline.jpg", sketch: "/images/mira-recline-sk.jpg", alt: "Pulse still, body in magenta light", size: "wide" },
      { src: "/images/pulse-beauty.jpg", sketch: "/images/mira-beauty-sk.jpg", alt: "Pulse portrait grade", size: "lg" },
      { src: "/images/mira-recline-sk.jpg", alt: "Gesture drawing for Pulse", size: "md" },
    ],
  },
  {
    slug: "iron-sleep",
    title: "Iron Sleep",
    date: "23 AUGUST 2026",
    category: "CGI",
    excerpt:
      "Skin dusted in metallic graphite. Two figures who know what weight looks like when it is only light.",
    body: [
      "A lookdev study of powder, oil, and cold specular. The metal is not gold. It is the silver of a 6B pushed until it shines.",
      "Sculpture first, then the renderer, then the pencil again on top of the beauty pass.",
    ],
    cover: "/images/iron-hat.jpg",
    layout: "a",
    images: [
      { src: "/images/iron-hat.jpg", sketch: "/images/mira-hat-sk.jpg", alt: "Iron Sleep, metallic graphite portrait", size: "lg" },
      { src: "/images/iron-artist.jpg", sketch: "/images/artist-sk.jpg", alt: "Graphite-dusted studio portrait", size: "md" },
      { src: "/images/artist-sk.jpg", alt: "Pencil study for Iron Sleep", size: "sm" },
      { src: "/images/mira-hat-sk.jpg", alt: "Hat study in graphite", size: "sm" },
    ],
  },
  {
    slug: "field-of-mind",
    title: "Field of Mind",
    date: "18 JUNE 2026",
    category: "CGI",
    excerpt:
      "A landscape that is half paper, half volume. The portal is a lens. The field is a drawing that learned weather.",
    body: [
      "Built as a circular aperture in a black studio — a concrete iris looking onto a field that does not exist. The walk was animated, then painted back with grain.",
      "The point was never the flowers. It was the rim: the place a person can sit between a room and a world.",
    ],
    cover: "/images/field-away.jpg",
    layout: "b",
    images: [
      { src: "/images/field-open.jpg", sketch: "/images/field-open-sk.jpg", alt: "Woman in the ochre field, arms open", size: "xl" },
      { src: "/images/field-away.jpg", alt: "Walking away through the field", size: "wide" },
      { src: "/images/field-detail.jpg", alt: "Detail, wildflowers and hill", size: "md" },
      { src: "/images/portal-inner.jpg", alt: "Through the portal", size: "sm" },
      { src: "/images/field-open-sk.jpg", alt: "Graphite translation of the field", size: "md" },
    ],
  },
  {
    slug: "graphite",
    title: "Graphite",
    date: "ONGOING",
    category: "Sketch",
    excerpt:
      "The plates the rest of the work is built on. Observational drawings, no solver, no apology.",
    body: [
      "Cream stock, 4B to 8B, a kneaded eraser that is more wound than tool. These pages are not concept. They are the work.",
      "Hover any finished still on this site and the drawing is still there, waiting under the light.",
    ],
    cover: "/images/mira-sketch.jpg",
    layout: "c",
    images: [
      { src: "/images/mira-sketch.jpg", alt: "Portrait study in graphite", size: "lg" },
      { src: "/images/artist-sk.jpg", alt: "Studio self-study", size: "md" },
      { src: "/images/thorn-antlers-sk.jpg", alt: "Antlered figure, pencil", size: "md" },
      { src: "/images/mira-beauty-sk.jpg", alt: "Beauty still, drawn back", size: "sm" },
      { src: "/images/field-open-sk.jpg", alt: "Field, graphite", size: "wide" },
    ],
  },
];

export const tools = [
  "Graphite 2H–8B",
  "Charcoal & cream stock",
  "Blender",
  "Houdini",
  "Nuke",
  "Mari",
  "Maya",
  "Flame",
];

export const stages = [
  {
    id: "mark",
    label: "Mark",
    title: "Graphite",
    copy: "Every creature, face, and field is drawn until the weight of the line is true. No concept dump. A sitting.",
  },
  {
    id: "bone",
    label: "Bone",
    title: "Topology",
    copy: "The drawing is read as structure. Wire, edge flow, the skeleton the light will have to obey.",
  },
  {
    id: "clay",
    label: "Clay",
    title: "Lookdev",
    copy: "Pore, powder, metal, paper tooth. Materials are mixed until they remember the pencil.",
  },
  {
    id: "light",
    label: "Light",
    title: "Composite",
    copy: "Grain, veil, the last drawing on top of the beauty pass. Cinema, with the sketch still audible.",
  },
];

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}

export const reelFrames = [
  "/images/hero-portal.jpg",
  "/images/field-open.jpg",
  "/images/mira-hat.jpg",
  "/images/mira-beauty.jpg",
  "/images/thorn-halo.jpg",
  "/images/thorn-antlers.jpg",
  "/images/pulse-recline.jpg",
  "/images/iron-hat.jpg",
  "/images/mira-sketch.jpg",
  "/images/field-away.jpg",
];
