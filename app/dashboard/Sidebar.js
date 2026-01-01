"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

export default function Sidebar({ isOpen = true, onToggle }) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Overview", path: "/dashboard", icon: "📊" },
    { name: "API Playground", path: "/playground", icon: "🎮" },
    { name: "Use Cases", path: "/dashboard/use-cases", icon: "💡" },
    { name: "Billing", path: "/dashboard/billing", icon: "💳" },
    { name: "Settings", path: "/dashboard/settings", icon: "⚙️" },
    { name: "Certification", path: "/dashboard/certification", icon: "🏆" },
    { name: "Documentation", path: "https://docs.tavily.com", icon: "📚", external: true },
    { name: "Tavily MCP", path: "https://mcp.tavily.com", icon: "🔗", external: true },
  ];

  return (
    <aside className={`${styles.sidebar} ${!isOpen ? styles.collapsed : ""}`}>
      {/* Logo */}
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <span className={styles.logoT}>T</span>
          <span className={styles.logoArrowRed}>→</span>
          <span className={styles.logoArrowYellow}>←</span>
        </div>
        <span className={styles.logoText}>Dandi</span>
      </div>

      {/* Personal Section */}
      <div className={styles.personalSection}>
        <div className={styles.personalHeader}>
          <div className={styles.avatar}>P</div>
          <span className={styles.personalText}>Personal</span>
          <span className={styles.dropdownArrow}>▼</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className={styles.nav}>
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          const content = (
            <>
              <span className={styles.menuIcon}>{item.icon}</span>
              <span className={styles.menuText}>{item.name}</span>
              {item.external && <span className={styles.externalIcon}>↗</span>}
            </>
          );

          if (item.external) {
            return (
              <a
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
              >
                {content}
              </a>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.path}
              className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
            >
              {content}
            </Link>
          );
        })}
      </nav>

      {/* User Account Footer */}
      <div className={styles.userFooter}>
        <div className={styles.userAvatar}>TK</div>
        <div className={styles.userInfo}>
          <span className={styles.userName}>Tanmay Khandelwal</span>
        </div>
        <button className={styles.logoutButton} title="Logout">
          🚪
        </button>
      </div>
    </aside>
  );
}

