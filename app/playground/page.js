"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";
import Notification from "../dashboard/Notification";
import styles from "./page.module.css";

export default function Playground() {
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!apiKey.trim()) return;

    setLoading(true);
    setNotification(null);

    try {
      const trimmedKey = apiKey.trim();

      // Validate API key format (should start with sk-dev- or sk-prod-)
      if (!trimmedKey.startsWith("sk-dev-") && !trimmedKey.startsWith("sk-prod-")) {
        setNotification({
          type: "error",
          message: "API is Invalid",
        });
        setLoading(false);
        return;
      }

      // Check if API key exists in database
      const { data, error } = await supabase
        .from("api_keys")
        .select("id, name, value")
        .eq("value", trimmedKey)
        .single();

      if (error || !data) {
        // API key not found in database
        setNotification({
          type: "error",
          message: "API is Invalid",
        });
        setLoading(false);
        return;
      }

      // API key is valid - store and redirect
      sessionStorage.setItem("apiKeyToValidate", trimmedKey);
      sessionStorage.setItem("validatedApiKey", trimmedKey);
      
      // Redirect to protected page
      router.push("/protected");
    } catch (err) {
      console.error("Error validating API key:", err);
      setNotification({
        type: "error",
        message: "API is Invalid",
      });
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>API Playground</h1>
        <p className={styles.description}>
          Enter your API key to validate and access protected resources.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="apiKey" className={styles.label}>
              API Key
            </label>
            <input
              type="text"
              id="apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your API key (e.g., sk-dev-...)"
              className={styles.input}
              disabled={loading}
              required
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={!apiKey.trim() || loading}
          >
            {loading ? "Validating..." : "Validate API Key"}
          </button>
        </form>
      </div>

      {/* Notification */}
      <Notification
        type={notification?.type || "info"}
        message={notification?.message}
        onClose={() => setNotification(null)}
      />
    </div>
  );
}

