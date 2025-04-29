/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/chat/route";
exports.ids = ["app/api/chat/route"];
exports.modules = {

/***/ "(rsc)/./app/api/chat/route.ts":
/*!*******************************!*\
  !*** ./app/api/chat/route.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   maxDuration: () => (/* binding */ maxDuration)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n// Allow responses up to 30 seconds\nconst maxDuration = 30;\nconst N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || 'https://techlo-design-solutions.app.n8n.cloud/webhook/9cd82bc0-b150-4c28-b814-c779aa005d2f';\nasync function POST(req) {\n    try {\n        const { messages } = await req.json();\n        const userMessage = messages[messages.length - 1].content;\n        console.log('Sending to n8n:', userMessage);\n        // Make a simple request to n8n\n        const response = await fetch(N8N_WEBHOOK_URL, {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n                input: userMessage\n            })\n        });\n        console.log('n8n response status:', response.status);\n        // Log the raw response text\n        const responseText = await response.text();\n        console.log('n8n raw response:', responseText);\n        // Try to parse as JSON if possible\n        let content = \"Sorry, I couldn't process your request.\";\n        try {\n            const data = JSON.parse(responseText);\n            console.log('Parsed response data:', data);\n            // Try to extract the response from various possible locations\n            if (typeof data === 'string') content = data;\n            else if (data.data) content = data.data;\n            else if (data.output) content = data.output;\n            else if (data.result) content = data.result;\n            else if (data.response) content = data.response;\n            else content = JSON.stringify(data);\n        } catch (e) {\n            // If not JSON, use the raw text\n            content = responseText;\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            role: 'assistant',\n            content: content\n        });\n    } catch (error) {\n        console.error('Error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to process your request'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NoYXQvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBRTNDLG1DQUFtQztBQUM1QixNQUFNQyxjQUFjLEdBQUU7QUFFN0IsTUFBTUMsa0JBQWtCQyxRQUFRQyxHQUFHLENBQUNGLGVBQWUsSUFBSTtBQUVoRCxlQUFlRyxLQUFLQyxHQUFZO0lBQ3JDLElBQUk7UUFDRixNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHLE1BQU1ELElBQUlFLElBQUk7UUFDbkMsTUFBTUMsY0FBY0YsUUFBUSxDQUFDQSxTQUFTRyxNQUFNLEdBQUcsRUFBRSxDQUFDQyxPQUFPO1FBRXpEQyxRQUFRQyxHQUFHLENBQUMsbUJBQW1CSjtRQUUvQiwrQkFBK0I7UUFDL0IsTUFBTUssV0FBVyxNQUFNQyxNQUFNYixpQkFBaUI7WUFDNUNjLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQkMsT0FBT1o7WUFDVDtRQUNGO1FBRUFHLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JDLFNBQVNRLE1BQU07UUFFbkQsNEJBQTRCO1FBQzVCLE1BQU1DLGVBQWUsTUFBTVQsU0FBU1UsSUFBSTtRQUN4Q1osUUFBUUMsR0FBRyxDQUFDLHFCQUFxQlU7UUFFakMsbUNBQW1DO1FBQ25DLElBQUlaLFVBQVU7UUFDZCxJQUFJO1lBQ0YsTUFBTWMsT0FBT04sS0FBS08sS0FBSyxDQUFDSDtZQUN4QlgsUUFBUUMsR0FBRyxDQUFDLHlCQUF5Qlk7WUFFckMsOERBQThEO1lBQzlELElBQUksT0FBT0EsU0FBUyxVQUFVZCxVQUFVYztpQkFDbkMsSUFBSUEsS0FBS0EsSUFBSSxFQUFFZCxVQUFVYyxLQUFLQSxJQUFJO2lCQUNsQyxJQUFJQSxLQUFLRSxNQUFNLEVBQUVoQixVQUFVYyxLQUFLRSxNQUFNO2lCQUN0QyxJQUFJRixLQUFLRyxNQUFNLEVBQUVqQixVQUFVYyxLQUFLRyxNQUFNO2lCQUN0QyxJQUFJSCxLQUFLWCxRQUFRLEVBQUVILFVBQVVjLEtBQUtYLFFBQVE7aUJBQzFDSCxVQUFVUSxLQUFLQyxTQUFTLENBQUNLO1FBQ2hDLEVBQUUsT0FBT0ksR0FBRztZQUNWLGdDQUFnQztZQUNoQ2xCLFVBQVVZO1FBQ1o7UUFFQSxPQUFPdkIscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUN2QnNCLE1BQU07WUFDTm5CLFNBQVNBO1FBQ1g7SUFDRixFQUFFLE9BQU9vQixPQUFPO1FBQ2RuQixRQUFRbUIsS0FBSyxDQUFDLFVBQVVBO1FBQ3hCLE9BQU8vQixxREFBWUEsQ0FBQ1EsSUFBSSxDQUN0QjtZQUFFdUIsT0FBTztRQUFpQyxHQUMxQztZQUFFVCxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxtYXR0aFxcT25lRHJpdmVcXERlc2t0b3BcXHRlY2hsb2Rlc2lnbnNvbHV0aW9uc1xcTEFEQUtBIENoYXRib3RcXGNoYXRib3QtZnJvbnRlbmQgKDEpXFxhcHBcXGFwaVxcY2hhdFxccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuXG4vLyBBbGxvdyByZXNwb25zZXMgdXAgdG8gMzAgc2Vjb25kc1xuZXhwb3J0IGNvbnN0IG1heER1cmF0aW9uID0gMzBcblxuY29uc3QgTjhOX1dFQkhPT0tfVVJMID0gcHJvY2Vzcy5lbnYuTjhOX1dFQkhPT0tfVVJMIHx8ICdodHRwczovL3RlY2hsby1kZXNpZ24tc29sdXRpb25zLmFwcC5uOG4uY2xvdWQvd2ViaG9vay85Y2Q4MmJjMC1iMTUwLTRjMjgtYjgxNC1jNzc5YWEwMDVkMmYnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgY29uc3QgdXNlck1lc3NhZ2UgPSBtZXNzYWdlc1ttZXNzYWdlcy5sZW5ndGggLSAxXS5jb250ZW50O1xuICAgIFxuICAgIGNvbnNvbGUubG9nKCdTZW5kaW5nIHRvIG44bjonLCB1c2VyTWVzc2FnZSk7XG4gICAgXG4gICAgLy8gTWFrZSBhIHNpbXBsZSByZXF1ZXN0IHRvIG44blxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goTjhOX1dFQkhPT0tfVVJMLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGlucHV0OiB1c2VyTWVzc2FnZVxuICAgICAgfSksXG4gICAgfSk7XG4gICAgXG4gICAgY29uc29sZS5sb2coJ244biByZXNwb25zZSBzdGF0dXM6JywgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICBcbiAgICAvLyBMb2cgdGhlIHJhdyByZXNwb25zZSB0ZXh0XG4gICAgY29uc3QgcmVzcG9uc2VUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIGNvbnNvbGUubG9nKCduOG4gcmF3IHJlc3BvbnNlOicsIHJlc3BvbnNlVGV4dCk7XG4gICAgXG4gICAgLy8gVHJ5IHRvIHBhcnNlIGFzIEpTT04gaWYgcG9zc2libGVcbiAgICBsZXQgY29udGVudCA9IFwiU29ycnksIEkgY291bGRuJ3QgcHJvY2VzcyB5b3VyIHJlcXVlc3QuXCI7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCk7XG4gICAgICBjb25zb2xlLmxvZygnUGFyc2VkIHJlc3BvbnNlIGRhdGE6JywgZGF0YSk7XG4gICAgICBcbiAgICAgIC8vIFRyeSB0byBleHRyYWN0IHRoZSByZXNwb25zZSBmcm9tIHZhcmlvdXMgcG9zc2libGUgbG9jYXRpb25zXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gZGF0YTtcbiAgICAgIGVsc2UgaWYgKGRhdGEuZGF0YSkgY29udGVudCA9IGRhdGEuZGF0YTtcbiAgICAgIGVsc2UgaWYgKGRhdGEub3V0cHV0KSBjb250ZW50ID0gZGF0YS5vdXRwdXQ7XG4gICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCkgY29udGVudCA9IGRhdGEucmVzdWx0O1xuICAgICAgZWxzZSBpZiAoZGF0YS5yZXNwb25zZSkgY29udGVudCA9IGRhdGEucmVzcG9uc2U7XG4gICAgICBlbHNlIGNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBJZiBub3QgSlNPTiwgdXNlIHRoZSByYXcgdGV4dFxuICAgICAgY29udGVudCA9IHJlc3BvbnNlVGV4dDtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIHJvbGU6ICdhc3Npc3RhbnQnLFxuICAgICAgY29udGVudDogY29udGVudFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiAnRmFpbGVkIHRvIHByb2Nlc3MgeW91ciByZXF1ZXN0JyB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm1heER1cmF0aW9uIiwiTjhOX1dFQkhPT0tfVVJMIiwicHJvY2VzcyIsImVudiIsIlBPU1QiLCJyZXEiLCJtZXNzYWdlcyIsImpzb24iLCJ1c2VyTWVzc2FnZSIsImxlbmd0aCIsImNvbnRlbnQiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImlucHV0Iiwic3RhdHVzIiwicmVzcG9uc2VUZXh0IiwidGV4dCIsImRhdGEiLCJwYXJzZSIsIm91dHB1dCIsInJlc3VsdCIsImUiLCJyb2xlIiwiZXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/chat/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=C%3A%5CUsers%5Cmatth%5COneDrive%5CDesktop%5Ctechlodesignsolutions%5CLADAKA%20Chatbot%5Cchatbot-frontend%20(1)%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmatth%5COneDrive%5CDesktop%5Ctechlodesignsolutions%5CLADAKA%20Chatbot%5Cchatbot-frontend%20(1)&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=C%3A%5CUsers%5Cmatth%5COneDrive%5CDesktop%5Ctechlodesignsolutions%5CLADAKA%20Chatbot%5Cchatbot-frontend%20(1)%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmatth%5COneDrive%5CDesktop%5Ctechlodesignsolutions%5CLADAKA%20Chatbot%5Cchatbot-frontend%20(1)&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_matth_OneDrive_Desktop_techlodesignsolutions_LADAKA_Chatbot_chatbot_frontend_1_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/chat/route.ts */ \"(rsc)/./app/api/chat/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/chat/route\",\n        pathname: \"/api/chat\",\n        filename: \"route\",\n        bundlePath: \"app/api/chat/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\matth\\\\OneDrive\\\\Desktop\\\\techlodesignsolutions\\\\LADAKA Chatbot\\\\chatbot-frontend (1)\\\\app\\\\api\\\\chat\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_matth_OneDrive_Desktop_techlodesignsolutions_LADAKA_Chatbot_chatbot_frontend_1_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjaGF0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjaGF0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2hhdCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNtYXR0aCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q3RlY2hsb2Rlc2lnbnNvbHV0aW9ucyU1Q0xBREFLQSUyMENoYXRib3QlNUNjaGF0Ym90LWZyb250ZW5kJTIwKDEpJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNtYXR0aCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q3RlY2hsb2Rlc2lnbnNvbHV0aW9ucyU1Q0xBREFLQSUyMENoYXRib3QlNUNjaGF0Ym90LWZyb250ZW5kJTIwKDEpJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMwRTtBQUN2SjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcbWF0dGhcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFx0ZWNobG9kZXNpZ25zb2x1dGlvbnNcXFxcTEFEQUtBIENoYXRib3RcXFxcY2hhdGJvdC1mcm9udGVuZCAoMSlcXFxcYXBwXFxcXGFwaVxcXFxjaGF0XFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jaGF0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY2hhdFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY2hhdC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXG1hdHRoXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcdGVjaGxvZGVzaWduc29sdXRpb25zXFxcXExBREFLQSBDaGF0Ym90XFxcXGNoYXRib3QtZnJvbnRlbmQgKDEpXFxcXGFwcFxcXFxhcGlcXFxcY2hhdFxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=C%3A%5CUsers%5Cmatth%5COneDrive%5CDesktop%5Ctechlodesignsolutions%5CLADAKA%20Chatbot%5Cchatbot-frontend%20(1)%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmatth%5COneDrive%5CDesktop%5Ctechlodesignsolutions%5CLADAKA%20Chatbot%5Cchatbot-frontend%20(1)&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=C%3A%5CUsers%5Cmatth%5COneDrive%5CDesktop%5Ctechlodesignsolutions%5CLADAKA%20Chatbot%5Cchatbot-frontend%20(1)%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmatth%5COneDrive%5CDesktop%5Ctechlodesignsolutions%5CLADAKA%20Chatbot%5Cchatbot-frontend%20(1)&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();