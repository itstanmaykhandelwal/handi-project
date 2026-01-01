(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/codes/handi-project/app/lib/supabase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/codes/handi-project/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/codes/handi-project/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://sjaaaiuqippoafnmyfvk.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_3iyJBTTxDVxclpSpzVtJgA_xYhBTAea");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/codes/handi-project/app/dashboard/Notification.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "closeButton": "Notification-module__tyz8Tq__closeButton",
  "copy": "Notification-module__tyz8Tq__copy",
  "delete": "Notification-module__tyz8Tq__delete",
  "error": "Notification-module__tyz8Tq__error",
  "icon": "Notification-module__tyz8Tq__icon",
  "info": "Notification-module__tyz8Tq__info",
  "message": "Notification-module__tyz8Tq__message",
  "notification": "Notification-module__tyz8Tq__notification",
  "notificationContent": "Notification-module__tyz8Tq__notificationContent",
  "slideDown": "Notification-module__tyz8Tq__slideDown",
  "success": "Notification-module__tyz8Tq__success",
});
}),
"[project]/codes/handi-project/app/dashboard/Notification.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Notification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codes/handi-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codes/handi-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Notification$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/codes/handi-project/app/dashboard/Notification.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Notification({ type, message, onClose, autoClose = true, duration = 4000 }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Notification.useEffect": ()=>{
            if (autoClose && message && onClose) {
                const timer = setTimeout({
                    "Notification.useEffect.timer": ()=>{
                        onClose();
                    }
                }["Notification.useEffect.timer"], duration);
                return ({
                    "Notification.useEffect": ()=>clearTimeout(timer)
                })["Notification.useEffect"];
            }
        }
    }["Notification.useEffect"], [
        autoClose,
        message,
        duration,
        onClose
    ]);
    if (!message) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Notification$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notification} ${__TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Notification$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][type]}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Notification$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notificationContent,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Notification$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
                    children: type === "success" ? "✓" : type === "error" ? "⚠️" : type === "copy" ? "📋" : type === "delete" ? "🗑️" : "ℹ️"
                }, void 0, false, {
                    fileName: "[project]/codes/handi-project/app/dashboard/Notification.js",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Notification$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message,
                    children: message
                }, void 0, false, {
                    fileName: "[project]/codes/handi-project/app/dashboard/Notification.js",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Notification$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                    onClick: onClose,
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/codes/handi-project/app/dashboard/Notification.js",
                    lineNumber: 26,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/codes/handi-project/app/dashboard/Notification.js",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/codes/handi-project/app/dashboard/Notification.js",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(Notification, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Notification;
var _c;
__turbopack_context__.k.register(_c, "Notification");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/codes/handi-project/app/protected/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "page-module__iDHbVa__actions",
  "button": "page-module__iDHbVa__button",
  "buttonSecondary": "page-module__iDHbVa__buttonSecondary",
  "card": "page-module__iDHbVa__card",
  "container": "page-module__iDHbVa__container",
  "description": "page-module__iDHbVa__description",
  "loading": "page-module__iDHbVa__loading",
  "spin": "page-module__iDHbVa__spin",
  "spinner": "page-module__iDHbVa__spinner",
  "title": "page-module__iDHbVa__title",
});
}),
"[project]/codes/handi-project/app/protected/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Protected
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codes/handi-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codes/handi-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codes/handi-project/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codes/handi-project/app/lib/supabase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codes/handi-project/app/dashboard/Notification.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$protected$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/codes/handi-project/app/protected/page.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Protected() {
    _s();
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [validating, setValidating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Protected.useEffect": ()=>{
            validateApiKey();
        }
    }["Protected.useEffect"], []);
    const validateApiKey = async ()=>{
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
                    message: "Invalid API Key"
                });
                setValidating(false);
                // Clear the invalid key
                sessionStorage.removeItem("apiKeyToValidate");
                return;
            }
            // Check if API key exists in database
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("api_keys").select("id, name, value").eq("value", apiKey).single();
            if (error || !data) {
                // API key not found in database
                setNotification({
                    type: "error",
                    message: "Invalid API Key"
                });
                setValidating(false);
                sessionStorage.removeItem("apiKeyToValidate");
                return;
            }
            // API key is valid
            setNotification({
                type: "success",
                message: "valid api key, /protected can be accessed"
            });
            setValidating(false);
            // Store validated API key for future use
            sessionStorage.setItem("validatedApiKey", apiKey);
        } catch (err) {
            console.error("Error validating API key:", err);
            setNotification({
                type: "error",
                message: "Invalid API Key"
            });
            setValidating(false);
            sessionStorage.removeItem("apiKeyToValidate");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$protected$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$protected$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                children: validating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$protected$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$protected$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spinner
                        }, void 0, false, {
                            fileName: "[project]/codes/handi-project/app/protected/page.js",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Validating API key..."
                        }, void 0, false, {
                            fileName: "[project]/codes/handi-project/app/protected/page.js",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/codes/handi-project/app/protected/page.js",
                    lineNumber: 83,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$protected$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            children: "Protected Page"
                        }, void 0, false, {
                            fileName: "[project]/codes/handi-project/app/protected/page.js",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$protected$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                            children: "This is a protected page that requires a valid API key to access."
                        }, void 0, false, {
                            fileName: "[project]/codes/handi-project/app/protected/page.js",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$protected$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$protected$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                                    onClick: ()=>router.push("/playground"),
                                    children: "Go to Playground"
                                }, void 0, false, {
                                    fileName: "[project]/codes/handi-project/app/protected/page.js",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$protected$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonSecondary,
                                    onClick: ()=>router.push("/dashboard"),
                                    children: "Go to Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/codes/handi-project/app/protected/page.js",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/codes/handi-project/app/protected/page.js",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/codes/handi-project/app/protected/page.js",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: notification?.type || "info",
                message: notification?.message,
                onClose: ()=>setNotification(null)
            }, void 0, false, {
                fileName: "[project]/codes/handi-project/app/protected/page.js",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/codes/handi-project/app/protected/page.js",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(Protected, "7PRB4+uSO2D/sa6Ibd+0NgF8JLU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Protected;
var _c;
__turbopack_context__.k.register(_c, "Protected");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=codes_handi-project_app_02b125f5._.js.map