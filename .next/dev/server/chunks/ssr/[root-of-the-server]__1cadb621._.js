module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/codes/handi-project/app/lib/supabase.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/codes/handi-project/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://sjaaaiuqippoafnmyfvk.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_3iyJBTTxDVxclpSpzVtJgA_xYhBTAea");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
}),
"[project]/codes/handi-project/app/dashboard/Notification.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/codes/handi-project/app/dashboard/Notification.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Notification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codes/handi-project/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codes/handi-project/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Notification$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/codes/handi-project/app/dashboard/Notification.module.css [app-ssr] (css module)");
"use client";
;
;
;
function Notification({ type, message, onClose, autoClose = true, duration = 4000 }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (autoClose && message && onClose) {
            const timer = setTimeout(()=>{
                onClose();
            }, duration);
            return ()=>clearTimeout(timer);
        }
    }, [
        autoClose,
        message,
        duration,
        onClose
    ]);
    if (!message) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Notification$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].notification} ${__TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Notification$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][type]}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Notification$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].notificationContent,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Notification$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].icon,
                    children: type === "success" ? "✓" : type === "error" ? "⚠️" : type === "copy" ? "📋" : type === "delete" ? "🗑️" : "ℹ️"
                }, void 0, false, {
                    fileName: "[project]/codes/handi-project/app/dashboard/Notification.js",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Notification$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].message,
                    children: message
                }, void 0, false, {
                    fileName: "[project]/codes/handi-project/app/dashboard/Notification.js",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Notification$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeButton,
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
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/codes/handi-project/app/dashboard/Sidebar.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Sidebar-module__BeZjAW__active",
  "avatar": "Sidebar-module__BeZjAW__avatar",
  "collapsed": "Sidebar-module__BeZjAW__collapsed",
  "dropdownArrow": "Sidebar-module__BeZjAW__dropdownArrow",
  "externalIcon": "Sidebar-module__BeZjAW__externalIcon",
  "logo": "Sidebar-module__BeZjAW__logo",
  "logoArrowRed": "Sidebar-module__BeZjAW__logoArrowRed",
  "logoArrowYellow": "Sidebar-module__BeZjAW__logoArrowYellow",
  "logoIcon": "Sidebar-module__BeZjAW__logoIcon",
  "logoT": "Sidebar-module__BeZjAW__logoT",
  "logoText": "Sidebar-module__BeZjAW__logoText",
  "logoutButton": "Sidebar-module__BeZjAW__logoutButton",
  "menuIcon": "Sidebar-module__BeZjAW__menuIcon",
  "menuItem": "Sidebar-module__BeZjAW__menuItem",
  "menuText": "Sidebar-module__BeZjAW__menuText",
  "nav": "Sidebar-module__BeZjAW__nav",
  "open": "Sidebar-module__BeZjAW__open",
  "personalHeader": "Sidebar-module__BeZjAW__personalHeader",
  "personalSection": "Sidebar-module__BeZjAW__personalSection",
  "personalText": "Sidebar-module__BeZjAW__personalText",
  "sidebar": "Sidebar-module__BeZjAW__sidebar",
  "userAvatar": "Sidebar-module__BeZjAW__userAvatar",
  "userFooter": "Sidebar-module__BeZjAW__userFooter",
  "userInfo": "Sidebar-module__BeZjAW__userInfo",
  "userName": "Sidebar-module__BeZjAW__userName",
});
}),
"[project]/codes/handi-project/app/dashboard/Sidebar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codes/handi-project/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codes/handi-project/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codes/handi-project/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/codes/handi-project/app/dashboard/Sidebar.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
function Sidebar({ isOpen = true, onToggle }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const menuItems = [
        {
            name: "Overview",
            path: "/dashboard",
            icon: "📊"
        },
        {
            name: "API Playground",
            path: "/playground",
            icon: "🎮"
        },
        {
            name: "Use Cases",
            path: "/dashboard/use-cases",
            icon: "💡"
        },
        {
            name: "Billing",
            path: "/dashboard/billing",
            icon: "💳"
        },
        {
            name: "Settings",
            path: "/dashboard/settings",
            icon: "⚙️"
        },
        {
            name: "Certification",
            path: "/dashboard/certification",
            icon: "🏆"
        },
        {
            name: "Documentation",
            path: "https://docs.tavily.com",
            icon: "📚",
            external: true
        },
        {
            name: "Tavily MCP",
            path: "https://mcp.tavily.com",
            icon: "🔗",
            external: true
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebar} ${!isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].collapsed : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoIcon,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoT,
                                children: "T"
                            }, void 0, false, {
                                fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoArrowRed,
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoArrowYellow,
                                children: "←"
                            }, void 0, false, {
                                fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoText,
                        children: "Dandi"
                    }, void 0, false, {
                        fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].personalSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].personalHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avatar,
                            children: "P"
                        }, void 0, false, {
                            fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].personalText,
                            children: "Personal"
                        }, void 0, false, {
                            fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdownArrow,
                            children: "▼"
                        }, void 0, false, {
                            fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nav,
                children: menuItems.map((item)=>{
                    const isActive = pathname === item.path;
                    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuIcon,
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuText,
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this),
                            item.external && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].externalIcon,
                                children: "↗"
                            }, void 0, false, {
                                fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
                                lineNumber: 50,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true);
                    if (item.external) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: item.path,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuItem} ${isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ""}`,
                            children: content
                        }, item.name, false, {
                            fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
                            lineNumber: 56,
                            columnNumber: 15
                        }, this);
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: item.path,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuItem} ${isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ""}`,
                        children: content
                    }, item.name, false, {
                        fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
                        lineNumber: 69,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userFooter,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userAvatar,
                        children: "TK"
                    }, void 0, false, {
                        fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userInfo,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userName,
                            children: "Tanmay Khandelwal"
                        }, void 0, false, {
                            fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoutButton,
                        title: "Logout",
                        children: "🚪"
                    }, void 0, false, {
                        fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/codes/handi-project/app/dashboard/Sidebar.js",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/codes/handi-project/app/dashboard/page.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "addButton": "page-module__J_KoLG__addButton",
  "banner": "page-module__J_KoLG__banner",
  "content": "page-module__J_KoLG__content",
  "copied": "page-module__J_KoLG__copied",
  "dashboard": "page-module__J_KoLG__dashboard",
  "deleteButton": "page-module__J_KoLG__deleteButton",
  "deleteConfirmBtn": "page-module__J_KoLG__deleteConfirmBtn",
  "deleteModal": "page-module__J_KoLG__deleteModal",
  "editInput": "page-module__J_KoLG__editInput",
  "emptyState": "page-module__J_KoLG__emptyState",
  "error": "page-module__J_KoLG__error",
  "errorMessage": "page-module__J_KoLG__errorMessage",
  "formGroup": "page-module__J_KoLG__formGroup",
  "generateButton": "page-module__J_KoLG__generateButton",
  "iconButton": "page-module__J_KoLG__iconButton",
  "infoIcon": "page-module__J_KoLG__infoIcon",
  "keyName": "page-module__J_KoLG__keyName",
  "keyValue": "page-module__J_KoLG__keyValue",
  "keysTable": "page-module__J_KoLG__keysTable",
  "link": "page-module__J_KoLG__link",
  "loadingState": "page-module__J_KoLG__loadingState",
  "mainContent": "page-module__J_KoLG__mainContent",
  "manageButton": "page-module__J_KoLG__manageButton",
  "mcpSection": "page-module__J_KoLG__mcpSection",
  "modal": "page-module__J_KoLG__modal",
  "modalBody": "page-module__J_KoLG__modalBody",
  "modalCancel": "page-module__J_KoLG__modalCancel",
  "modalClose": "page-module__J_KoLG__modalClose",
  "modalDelete": "page-module__J_KoLG__modalDelete",
  "modalFooter": "page-module__J_KoLG__modalFooter",
  "modalHeader": "page-module__J_KoLG__modalHeader",
  "modalInput": "page-module__J_KoLG__modalInput",
  "modalOverlay": "page-module__J_KoLG__modalOverlay",
  "modalSelect": "page-module__J_KoLG__modalSelect",
  "modalSubmit": "page-module__J_KoLG__modalSubmit",
  "navIcons": "page-module__J_KoLG__navIcons",
  "navLeft": "page-module__J_KoLG__navLeft",
  "navTitle": "page-module__J_KoLG__navTitle",
  "optionButton": "page-module__J_KoLG__optionButton",
  "optionsButtons": "page-module__J_KoLG__optionsButtons",
  "planCard": "page-module__J_KoLG__planCard",
  "planHeader": "page-module__J_KoLG__planHeader",
  "planLabel": "page-module__J_KoLG__planLabel",
  "planName": "page-module__J_KoLG__planName",
  "planSection": "page-module__J_KoLG__planSection",
  "progressBar": "page-module__J_KoLG__progressBar",
  "progressFill": "page-module__J_KoLG__progressFill",
  "sectionCard": "page-module__J_KoLG__sectionCard",
  "sectionDescription": "page-module__J_KoLG__sectionDescription",
  "sectionHeader": "page-module__J_KoLG__sectionHeader",
  "sectionTitle": "page-module__J_KoLG__sectionTitle",
  "sidebarClosed": "page-module__J_KoLG__sidebarClosed",
  "sidebarToggle": "page-module__J_KoLG__sidebarToggle",
  "slideIn": "page-module__J_KoLG__slideIn",
  "statusBadge": "page-module__J_KoLG__statusBadge",
  "statusDot": "page-module__J_KoLG__statusDot",
  "success": "page-module__J_KoLG__success",
  "tableContainer": "page-module__J_KoLG__tableContainer",
  "toast": "page-module__J_KoLG__toast",
  "toggleInput": "page-module__J_KoLG__toggleInput",
  "toggleLabel": "page-module__J_KoLG__toggleLabel",
  "toggleSection": "page-module__J_KoLG__toggleSection",
  "toggleSlider": "page-module__J_KoLG__toggleSlider",
  "topNav": "page-module__J_KoLG__topNav",
  "typeBadge": "page-module__J_KoLG__typeBadge",
  "usageCount": "page-module__J_KoLG__usageCount",
  "usageHeader": "page-module__J_KoLG__usageHeader",
  "usageSection": "page-module__J_KoLG__usageSection",
  "usageText": "page-module__J_KoLG__usageText",
  "warningText": "page-module__J_KoLG__warningText",
});
}),
"[project]/codes/handi-project/app/dashboard/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codes/handi-project/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codes/handi-project/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codes/handi-project/app/lib/supabase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Notification$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codes/handi-project/app/dashboard/Notification.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/codes/handi-project/app/dashboard/Sidebar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/codes/handi-project/app/dashboard/page.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
function Dashboard() {
    const [apiKeys, setApiKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newKeyName, setNewKeyName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [newKeyType, setNewKeyType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("dev");
    const [showNewKeyModal, setShowNewKeyModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editName, setEditName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [copiedKeyId, setCopiedKeyId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showKeyValue, setShowKeyValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [deleteModal, setDeleteModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [creating, setCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Fetch API keys from Supabase on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchApiKeys();
    }, []);
    const fetchApiKeys = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const { data, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("api_keys").select("*").order("created_at", {
                ascending: false
            });
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
            const formattedData = (data || []).map((key)=>{
                const keyValue = key.value || "";
                const type = keyValue.startsWith("sk-dev-") ? "dev" : keyValue.startsWith("sk-prod-") ? "prod" : "dev";
                return {
                    id: key.id,
                    name: key.name,
                    type: type,
                    usage: key.usage || 0,
                    key: keyValue,
                    createdAt: new Date(key.created_at).toLocaleDateString()
                };
            });
            setApiKeys(formattedData);
        } catch (err) {
            console.error("Error fetching API keys:", err);
            setError(err.message || "Failed to fetch API keys");
        } finally{
            setLoading(false);
        }
    };
    const generateApiKey = (type)=>{
        const prefix = type === "dev" ? "sk-dev-" : "sk-prod-";
        const randomPart = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        return prefix + randomPart;
    };
    const handleCreateKey = async ()=>{
        if (!newKeyName.trim() || creating) return;
        try {
            setCreating(true);
            setError(null);
            const newKeyValue = generateApiKey(newKeyType);
            const { data, error: createError } = await __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("api_keys").insert([
                {
                    name: newKeyName.trim(),
                    value: newKeyValue,
                    usage: 0
                }
            ]).select().single();
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
                message: `API key "${createdKeyName}" created successfully!`
            });
        } catch (err) {
            console.error("Error creating API key:", err);
            setError(err.message || "Failed to create API key");
            // Show error notification at top center
            setNotification({
                type: "error",
                message: err.message || "Failed to create API key"
            });
        } finally{
            setCreating(false);
        }
    };
    const handleUpdateKey = async (id)=>{
        if (!editName.trim()) {
            setEditingId(null);
            return;
        }
        try {
            setError(null);
            const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("api_keys").update({
                name: editName.trim()
            }).eq("id", id);
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
                message: `API key "${updatedName}" updated successfully!`
            });
        } catch (err) {
            console.error("Error updating API key:", err);
            setError(err.message || "Failed to update API key");
            setEditingId(null);
            setEditName("");
            // Show error notification
            setNotification({
                type: "error",
                message: err.message || "Failed to update API key"
            });
        }
    };
    const handleStartEdit = (key)=>{
        setEditingId(key.id);
        setEditName(key.name);
    };
    const handleCancelEdit = ()=>{
        setEditingId(null);
        setEditName("");
    };
    const handleDeleteKey = async (id, keyName)=>{
        try {
            setError(null);
            const { error: deleteError } = await __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$lib$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("api_keys").delete().eq("id", id);
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
                message: `API key "${keyName}" deleted successfully!`
            });
        } catch (err) {
            console.error("Error deleting API key:", err);
            setError(err.message || "Failed to delete API key");
            setDeleteModal(null);
            // Show error notification
            setNotification({
                type: "error",
                message: err.message || "Failed to delete API key"
            });
        }
    };
    const handleDeleteClick = (apiKey)=>{
        setDeleteModal({
            id: apiKey.id,
            name: apiKey.name
        });
    };
    const handleCopyKey = async (key, id)=>{
        try {
            await navigator.clipboard.writeText(key);
            setCopiedKeyId(id);
            setTimeout(()=>setCopiedKeyId(null), 2000);
            // Show success notification with light blue background
            setNotification({
                type: "copy",
                message: "API key copied to clipboard!"
            });
        } catch (err) {
            console.error("Failed to copy:", err);
            // Show error notification
            setNotification({
                type: "error",
                message: "Failed to copy API key"
            });
        }
    };
    const toggleKeyVisibility = (id)=>{
        setShowKeyValue((prev)=>({
                ...prev,
                [id]: !prev[id]
            }));
    };
    const maskKey = (key, type)=>{
        const prefix = type === "dev" ? "sk-dev-" : "sk-prod-";
        if (key.length <= prefix.length + 4) return prefix + "•".repeat(8);
        return prefix + "•".repeat(24);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dashboard,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Sidebar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: sidebarOpen,
                onToggle: ()=>setSidebarOpen(!sidebarOpen)
            }, void 0, false, {
                fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mainContent} ${!sidebarOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebarClosed : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topNav,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLeft,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebarToggle,
                                        onClick: ()=>setSidebarOpen(!sidebarOpen),
                                        title: sidebarOpen ? "Hide sidebar" : "Show sidebar",
                                        children: "☰"
                                    }, void 0, false, {
                                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navTitle,
                                        children: "Overview"
                                    }, void 0, false, {
                                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navIcons,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusBadge,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusDot
                                            }, void 0, false, {
                                                fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                lineNumber: 298,
                                                columnNumber: 13
                                            }, this),
                                            "Operational"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                        lineNumber: 297,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconButton,
                                        title: "GitHub",
                                        children: "🔗"
                                    }, void 0, false, {
                                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                        lineNumber: 301,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconButton,
                                        title: "Twitter",
                                        children: "🐦"
                                    }, void 0, false, {
                                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                        lineNumber: 302,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconButton,
                                        title: "Email",
                                        children: "✉️"
                                    }, void 0, false, {
                                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                        lineNumber: 303,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconButton,
                                        title: "Dark Mode",
                                        children: "🌙"
                                    }, void 0, false, {
                                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                        lineNumber: 304,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                lineNumber: 296,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].banner,
                        children: "Get Tavily Certified! Share Your Badge & Earn Free Credits."
                    }, void 0, false, {
                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                        lineNumber: 309,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                        children: [
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "⚠️ ",
                                            error
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setError(null),
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                        lineNumber: 318,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                lineNumber: 316,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].planSection,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].planCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].planHeader,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].planLabel,
                                                    children: "CURRENT PLAN"
                                                }, void 0, false, {
                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                    lineNumber: 326,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].manageButton,
                                                    children: "Manage Plan"
                                                }, void 0, false, {
                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                    lineNumber: 327,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 325,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].planName,
                                            children: "Researcher"
                                        }, void 0, false, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 329,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].usageSection,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].usageHeader,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "API Usage"
                                                        }, void 0, false, {
                                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                            lineNumber: 332,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoIcon,
                                                            children: "ℹ️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                            lineNumber: 333,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                    lineNumber: 331,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressBar,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressFill,
                                                        style: {
                                                            width: "0%"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                        lineNumber: 336,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                    lineNumber: 335,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].usageText,
                                                    children: "Monthly plan: 0/1,000 Credits"
                                                }, void 0, false, {
                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                    lineNumber: 338,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggleSection,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggleLabel,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggleInput
                                                                }, void 0, false, {
                                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                    lineNumber: 341,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggleSlider
                                                                }, void 0, false, {
                                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                    lineNumber: 342,
                                                                    columnNumber: 19
                                                                }, this),
                                                                "Pay as you go"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                            lineNumber: 340,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoIcon,
                                                            children: "ℹ️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                            lineNumber: 345,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                    lineNumber: 339,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 330,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                    lineNumber: 324,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                lineNumber: 323,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].apiKeysSection,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionHeader,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                                    children: "API Keys"
                                                }, void 0, false, {
                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                    lineNumber: 355,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addButton,
                                                    onClick: ()=>setShowNewKeyModal(true),
                                                    children: "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                    lineNumber: 356,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 354,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionDescription,
                                            children: [
                                                "The key is used to authenticate your requests to the",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link,
                                                    children: "Research API"
                                                }, void 0, false, {
                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                    lineNumber: 365,
                                                    columnNumber: 15
                                                }, this),
                                                ". To learn more, see the",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link,
                                                    children: "documentation page"
                                                }, void 0, false, {
                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                    lineNumber: 366,
                                                    columnNumber: 15
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 363,
                                            columnNumber: 13
                                        }, this),
                                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loadingState,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Loading API keys..."
                                            }, void 0, false, {
                                                fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                lineNumber: 371,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 370,
                                            columnNumber: 15
                                        }, this) : apiKeys.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyState,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "No API keys yet. Create your first key to get started."
                                            }, void 0, false, {
                                                fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                lineNumber: 375,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 374,
                                            columnNumber: 15
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableContainer,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].keysTable,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    children: "NAME"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                    lineNumber: 382,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    children: "TYPE"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                    lineNumber: 383,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    children: "USAGE"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                    lineNumber: 384,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    children: "KEY"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                    lineNumber: 385,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    children: "OPTIONS"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                    lineNumber: 386,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                            lineNumber: 381,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                        lineNumber: 380,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        children: apiKeys.map((apiKey)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: editingId === apiKey.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: editName,
                                                                            onChange: (e)=>setEditName(e.target.value),
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].editInput,
                                                                            autoFocus: true,
                                                                            onKeyDown: (e)=>{
                                                                                if (e.key === "Enter") {
                                                                                    handleUpdateKey(apiKey.id);
                                                                                } else if (e.key === "Escape") {
                                                                                    handleCancelEdit();
                                                                                }
                                                                            },
                                                                            onBlur: ()=>handleUpdateKey(apiKey.id)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                            lineNumber: 394,
                                                                            columnNumber: 29
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].keyName,
                                                                            children: apiKey.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                            lineNumber: 410,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                        lineNumber: 392,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].typeBadge,
                                                                            children: apiKey.type
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                            lineNumber: 414,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                        lineNumber: 413,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].usageCount,
                                                                            children: apiKey.usage
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                            lineNumber: 417,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                        lineNumber: 416,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].keyValue,
                                                                            children: showKeyValue[apiKey.id] ? apiKey.key : maskKey(apiKey.key, apiKey.type)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                            lineNumber: 420,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                        lineNumber: 419,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].optionsButtons,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].optionButton,
                                                                                    onClick: ()=>toggleKeyVisibility(apiKey.id),
                                                                                    title: showKeyValue[apiKey.id] ? "Hide key" : "Show key",
                                                                                    children: "👁️"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                                    lineNumber: 428,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].optionButton} ${copiedKeyId === apiKey.id ? __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].copied : ""}`,
                                                                                    onClick: ()=>handleCopyKey(apiKey.key, apiKey.id),
                                                                                    title: "Copy to clipboard",
                                                                                    children: copiedKeyId === apiKey.id ? "✓" : "📋"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                                    lineNumber: 435,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].optionButton,
                                                                                    onClick: ()=>handleStartEdit(apiKey),
                                                                                    title: "Edit name",
                                                                                    children: "✏️"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                                    lineNumber: 442,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].optionButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].deleteButton}`,
                                                                                    onClick: ()=>handleDeleteClick(apiKey),
                                                                                    title: "Delete key",
                                                                                    children: "🗑️"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                                    lineNumber: 449,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                            lineNumber: 427,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                        lineNumber: 426,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, apiKey.id, true, {
                                                                fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                                lineNumber: 391,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                        lineNumber: 389,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                lineNumber: 379,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 378,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                    lineNumber: 353,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                lineNumber: 352,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mcpSection,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                            children: "Remote MCP"
                                        }, void 0, false, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 470,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionDescription,
                                            children: [
                                                "Connect directly to Tavily's remote MCP server for a seamless experience without local installation or configuration. Select your desired API key and click the button below to generate the MCP connection URL. For examples on how to use the remote MCP,",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link,
                                                    children: "click here"
                                                }, void 0, false, {
                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                    lineNumber: 473,
                                                    columnNumber: 15
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 471,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].generateButton,
                                            children: "Generate MCP Connection URL"
                                        }, void 0, false, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 475,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                    lineNumber: 469,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                lineNumber: 468,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                        lineNumber: 313,
                        columnNumber: 7
                    }, this),
                    showNewKeyModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalOverlay,
                        onClick: ()=>setShowNewKeyModal(false),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modal,
                            onClick: (e)=>e.stopPropagation(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Create New API Key"
                                        }, void 0, false, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 485,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalClose,
                                            onClick: ()=>setShowNewKeyModal(false),
                                            children: "×"
                                        }, void 0, false, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 486,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                    lineNumber: 484,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalBody,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Key Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                    lineNumber: 495,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Enter key name (e.g., Production, Development)",
                                                    value: newKeyName,
                                                    onChange: (e)=>setNewKeyName(e.target.value),
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalInput,
                                                    disabled: creating,
                                                    onKeyDown: (e)=>{
                                                        if (e.key === "Enter" && !creating && newKeyName.trim()) {
                                                            handleCreateKey();
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                    lineNumber: 496,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 494,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                    lineNumber: 511,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: newKeyType,
                                                    onChange: (e)=>setNewKeyType(e.target.value),
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalSelect,
                                                    disabled: creating,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "dev",
                                                            children: "dev"
                                                        }, void 0, false, {
                                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                            lineNumber: 518,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "prod",
                                                            children: "prod"
                                                        }, void 0, false, {
                                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                            lineNumber: 519,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                    lineNumber: 512,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 510,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                    lineNumber: 493,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalFooter,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalCancel,
                                            onClick: ()=>setShowNewKeyModal(false),
                                            disabled: creating,
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 524,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalSubmit,
                                            onClick: handleCreateKey,
                                            disabled: !newKeyName.trim() || creating,
                                            children: creating ? "Creating..." : "Create Key"
                                        }, void 0, false, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 531,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                    lineNumber: 523,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                            lineNumber: 483,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                        lineNumber: 482,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$Notification$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        type: notification?.type || "info",
                        message: notification?.message,
                        onClose: ()=>setNotification(null)
                    }, void 0, false, {
                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                        lineNumber: 544,
                        columnNumber: 7
                    }, this),
                    deleteModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalOverlay,
                        onClick: ()=>setDeleteModal(null),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].deleteModal,
                            onClick: (e)=>e.stopPropagation(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Delete API Key"
                                        }, void 0, false, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 555,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalClose,
                                            onClick: ()=>setDeleteModal(null),
                                            children: "×"
                                        }, void 0, false, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 556,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                    lineNumber: 554,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalBody,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Are you sure you want to delete the API key ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        '"',
                                                        deleteModal.name,
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                                    lineNumber: 564,
                                                    columnNumber: 62
                                                }, this),
                                                "?"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 564,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].warningText,
                                            children: "This action cannot be undone."
                                        }, void 0, false, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 565,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                    lineNumber: 563,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalFooter,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalCancel,
                                            onClick: ()=>setDeleteModal(null),
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 568,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$codes$2f$handi$2d$project$2f$app$2f$dashboard$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalDelete,
                                            onClick: ()=>handleDeleteKey(deleteModal.id, deleteModal.name),
                                            children: "Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                            lineNumber: 574,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                                    lineNumber: 567,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                            lineNumber: 553,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                        lineNumber: 552,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/codes/handi-project/app/dashboard/page.js",
                lineNumber: 283,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/codes/handi-project/app/dashboard/page.js",
        lineNumber: 278,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1cadb621._.js.map