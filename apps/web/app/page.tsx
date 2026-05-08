import styles from "./page.module.css";

const techStack = {
  mobile: [
    "React Native + Expo + TypeScript",
    "NativeWind + React Navigation",
    "Zustand + React Hook Form + Zod",
    "Expo Camera / ImagePicker / Video / Notifications / Location",
    "i18next (English + Hindi)"
  ],
  web: [
    "Next.js 14 App Router + TypeScript",
    "Tailwind CSS + shadcn/ui",
    "Recharts + React PDF",
    "Zustand + React Hook Form + Zod"
  ],
  backend: [
    "Node.js + Express REST API",
    "PostgreSQL + Prisma ORM",
    "Redis + BullMQ",
    "S3/Firebase Storage, FCM, Twilio",
    "Stripe + Razorpay + SendGrid",
    "JWT + Refresh Tokens + Zod validation"
  ],
  infra: ["Vercel + Railway/Render", "Cloudflare CDN", "GitHub Actions CI/CD"]
};

const keyModules = [
  "Authentication with OTP + free trial activation",
  "Client dashboard with safety score ring and reminders",
  "Audit wizard (Sections A-E) with media capture",
  "System and expert report workflows",
  "Paid service booking with dealer auto-assignment",
  "Emergency SOS with geolocation and call center feed",
  "Dealer module, subscriptions, reminders, and IoT hooks",
  "Admin panel with KPIs, queue, users, emergency, and analytics"
];

const apiGroups = [
  "Auth: /api/auth/*",
  "User: /api/user/*",
  "Premises: /api/premises/*",
  "Audits + Media + Reports: /api/audits/*, /api/reports/*",
  "Subscriptions + Razorpay webhook: /api/subscriptions/*",
  "Services + Bookings: /api/services/*, /api/bookings/*",
  "Emergency + Dealers + Reminders: /api/emergency/*, /api/dealers/*, /api/reminders/*",
  "IoT + Admin APIs: /api/iot/*, /api/admin/*"
];

const seedData = [
  "Fire station database for top 100 Indian cities",
  "Full questionnaire JSON with standards mapping",
  "Dealer seeds for Pune, Mumbai, Delhi, Hyderabad, Bengaluru",
  "Plan configs: FREE_TRIAL and BASIC (Rs. 999/year)",
  "Default superadmin account"
];

function SectionCard(props: { title: string; items: string[] }) {
  return (
    <section className={styles.card}>
      <h3 className={styles.cardTitle}>{props.title}</h3>
      <ul className={styles.list}>
        {props.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>FireSafe Pro</h1>
          <p className={styles.heroText}>
            India-first remote fire audit platform for compliance reporting, training booking, and emergency
            alerting. Designed to replace physical-only safety audits with guided digital evidence and expert review.
          </p>
        </header>

        <div className={styles.grid}>
          <SectionCard title="Mobile Stack" items={techStack.mobile} />
          <SectionCard title="Web Dashboard Stack" items={techStack.web} />
          <SectionCard title="Backend Stack" items={techStack.backend} />
          <SectionCard title="Infrastructure" items={techStack.infra} />
        </div>

        <SectionCard title="App Architecture & Core Modules" items={keyModules} />
        <SectionCard title="API Surface" items={apiGroups} />
        <SectionCard title="Seed Data Requirements" items={seedData} />

        <section className={styles.card}>
          <h3 className={styles.cardTitleNoTop}>Database Schema (Current)</h3>
          <p className={styles.schemaText}>
            Full schema is implemented in Prisma and includes User, Subscription, Premise, Audit, MediaFile, Report,
            Dealer, EmergencyAlert, and Reminder models.
          </p>
          <pre className={styles.schemaPre}>
            {`// packages/api/prisma/schema.prisma
model User { ... }
model Subscription { ... }
model Premise { ... }
model Audit { ... }
model MediaFile { ... }
model Report { ... }
model Dealer { ... }
model EmergencyAlert { ... }
model Reminder { ... }`}
          </pre>
        </section>
      </div>
    </main>
  );
}
