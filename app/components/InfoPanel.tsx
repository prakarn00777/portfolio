"use client";
import { useEffect } from "react";

type Lang = "en" | "th";

interface InfoPanelProps {
  planetId: string | null;
  lang: Lang;
  onClose: () => void;
}

interface PanelEntry {
  badge: string;
  badgeColor: string;
  title: string;
  html: string;
}

const panelData: Record<string, Record<Lang, PanelEntry>> = {
  core: {
    en: {
      badge: "About Me",
      badgeColor: "#f59e0b",
      title: "Prakarn Janloy",
      html: `
        <div style="text-align:center;margin-bottom:18px;">
          <img src="/profile-prakarn.jpg" alt="Prakarn Janloy" style="width:100px;height:100px;border-radius:50%;object-fit:cover;border:2px solid rgba(108,60,224,0.4);box-shadow:0 0 20px rgba(108,60,224,0.2);" />
        </div>
        <p>Application Support with <strong>3+ years in Healthcare IT</strong>, managing post-sales operations for Clinic Management Systems serving <strong>300–400 clinics</strong> nationwide.</p>
        <p>Experienced in identifying operational needs and leveraging <strong>AI-assisted tools</strong> to design and deliver internal systems — from concept to production.</p>
        <div class="stat-row">
          <div class="stat-box"><div class="num">400+</div><div class="lbl">Clinics</div></div>
          <div class="stat-box"><div class="num">200+</div><div class="lbl">Tickets/mo</div></div>
          <div class="stat-box"><div class="num">3+</div><div class="lbl">Years</div></div>
        </div>
        <div class="tags">
          <span class="tag purple">Healthcare IT</span>
          <span class="tag cyan">AI-Assisted Dev</span>
          <span class="tag green">Workflow Design</span>
          <span class="tag orange">Team Coordination</span>
        </div>
      `,
    },
    th: {
      badge: "ข้อมูลทั่วไป",
      badgeColor: "#f59e0b",
      title: "ปราการ จันทร์ลอย",
      html: `
        <div style="text-align:center;margin-bottom:18px;">
          <img src="/profile-prakarn.jpg" alt="ปราการ จันทร์ลอย" style="width:100px;height:100px;border-radius:50%;object-fit:cover;border:2px solid rgba(108,60,224,0.4);box-shadow:0 0 20px rgba(108,60,224,0.2);" />
        </div>
        <p>Application Support ประสบการณ์ <strong>3+ ปีใน Healthcare IT</strong> ดูแลระบบจัดการคลินิกหลังการขาย ให้บริการคลินิก <strong>300–400 แห่ง</strong> ทั่วประเทศ</p>
        <p>มีความสามารถในการวิเคราะห์ความต้องการ และใช้ <strong>AI-assisted tools</strong> ออกแบบและส่งมอบระบบภายใน ตั้งแต่ concept จนถึง production</p>
        <div class="stat-row">
          <div class="stat-box"><div class="num">400+</div><div class="lbl">คลินิก</div></div>
          <div class="stat-box"><div class="num">200+</div><div class="lbl">Ticket/เดือน</div></div>
          <div class="stat-box"><div class="num">3+</div><div class="lbl">ปี</div></div>
        </div>
        <div class="tags">
          <span class="tag purple">Healthcare IT</span>
          <span class="tag cyan">AI-Assisted Dev</span>
          <span class="tag green">Workflow Design</span>
          <span class="tag orange">Team Coordination</span>
        </div>
      `,
    },
  },
  experience: {
    en: {
      badge: "Work History",
      badgeColor: "#a78bfa",
      title: "Experience",
      html: `
        <div class="exp-item" style="border-color:#06b6d4">
          <div class="date">2025 — Present</div>
          <div class="company">Atiz Innovation Co., Ltd.</div>
          <div class="role">Application Support — Clinic Management System</div>
          <ul>
            <li>Supporting dental, medical, and aesthetic clinics with deployment, training, and issue resolution.</li>
            <li>Initiated internal CRM system — from requirements to production with AI-assisted tools including server setup.</li>
            <li>Designed customer management, lead tracking, sales pipeline, and LINE notification features.</li>
          </ul>
        </div>
        <div class="exp-item">
          <div class="date">2022 — 2025</div>
          <div class="company">Cliniter</div>
          <div class="role">Application Support — Dental Clinic Management System</div>
          <ul>
            <li>Managed post-sales for 300–400 dental clinics: data migration, installation, training, support.</li>
            <li>Coordinated 4-person team handling 100–200 tickets/month.</li>
            <li>Designed workflows using Airtable and Jotform; tracked dev progress via Jira.</li>
          </ul>
        </div>
        <div class="exp-item" style="border-color:#c026d3">
          <div class="date">2018 — 2020</div>
          <div class="company">Binary Power Engineering</div>
          <div class="role">Fault Report Center — MRT Systems</div>
          <ul>
            <li>Managed electrical fault reports via SAP for MRT subway stations.</li>
            <li>Liaison between engineering, station ops, and maintenance teams.</li>
          </ul>
        </div>
      `,
    },
    th: {
      badge: "ประวัติการทำงาน",
      badgeColor: "#a78bfa",
      title: "ประสบการณ์",
      html: `
        <div class="exp-item" style="border-color:#06b6d4">
          <div class="date">2025 — ปัจจุบัน</div>
          <div class="company">Atiz Innovation Co., Ltd.</div>
          <div class="role">Application Support — ระบบจัดการคลินิก</div>
          <ul>
            <li>ดูแลคลินิกทันตกรรม เวชกรรม และความงาม ทั้งการติดตั้ง อบรม และแก้ไขปัญหา</li>
            <li>ริเริ่มระบบ CRM ภายใน ตั้งแต่กำหนด requirements จนถึง production ด้วย AI-assisted tools รวมถึงการตั้งเซิร์ฟเวอร์</li>
            <li>ออกแบบฟีเจอร์จัดการลูกค้า, ติดตาม Lead, Sales Pipeline และแจ้งเตือนผ่าน LINE</li>
          </ul>
        </div>
        <div class="exp-item">
          <div class="date">2022 — 2025</div>
          <div class="company">Cliniter</div>
          <div class="role">Application Support — ระบบจัดการคลินิกทันตกรรม</div>
          <ul>
            <li>ดูแลหลังการขายคลินิก 300–400 แห่ง: ย้ายข้อมูล, ติดตั้ง, อบรม, ซัพพอร์ต</li>
            <li>ดูแลทีม 4 คน จัดการ Ticket 100–200 ใบ/เดือน</li>
            <li>ออกแบบ Workflow ด้วย Airtable และ Jotform ติดตามงาน Dev ผ่าน Jira</li>
          </ul>
        </div>
        <div class="exp-item" style="border-color:#c026d3">
          <div class="date">2018 — 2020</div>
          <div class="company">Binary Power Engineering</div>
          <div class="role">ศูนย์รับแจ้งเหตุขัดข้อง — ระบบรถไฟฟ้า MRT</div>
          <ul>
            <li>จัดการรายงานเหตุขัดข้องระบบไฟฟ้าผ่าน SAP สำหรับสถานีรถไฟฟ้าใต้ดิน</li>
            <li>ประสานงานระหว่างทีมวิศวกรรม ปฏิบัติการสถานี และทีมซ่อมบำรุง</li>
          </ul>
        </div>
      `,
    },
  },
  projects: {
    en: {
      badge: "Built & Designed",
      badgeColor: "#67e8f9",
      title: "Projects",
      html: `
        <div class="section-block">
          <div class="section-label">Internal CRM System</div>
          <p>Identified operational gaps and initiated a full <strong>CRM web application</strong> — defining requirements, designing workflows, managing from concept to production including server setup and deployment with AI-assisted tools.</p>
          <div class="tags">
            <span class="tag cyan">Next.js</span>
            <span class="tag purple">AI-Assisted</span>
            <span class="tag green">LINE API</span>
            <span class="tag orange">Full Lifecycle</span>
          </div>
        </div>
        <div class="section-block">
          <div class="section-label">Features Designed</div>
          <p>Customer management, lead tracking, sales pipeline, issue reporting, task management, LINE notification integration, role-based access, activity logging, renewal tracking.</p>
        </div>
        <div class="section-block">
          <div class="section-label">Workflow Optimization</div>
          <p>Designed handover flows between sales and support using <strong>Airtable</strong> and <strong>Jotform</strong>, reducing manual errors and handoff time.</p>
        </div>
      `,
    },
    th: {
      badge: "ผลงาน",
      badgeColor: "#67e8f9",
      title: "โปรเจกต์",
      html: `
        <div class="section-block">
          <div class="section-label">ระบบ CRM ภายในองค์กร</div>
          <p>วิเคราะห์ช่องว่างในการทำงาน ริเริ่ม <strong>CRM Web Application</strong> ตั้งแต่กำหนด requirements, ออกแบบ workflow, บริหารจัดการตั้งแต่ concept จนถึง production รวมถึงตั้งเซิร์ฟเวอร์และ deploy ด้วย AI-assisted tools</p>
          <div class="tags">
            <span class="tag cyan">Next.js</span>
            <span class="tag purple">AI-Assisted</span>
            <span class="tag green">LINE API</span>
            <span class="tag orange">Full Lifecycle</span>
          </div>
        </div>
        <div class="section-block">
          <div class="section-label">ฟีเจอร์ที่ออกแบบ</div>
          <p>จัดการลูกค้า, ติดตาม Lead, Sales Pipeline, รายงานปัญหา, จัดการงาน, แจ้งเตือน LINE, ระบบสิทธิ์ผู้ใช้, บันทึกกิจกรรม, ติดตามการต่อสัญญา</p>
        </div>
        <div class="section-block">
          <div class="section-label">ปรับปรุง Workflow</div>
          <p>ออกแบบ Flow ส่งต่องานระหว่าง Sales กับ Support ด้วย <strong>Airtable</strong> และ <strong>Jotform</strong> ลดข้อผิดพลาดและเวลาในการส่งต่องาน</p>
        </div>
      `,
    },
  },
  skills: {
    en: {
      badge: "Toolkit",
      badgeColor: "#6ee7b7",
      title: "Skills",
      html: `
        <div class="section-block">
          <div class="section-label">Tools & Platforms</div>
          <div class="tags">
            <span class="tag purple">AI Prompting</span>
            <span class="tag cyan">Jira</span>
            <span class="tag cyan">Airtable</span>
            <span class="tag cyan">Notion</span>
            <span class="tag cyan">Jotform</span>
            <span class="tag cyan">SAP</span>
            <span class="tag cyan">MS Office</span>
            <span class="tag cyan">Google Workspace</span>
            <span class="tag green">LINE API</span>
          </div>
        </div>
        <div class="section-block">
          <div class="section-label">Core Competencies</div>
          <div class="tags">
            <span class="tag orange">Cross-team Coordination</span>
            <span class="tag orange">Workflow Design</span>
            <span class="tag orange">Issue Analysis</span>
            <span class="tag orange">User Training</span>
            <span class="tag orange">Team Management</span>
            <span class="tag orange">Data Analysis</span>
          </div>
        </div>
        <div class="section-block">
          <div class="section-label">Languages</div>
          <p><strong>Thai</strong> — Native &nbsp;|&nbsp; <strong>English</strong> — Basic (Reading & Writing)</p>
        </div>
      `,
    },
    th: {
      badge: "ทักษะ",
      badgeColor: "#6ee7b7",
      title: "ทักษะ",
      html: `
        <div class="section-block">
          <div class="section-label">เครื่องมือและแพลตฟอร์ม</div>
          <div class="tags">
            <span class="tag purple">AI Prompting</span>
            <span class="tag cyan">Jira</span>
            <span class="tag cyan">Airtable</span>
            <span class="tag cyan">Notion</span>
            <span class="tag cyan">Jotform</span>
            <span class="tag cyan">SAP</span>
            <span class="tag cyan">MS Office</span>
            <span class="tag cyan">Google Workspace</span>
            <span class="tag green">LINE API</span>
          </div>
        </div>
        <div class="section-block">
          <div class="section-label">ความสามารถหลัก</div>
          <div class="tags">
            <span class="tag orange">ประสานงานข้ามทีม</span>
            <span class="tag orange">ออกแบบ Workflow</span>
            <span class="tag orange">วิเคราะห์ปัญหา</span>
            <span class="tag orange">อบรมผู้ใช้งาน</span>
            <span class="tag orange">บริหารทีม</span>
            <span class="tag orange">วิเคราะห์ข้อมูล</span>
          </div>
        </div>
        <div class="section-block">
          <div class="section-label">ภาษา</div>
          <p><strong>ไทย</strong> — ภาษาแม่ &nbsp;|&nbsp; <strong>อังกฤษ</strong> — พื้นฐาน (อ่าน-เขียน)</p>
        </div>
      `,
    },
  },
  education: {
    en: {
      badge: "Academic",
      badgeColor: "#fca5a5",
      title: "Education",
      html: `
        <div class="edu-item">
          <div class="degree">B.Ed. Industrial Education — Mechatronics</div>
          <div class="school">King Mongkut's University of Technology North Bangkok</div>
          <div class="school">2013 — 2020</div>
        </div>
        <div class="edu-item">
          <div class="degree">Vocational Certificate in Electronics</div>
          <div class="school">Chonburi Technical College &bull; GPA: 3.8 / 4.0</div>
          <div class="school">2010 — 2013</div>
        </div>
      `,
    },
    th: {
      badge: "การศึกษา",
      badgeColor: "#fca5a5",
      title: "การศึกษา",
      html: `
        <div class="edu-item">
          <div class="degree">ครุศาสตร์อุตสาหกรรมบัณฑิต — เมคคาทรอนิกส์</div>
          <div class="school">มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</div>
          <div class="school">2556 — 2563</div>
        </div>
        <div class="edu-item">
          <div class="degree">ประกาศนียบัตรวิชาชีพ (ปวช.) อิเล็กทรอนิกส์</div>
          <div class="school">วิทยาลัยเทคนิคชลบุรี &bull; เกรดเฉลี่ย: 3.8 / 4.0</div>
          <div class="school">2553 — 2556</div>
        </div>
      `,
    },
  },
  contact: {
    en: {
      badge: "Get in Touch",
      badgeColor: "#fde68a",
      title: "Contact",
      html: `
        <p>Open to opportunities in <strong>Application Support</strong>, <strong>IT Operations</strong>, or roles combining technical support with <strong>AI-powered solutions</strong>.</p>
        <a href="tel:0922766588" class="contact-link">
          <span class="contact-icon">&#128222;</span>
          <div><div class="c-text">092-276-6588</div><div class="c-label">Phone</div></div>
        </a>
        <a href="mailto:prakarn00777@gmail.com" class="contact-link">
          <span class="contact-icon">&#9993;</span>
          <div><div class="c-text">prakarn00777@gmail.com</div><div class="c-label">Email</div></div>
        </a>
        <div class="contact-link">
          <span class="contact-icon">&#128205;</span>
          <div><div class="c-text">Bangkok, Thailand</div><div class="c-label">Location</div></div>
        </div>
      `,
    },
    th: {
      badge: "ติดต่อ",
      badgeColor: "#fde68a",
      title: "ช่องทางติดต่อ",
      html: `
        <p>เปิดรับโอกาสในสาย <strong>Application Support</strong>, <strong>IT Operations</strong> หรือตำแหน่งที่ผสมผสานงานซัพพอร์ตกับ <strong>AI-powered solutions</strong></p>
        <a href="tel:0922766588" class="contact-link">
          <span class="contact-icon">&#128222;</span>
          <div><div class="c-text">092-276-6588</div><div class="c-label">โทรศัพท์</div></div>
        </a>
        <a href="mailto:prakarn00777@gmail.com" class="contact-link">
          <span class="contact-icon">&#9993;</span>
          <div><div class="c-text">prakarn00777@gmail.com</div><div class="c-label">อีเมล</div></div>
        </a>
        <div class="contact-link">
          <span class="contact-icon">&#128205;</span>
          <div><div class="c-text">กรุงเทพฯ</div><div class="c-label">ที่อยู่</div></div>
        </div>
      `,
    },
  },
};

export default function InfoPanel({ planetId, lang, onClose }: InfoPanelProps) {
  const entry = planetId ? panelData[planetId] : null;
  const data = entry ? entry[lang] : null;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!data) return null;

  return (
    <div className={`info-panel ${planetId ? "active" : ""}`}>
      <div className="info-overlay" onClick={onClose} />
      <div className="info-card">
        <div className="info-header">
          <div>
            <div className="info-badge" style={{ color: data.badgeColor }}>
              {data.badge}
            </div>
            <h2>{data.title}</h2>
          </div>
          <button className="info-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="info-body" dangerouslySetInnerHTML={{ __html: data.html }} />
      </div>
    </div>
  );
}
