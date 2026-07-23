import type { Metadata } from "next";
import TechnicalRolePage from "@/components/careers/TechnicalRolePage";

export const metadata: Metadata = {
  title: "DevOps Engineer | Careers | HydroDrive USA",
  description:
    "Join HydroDrive LLC as a DevOps Engineer and own the reliability, database operations, CI/CD, observability, and recovery practices behind our business applications.",
};

export default function DevOpsEngineerPage() {
  const responsibilities = [
    "Own the reliability and production delivery of HydroDrive's operations copilot, fleet and calendar platform, voice-attendant backend, and supporting admin applications.",
    "Design and maintain CI/CD workflows that run tests and builds, validate configuration, apply database migrations safely, promote releases across environments, and support fast rollback.",
    "Operate PostgreSQL under serverless, scheduled-job, and high-concurrency workloads by tuning connection pools, PgBouncer modes, indexes, transactions, timeouts, and query patterns.",
    "Investigate database downtime and degraded performance, including connection exhaustion, lock contention, slow queries, failed migrations, schema drift, missing columns, network failures, and provider incidents.",
    "Build observability across application, database, AI-provider, telephony, and WebSocket paths using structured logs, service health checks, metrics, traces, dashboards, service-level objectives, and actionable alerts.",
    "Manage deployments and runtime configuration across Vercel, Fly.io, Docker, managed PostgreSQL, background jobs, webhooks, and long-lived real-time voice connections.",
    "Maintain tested backup and disaster-recovery procedures, perform restore drills, define recovery objectives, and protect database dumps and operational data containing customer information.",
    "Establish secure secret-management and environment-promotion practices for database credentials, auth keys, telephony accounts, AI providers, email, and other third-party integrations.",
    "Lead incident response, write runbooks and post-incident reviews, identify recurring failure patterns, and automate preventative checks with the Software Development Engineer.",
  ];

  const requiredExperience = [
    "3+ years of professional DevOps, Site Reliability, platform, cloud infrastructure, or production engineering experience.",
    "Deep operational experience with PostgreSQL, including connection pooling, concurrent reads and writes, locks, indexes, query plans, migrations, backups, restores, and diagnosing outages or severe latency.",
    "Hands-on CI/CD experience with GitHub Actions or a comparable system, including automated tests, build gates, environment-specific configuration, migrations, deployment verification, and rollback procedures.",
    "Strong Linux, Docker, networking, DNS, TLS, HTTP, webhook, and load-balancing fundamentals, with the ability to trace failures across multiple managed services.",
    "Experience operating cloud or platform services such as Vercel, Fly.io, Supabase, Neon, or comparable application and managed-database providers.",
    "Experience implementing production monitoring and alerting with useful logs and metrics for API availability, database health, latency, error rates, resource saturation, and external dependencies.",
    "Scripting or programming ability in Bash, Python, or TypeScript for deployment automation, health checks, data-safe maintenance, and incident investigation.",
    "A security-first approach to secrets, least-privilege access, encrypted backups, dependency updates, and customer or employee data.",
  ];

  const preferredExperience = [
    "Serverless PostgreSQL patterns, Prisma migration workflows, PgBouncer transaction pooling, pgvector, and safe production-to-local data synchronization.",
    "Highly available real-time services using WebSockets, always-on containers, asynchronous Python, telephony webhooks, or streaming audio.",
    "Reliability work involving Twilio, AI model providers, speech-to-text or text-to-speech services, rate limits, usage monitoring, and third-party fallback strategies.",
    "Database disaster recovery, encrypted automated backups, restore testing, recovery point and recovery time planning, and incident exercises.",
    "Performance and cost optimization across application compute, database connections, storage, AI token usage, and telephony workloads.",
  ];

  const impact = [
    "Your work keeps the systems used for reservations, fleet decisions, employee coordination, support, and phone calls available when the business needs them.",
    "You will turn deployments, database changes, backups, and incident response into repeatable engineering systems instead of one-off procedures.",
    "You will help a growing software portfolio scale safely as application traffic, operational data, AI usage, and real-time customer interactions increase.",
  ];

  return (
    <TechnicalRolePage
      title="DevOps Engineer"
      overview="You will make the applications behind HydroDrive dependable, observable, secure, and straightforward to release. This is a hands-on reliability role spanning CI/CD, managed platforms, PostgreSQL operations, real-time voice infrastructure, incident response, and disaster recovery. You will work closely with the Software Development Engineer so new capabilities reach production without compromising data integrity or business continuity."
      responsibilities={responsibilities}
      requiredExperience={requiredExperience}
      preferredExperience={preferredExperience}
      impact={impact}
    />
  );
}
