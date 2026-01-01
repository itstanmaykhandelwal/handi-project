"use client";

import { useEffect } from "react";
import styles from "./Notification.module.css";

export default function Notification({ type, message, onClose, autoClose = true, duration = 4000 }) {
  useEffect(() => {
    if (autoClose && message && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [autoClose, message, duration, onClose]);

  if (!message) return null;

  return (
    <div className={`${styles.notification} ${styles[type]}`}>
      <div className={styles.notificationContent}>
        <span className={styles.icon}>
          {type === "success" ? "✓" : type === "error" ? "⚠️" : type === "copy" ? "📋" : type === "delete" ? "🗑️" : "ℹ️"}
        </span>
        <span className={styles.message}>{message}</span>
        {onClose && (
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        )}
      </div>
    </div>
  );
}

