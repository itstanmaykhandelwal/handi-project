"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";
import Notification from "../dashboard/Notification";
import styles from "./page.module.css";

export default function Protected() {
  const [notification, setNotification] = useState(null);
  const [validating, setValidating] = useState(true);
  const router = useRouter();

  useEffect(() => {
    validateApiKey();
  }, []);

  const validateApiKey = async () => {
    try {
      // Get API key from sessionStorage
      const apiKey = sessionStorage.getItem("apiKeyToValidate");

      if (!apiKey) {
        // No API key provided, redirect to playground
        router.push("/playground");
        return;
      }

      // Validate API key format (should start with sk-dev- or sk-prod-)
      if (!apiKey.startsWith("sk-dev-") && !apiKey.startsWith("sk-prod-")) {
        setNotification({
          type: "error",
          message: "Invalid API Key",
        });
        setValidating(false);
        // Clear the invalid key
        sessionStorage.removeItem("apiKeyToValidate");
        return;
      }

      // Check if API key exists in database
      const { data, error } = await supabase
        .from("api_keys")
        .select("id, name, value")
        .eq("value", apiKey)
        .single();

      if (error || !data) {
        // API key not found in database
        setNotification({
          type: "error",
          message: "Invalid API Key",
        });
        setValidating(false);
        sessionStorage.removeItem("apiKeyToValidate");
        return;
      }

      // API key is valid
      setNotification({
        type: "success",
        message: "valid api key, /protected can be accessed",
      });
      setValidating(false);
      
      // Store validated API key for future use
      sessionStorage.setItem("validatedApiKey", apiKey);
    } catch (err) {
      console.error("Error validating API key:", err);
      setNotification({
        type: "error",
        message: "Invalid API Key",
      });
      setValidating(false);
      sessionStorage.removeItem("apiKeyToValidate");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {validating ? (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>Validating API key...</p>
          </div>
        ) : (
          <>
            <h1 className={styles.title}>Protected Page</h1>
            <p className={styles.description}>
              This is a protected page that requires a valid API key to access.
            </p>
            <div className={styles.actions}>
              <button
                className={styles.button}
                onClick={() => router.push("/playground")}
              >
                Go to Playground
              </button>
              <button
                className={styles.buttonSecondary}
                onClick={() => router.push("/dashboard")}
              >
                Go to Dashboard
              </button>
            </div>
          </>
        )}
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

