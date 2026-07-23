import type { Metadata } from "next";
import TechnicalRolePage from "@/components/careers/TechnicalRolePage";

export const metadata: Metadata = {
  title: "Software Development Engineer | Careers | HydroDrive USA",
  description:
    "Join HydroDrive LLC as a remote, full-time Software Development Engineer in an AI-forward daily workflow. $120,000-$140,000 per year.",
};

export default function SoftwareDevelopmentEngineerPage() {
  const responsibilities = [
    "Continuously develop and improve HydroDrive's internal operations copilot, fleet and calendar platform, and real-time voice-attendant systems based on day-to-day business needs.",
    "Build reliable, accessible full-stack features with React, Next.js, TypeScript, server-rendered interfaces, route handlers, and well-structured backend APIs.",
    "Develop and maintain Python and FastAPI services for asynchronous workflows, WebSockets, real-time audio, telephony events, and background processing.",
    "Apply AI technologies where they create measurable business value, including LLM APIs, retrieval-augmented generation, embeddings and vector search, tool calling, structured outputs, prompt design, evaluations, and human-in-the-loop safeguards.",
    "Use AI coding assistants and agentic development tools throughout daily work for research, planning, implementation, debugging, test creation, code review, and documentation while independently validating their output.",
    "Design PostgreSQL data models, indexes, queries, transactions, migrations, and backfills that preserve data integrity as operational workflows evolve.",
    "Integrate and troubleshoot third-party systems such as Twilio, speech-to-text and text-to-speech providers, Turo data feeds, Lark, email delivery, and object storage.",
    "Strengthen authentication, role-based authorization, input validation, auditability, privacy controls, tests, and technical documentation across the applications.",
    "Partner directly with operations staff and the DevOps Engineer to turn recurring manual work into maintainable software and release changes safely.",
  ];

  const requiredExperience = [
    "3+ years of professional software development experience delivering and maintaining production web applications or backend services.",
    "Strong TypeScript and JavaScript experience, including React and a modern full-stack framework such as Next.js.",
    "Backend API development experience in Node.js/TypeScript or Python, with a working understanding of asynchronous programming and RESTful service design.",
    "Hands-on PostgreSQL experience covering relational data modeling, SQL, indexes, transactions, schema migrations, query debugging, and an ORM such as Prisma.",
    "Practical experience applying AI in production software, such as integrating language-model APIs, retrieval or vector search, tool/function calling, prompt contracts, guardrails, or evaluation workflows.",
    "Demonstrated fluency with modern AI coding assistants and agents as part of a daily engineering workflow, including writing effective instructions, providing useful context, reviewing generated changes critically, and correcting failures.",
    "Experience integrating authenticated third-party APIs, webhooks, file or object storage, and external services while handling retries, timeouts, partial failures, and sensitive credentials.",
    "A track record of debugging across frontend, backend, database, and integration boundaries and adding focused automated tests to prevent regressions.",
    "Clear written communication and the ability to translate an operational problem into a scoped technical solution.",
  ];

  const preferredExperience = [
    "Python, FastAPI, asyncpg, real-time WebSockets, or streaming media pipelines.",
    "Voice AI or telephony systems using Twilio, speech recognition, speech synthesis, call routing, recording, or live transcription.",
    "Hybrid search, PostgreSQL full-text search, pgvector, embeddings lifecycle management, AI quality benchmarking, or latency and token-cost optimization.",
    "NextAuth or custom session authentication, role-based access control, bilingual products, and security-sensitive internal tools.",
    "Chrome or other browser-extension development, including Manifest V3, content scripts, authenticated extension-to-API communication, and extension release workflows.",
    "Vercel, Fly.io, Docker, Supabase or another managed PostgreSQL platform, CI pipelines, and production incident support.",
  ];

  const impact = [
    "Your work will directly reduce manual coordination for reservations, vehicles, scheduling, support, and customer communications.",
    "You will shape how HydroDrive uses AI responsibly in real operational workflows instead of building isolated demos.",
    "You will have end-to-end ownership and close feedback loops with the people who use the software every day.",
  ];

  return (
    <TechnicalRolePage
      title="Software Development Engineer"
      compensation="$120,000 - $140,000 per year"
      overview="You will own the continuous development of the applications HydroDrive uses to run the business. The role spans staff-facing web products, backend services, operational databases, AI-assisted support, and real-time voice experiences. This is an AI-forward engineering environment, and you should be highly comfortable using AI assistants and coding agents to complete daily work efficiently while applying strong independent judgment. You should enjoy working across product and infrastructure boundaries, learning how the operation functions, and shipping practical improvements from idea through production."
      responsibilities={responsibilities}
      requiredExperience={requiredExperience}
      preferredExperience={preferredExperience}
      impact={impact}
    />
  );
}
