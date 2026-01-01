"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import Notification from "./Notification";
import Sidebar from "./Sidebar";
import styles from "./page.module.css";

export default function Dashboard() {
  const [apiKeys, setApiKeys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newKeyName, setNewKeyName] = useState("");
  const [newKeyType, setNewKeyType] = useState("dev");
  const [showNewKeyModal, setShowNewKeyModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [copiedKeyId, setCopiedKeyId] = useState(null);
  const [showKeyValue, setShowKeyValue] = useState({});
  const [deleteModal, setDeleteModal] = useState(null);
  const [creating, setCreating] = useState(false);
  const [notification, setNotification] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Fetch API keys from Supabase on component mount
  useEffect(() => {
    fetchApiKeys();
  }, []);

  const fetchApiKeys = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error: fetchError } = await supabase
        .from("api_keys")
        .select("*")
        .order("created_at", { ascending: false });

      if (fetchError) {
        console.error("Supabase error:", fetchError);
        const errorMsg = fetchError.message || fetchError.details || "Failed to fetch API keys";
        if (errorMsg.includes("row-level security")) {
          throw new Error("RLS Policy Error: Please configure Row-Level Security policies in Supabase.");
        }
        throw new Error(errorMsg);
      }

      // Format the data for display
      // Extract type from key value prefix (sk-dev- or sk-prod-)
      const formattedData = (data || []).map((key) => {
        const keyValue = key.value || "";
        const type = keyValue.startsWith("sk-dev-") ? "dev" : 
                     keyValue.startsWith("sk-prod-") ? "prod" : "dev";
        
        return {
          id: key.id,
          name: key.name,
          type: type,
          usage: key.usage || 0,
          key: keyValue,
          createdAt: new Date(key.created_at).toLocaleDateString(),
        };
      });

      setApiKeys(formattedData);
    } catch (err) {
      console.error("Error fetching API keys:", err);
      setError(err.message || "Failed to fetch API keys");
    } finally {
      setLoading(false);
    }
  };

  const generateApiKey = (type) => {
    const prefix = type === "dev" ? "sk-dev-" : "sk-prod-";
    const randomPart = Math.random().toString(36).substring(2, 15) + 
                      Math.random().toString(36).substring(2, 15);
    return prefix + randomPart;
  };

  const handleCreateKey = async () => {
    if (!newKeyName.trim() || creating) return;

    try {
      setCreating(true);
      setError(null);
      const newKeyValue = generateApiKey(newKeyType);

      const { data, error: createError } = await supabase
        .from("api_keys")
        .insert([
          {
            name: newKeyName.trim(),
            value: newKeyValue,
            usage: 0,
          },
        ])
        .select()
        .single();

      if (createError) {
        console.error("Supabase create error:", createError);
        const errorMsg = createError.message || createError.details || "Failed to create API key";
        if (errorMsg.includes("row-level security")) {
          throw new Error("RLS Policy Error: Please configure Row-Level Security policies in Supabase. See SUPABASE_RLS_SETUP.md for instructions.");
        }
        throw new Error(errorMsg);
      }

      // Refresh the list
      await fetchApiKeys();
      const createdKeyName = newKeyName.trim();
      setNewKeyName("");
      setNewKeyType("dev");
      setShowNewKeyModal(false);
      
      // Show top center notification
      setNotification({
        type: "success",
        message: `API key "${createdKeyName}" created successfully!`,
      });
    } catch (err) {
      console.error("Error creating API key:", err);
      setError(err.message || "Failed to create API key");
      
      // Show error notification at top center
      setNotification({
        type: "error",
        message: err.message || "Failed to create API key",
      });
    } finally {
      setCreating(false);
    }
  };

  const handleUpdateKey = async (id) => {
    if (!editName.trim()) {
      setEditingId(null);
      return;
    }

    try {
      setError(null);
      
      const { error: updateError } = await supabase
        .from("api_keys")
        .update({ name: editName.trim() })
        .eq("id", id);

      if (updateError) {
        console.error("Supabase update error:", updateError);
        const errorMsg = updateError.message || updateError.details || "Failed to update API key";
        if (errorMsg.includes("row-level security")) {
          throw new Error("RLS Policy Error: Please configure Row-Level Security policies in Supabase.");
        }
        throw new Error(errorMsg);
      }

      // Refresh the list
      await fetchApiKeys();
      const updatedName = editName.trim();
      setEditingId(null);
      setEditName("");
      
      // Show success notification
      setNotification({
        type: "success",
        message: `API key "${updatedName}" updated successfully!`,
      });
    } catch (err) {
      console.error("Error updating API key:", err);
      setError(err.message || "Failed to update API key");
      setEditingId(null);
      setEditName("");
      
      // Show error notification
      setNotification({
        type: "error",
        message: err.message || "Failed to update API key",
      });
    }
  };

  const handleStartEdit = (key) => {
    setEditingId(key.id);
    setEditName(key.name);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditName("");
  };

  const handleDeleteKey = async (id, keyName) => {
    try {
      setError(null);
      
      const { error: deleteError } = await supabase
        .from("api_keys")
        .delete()
        .eq("id", id);

      if (deleteError) {
        console.error("Supabase delete error:", deleteError);
        const errorMsg = deleteError.message || deleteError.details || "Failed to delete API key";
        if (errorMsg.includes("row-level security")) {
          throw new Error("RLS Policy Error: Please configure Row-Level Security policies in Supabase.");
        }
        throw new Error(errorMsg);
      }

      // Refresh the list
      await fetchApiKeys();
      setDeleteModal(null);
      
      // Show success notification with red background
      setNotification({
        type: "delete",
        message: `API key "${keyName}" deleted successfully!`,
      });
    } catch (err) {
      console.error("Error deleting API key:", err);
      setError(err.message || "Failed to delete API key");
      setDeleteModal(null);
      
      // Show error notification
      setNotification({
        type: "error",
        message: err.message || "Failed to delete API key",
      });
    }
  };

  const handleDeleteClick = (apiKey) => {
    setDeleteModal({
      id: apiKey.id,
      name: apiKey.name,
    });
  };

  const handleCopyKey = async (key, id) => {
    try {
      await navigator.clipboard.writeText(key);
      setCopiedKeyId(id);
      setTimeout(() => setCopiedKeyId(null), 2000);
      
      // Show success notification with light blue background
      setNotification({
        type: "copy",
        message: "API key copied to clipboard!",
      });
    } catch (err) {
      console.error("Failed to copy:", err);
      
      // Show error notification
      setNotification({
        type: "error",
        message: "Failed to copy API key",
      });
    }
  };

  const toggleKeyVisibility = (id) => {
    setShowKeyValue((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const maskKey = (key, type) => {
    const prefix = type === "dev" ? "sk-dev-" : "sk-prod-";
    if (key.length <= prefix.length + 4) return prefix + "•".repeat(8);
    return prefix + "•".repeat(24);
  };

  return (
    <div className={styles.dashboard}>
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Content */}
      <div className={`${styles.mainContent} ${!sidebarOpen ? styles.sidebarClosed : ""}`}>
        {/* Top Navigation Bar */}
        <nav className={styles.topNav}>
          <div className={styles.navLeft}>
            <button 
              className={styles.sidebarToggle}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              title={sidebarOpen ? "Hide sidebar" : "Show sidebar"}
            >
              ☰
            </button>
            <h1 className={styles.navTitle}>Overview</h1>
          </div>
        <div className={styles.navIcons}>
          <div className={styles.statusBadge}>
            <span className={styles.statusDot}></span>
            Operational
          </div>
          <button className={styles.iconButton} title="GitHub">🔗</button>
          <button className={styles.iconButton} title="Twitter">🐦</button>
          <button className={styles.iconButton} title="Email">✉️</button>
          <button className={styles.iconButton} title="Dark Mode">🌙</button>
        </div>
      </nav>

      {/* Promotional Banner */}
      <div className={styles.banner}>
        Get Tavily Certified! Share Your Badge & Earn Free Credits.
      </div>

      <div className={styles.content}>
        {/* Error Message */}
        {error && (
          <div className={styles.errorMessage}>
            <span>⚠️ {error}</span>
            <button onClick={() => setError(null)}>×</button>
          </div>
        )}

        {/* Current Plan Section */}
        <section className={styles.planSection}>
          <div className={styles.planCard}>
            <div className={styles.planHeader}>
              <span className={styles.planLabel}>CURRENT PLAN</span>
              <button className={styles.manageButton}>Manage Plan</button>
            </div>
            <h2 className={styles.planName}>Researcher</h2>
            <div className={styles.usageSection}>
              <div className={styles.usageHeader}>
                <span>API Usage</span>
                <span className={styles.infoIcon}>ℹ️</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: "0%" }}></div>
              </div>
              <div className={styles.usageText}>Monthly plan: 0/1,000 Credits</div>
              <div className={styles.toggleSection}>
                <label className={styles.toggleLabel}>
                  <input type="checkbox" className={styles.toggleInput} />
                  <span className={styles.toggleSlider}></span>
                  Pay as you go
                </label>
                <span className={styles.infoIcon}>ℹ️</span>
              </div>
            </div>
          </div>
        </section>

        {/* API Keys Section */}
        <section className={styles.apiKeysSection}>
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>API Keys</h2>
              <button
                className={styles.addButton}
                onClick={() => setShowNewKeyModal(true)}
              >
                +
              </button>
            </div>
            <p className={styles.sectionDescription}>
              The key is used to authenticate your requests to the{" "}
              <a href="#" className={styles.link}>Research API</a>. To learn more, see the{" "}
              <a href="#" className={styles.link}>documentation page</a>.
            </p>

            {loading ? (
              <div className={styles.loadingState}>
                <p>Loading API keys...</p>
              </div>
            ) : apiKeys.length === 0 ? (
              <div className={styles.emptyState}>
                <p>No API keys yet. Create your first key to get started.</p>
              </div>
            ) : (
              <div className={styles.tableContainer}>
                <table className={styles.keysTable}>
                  <thead>
                    <tr>
                      <th>NAME</th>
                      <th>TYPE</th>
                      <th>USAGE</th>
                      <th>KEY</th>
                      <th>OPTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiKeys.map((apiKey) => (
                      <tr key={apiKey.id}>
                        <td>
                          {editingId === apiKey.id ? (
                            <input
                              type="text"
                              value={editName}
                              onChange={(e) => setEditName(e.target.value)}
                              className={styles.editInput}
                              autoFocus
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  handleUpdateKey(apiKey.id);
                                } else if (e.key === "Escape") {
                                  handleCancelEdit();
                                }
                              }}
                              onBlur={() => handleUpdateKey(apiKey.id)}
                            />
                          ) : (
                            <span className={styles.keyName}>{apiKey.name}</span>
                          )}
                        </td>
                        <td>
                          <span className={styles.typeBadge}>{apiKey.type}</span>
                        </td>
                        <td>
                          <span className={styles.usageCount}>{apiKey.usage}</span>
                        </td>
                        <td>
                          <code className={styles.keyValue}>
                            {showKeyValue[apiKey.id]
                              ? apiKey.key
                              : maskKey(apiKey.key, apiKey.type)}
                          </code>
                        </td>
                        <td>
                          <div className={styles.optionsButtons}>
                            <button
                              className={styles.optionButton}
                              onClick={() => toggleKeyVisibility(apiKey.id)}
                              title={showKeyValue[apiKey.id] ? "Hide key" : "Show key"}
                            >
                              👁️
                            </button>
                            <button
                              className={`${styles.optionButton} ${copiedKeyId === apiKey.id ? styles.copied : ""}`}
                              onClick={() => handleCopyKey(apiKey.key, apiKey.id)}
                              title="Copy to clipboard"
                            >
                              {copiedKeyId === apiKey.id ? "✓" : "📋"}
                            </button>
                            <button
                              className={styles.optionButton}
                              onClick={() => handleStartEdit(apiKey)}
                              title="Edit name"
                            >
                              ✏️
                            </button>
                            <button
                              className={`${styles.optionButton} ${styles.deleteButton}`}
                              onClick={() => handleDeleteClick(apiKey)}
                              title="Delete key"
                            >
                              🗑️
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        {/* Remote MCP Section */}
        <section className={styles.mcpSection}>
          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Remote MCP</h2>
            <p className={styles.sectionDescription}>
              Connect directly to Tavily's remote MCP server for a seamless experience without local installation or configuration. Select your desired API key and click the button below to generate the MCP connection URL. For examples on how to use the remote MCP,{" "}
              <a href="#" className={styles.link}>click here</a>.
            </p>
            <button className={styles.generateButton}>Generate MCP Connection URL</button>
          </div>
        </section>
      </div>

      {/* Create Key Modal */}
      {showNewKeyModal && (
        <div className={styles.modalOverlay} onClick={() => setShowNewKeyModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>Create New API Key</h3>
              <button
                className={styles.modalClose}
                onClick={() => setShowNewKeyModal(false)}
              >
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGroup}>
                <label>Key Name</label>
                <input
                  type="text"
                  placeholder="Enter key name (e.g., Production, Development)"
                  value={newKeyName}
                  onChange={(e) => setNewKeyName(e.target.value)}
                  className={styles.modalInput}
                  disabled={creating}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !creating && newKeyName.trim()) {
                      handleCreateKey();
                    }
                  }}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Type</label>
                <select
                  value={newKeyType}
                  onChange={(e) => setNewKeyType(e.target.value)}
                  className={styles.modalSelect}
                  disabled={creating}
                >
                  <option value="dev">dev</option>
                  <option value="prod">prod</option>
                </select>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button
                className={styles.modalCancel}
                onClick={() => setShowNewKeyModal(false)}
                disabled={creating}
              >
                Cancel
              </button>
              <button
                className={styles.modalSubmit}
                onClick={handleCreateKey}
                disabled={!newKeyName.trim() || creating}
              >
                {creating ? "Creating..." : "Create Key"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Center Notification */}
      <Notification
        type={notification?.type || "info"}
        message={notification?.message}
        onClose={() => setNotification(null)}
      />

      {/* Delete Confirmation Modal */}
      {deleteModal && (
        <div className={styles.modalOverlay} onClick={() => setDeleteModal(null)}>
          <div className={styles.deleteModal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>Delete API Key</h3>
              <button
                className={styles.modalClose}
                onClick={() => setDeleteModal(null)}
              >
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              <p>Are you sure you want to delete the API key <strong>"{deleteModal.name}"</strong>?</p>
              <p className={styles.warningText}>This action cannot be undone.</p>
            </div>
            <div className={styles.modalFooter}>
              <button
                className={styles.modalCancel}
                onClick={() => setDeleteModal(null)}
              >
                Cancel
              </button>
              <button
                className={styles.modalDelete}
                onClick={() => handleDeleteKey(deleteModal.id, deleteModal.name)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
