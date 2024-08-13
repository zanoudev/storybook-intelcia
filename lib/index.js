'use strict';

var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$y = ".accordion {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n    border-radius: 14px;\r\n    background: var(--Gray-100, #F2F4F7);\r\n    padding: 16px 24px;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: inherit;\r\n}\r\n\r\n.media.img {\r\n    width: 450px;\r\n    height: 250px;\r\n    background-image: url('cover-image.png');\r\n}\r\n\r\n.media.video {\r\n    width: 560px;\r\n    height: 315px;\r\n    background-image: url('cover-video.png');\r\n}\r\n\r\n.accordion.closed {\r\n}\r\n\r\n.accordion.open {\r\n    border: 2px solid #EA297C;\r\n}";
styleInject(css_248z$y);

var css_248z$x = ".accordion-button {\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    box-shadow: 0 0 4px #F4EBFF;\r\n\r\n}\r\n\r\n.accordion-button.closed {\r\n    background-color: white;\r\n}\r\n\r\n.accordion-button.closed:hover {\r\n    background-color: #FCE3ED;\r\n}\r\n\r\n.accordion-button.open {\r\n    background-color: #EA287C;\r\n}\r\n\r\n.accordion-button.open:hover {\r\n    background-color: #D51568;\r\n}";
styleInject(css_248z$x);

var CheckmarkIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#98A2B3" : _b, _c = _a.width, width = _c === void 0 ? "18" : _c, _d = _a.height, height = _d === void 0 ? "18" : _d; _a.viewBox;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 18 18", fill: "none" },
        React.createElement("path", { d: "M15 4.5L6.75 12.75L3 9", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })));
};
var MinusIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#98A2B3" : _b, _c = _a.width, width = _c === void 0 ? "24" : _c, _d = _a.height, height = _d === void 0 ? "24" : _d;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 24 24", fill: "none" },
        React.createElement("path", { d: "M5 12H19", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })));
};
var EmailIcon = function () { return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none" },
    React.createElement("path", { d: "M18.3334 4.99998C18.3334 4.08331 17.5834 3.33331 16.6667 3.33331H3.33341C2.41675 3.33331 1.66675 4.08331 1.66675 4.99998M18.3334 4.99998V15C18.3334 15.9166 17.5834 16.6666 16.6667 16.6666H3.33341C2.41675 16.6666 1.66675 15.9166 1.66675 15V4.99998M18.3334 4.99998L10.0001 10.8333L1.66675 4.99998", stroke: "#667085", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }))); };
var UserIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#98A2B3" : _b, _c = _a.width, width = _c === void 0 ? "18" : _c, _d = _a.height, height = _d === void 0 ? "18" : _d;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 24 24", fill: "none" },
        React.createElement("path", { d: "M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21", stroke: "#667085", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })));
};
// Color Toast Icons
var WarningIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#98A2B3" : _b, _c = _a.width, width = _c === void 0 ? "18" : _c, _d = _a.height, height = _d === void 0 ? "18" : _d;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 18 18", fill: "none" },
        React.createElement("path", { d: "M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z", stroke: "#F79009", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        React.createElement("path", { d: "M9 6V9", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        React.createElement("path", { d: "M9 12H9.0075", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};
var InfoIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#98A2B3" : _b, _c = _a.width, width = _c === void 0 ? "18" : _c, _d = _a.height, height = _d === void 0 ? "18" : _d;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 18 18", fill: "none" },
        React.createElement("g", { "clip-path": "url(#clip0_1618_18010)" },
            React.createElement("path", { d: "M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z", stroke: "#98A2B3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React.createElement("path", { d: "M9 12V9", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React.createElement("path", { d: "M9 6H9.0075", stroke: color, "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_1618_18010" },
                React.createElement("rect", { width: "18", height: "18", fill: "white" })))));
};
var ErrorIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#98A2B3" : _b, _c = _a.width, width = _c === void 0 ? "18" : _c, _d = _a.height, height = _d === void 0 ? "18" : _d;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 18 18", fill: "none" },
        React.createElement("path", { d: "M7.71758 2.89499L1.36508 13.5C1.2341 13.7268 1.1648 13.984 1.16407 14.2459C1.16334 14.5078 1.23119 14.7653 1.3609 14.9929C1.4906 15.2204 1.67762 15.41 1.90336 15.5429C2.12909 15.6757 2.38568 15.7471 2.64758 15.75H15.3526C15.6145 15.7471 15.8711 15.6757 16.0968 15.5429C16.3225 15.41 16.5096 15.2204 16.6393 14.9929C16.769 14.7653 16.8368 14.5078 16.8361 14.2459C16.8354 13.984 16.766 13.7268 16.6351 13.5L10.2826 2.89499C10.1489 2.67457 9.96062 2.49233 9.73597 2.36585C9.51133 2.23937 9.25788 2.17293 9.00008 2.17293C8.74227 2.17293 8.48882 2.23937 8.26418 2.36585C8.03953 2.49233 7.85128 2.67457 7.71758 2.89499V2.89499Z", stroke: "#F04438", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        React.createElement("path", { d: "M9 6.74998V9.74998M9 12.75H9.0075", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};
// Dark Toast Icons
var CopiedIcon = function (_a) {
    _a.color; _a.width; _a.height;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 18 18", fill: "none" },
        React.createElement("g", { "clip-path": "url(#clip0_255_5022)" },
            React.createElement("path", { d: "M15 6.75H8.25C7.42157 6.75 6.75 7.42157 6.75 8.25V15C6.75 15.8284 7.42157 16.5 8.25 16.5H15C15.8284 16.5 16.5 15.8284 16.5 15V8.25C16.5 7.42157 15.8284 6.75 15 6.75Z", stroke: "#2D2D2D", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React.createElement("path", { d: "M3.75 11.25H3C2.60218 11.25 2.22064 11.092 1.93934 10.8107C1.65804 10.5294 1.5 10.1478 1.5 9.75V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H9.75C10.1478 1.5 10.5294 1.65804 10.8107 1.93934C11.092 2.22064 11.25 2.60218 11.25 3V3.75", stroke: "#14142B", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_255_5022" },
                React.createElement("rect", { width: "18", height: "18", fill: "white" })))));
};
var DownloadIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#98A2B3" : _b, _c = _a.width, width = _c === void 0 ? "18" : _c, _d = _a.height, height = _d === void 0 ? "18" : _d;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 20 20", fill: "none" },
        React.createElement("path", { d: "M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        React.createElement("path", { d: "M5.8335 8.33331L10.0002 12.5L14.1668 8.33331", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        React.createElement("path", { d: "M10 12.5V2.5", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};
var LoadIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#27AE60" : _b; _a.width; _a.height;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "22", height: "22", viewBox: "0 0 22 22", fill: "none" },
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM11 20.1667C16.0626 20.1667 20.1667 16.0626 20.1667 11C20.1667 5.93739 16.0626 1.83333 11 1.83333C5.93739 1.83333 1.83333 5.93739 1.83333 11C1.83333 16.0626 5.93739 20.1667 11 20.1667Z", fill: "url(#paint0_angular_255_5159)" }),
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M20.883 8.80067C21.3851 8.73589 21.8446 9.0904 21.9094 9.5925C21.9696 10.0593 21.9998 10.5294 21.9998 11C21.9998 11.5063 21.5894 11.9167 21.0832 11.9167C20.5769 11.9167 20.1665 11.5063 20.1665 11C20.1665 10.6078 20.1413 10.2161 20.0911 9.82709C20.0264 9.32499 20.3809 8.86545 20.883 8.80067Z", fill: color }),
        React.createElement("defs", null,
            React.createElement("radialGradient", { id: "paint0_angular_255_5159", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(11 11) scale(11)" },
                React.createElement("stop", { "stop-color": "#27AE60", "stop-opacity": "0" }),
                React.createElement("stop", { offset: "0.0001", "stop-color": color, "stop-opacity": "0" }),
                React.createElement("stop", { offset: "1", "stop-color": color })))));
};
var PrinterIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#98A2B3" : _b; _a.width; _a.height;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none" },
        React.createElement("g", { "clip-path": "url(#clip0_255_5130)" },
            React.createElement("path", { d: "M5 7.50002V1.66669H15V7.50002", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React.createElement("path", { d: "M4.99984 15H3.33317C2.89114 15 2.46722 14.8244 2.15466 14.5118C1.8421 14.1993 1.6665 13.7754 1.6665 13.3333V9.16667C1.6665 8.72464 1.8421 8.30072 2.15466 7.98816C2.46722 7.6756 2.89114 7.5 3.33317 7.5H16.6665C17.1085 7.5 17.5325 7.6756 17.845 7.98816C18.1576 8.30072 18.3332 8.72464 18.3332 9.16667V13.3333C18.3332 13.7754 18.1576 14.1993 17.845 14.5118C17.5325 14.8244 17.1085 15 16.6665 15H14.9998", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React.createElement("path", { d: "M15 11.6667H5V18.3334H15V11.6667Z", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_255_5130" },
                React.createElement("rect", { width: "20", height: "20", fill: "white" })))));
};
var NoConnectionIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#98A2B3" : _b; _a.width; _a.height;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 18 18", fill: "none" },
        React.createElement("g", { "clip-path": "url(#clip0_255_5216)" },
            React.createElement("path", { d: "M1.5 1.5L16.5 16.5", stroke: color, "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React.createElement("path", { opacity: "0.6", d: "M6.375 12.375C7.07598 11.6879 8.01843 11.303 9 11.303C9.98157 11.303 10.924 11.6879 11.625 12.375", stroke: "#4E4B66", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React.createElement("path", { opacity: "0.6", d: "M1.5 6.615C2.42547 5.78418 3.48231 5.11258 4.6275 4.6275", stroke: color, "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React.createElement("path", { opacity: "0.6", d: "M7.99512 3.74998C11.0026 3.47998 14.1001 4.42498 16.5001 6.56998", stroke: color, "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React.createElement("path", { opacity: "0.6", d: "M12.6377 8.4375C13.2487 8.77781 13.8092 9.20192 14.3027 9.6975", stroke: color, "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React.createElement("path", { opacity: "0.6", d: "M3.75 9.74999C4.82094 8.679 6.19104 7.95735 7.68 7.67999", stroke: color, "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React.createElement("path", { opacity: "0.6", d: "M9 15H9.0075", stroke: color, "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_255_5216" },
                React.createElement("rect", { width: "18", height: "18", fill: "white" })))));
};
var UploadCloudIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? '#475467' : _b, _c = _a.width, width = _c === void 0 ? "20" : _c, _d = _a.height, height = _d === void 0 ? "20" : _d;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 20 20", fill: "none" },
        React.createElement("g", { "clip-path": "url(#clip0_48_3445)" },
            React.createElement("path", { d: "M13.3333 13.3334L10 10M10 10L6.66666 13.3334M10 10V17.5M16.9917 15.325C17.8044 14.8819 18.4465 14.1808 18.8166 13.3322C19.1866 12.4837 19.2635 11.5361 19.0352 10.6389C18.8068 9.74182 18.2862 8.94629 17.5556 8.3779C16.8249 7.80951 15.9257 7.50064 15 7.50003H13.95C13.6978 6.5244 13.2276 5.61864 12.575 4.85085C11.9223 4.08307 11.104 3.47324 10.1817 3.0672C9.25946 2.66116 8.25712 2.46949 7.25009 2.5066C6.24307 2.5437 5.25755 2.80861 4.36764 3.28142C3.47774 3.75422 2.70659 4.42261 2.11218 5.23635C1.51777 6.05008 1.11557 6.98797 0.935814 7.97952C0.756055 8.97107 0.803418 9.99047 1.07434 10.9611C1.34527 11.9317 1.8327 12.8282 2.5 13.5834", stroke: color, "stroke-width": "1.66667", "stroke-linecap": "round", "stroke-linejoin": "round" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_48_3445" },
                React.createElement("rect", { width: width, height: height, fill: "white" })))));
};
// Utility Icons
var CloseIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#98A2B3" : _b, _c = _a.width, width = _c === void 0 ? "24" : _c, _d = _a.height, height = _d === void 0 ? "24" : _d; _a.viewBox;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 16 16", fill: "none" },
        React.createElement("path", { d: "M12 4L4 12", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        React.createElement("path", { d: "M4 4L12 12", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};
var ChevronDownIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#98A2B3" : _b, _c = _a.width, width = _c === void 0 ? "18" : _c, _d = _a.height, height = _d === void 0 ? "18" : _d;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 16 16", fill: "none" },
        React.createElement("path", { d: "M4 6L8 10L12 6", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })));
};
var ChevronUpIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#98A2B3" : _b, _c = _a.width, width = _c === void 0 ? "18" : _c, _d = _a.height, height = _d === void 0 ? "18" : _d;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 50 50", fill: "none" },
        React.createElement("path", { d: "M33.1489 28.0691L25.0002 19.9571L16.8514 28.0691", stroke: color, "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};
var ChevronRightIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#A0A3BD" : _b, _c = _a.width, width = _c === void 0 ? "18" : _c, _d = _a.height, height = _d === void 0 ? "18" : _d;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 20 20", fill: "none" },
        React.createElement("path", { d: "M7.5 15L12.5 10L7.5 5", stroke: color, "stroke-width": "1.3", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};
var ChevronLeftIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#A0A3BD" : _b, _c = _a.width, width = _c === void 0 ? "18" : _c, _d = _a.height, height = _d === void 0 ? "18" : _d;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 20 20", fill: "none" },
        React.createElement("path", { d: "M12.5 15L7.5 10L12.5 5", stroke: color, "stroke-width": "1.3", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};
var ThreeDotsIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#A0A3BD" : _b; _a.width; _a.height;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "10", height: "2", viewBox: "0 0 10 2", fill: "none" },
        React.createElement("path", { d: "M1.69533 1.76706C1.4851 1.76706 1.3047 1.69178 1.15414 1.54121C1.00357 1.39064 0.928284 1.21024 0.928284 1.00002C0.928284 0.789789 1.00357 0.609392 1.15414 0.458823C1.3047 0.308255 1.4851 0.232971 1.69533 0.232971C1.90556 0.232971 2.08595 0.308255 2.23652 0.458823C2.38709 0.609392 2.46237 0.789789 2.46237 1.00002C2.46237 1.13922 2.42686 1.26706 2.35584 1.38354C2.28766 1.50002 2.19533 1.59377 2.07885 1.66479C1.96522 1.73297 1.83737 1.76706 1.69533 1.76706Z", fill: color }),
        React.createElement("path", { d: "M5.00002 1.76706C4.78979 1.76706 4.60939 1.69178 4.45882 1.54121C4.30826 1.39064 4.23297 1.21024 4.23297 1.00002C4.23297 0.789789 4.30826 0.609392 4.45882 0.458823C4.60939 0.308255 4.78979 0.232971 5.00002 0.232971C5.21024 0.232971 5.39064 0.308255 5.54121 0.458823C5.69178 0.609392 5.76706 0.789789 5.76706 1.00002C5.76706 1.13922 5.73155 1.26706 5.66053 1.38354C5.59235 1.50002 5.50002 1.59377 5.38354 1.66479C5.2699 1.73297 5.14206 1.76706 5.00002 1.76706Z", fill: color }),
        React.createElement("path", { d: "M8.3047 1.76706C8.09448 1.76706 7.91408 1.69178 7.76351 1.54121C7.61294 1.39064 7.53766 1.21024 7.53766 1.00002C7.53766 0.789789 7.61294 0.609392 7.76351 0.458823C7.91408 0.308255 8.09448 0.232971 8.3047 0.232971C8.51493 0.232971 8.69533 0.308255 8.8459 0.458823C8.99647 0.609392 9.07175 0.789789 9.07175 1.00002C9.07175 1.13922 9.03624 1.26706 8.96522 1.38354C8.89703 1.50002 8.8047 1.59377 8.68823 1.66479C8.57459 1.73297 8.44675 1.76706 8.3047 1.76706Z", fill: color })));
};
var EditIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? '#667085' : _b, _c = _a.width, width = _c === void 0 ? "20" : _c, _d = _a.height, height = _d === void 0 ? "20" : _d;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 20 20", fill: "none" },
        React.createElement("path", { d: "M10 16.6666H17.5", stroke: color, "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        React.createElement("path", { d: "M13.75 2.91669C14.0815 2.58517 14.5312 2.39893 15 2.39893C15.2321 2.39893 15.462 2.44465 15.6765 2.53349C15.891 2.62233 16.0858 2.75254 16.25 2.91669C16.4142 3.08085 16.5444 3.27572 16.6332 3.4902C16.722 3.70467 16.7678 3.93455 16.7678 4.16669C16.7678 4.39884 16.722 4.62871 16.6332 4.84319C16.5444 5.05766 16.4142 5.25254 16.25 5.41669L5.83333 15.8334L2.5 16.6667L3.33333 13.3334L13.75 2.91669Z", stroke: color, "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};
// Other Icons
var HelpCircleIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#98A2B3" : _b, _c = _a.width, width = _c === void 0 ? "18" : _c, _d = _a.height, height = _d === void 0 ? "18" : _d;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 16 16", fill: "none" },
        React.createElement("g", { clipPath: "url(#clip0_2165_7823)" },
            React.createElement("path", { d: "M6.05992 5.99998C6.21665 5.55442 6.52602 5.17872 6.93322 4.9394C7.34042 4.70009 7.81918 4.61261 8.2847 4.69245C8.75022 4.7723 9.17246 5.01433 9.47664 5.37567C9.78081 5.737 9.94729 6.19433 9.94659 6.66665C9.94659 7.99998 7.94659 8.66665 7.94659 8.66665M7.99992 11.3333H8.00659M14.6666 7.99998C14.6666 11.6819 11.6818 14.6666 7.99992 14.6666C4.31802 14.6666 1.33325 11.6819 1.33325 7.99998C1.33325 4.31808 4.31802 1.33331 7.99992 1.33331C11.6818 1.33331 14.6666 4.31808 14.6666 7.99998Z", stroke: color, strokeWidth: "1.33333", strokeLinecap: "round", strokeLinejoin: "round" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_2165_7823" },
                React.createElement("rect", { width: "16", height: "16", fill: "white" })))));
};
var RightArrowIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#98A2B3" : _b, _c = _a.width, width = _c === void 0 ? "18" : _c, _d = _a.height, height = _d === void 0 ? "18" : _d;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 18 18", fill: "none" },
        React.createElement("path", { d: "M3.75 9H14.25", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M9 3.75L14.25 9L9 14.25", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })));
};
var UpArrowIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#98A2B3" : _b, _c = _a.width, width = _c === void 0 ? "18" : _c, _d = _a.height, height = _d === void 0 ? "18" : _d;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 14 14", fill: "none" },
        React.createElement("path", { d: "M7 11.0833V2.91663", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        React.createElement("path", { d: "M2.91666 6.99996L6.99999 2.91663L11.0833 6.99996", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};
var DownArrowIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#98A2B3" : _b, _c = _a.width, width = _c === void 0 ? "18" : _c, _d = _a.height, height = _d === void 0 ? "18" : _d;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 14 14", fill: "none" },
        React.createElement("path", { d: "M7 2.91663V11.0833", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        React.createElement("path", { d: "M11.0834 7L7.00002 11.0833L2.91669 7", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};
var CrownIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#98A2B3" : _b, _c = _a.width, width = _c === void 0 ? "18" : _c, _d = _a.height, height = _d === void 0 ? "18" : _d;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 16 16", fill: "none" },
        React.createElement("path", { d: "M3.33337 13.3334H12.6667M1.33337 2.66669L3.33337 10.6667H12.6667L14.6667 2.66669L10.6667 7.33335L8.00004 2.66669L5.33337 7.33335L1.33337 2.66669Z", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};
var ClockIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#98A2B3" : _b, _c = _a.width, width = _c === void 0 ? "18" : _c, _d = _a.height, height = _d === void 0 ? "18" : _d;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 16 16", fill: "none" },
        React.createElement("g", { "clip-path": "url(#clip0_701_25161)" },
            React.createElement("path", { d: "M7.99998 14.6666C11.6819 14.6666 14.6666 11.6819 14.6666 7.99998C14.6666 4.31808 11.6819 1.33331 7.99998 1.33331C4.31808 1.33331 1.33331 4.31808 1.33331 7.99998C1.33331 11.6819 4.31808 14.6666 7.99998 14.6666Z", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React.createElement("path", { d: "M8 4V8H11", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_701_25161" },
                React.createElement("rect", { width: width, height: height, fill: "white" })))));
};
var HomeFilledIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#98A2B3" : _b, _c = _a.width, width = _c === void 0 ? "20" : _c, _d = _a.height, height = _d === void 0 ? "20" : _d;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 20 20", fill: "none" },
        React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3.48198 7.59216C2.85656 8.16072 2.5 8.96674 2.5 9.81198V16.8182C2.5 16.8182 2.5 18.3334 4 18.3334C5.5 18.3334 16 18.3334 16 18.3334C16 18.3334 17.5 18.3334 17.5 16.8182C17.5 15.7253 17.5 11.8733 17.5 9.8112C17.5 8.96596 17.1434 8.16072 16.518 7.59216L12.018 3.50125C10.8738 2.46101 9.12625 2.46101 7.98198 3.50125L3.48198 7.59216Z", fill: color })));
};
var SlashDividerIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#98A2B3" : _b, _c = _a.width, width = _c === void 0 ? "20" : _c, _d = _a.height, height = _d === void 0 ? "20" : _d;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 20 20", fill: "none" },
        React.createElement("line", { x1: "6.26361", y1: "18.4759", x2: "14.0116", y2: "1.86023", stroke: color, "stroke-width": "1.66667", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};
var LeftArrowCircleIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? '#667085' : _b, _c = _a.width, width = _c === void 0 ? "21" : _c, _d = _a.height, height = _d === void 0 ? "20" : _d;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 21 20", fill: "none" },
        React.createElement("path", { d: "M10.5 6.66663L7.16663 9.99996M7.16663 9.99996L10.5 13.3333M7.16663 9.99996H13.8333M18.8333 9.99996C18.8333 14.6023 15.1023 18.3333 10.5 18.3333C5.89759 18.3333 2.16663 14.6023 2.16663 9.99996C2.16663 5.39759 5.89759 1.66663 10.5 1.66663C15.1023 1.66663 18.8333 5.39759 18.8333 9.99996Z", stroke: color, "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};
var RightArrowCircleIcon = function (_a) {
    var _b = _a.color, color = _b === void 0 ? '#667085' : _b, _c = _a.width, width = _c === void 0 ? "21" : _c, _d = _a.height, height = _d === void 0 ? "20" : _d;
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 21 20", fill: "none" },
        React.createElement("path", { d: "M10.5001 13.3333L13.8334 9.99996M13.8334 9.99996L10.5001 6.66663M13.8334 9.99996H7.16675M18.8334 9.99996C18.8334 14.6023 15.1025 18.3333 10.5001 18.3333C5.89771 18.3333 2.16675 14.6023 2.16675 9.99996C2.16675 5.39759 5.89771 1.66663 10.5001 1.66663C15.1025 1.66663 18.8334 5.39759 18.8334 9.99996Z", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};

var AccordionButton = function (_a) {
    var initialState = _a.initialState;
    var _b = React.useState(initialState), state = _b[0], setState = _b[1];
    var toggleState = function () {
        setState(state === 'open' ? 'closed' : 'open');
    };
    var width = '35px';
    var height = '23px';
    return (React.createElement("div", { className: "accordion-button ".concat(state), onClick: toggleState }, state === 'open' ? (React.createElement(ChevronUpIcon, { color: '#FFFFFF', width: width, height: height })) : (React.createElement(ChevronDownIcon, { color: '#EA287C', width: width, height: height }))));
};

var Accordion = function (_a) {
    _a.title; var state = _a.state, placeholder = _a.placeholder, addMedia = _a.addMedia; _a.mediaURL; var mediaType = _a.mediaType, width = _a.width;
    placeholder = "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the first item's accordion body.";
    return (React.createElement("div", { className: "accordion ".concat(state), style: { width: width } },
        React.createElement("div", { className: 'header' },
            React.createElement("h2", null, 'Accordion Item ?'),
            React.createElement(AccordionButton, { initialState: state })),
        React.createElement("div", { className: "media ".concat(mediaType) },
            addMedia && mediaType === 'img'
        // && (
        //     <img src={mediaURL} alt='media' />
        // )
        ,
            addMedia && mediaType === 'video' && (React.createElement("video", { width: '560', height: '315' }))),
        state === 'open' && (React.createElement("p", { className: 'placeholder-text' }, placeholder))));
};

var css_248z$w = "  /* Font family and generic styles */\r\n  .avatar-container {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n    border-radius: 200px;\r\n\r\n    color: #475467 /* grey 600 */;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    background-color: #F9FAFB; /* grey 50 */\r\n\r\n    padding: 0%;\r\n    margin: 0%;\r\n  }\r\n\r\n  /* Sizes */\r\n  .avatar-container.xxs {\r\n    width: 16px;\r\n    height: 16px;\r\n    font-size: 8px;\r\n  }\r\n\r\n  .avatar-container.xs {\r\n    width: 24px;\r\n    height: 24px;\r\n    font-size: 10px;\r\n  }\r\n\r\n  .avatar-container.sm {\r\n    width: 32px;\r\n    height: 32px;\r\n    font-size: 12px;\r\n  }\r\n\r\n  .avatar-container.md {\r\n    width: 40px;\r\n    height: 40px;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .avatar-container.lg {\r\n    width: 48px;\r\n    height: 48px;\r\n    font-size: 18px;\r\n  }\r\n\r\n  .avatar-container.xl {\r\n    width: 56px;\r\n    height: 56px;\r\n    font-size: 20px;\r\n  }\r\n\r\n  .avatar-container.xxl {\r\n    width: 64px;\r\n    height: 64px;\r\n    font-size: 24px;\r\n  }\r\n\r\n  /* Image background */\r\n  .avatar-container img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover; /* make sure image fills container */\r\n  }\r\n\r\n  /* Focused state */\r\n  .avatar-container.focused {\r\n    border: 4px solid #F2F4F7;\r\n  }\r\n\r\n  /* Online indicator */\r\n  .avatar-container.online-indicator {\r\n    position: relative;\r\n  }\r\n\r\n  .avatar-container.online-indicator.xs::after {\r\n    width: 6px;\r\n    height: 6px;\r\n    bottom: -2px;\r\n    right: -2.5px;\r\n  }\r\n  \r\n  .avatar-container.online-indicator.sm::after {\r\n    width: 8px;\r\n    height: 8px;\r\n    bottom: -1.5px;\r\n    right: -2px;\r\n  }\r\n  \r\n  .avatar-container.online-indicator.md::after {\r\n    width: 10px;\r\n    height: 10px;\r\n    bottom: -1px;\r\n    right: -1.5px;\r\n  }\r\n  \r\n  .avatar-container.online-indicator.lg::after {\r\n    width: 12px;\r\n    height: 12px;\r\n    bottom: -0.5px;\r\n    right: -1px;\r\n\r\n  }\r\n  \r\n  .avatar-container.online-indicator.xl::after {\r\n    width: 14px;\r\n    height: 14px;\r\n    bottom: 0px;\r\n    right: -0.5px;\r\n  }\r\n  \r\n  .avatar-container.online-indicator.xxl::after {\r\n    width: 16px;\r\n    height: 16px;\r\n    bottom: 0.5px;\r\n    right: 1px;\r\n  }\r\n\r\n  .avatar-container.online-indicator::after {\r\n    content: '';\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 50%;\r\n    border: 1.5px solid #FFF;\r\n    background-color: #12B76A;\r\n    position: absolute;\r\n    bottom: 0.5px;\r\n    right: 0.5px;\r\n  }\r\n\r\n  .avatar-container.icon {\r\n    background-color: #FFF6FA; /* primary 50 */ \r\n  }\r\n\r\n  /* Initials styling */\r\n  .avatar-initials{\r\n    display: flex; /* Center icon or initials vertically */\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  .avatar-icon {\r\n    background-color: #FFF6FA ; /* primary 50 */\r\n  }\r\n";
styleInject(css_248z$w);

// Avatar.tsx
var Avatar = function (_a) {
    var size = _a.size, background = _a.background; _a.image; var initials = _a.initials, focused = _a.focused, onlineIndicator = _a.onlineIndicator;
    var content;
    switch (background) {
        case 'image':
            // content = <Image src = {imageSrc} />;
            break;
        case 'icon':
            content = React.createElement(UserIcon, null);
            break;
        case 'initials':
            content = React.createElement("span", { className: "avatar-initials" }, initials || 'JD');
            break;
        default:
            content = null;
    }
    return (React.createElement("div", { className: "avatar-container ".concat(size, " \n                  ").concat(focused ? 'focused' : '', " \n                  ").concat(onlineIndicator ? 'online-indicator' : '', " \n                  ").concat(background, " ") }, content));
};

var css_248z$v = "/* AvatarBadge.css */\r\n.avatar-badge-container {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n\r\n    position: relative;\r\n    display: inline-block;\r\n    font-size: 11px;\r\n  }\r\n  \r\n  .avatar-badge {\r\n    width: 36px;\r\n    height: 36px;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    color: white;\r\n  }\r\n  \r\n  .avatar-badge.approved {\r\n    background-color: #8BC34A; /* Green background for approved */\r\n  }\r\n  \r\n  .avatar-badge.denied {\r\n    background-color: #F44336; /* Red background for denied */\r\n  }\r\n  \r\n  .initials {\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .status-badge {\r\n    width: 18px;\r\n    height: 18px;\r\n    border-radius: 50%;\r\n\r\n    position: absolute;\r\n    bottom: -3px;\r\n    right: -11px; /* Adjust based on positioning */\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0%;\r\n    margin: 0% ;\r\n\r\n    background-color: white;\r\n    border: 2px solid white;\r\n    color: white;\r\n  }\r\n  \r\n  .status-badge.approved {\r\n    background-color: #DFF0D8; /* Light green for approved */\r\n    color: #4CAF50; /* Darker green for check mark */\r\n  }\r\n  \r\n  .status-badge.denied {\r\n    background-color: #F2DEDE; /* Light red for denied */\r\n    color: #F44336; /* Darker red for cross mark */\r\n  }\r\n  ";
styleInject(css_248z$v);

var AvatarBadge = function (_a) {
    var status = _a.status, initials = _a.initials;
    return (React.createElement("div", { className: "avatar-badge-container" },
        React.createElement("div", { className: "avatar-badge ".concat(status) },
            React.createElement("span", { className: "initials" }, initials)),
        React.createElement("div", { className: "status-badge ".concat(status) }, status === 'approved' ? (React.createElement(CheckmarkIcon, { color: '#38C976', width: '12', height: '12', viewBox: '0 0 12 12' }) // check mark
        ) : (React.createElement(CloseIcon, { color: '#FE4646', width: '12', height: '12', viewBox: '0 0 12 12' }) // cross mark
        ))));
};

var css_248z$u = "/* GroupAvatar.css */\r\n.group-avatar-container {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n    font-size: 12px;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n  .avatar {\r\n    position: relative;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    border: 2px solid white;\r\n    margin-left: -10px;\r\n  }\r\n  \r\n  .avatar:first-child {\r\n    margin-left: 0;\r\n  }\r\n  \r\n  .avatar img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n  }\r\n  \r\n\r\n  .group-avatar-container.xxs .avatar {\r\n    width: 16px;\r\n    height: 16px;\r\n  }\r\n\r\n  .group-avatar-container.xs .avatar {\r\n    width: 24px;\r\n    height: 24px;\r\n  }\r\n  \r\n  .group-avatar-container.sm .avatar {\r\n    width: 32px;\r\n    height: 32px;\r\n  }\r\n  \r\n  .group-avatar-container.md .avatar {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n  \r\n  .group-overlay {\r\n    background-color: #eee;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 0.8em;\r\n    color: #555;\r\n  }\r\n  \r\n  .group-overlay span {\r\n    font-weight: bold;\r\n  }\r\n  ";
styleInject(css_248z$u);

var GroupAvatar = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'md' : _b, _c = _a.groupCount, groupCount = _c === void 0 ? 4 : _c, _d = _a.otherAvatars, otherAvatars = _d === void 0 ? '+5' : _d, _e = _a.colors // Default colors for demonstration
    , colors = _e === void 0 ? ['#F9BED7', '#F598C1', '#F173A9', '#EA287C'] : _e // Default colors for demonstration
    ;
    var avatarsToShow = colors.slice(0, groupCount);
    return (React.createElement("div", { className: "group-avatar-container ".concat(size) },
        avatarsToShow.map(function (color, index) { return (React.createElement("div", { key: index, className: "avatar", style: { backgroundColor: color } })); }),
        groupCount < colors.length && (React.createElement("div", { className: "avatar group-overlay" },
            React.createElement("span", null, otherAvatars)))));
};

var css_248z$t = ".badge-container {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n\r\n    display: inline-flex;\r\n    height: 16px;\r\n    padding: 5px 8px;\r\n    align-items: center;\r\n    gap: 4px;\r\n    border-radius: 8px;\r\n    font-size: 12px;\r\n}\r\n\r\n.badge-container.rounded {\r\n    border-radius: 60px;\r\n}\r\n\r\n.badge-icon-text {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 4px;\r\n}\r\n\r\n.badge-icon-container {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.badge-container.success {\r\n    background: var(--Success-100, #D1FADF);\r\n    color: var(--Success-500, #12B76A);\r\n}\r\n\r\n.badge-container.error {\r\n    background: var(--Error-100, #FEE4E2);\r\n    color: var(--Error-500, #F04438);\r\n}\r\n\r\n.badge-container.warning {\r\n    background: var(--Warning-100, #FEF0C7);\r\n    color: var(--Warning-500, #F79009);\r\n}\r\n\r\n.badge-container.gray {\r\n    background: var(--Gray-200, #EAECF0);\r\n    color: var(--Gray-500, #6C757D);\r\n}\r\n\r\n.badge-container.primary {\r\n    background: var(--Primary-100, #FCE3ED);\r\n    color: var(--Primary-500, #EA287C);\r\n}";
styleInject(css_248z$t);

var Badge = function (_a) {
    var rounded = _a.rounded, _b = _a.label, label = _b === void 0 ? "Label" : _b, state = _a.state, addLeftIcon = _a.addLeftIcon, addRightIcon = _a.addRightIcon, addAvatar = _a.addAvatar;
    var getIcon = function () {
        switch (state) {
            case 'gray':
                return React.createElement(ClockIcon, { color: '#98A2B3', width: '16', height: '16' });
            case 'success':
                return React.createElement(CheckmarkIcon, { color: '#12B76A', width: '16', height: '16' });
            case 'warning':
                return React.createElement(WarningIcon, { color: '#FDB022', width: '16', height: '16' });
            case 'error':
                return React.createElement(ErrorIcon, { color: '#F97066', width: '16', height: '16' });
            case 'primary':
                return React.createElement(CrownIcon, { color: '#F173A9', width: '16', height: '16' });
            default:
                return null;
        }
    };
    var getStateColor = function () {
        switch (state) {
            case 'gray':
                return '#98A2B3';
            case 'success':
                return '#12B76A';
            case 'warning':
                return '#FDB022';
            case 'error':
                return '#F97066';
            case 'primary':
                return '#F173A9';
            default:
                return '#98A2B3';
        }
    };
    return (React.createElement("div", { className: "badge-container ".concat(state, " ").concat(rounded ? 'rounded' : '') },
        React.createElement("div", { className: 'badge-icon-text' },
            React.createElement("div", { className: 'badge-icon-container' },
                addAvatar && React.createElement(Avatar, { size: 'xxs', background: 'initials' }),
                addLeftIcon && getIcon()),
            React.createElement("div", { className: 'text-content' },
                React.createElement("label", { className: 'badge-label' }, label))),
        addRightIcon && React.createElement(CloseIcon, { color: getStateColor(), width: "14", height: '14' })));
};

var css_248z$s = ".value-badge-container {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n    display: inline-flex;\r\n    height: 22px;\r\n    padding: 5px 8px;\r\n    align-items: center;\r\n    gap: 4px;\r\n    flex-shrink: 0;\r\n    border-radius: 8px;\r\n}\r\n\r\n.value-badge-container.positive {\r\n    background: var(--Success-100, #D1FADF);\r\n    color: var(--Success-500, #12B76A);\r\n}\r\n\r\n.value-badge-container.negative {\r\n    background: var(--Error-100, #FEE4E2);\r\n    color: var(--Error-500, #F04438);\r\n}\r\n\r\n.value-badge-container.neutral {\r\n    background: var(--Gray-200, #EAECF0);\r\n    color: var(--Gray-400, #98A2B3);\r\n}";
styleInject(css_248z$s);

var ValueBadge = function (_a) {
    var value = _a.value, iconPosition = _a.iconPosition, iconDirection = _a.iconDirection, theme = _a.theme;
    var getThemeColor = function () {
        switch (theme) {
            case 'positive':
                return '#12B76A';
            case 'negative':
                return '#F97066';
            case 'neutral':
                return '#98A2B3';
            default:
                return '#98A2B3';
        }
    };
    var getIcon = function () {
        var color = getThemeColor();
        switch (iconDirection) {
            case 'up':
                return React.createElement(UpArrowIcon, { color: color }); // Update the color to match the theme
            case 'down':
                return React.createElement(DownArrowIcon, { color: color }); // Update the color to match the theme
            default:
                return null;
        }
    };
    return (React.createElement("div", { className: "value-badge-container ".concat(theme) },
        iconPosition === 'left' && getIcon(),
        React.createElement("div", { className: 'value-badge' }, value),
        iconPosition === 'right' && getIcon()));
};

var css_248z$r = ".storybook-button {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n    font-weight: 700;\r\n    border: 0;\r\n    border-radius: 3em;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    line-height: 1;\r\n    width: 100%;\r\n}\r\n.storybook-button--primary {\r\n    color: white;\r\n    background-color: #EA287C;\r\n    border: 1px solid #EA287C;\r\n    box-shadow: 0 1px 2px 0 #1018280D;\r\n    top: 20px;\r\n    left: 20px;\r\n    padding: 10px 16px 10px 16px;\r\n    gap: 8px;\r\n    border-radius: 8px 8px 8px 8px;\r\n}\r\n.storybook-button--primary:hover {\r\n    background-color: #D51568;\r\n    border: 1px solid #D51568;\r\n}\r\n.storybook-button--primary:focus {\r\n    box-shadow: 0 0 0 1px #D51568;\r\n    outline: none;\r\n    background-color: #EA287C;\r\n    border: 1px solid #EA287C;\r\n}\r\n.storybook-button--secondary {\r\n    color: #EA287C;\r\n    background-color: #FFF6FA;\r\n    border: 1px solid #FFF6FA;\r\n    box-shadow: 0 1px 2px 0 #1018280D;\r\n    top: 20px;\r\n    left: 20px;\r\n    padding: 10px 16px 10px 16px;\r\n    gap: 8px;\r\n    border-radius: 8px 8px 8px 8px;\r\n}\r\n.storybook-button--secondary:hover {\r\n    background-color: #FCE3ED;\r\n    border: 1px solid #FCE3ED;\r\n}\r\n.storybook-button--secondary:focus {\r\n    box-shadow: 0 0 0 1px #EA287C;\r\n    outline: none;\r\n    background-color: #FFF6FA;\r\n    border: 1px solid #FFF6FA;\r\n}\r\n.storybook-button--tertiary {\r\n    color: black;\r\n    background-color: #F7F7FC;\r\n    border: 1px solid #F7F7FC;\r\n    box-shadow: 0 1px 2px 0 #1018280D;\r\n    top: 20px;\r\n    left: 20px;\r\n    padding: 10px 16px 10px 16px;\r\n    gap: 8px;\r\n    border-radius: 8px 8px 8px 8px;\r\n}\r\n.storybook-button--tertiary:hover {\r\n    background-color: #EAEAF2;\r\n    border: 1px solid #EAEAF2;\r\n}\r\n.storybook-button--tertiary:focus {\r\n    box-shadow: 0 0 0 1px #EAEAF2;\r\n    outline: none;\r\n    background-color: #F2F4F7;\r\n    border: 1px solid #F2F4F7;\r\n}\r\n.storybook-button--small {\r\n    font-size: 12px;\r\n    padding: 10px 16px;\r\n}\r\n.storybook-button--medium {\r\n    font-size: 14px;\r\n    padding: 11px 20px;\r\n}\r\n.storybook-button--large {\r\n    font-size: 16px;\r\n    padding: 12px 24px;\r\n}\r\n.storybook-disabled {\r\n    cursor: not-allowed;\r\n    opacity: 0.5;\r\n}\r\n\r\n.button-content {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 8px;\r\n}";
styleInject(css_248z$r);

var Button = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, backgroundColor = _a.backgroundColor, label = _a.label, icon = _a.icon, onClick = _a.onClick, _d = _a.disabled, disabled = _d === void 0 ? false : _d, width = _a.width;
    var mode = "storybook-button--".concat(type);
    var disable = disabled ? 'storybook-button--disabled' : '';
    var iconColor = disabled ? '#F7F7FC' : type === 'primary' ? '#FFFFFF' : type === 'secondary' ? '#EA287C' : '#475467';
    return (React.createElement("button", { type: "button", className: ['storybook-button', "storybook-button--".concat(size), mode].join(' ') + [disable].join(' '), disabled: disabled, style: { backgroundColor: backgroundColor, width: width }, onClick: onClick },
        React.createElement("div", { className: 'button-content' },
            icon === 'left' && React.createElement(LeftArrowCircleIcon, { color: iconColor }),
            label,
            icon === 'right' && React.createElement(RightArrowCircleIcon, { color: iconColor }))));
};

var css_248z$q = ".breadcrumbs {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 8px;\r\n    height: 28px;\r\n}\r\n\r\np {\r\n    margin: 0%;\r\n    padding: 0%;\r\n}\r\n\r\n.current {\r\n    display: flex;\r\n    padding: 8px;\r\n\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 6px;\r\n    background: var(--Primary-50, #FFF6FA);\r\n\r\n    color: var(--Primary-500, #EA287C);\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n}";
styleInject(css_248z$q);

var Breadcrumbs = function (_a) {
    var divider = _a.divider, _b = _a.level, level = _b === void 0 ? 1 : _b, _c = _a.label, label = _c === void 0 ? "Settings" : _c, _d = _a.current, current = _d === void 0 ? "Team" : _d;
    var getDivider = function () {
        if (divider === 'slash') {
            return React.createElement(SlashDividerIcon, null);
        }
        else if (divider === 'chevron') {
            return React.createElement(ChevronRightIcon, null);
        }
        else {
            return null;
        }
    };
    return (React.createElement("div", { className: "breadcrumbs" },
        React.createElement(HomeFilledIcon, null),
        getDivider(),
        React.createElement("p", null, label),
        level === 2 &&
            (React.createElement(React.Fragment, null,
                getDivider(),
                React.createElement(ThreeDotsIcon, null))),
        getDivider(),
        React.createElement("p", { className: 'current' }, current)));
};

var css_248z$p = ".checkbox-container {\r\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  padding-left: 16px;\r\n  padding-right: 16px;\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n\r\n  border-radius: 8px;\r\n  gap: 12px;\r\n  display: flex;\r\n  width: 344px;\r\n  height: fit-content;\r\n}\r\n\r\n.checkbox-container.with-supporting-text {\r\n  background-color: #FFF6FA;\r\n}\r\n\r\n.text-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: fit-content;\r\n  margin: 0px;\r\n  padding: 0;\r\n  margin-top: 0%;\r\n}\r\n\r\n.label {\r\n  color: var(--Gray-700, #344054);\r\n  height: fit-content;\r\n  margin: 0px;\r\n\r\n  /* Inter/Text/sm/Medium */\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  line-height: 20px; /* 142.857% */\r\n}\r\n\r\n.supporting-text {\r\n  color: var(--Gray-500, #667085);\r\n  height: fit-content;\r\n  margin: 0px;\r\n\r\n  /* Gotham/sm/Regular */\r\n  font-size: 14px;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 22px; /* 157.143% */\r\n  letter-spacing: -0.28px;\r\n}\r\n\r\n";
styleInject(css_248z$p);

var css_248z$o = ".radio {\r\n    border: 1px solid var(--Gray-300, #D0D5DD);\r\n    background: var(--Base-White, #FFF);\r\n    display: flex;\r\n    flex-shrink: 0;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.inner-circle {\r\n    background: var(--Base-White, #FFF);\r\n}\r\n\r\n/* Sizes */\r\n.radio.small {\r\n    width: 16px;\r\n    height: 16px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.radio.medium {\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 20px;\r\n}\r\n\r\n/* States */\r\n.radio:hover {\r\n    border: 1px solid var(--Primary-500, #EA287C);\r\n    background: var(--Primary-100, #FCE3ED);\r\n}\r\n\r\n.radio.focused {\r\n    border: 1px solid var(--Primary-300, #F598C1);\r\n    background: var(--Base-White, #FFF);\r\n\r\n    /* Focus ring/4px primary-100 */\r\n    box-shadow: 0px 0px 0px 4px #F4EBFF;\r\n}\r\n\r\n.radio.disabled {\r\n    cursor: not-allowed;\r\n    border: 1px solid var(--Gray-200, #EAECF0);\r\n    background: var(--Gray-100, #F2F4F7);\r\n}\r\n\r\n/* Checked */\r\n.radio.checked {\r\n    border: 1px solid var(--Primary-500, #EA287C);\r\n    background: var(--Gray-100, #F2F4F7);\r\n}\r\n\r\n.inner-circle.checked.small {\r\n    width: 8px;\r\n    height: 8px;\r\n    border-radius: 10px;\r\n}\r\n.inner-circle.checked.medium {\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 10px;\r\n}\r\n.inner-circle.checked {\r\n    background: var(--Primary-500, #EA287C);\r\n}\r\n\r\n.inner-circle.checked.disabled {\r\n    background: var(--Gray-200, #EAECF0);;\r\n}\r\n\r\n/* Checked states */\r\n.radio.checked.disabled {\r\n    cursor: not-allowed;\r\n    border: 1px solid var(--Gray-200, #EAECF0);\r\n    background: var(--Gray-100, #F2F4F7);\r\n}";
styleInject(css_248z$o);

var RadioBase = function (_a) {
    var _b = _a.checked, initialChecked = _b === void 0 ? false : _b, focused = _a.focused, size = _a.size, disabled = _a.disabled;
    var _c = React.useState(initialChecked), checked = _c[0], setChecked = _c[1];
    var toggleRadio = function () {
        if (!disabled) {
            setChecked(function (prevChecked) { return !prevChecked; });
        }
    };
    return (React.createElement("div", { className: "radio ".concat(checked ? 'checked' : '', " ").concat(size, " ").concat(focused ? 'focused' : '', " ").concat(disabled ? 'disabled' : ''), onClick: toggleRadio },
        React.createElement("div", { className: "inner-circle ".concat(checked ? 'checked' : '', " ").concat(size, " ").concat(disabled ? 'disabled' : '') })));
};

var css_248z$n = ".checkbox {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: 1px solid var(--Gray-300, #D0D5DD);\r\n    background: var(--Base-White, #FFF);\r\n}\r\n\r\n/* sizes */\r\n.checkbox.small {\r\n    width: 16px;\r\n    height: 16px;\r\n    border-radius: 4px;\r\n    padding: 2px;\r\n}\r\n\r\n.checkbox.medium {\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 6px;\r\n    padding: 1px;\r\n}\r\n\r\n/* default states */\r\n.checkbox:hover {\r\n    border: 1px solid var(--Primary-500, #EA287C);\r\n    background: var(--Primary-100, #FCE3ED);\r\n}\r\n\r\n.checkbox.focused {\r\n    border: 1px solid var(--Primary-300, #F598C1);\r\n    /* Focus ring/4px primary-100 */\r\n    box-shadow: 0px 0px 0px 4px #F4EBFF;\r\n}\r\n\r\n.checkbox.disabled {\r\n    cursor: not-allowed;\r\n    border: 1px solid var(--Gray-300, #D0D5DD);\r\n    background: var(--Gray-50, #F7F8FA);\r\n}\r\n\r\n/* checked states */\r\n.checkbox.checked, .checkbox.indeterminate {  \r\n    border: 1px solid var(--Primary-500, #EA287C);\r\n    background: var(--Primary-50, #FFF6FA);\r\n}\r\n\r\n.checkbox.checked:hover, .checkbox.indeterminate:hover {\r\n    background: var(--Primary-100, #FCE3ED);\r\n}\r\n\r\n.checkbox.checked.focused {\r\n    border: 1px solid var(--Primary-500, #EA287C);\r\n    background: var(--Primary-50, #FFF6FA);\r\n    /* Focus ring/4px primary-100 */\r\n    box-shadow: 0px 0px 0px 4px #F4EBFF;\r\n}\r\n\r\n.checkbox.checked.disabled, .checkbox.indeterminate.disabled {\r\n    cursor: not-allowed;\r\n    border: 1px solid var(--Base-White, #FFF);\r\n    background: var(--Gray-200, #EAECF0);\r\n}\r\n";
styleInject(css_248z$n);

var CheckboxBase = function (_a) {
    var _b = _a.checked, initialChecked = _b === void 0 ? 'unchecked' : _b, focused = _a.focused, size = _a.size, disabled = _a.disabled;
    var _c = React.useState(initialChecked), checked = _c[0], setChecked = _c[1];
    var toggleCheckbox = function () {
        setChecked(function (prevChecked) { return (prevChecked === 'unchecked' ? 'checked' : 'unchecked'); });
    };
    return (React.createElement("div", { className: "checkbox ".concat(checked, " ").concat(size, " ").concat(focused ? 'focused' : '', " ").concat(disabled ? 'disabled' : ''), onClick: toggleCheckbox },
        checked === 'checked' && React.createElement(CheckmarkIcon, { color: "#EA287C", width: "12", height: "12" }),
        checked === 'indeterminate' && React.createElement(MinusIcon, { color: "#EA287C", width: "12", height: "12" })));
};

var Checkbox = function (_a) {
    var label = _a.label, supportingText = _a.supportingText; _a.disabled; var focused = _a.focused; _a.checked; var _b = _a.addLabel, addLabel = _b === void 0 ? true : _b, _c = _a.addSupportingText, addSupportingText = _c === void 0 ? true : _c, _d = _a.type, type = _d === void 0 ? 'radio' : _d;
    // Conditionally set addSupportingText to false if addLabel is false
    if (!addLabel) {
        addSupportingText = false;
    }
    var inputRef = React.useRef(null);
    React.useEffect(function () {
        if (focused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [focused]);
    return (React.createElement("div", { className: "checkbox-container ".concat(addSupportingText && supportingText ? 'with-supporting-text' : '') },
        type === 'radio' && React.createElement(RadioBase, { size: 'medium' }),
        type === 'checkbox' && React.createElement(CheckboxBase, { size: "medium" }),
        React.createElement("div", { className: 'text-container' },
            addLabel && React.createElement("p", { className: 'label' }, label),
            addSupportingText && React.createElement("p", { className: 'supporting-text' }, supportingText))));
};

var css_248z$m = ".checkcircle {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: 1px solid var(--Gray-300, #D0D5DD);\r\n    background: var(--Base-White, #FFF);\r\n}\r\n\r\n/* sizes */\r\n.checkcircle.small {\r\n    width: 16px;\r\n    height: 16px;\r\n    border-radius: 16px;\r\n}\r\n\r\n.checkcircle.medium {\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 20px;\r\n}\r\n\r\n/* default states */\r\n.checkcircle:hover {\r\n    border: 1px solid var(--Primary-500, #EA287C);\r\n    background: var(--Primary-100, #FCE3ED);\r\n}\r\n\r\n.checkcircle.focused {\r\n    border: 1px solid var(--Primary-300, #F598C1);\r\n    /* Focus ring/4px primary-100 */\r\n    box-shadow: 0px 0px 0px 4px #F4EBFF;\r\n}\r\n\r\n.checkcircle.disabled {\r\n    cursor: not-allowed;\r\n    border: 1px solid var(--Gray-300, #D0D5DD);\r\n    background: var(--Gray-50, #F7F8FA);\r\n}\r\n\r\n/* checked states */\r\n.checkcircle.checked {  \r\n    border: 1px solid var(--Primary-500, #EA287C);\r\n    background: var(--Primary-500, #EA287C);\r\n}\r\n\r\n.checkcircle.checked:hover {\r\n    border: 1px solid var(--Primary-700, #8B0F44);\r\n    background: var(--Primary-700, #8B0F44);\r\n    \r\n}\r\n\r\n.checkcircle.checked.focused {\r\n    /* Focus ring/4px primary-100 */\r\n    box-shadow: 0px 0px 0px 4px #F4EBFF;\r\n}\r\n\r\n.checkcircle.checked.disabled{\r\n    cursor: not-allowed;\r\n    border: 1px solid var(--Base-White, #FFF);\r\n    background: var(--Gray-200, #EAECF0);\r\n}\r\n";
styleInject(css_248z$m);

var CheckCircleBase = function (_a) {
    var _b = _a.checked, initialChecked = _b === void 0 ? false : _b, focused = _a.focused, size = _a.size, disabled = _a.disabled;
    var _c = React.useState(initialChecked), checked = _c[0], setChecked = _c[1];
    var toggleRadio = function () {
        if (!disabled) {
            setChecked(function (prevChecked) { return !prevChecked; });
        }
    };
    return (React.createElement("div", { className: "checkcircle ".concat(checked ? 'checked' : '', " ").concat(size, " ").concat(focused ? 'focused' : '', " ").concat(disabled ? 'disabled' : ''), onClick: toggleRadio }, checked && React.createElement(CheckmarkIcon, { color: "#FFFFFF", width: "12", height: "12" })));
};

var css_248z$l = ".container {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n\r\n    width: 362px;\r\n    height: 48px;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n    flex-shrink: 0;\r\n    padding: 0px 16px;\r\n    background: var(--Base-White, #FFF);\r\n}   \r\n\r\n.container.clicked {\r\n    background-color: #FCE3ED; /* primary 100 */\r\n}\r\n\r\n.container.clicked .info {\r\n    color: #EA287C; /* primary 500 */\r\n}\r\n\r\n.container.md {\r\n    height: 60px;\r\n    font-size: 14px;\r\n}\r\n\r\n.container.sm{\r\n    height: 46px;\r\n    font-size: 12px;\r\n}\r\n\r\n.container:hover {\r\n    background-color: #FFF6FA; /* primary 50 */\r\n}\r\n\r\n.container:active {\r\n    background-color: #FCE3ED; /* primary 100 */\r\n}\r\n\r\n.check-label {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0px;\r\n    gap: 8px;\r\n}\r\n\r\nlabel {\r\n    width: fit-content;\r\n}\r\n\r\n.id-icon {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7px;\r\n}\r\n\r\np {\r\n    margin: 0px;\r\n}\r\n\r\n.name {\r\n    font-weight: 600;\r\n    color: #344054;\r\n}\r\n\r\n.label, .id {\r\n    font-weight: 400;\r\n    color: #667085;\r\n}";
styleInject(css_248z$l);

var CheckboxList = function (_a) {
    var state = _a.state, addID = _a.addID, ID = _a.ID, label = _a.label, _b = _a.size, size = _b === void 0 ? 'md' : _b, addCheck = _a.addCheck, addIcon = _a.addIcon;
    var _c = React.useState(false), clicked = _c[0], setClicked = _c[1];
    var handleClick = function () {
        setClicked(!clicked);
    };
    return (React.createElement("div", { className: "container ".concat(state, " ").concat(addID ? 'withID' : '', " ").concat(size, " ").concat(clicked ? 'clicked' : ''), onClick: handleClick },
        React.createElement("div", { className: 'check-label' },
            addCheck && React.createElement(CheckboxBase, { checked: 'unchecked', size: 'small' }),
            React.createElement("label", null, label)),
        React.createElement("div", { className: 'id-icon' },
            addID && (React.createElement("p", { className: 'id' }, ID)),
            addIcon && React.createElement(RightArrowIcon, null))));
};

var css_248z$k = ".chip-container {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n\r\n    display: inline-flex;\r\n    padding: 5px 6px 5px 12px;\r\n    align-items: center;\r\n    gap: 8px;\r\n    border-radius: 60px;\r\n    background: var(--Primary-50, #FFF6FA);\r\n}\r\n\r\n.chip-container.with-avatar {\r\n    padding: 5px 12px 5px 12px;\r\n\r\n}\r\n\r\n.chip-text {\r\n    color: var(--Grey-01, #546080);\r\n    \r\n    /* Inter/Text/xs/Medium */\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    line-height: 18px; /* 150% */\r\n}\r\n\r\n/* states */\r\n.chip-container:hover {\r\n    border: 1px solid var(--Primary-100, #FCE3ED);\r\n    background: var(--Primary-50, #FFF6FA);\r\n}\r\n\r\n.chip-container:active {\r\n    background: #FEEEF5;\r\n}\r\n\r\n.chip-container:active .chip-text {\r\n    color: var(--Colors-Light-Primary-Cerise-Red, #EA297C);\r\n}\r\n\r\n.chip-container.disabled, .chip-container.disabled .chip-text{\r\n    background: var(--Gray-100, #F2F4F7);\r\n    cursor: not-allowed;\r\n    color: var(--Grey-01, #546080);\r\n}";
styleInject(css_248z$k);

var Chip = function (_a) {
    var size = _a.size, state = _a.state, addAvatar = _a.addAvatar, addIconRight = _a.addIconRight, addIconLeft = _a.addIconLeft;
    // Ensure addIconLeft is false if addAvatar is true
    var showIconLeft = !addAvatar && addIconLeft;
    // Ensure addIconRight is false if showIconLeft is true
    var showIconRight = !showIconLeft && addIconRight;
    return (React.createElement("div", { className: "chip-container ".concat(size, " ").concat(state, " ").concat(addAvatar ? 'with-avatar' : '') },
        addAvatar && React.createElement(Avatar, { size: size, background: 'initials' }),
        showIconLeft && React.createElement(CheckmarkIcon, null),
        React.createElement("p", { className: "chip-text" }, "someone@example.com"),
        showIconRight && React.createElement(CloseIcon, null)));
};

var css_248z$j = ".dropdown-container {\r\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  display: flex;\r\n  width: 100%;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n  \r\n.dropdown-container label {\r\n  color: var(--Gray-700, var(--Gray-700, #344054));\r\n  \r\n  /* Inter/Capital/xs/SemiBold */\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  line-height: 18px; /* 150% */\r\n  letter-spacing: 0.48px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.box-container {\r\n  border-radius: 8px;\r\n  box-sizing: border-box;\r\n  border: 1px solid var(--Gray-50, #F7F7FC);\r\n  background: var(--Gray-50, #F7F7FC);\r\n  display: flex;\r\n  height: 44px;\r\n  padding: 10px 14px;\r\n  align-items: center;\r\n  gap: 8px;\r\n  align-self: stretch;\r\n}\r\n\r\n.placeholder {\r\n  width: 90%;\r\n  /* background-color: rgb(255, 255, 255, 0); */\r\n}\r\n\r\n.placeholder.disabled {\r\n  color: var(--Gray-400, #98A2B3);\r\n}\r\n\r\n.box-container.default {\r\n  border:0px; /* primary 400 */\r\n  background-color: #F7F7FC; /* grey 50 */\r\n}\r\n\r\n  \r\n.box-container:hover {\r\n  border:2px solid #F173A9; /* primary 400 */\r\n  background-color: #FFF6FA; /* primary 50 */\r\n}\r\n\r\n.box-container.active  {\r\n  border:2px solid #EA287C; /* primary 500 */\r\n  background-color: #FFF6FA; /* primary 50 */\r\n  color:#1D2939; /* grey 800 */\r\n}\r\n\r\n/* error state styling */\r\n.box-container.error {\r\n  border: 1px solid #F04438; /* Error 500 */\r\n  background-color: #FFF3F2; /* Error 50 */\r\n  color: #1D2939; /* grey 800 */\r\n}\r\n\r\n/* disabled state styling */\r\n.box-container.disabled  {\r\n  border: 1px solid #D0D5DD; /* grey 300 */\r\n  background-color: #F9FAFB; /* grey 50 */\r\n  cursor: not-allowed;\r\n}\r\n\r\n.hint {\r\n  margin-top: 1px;\r\n  color: #F04438; /* Error 500 */\r\n  font-size: 12px;\r\n  font-weight: 400;\r\n}\r\n\r\n.box-container.error .hint {\r\n  color: #F04438; /* Error 500 */\r\n  font-size: 12px;\r\n  font-weight: 400;\r\n}\r\n  ";
styleInject(css_248z$j);

var DropdownBasic = function (_a) {
    var label = _a.label, placeholder = _a.placeholder, _b = _a.state, state = _b === void 0 ? 'default' : _b, addLeftIcon = _a.addLeftIcon, hint = _a.hint, width = _a.width;
    var _c = React.useState(false), isActive = _c[0], setIsActive = _c[1];
    var handleClick = function () {
        setIsActive(!isActive);
    };
    return (React.createElement("div", { className: "dropdown-container ".concat(state), style: { width: width } },
        React.createElement("label", null, label),
        React.createElement("div", { className: "box-container ".concat(state, " ").concat(isActive ? 'active' : 'default'), onClick: handleClick },
            addLeftIcon && React.createElement(UserIcon, null),
            React.createElement("div", { className: "placeholder ".concat(state) }, placeholder),
            React.createElement(ChevronDownIcon, null)),
        hint && React.createElement("p", { className: "hint" }, hint)));
};

var css_248z$i = ".container {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n    background-color: #FFF;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 362px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.icon-label {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 12px;\r\n}\r\n\r\n.id-checkmark {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7px;\r\n}\r\n\r\np {\r\n    margin: 0px;\r\n}\r\n\r\n.label, .id {\r\n    font-weight: 400;\r\n    color: #667085;\r\n}\r\n\r\n/* states */ \r\n.container.clicked {\r\n    background-color: #FCE3ED; /* primary 100 */\r\n}\r\n\r\n.container.clicked .info {\r\n    color: #EA287C; /* primary 500 */\r\n}\r\n\r\n.container.md {\r\n    height: 60px;\r\n    font-size: 14px;\r\n}\r\n\r\n.container.sm{\r\n    height: 46px;\r\n    font-size: 12px;\r\n}\r\n\r\n.container:hover {\r\n    background-color: #FFF6FA; /* primary 50 */\r\n}\r\n\r\n.container:active {\r\n    background-color: #FCE3ED; /* primary 100 */\r\n}";
styleInject(css_248z$i);

var OptionList = function (_a) {
    var state = _a.state, addID = _a.addID, ID = _a.ID, label = _a.label, _b = _a.size, size = _b === void 0 ? 'md' : _b; _a.addCheck; var addRightIcon = _a.addRightIcon, addLeftIcon = _a.addLeftIcon;
    var _c = React.useState(false), clicked = _c[0], setClicked = _c[1];
    var handleClick = function () {
        setClicked(!clicked);
    };
    return (React.createElement("div", { className: "container ".concat(state, " ").concat(addID ? 'withID' : '', " ").concat(size, " ").concat(clicked ? 'clicked' : ''), onClick: handleClick },
        React.createElement("div", { className: 'icon-label' },
            addLeftIcon && React.createElement(UserIcon, { color: "#98A2B3", width: "18", height: "18" }),
            React.createElement("label", null, label)),
        React.createElement("div", { className: 'id-icon' },
            addID && (React.createElement("p", { className: 'id' }, ID)),
            addRightIcon && React.createElement(RightArrowIcon, null))));
};

var css_248z$h = ".container {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n    background-color: #FFF;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 362px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}   \r\n\r\n.container.clicked {\r\n    background-color: #FCE3ED; /* primary 100 */\r\n}\r\n\r\n.container.clicked .info {\r\n    color: #EA287C; /* primary 500 */\r\n}\r\n\r\n.container.md {\r\n    height: 60px;\r\n    font-size: 14px;\r\n}\r\n\r\n.container.sm{\r\n    height: 46px;\r\n    font-size: 12px;\r\n}\r\n\r\n.container:hover {\r\n    background-color: #FFF6FA; /* primary 50 */\r\n}\r\n\r\n.container:active {\r\n    background-color: #FCE3ED; /* primary 100 */\r\n}\r\n\r\n.check-label {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n\r\n.id-icon {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7px;\r\n}\r\n\r\np {\r\n    margin: 0px;\r\n}\r\n\r\n.name {\r\n    font-weight: 600;\r\n    color: #344054;\r\n}\r\n\r\n.id {\r\n    color: var(--Gray-500, #667085);\r\n    text-align: right;\r\n    \r\n    /* Inter/Text/sm/Regular */\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 20px; /* 142.857% */\r\n}";
styleInject(css_248z$h);

var RadioList = function (_a) {
    var state = _a.state, addID = _a.addID, ID = _a.ID, label = _a.label, _b = _a.size, size = _b === void 0 ? 'md' : _b, addCheck = _a.addCheck, addIcon = _a.addIcon;
    var _c = React.useState(false), clicked = _c[0], setClicked = _c[1];
    var handleClick = function () {
        setClicked(!clicked);
    };
    return (React.createElement("div", { className: "container ".concat(state, " ").concat(addID ? 'withID' : '', " ").concat(size, " ").concat(clicked ? 'clicked' : ''), onClick: handleClick },
        React.createElement("div", { className: 'check-label' },
            addCheck && React.createElement(RadioBase, { checked: false, size: 'small' }),
            React.createElement("label", null, label)),
        React.createElement("div", { className: 'id-icon' },
            addID && (React.createElement("p", { className: 'id' }, ID)),
            addIcon && React.createElement(RightArrowIcon, null))));
};

var css_248z$g = ".container {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n    background-color: #FFF;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 362px;\r\n    padding: 0px 16px;\r\n}   \r\n\r\nAvatar {\r\n    padding: 0px;\r\n}\r\n\r\n.container.clicked {\r\n    background-color: #FCE3ED; /* primary 100 */\r\n}\r\n\r\n.container.clicked .info {\r\n    color: #EA287C; /* primary 500 */\r\n}\r\n\r\n.container.md {\r\n    height: 60px;\r\n    font-size: 14px;\r\n}\r\n\r\n.container.sm{\r\n    height: 46px;\r\n    font-size: 12px;\r\n}\r\n\r\n.container:hover {\r\n    background-color: #FFF6FA; /* primary 50 */\r\n}\r\n\r\n.container:active {\r\n    background-color: #FCE3ED; /* primary 100 */\r\n}\r\n\r\n.info {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n\r\n.info-text {\r\n    height: fit-content;\r\n}\r\n\r\n.id-icon {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7px;\r\n}\r\n\r\np {\r\n    margin: 0px;\r\n}\r\n\r\n.name {\r\n    font-weight: 600;\r\n    color: #344054;\r\n}\r\n\r\n.label, .id {\r\n    font-weight: 400;\r\n    color: #667085;\r\n}";
styleInject(css_248z$g);

var UserList = function (_a) {
    var addID = _a.addID, ID = _a.ID, addAvatar = _a.addAvatar, addLabel = _a.addLabel, label = _a.label, name = _a.name, _b = _a.size, size = _b === void 0 ? 'md' : _b;
    var _c = React.useState(false), clicked = _c[0], setClicked = _c[1];
    var handleClick = function () {
        setClicked(!clicked);
    };
    return (React.createElement("div", { className: "container ".concat(addID ? 'withID' : '', " ").concat(size, " ").concat(clicked ? 'clicked' : ''), onClick: handleClick },
        React.createElement("div", { className: "info ".concat(addAvatar ? 'withAvatar' : '', " ").concat(addLabel ? 'withLabel' : '') },
            addAvatar && React.createElement(Avatar, { size: size, background: 'icon' }),
            React.createElement("div", { className: 'info-text' },
                React.createElement("p", { className: 'name' }, name),
                addLabel && React.createElement("p", { className: 'label' }, label))),
        React.createElement("div", { className: 'id-icon' },
            addID && (React.createElement("p", { className: 'id' }, ID)),
            React.createElement(CheckmarkIcon, null))));
};

var css_248z$f = ".file-upload-container {\r\n    display: flex;\r\n    width: 432px;\r\n    height: fit-content;\r\n    padding: 16px 24px;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 4px;\r\n    border-radius: 8px;\r\n    border: 1px solid var(--Gray-200, #EAECF0);\r\n    background: var(--Primary-50, #FFF6FA);\r\n}\r\n\r\n.featured-icon {\r\n    border-radius: 28px;\r\n    border: 6px solid var(--Gray-50, #F9FAFB);\r\n    background: var(--Gray-100, #F2F4F7);\r\n}\r\n\r\n.text-and-subtext {\r\n    font-weight: 400;\r\n    color: var(--Gray-500, var(--Gray-500, #667085));\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 4px;\r\n    align-self: stretch;\r\n}\r\n\r\n.text {\r\n    font-size: 14px;\r\n}\r\n.text span {\r\n    color: var(--Primary-500, #EA287C);\r\n    font-weight: 500;\r\n}\r\n.subtext {\r\n    font-size: 12px;\r\n}";
styleInject(css_248z$f);

var FileUpload = function (_a) {
    return (React.createElement("div", { className: 'file-upload-container' },
        React.createElement("div", { className: 'featured-icon' },
            React.createElement(UploadCloudIcon, null)),
        React.createElement("div", { className: 'text-and-subtext' },
            React.createElement("p", { className: 'text' },
                React.createElement("span", null, "Click to upload"),
                " or drag and drop"),
            React.createElement("p", { className: 'subtext' }, "SVG, PNG, JPG or GIF (max. 800x400px)"))));
};

var css_248z$e = ".input-container {\r\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  display: flex;\r\n  width: 100%;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n\r\n label {\r\n  color: var(--Gray-700, var(--Gray-700, #344054));\r\n\r\n  /* Inter/Capital/xs/SemiBold */\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  line-height: 18px; \r\n  letter-spacing: 0.48px;\r\n  text-transform: uppercase; \r\n}\r\n  \r\n\r\n.box-container {\r\n  border-radius: 8px;\r\n  box-sizing: border-box;\r\n  border: 1px solid var(--Gray-50, #F7F7FC);\r\n  background: var(--Gray-50, #F7F7FC);\r\n  display: flex;\r\n  height: 44px;\r\n  padding: 10px 14px;\r\n  align-items: center;\r\n  gap: 8px;\r\n  align-self: stretch;\r\n}\r\n\r\ninput {\r\n  width: 90%;\r\n  border: none;\r\n  background: var(--Gray-50, #F7F7FC);\r\n}\r\n\r\ninput:focus {\r\n  outline: none; /* Remove default browser outline */\r\n  border: none;  /* Ensure no border is applied */\r\n  box-shadow: none; /* Remove any default shadow */\r\n}\r\n\r\n.box-container.default {\r\n  border:0px; /* primary 400 */\r\n  background-color: #F7F7FC; /* grey 50 */\r\n}\r\n    \r\n.box-container:hover {\r\n  border:2px solid #F173A9; /* primary 400 */\r\n  background-color: #FFF6FA; /* primary 50 */\r\n}\r\n\r\n.box-container:hover input{\r\n  background-color: #FFF6FA; /* primary 50 */\r\n}\r\n\r\n.box-container:active, .box-container:focus {\r\n  border:2px solid #EA287C; /* primary 500 */\r\n  background-color: #FFF6FA; /* primary 50 */\r\n  color:#1D2939; /* grey 800 */\r\n}\r\n\r\n.box-container.error {\r\n  border: 2px solid #F04438; /* Error 500 */\r\n  background-color: #FFF3F2; /* Error 50 */\r\n  color: #1D2939; /* grey 800 */\r\n}\r\n\r\n.box-container.disabled {\r\n  border: 2px solid #D0D5DD; /* grey 300 */\r\n  background-color: #F9FAFB; /* grey 50 */\r\n  cursor: not-allowed;\r\n}\r\n\r\n.hint {\r\n  margin-top: 1px;\r\n}\r\n\r\n.box-container.error .hint {\r\n  color: #F04438; /* Error 500 */\r\n  font-size: 12px;\r\n  font-weight: 400;\r\n}\r\n";
styleInject(css_248z$e);

var Input = function (_a) {
    var label = _a.label, placeholder = _a.placeholder, _b = _a.state, state = _b === void 0 ? 'default' : _b, addLeftIcon = _a.addLeftIcon, addRightIcon = _a.addRightIcon, hint = _a.hint, _c = _a.width, width = _c === void 0 ? '320px' : _c;
    return (React.createElement("div", { className: "input-container ".concat(state), style: { width: width } },
        React.createElement("label", null, label),
        React.createElement("div", { className: "box-container ".concat(state) },
            addLeftIcon && React.createElement(EmailIcon, null),
            React.createElement("input", { placeholder: placeholder }),
            addRightIcon && React.createElement(HelpCircleIcon, null)),
        hint && React.createElement("p", { className: "hint" }, hint)));
};

var css_248z$d = ".color-toast-container {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n\r\n    width: 396px;\r\n    height: 60px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 16px 20px;\r\n    flex-shrink: 0;\r\n    border-radius: 2px;\r\n    margin: 0%;\r\n    \r\n    /* Shadow/3xl */\r\n    box-shadow: 0px 32px 64px -12px rgba(16, 24, 40, 0.14);\r\n}\r\n\r\n.icon-text {\r\n    display: flex;\r\n    gap: 12px;\r\n    align-items: center;\r\n}\r\n\r\n.color-toast-container .icon-container {\r\n    padding: 4px;\r\n}\r\n\r\n.text-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: fit-content;\r\n    margin: 0px;\r\n    padding: 0;\r\n}\r\n\r\np {\r\n    padding: 0%;\r\n    margin: 0%;\r\n}\r\n\r\n\r\n\r\nCheckmarkIcon, CloseIcon {\r\n    padding: 4px;\r\n}\r\n\r\n.subtitle {\r\n    color: var(--Gray-500, #667085);\r\n\r\n    /* Gotham/xs/Regular */\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    line-height: 18px; /* 150% */\r\n    letter-spacing: -0.24px;\r\n}\r\n\r\n.color-toast-container.success {\r\n    border-left: 3px solid var(--Success-500, #12B76A);\r\n    background: var(--Success-50, #EDFFF3);\r\n}\r\n\r\n.color-toast-container.error {\r\n    border-left: 3px solid var(--Error-500, #F04438);\r\n    background: var(--Error-50, #FFF3F2);\r\n}\r\n\r\n.color-toast-container.warning {\r\n    border-left: 3px solid var(--Warning-500, #F79009);\r\n    background: var(--Warning-50, #FFFBEF);\r\n}\r\n\r\n.color-toast-container.info {\r\n    border-left: 3px solid var(--Gray-500, #667085);\r\n    background: var(--Gray-50, #F7F7FC);\r\n}";
styleInject(css_248z$d);

var ColorToast = function (_a) {
    var label = _a.label, type = _a.type, addSubtitle = _a.addSubtitle, addCloseIcon = _a.addCloseIcon, addIcon = _a.addIcon;
    var getIcon = function () {
        switch (type) {
            case 'info':
                return React.createElement(InfoIcon, { color: '#98A2B3' });
            case 'success':
                return React.createElement(CheckmarkIcon, { color: '#12B76A' });
            case 'warning':
                return React.createElement(WarningIcon, { color: '#F79009' });
            case 'error':
                return React.createElement(ErrorIcon, { color: '#F04438' });
            default:
                return null;
        }
    };
    return (React.createElement("div", { className: "color-toast-container ".concat(type) },
        React.createElement("div", { className: 'icon-text' },
            React.createElement("div", { className: 'icon-container' }, addIcon && getIcon()),
            React.createElement("div", { className: 'text-content' },
                React.createElement("label", { className: 'color-toast-label' }, label),
                addSubtitle && React.createElement("p", { className: 'subtitle' }, "Second line"))),
        addCloseIcon && React.createElement(CloseIcon, null)));
};

var css_248z$c = ".dark-toast-container {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n    background: var(--Gray-800, #1D2939);\r\n\r\n    width: 396px;\r\n    height: 60px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 16px 20px;\r\n    flex-shrink: 0;\r\n    border-radius: 8px;\r\n    margin: 0%;\r\n    \r\n    /* Shadow/3xl */\r\n    box-shadow: 0px 32px 64px -12px rgba(16, 24, 40, 0.14);\r\n}\r\n\r\n.icon-text {\r\n    display: flex;\r\n    gap: 12px;\r\n    align-items: center;\r\n}\r\n\r\n.dark-toast-container .icon-container {\r\n    padding: 4px;\r\n    width: 36px;\r\n    height: 36px;\r\n    border-radius: 50%;\r\n    background: var(--Base-White, #FFF);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.text-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: fit-content;\r\n    margin: 0px;\r\n    padding: 0;\r\n}\r\n\r\n.dark-toast-label {\r\n    color: var(--Intelcia-white, var(--Base-White, #FFF));\r\n\r\n    /* Gotham/sm/Medium */\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 22px; /* 157.143% */\r\n}\r\n\r\n.subtitle {\r\n    padding: 0%;\r\n    margin: 0%;\r\n    color: var(--Intelcia-white, var(--Base-White, #FFF));\r\n\r\n    /* Gotham/xs/Regular */\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    line-height: 18px; /* 150% */\r\n    letter-spacing: -0.24px;\r\n}\r\n\r\n.toast-container.success {\r\n    border-left: 3px solid var(--Success-500, #12B76A);\r\n    background: var(--Success-50, #EDFFF3);\r\n}\r\n\r\n.toast-container.error {\r\n    border-left: 3px solid var(--Error-500, #F04438);\r\n    background: var(--Error-50, #FFF3F2);\r\n}\r\n\r\n.toast-container.warning {\r\n    border-left: 3px solid var(--Warning-500, #F79009);\r\n    background: var(--Warning-50, #FFFBEF);\r\n}\r\n\r\n.toast-container.info {\r\n    border-left: 3px solid var(--Gray-500, #667085);\r\n    background: var(--Gray-50, #F7F7FC);\r\n}";
styleInject(css_248z$c);

var DarkToast = function (_a) {
    var label = _a.label, subtitle = _a.subtitle, type = _a.type, addSubtitle = _a.addSubtitle, addCloseIcon = _a.addCloseIcon, addIcon = _a.addIcon;
    var getIcon = function () {
        switch (type) {
            case 'copied':
                return React.createElement(CopiedIcon, { color: '#14142B' });
            case 'exportation':
                return React.createElement(DownloadIcon, { color: '#14142B' });
            case 'printer':
                return React.createElement(PrinterIcon, { color: '#14142B' });
            case 'action done':
                return React.createElement(CheckmarkIcon, { color: '#14142B' });
            case 'waiting':
                return React.createElement(LoadIcon, null);
            case 'no connection':
                return React.createElement(NoConnectionIcon, { color: '#14142B' });
            default:
                return null;
        }
    };
    return (React.createElement("div", { className: "dark-toast-container ".concat(type) },
        React.createElement("div", { className: 'icon-text' },
            React.createElement("div", { className: 'icon-container' }, addIcon && getIcon()),
            React.createElement("div", { className: 'text-content' },
                React.createElement("label", { className: 'dark-toast-label' }, label),
                addSubtitle && React.createElement("p", { className: 'subtitle' }, subtitle))),
        addCloseIcon && React.createElement(CloseIcon, null)));
};

var css_248z$b = ".snackbar-container {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n\r\n    width: 608px;\r\n    height: 60px;\r\n    flex-shrink: 0;\r\n    border-radius: 8px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.snackbar-container.dark {\r\n    background: var(--Gray-800, #1D2939);\r\n    color: var(--Intelcia-white, var(--Base-White, #FFF));\r\n}\r\n\r\n.snackbar-container.light {\r\n    background: var(--Gray-100, #F2F4F7);\r\n    color: var(--Gray-800, #1D2939);\r\n}\r\n.icon-text {\r\n    margin-left: 20px;\r\n}\r\n\r\n.snackbar-label {\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    line-height: 22px; /* 157.143% */\r\n}\r\n\r\n.snackbar-subtitle {\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    line-height: 22px; /* 157.143% */\r\n    letter-spacing: -0.28px;\r\n}\r\n\r\n.undo-text {\r\n    font-size: 14px;\r\n    font-weight: 200;\r\n    line-height: 22px; /* 157.143% */\r\n    letter-spacing: -0.28px;\r\n}\r\n\r\n.close-icon {\r\n    margin-right: 20px;\r\n}\r\n\r\n.icon-container {\r\n    display: flex;\r\n    align-items: center;\r\n}";
styleInject(css_248z$b);

var Snackbar = function (_a) {
    var label = _a.label, subtitle = _a.subtitle, addSubtitle = _a.addSubtitle, addUndo = _a.addUndo, theme = _a.theme;
    return (React.createElement("div", { className: "snackbar-container ".concat(theme) },
        React.createElement("div", { className: 'icon-text' },
            React.createElement("div", { className: 'icon-container' },
                React.createElement(HelpCircleIcon, { color: '#98A2B3' })),
            React.createElement("div", { className: 'text-content' },
                React.createElement("label", { className: 'snackbar-label' }, label),
                addSubtitle && React.createElement("p", { className: 'snackbar-subtitle' }, subtitle)),
            addUndo && React.createElement("p", { className: 'undo-text' }, "Undo")),
        React.createElement("div", { className: 'close-icon' },
            React.createElement(CloseIcon, null))));
};

var css_248z$a = ".page-control {\r\n    /* font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; */\r\n    font-family:sans-serif;\r\n\r\n    display: flex;\r\n    width: 32px;\r\n    height: 32px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10px;\r\n    flex-shrink: 0;\r\n    border-radius: 4px;\r\n    border: 1px solid var(--Gray-200, #EAECF0);\r\n    background: var(--Base-White, #FFF);\r\n\r\n    color: var(--Gray-500, #667085);\r\n}\r\n\r\n.page-control:hover {\r\n    background: var(--Primary-100, #FCE3ED);\r\n    color: var(--Primary-500, #EA287C);\r\n}\r\n\r\n.page-control.disabled {\r\n    background: var(--Gray-200, #EAECF0);\r\n    cursor: not-allowed;\r\n}\r\n\r\n.page-control.disabled:hover {\r\n    background: var(--Gray-200, #EAECF0);\r\n    cursor: not-allowed;\r\n    color: var(--Gray-500, #667085);\r\n}\r\n\r\n.page-control.pressed {\r\n    background-color: var(--Primary-500, #EA287C);\r\n    color: #fff;\r\n}\r\n\r\n";
styleInject(css_248z$a);

var PageControl = function (_a) {
    var style = _a.style, _b = _a.number, number = _b === void 0 ? 1 : _b, disabled = _a.disabled;
    var _c = React.useState(false), pressed = _c[0], setPressed = _c[1];
    var handleClick = function () {
        if (style === 'page-number' && !disabled) {
            setPressed(!pressed);
        }
    };
    var renderIcon = function () {
        switch (style) {
            case 'left':
                return React.createElement(ChevronLeftIcon, null); // need to add color on hover
            case 'right':
                return React.createElement(ChevronRightIcon, null);
            case 'page-number':
                return React.createElement("span", null, number);
            case 'overflow':
                return React.createElement(ThreeDotsIcon, null);
            default:
                return null;
        }
    };
    return (React.createElement("div", { className: "page-control ".concat(style, " ").concat(pressed ? 'pressed' : '', " ").concat(disabled ? 'disabled' : ''), onClick: handleClick }, renderIcon()));
};

var css_248z$9 = ".page-select {\r\n    font-family:sans-serif;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2px;\r\n}\r\n\r\n.target-select {\r\n    display: inline-flex;\r\n    align-items: center;\r\n\r\n    width: 40px;\r\n    padding: 8px 11px;\r\n    gap: 7px;\r\n    border-radius: 6px;\r\n    background: var(--Gray-100, #F2F4F7);\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.target-select.disabled {\r\n    background: var(--Gray-100, #F2F4F7);\r\n    cursor: not-allowed;\r\n}\r\n\r\n.target-select.pressed {\r\n    border-radius: 6px;\r\n    border: 1px solid #EAEAEA;\r\n    background: var(--Primary-100, #FCE3ED);\r\n    color: var(--Primary-500, #EA287C);\r\n}\r\n\r\n.list-select {\r\n    visibility: hidden;\r\n}\r\n\r\n.list-select.pressed {\r\n    visibility: visible;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    border-radius: 6px;\r\n\r\n    /* gap: 35px; */\r\n}\r\n\r\np {\r\n    margin: 0%;\r\n    padding: 0%;\r\n}\r\n\r\n.list-item {\r\n    width: 40px;\r\n    padding: 20px 11px;\r\n    background: var(--Gray-50, #F7F7FC);\r\n    color: var(--Gray-500, #667085);\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.list-item:hover {\r\n    background: var(--Primary-100, #FCE3ED);\r\n}\r\n\r\n\r\n\r\n";
styleInject(css_248z$9);

var PageSelect = function (_a) {
    var pressedProp = _a.pressed, disabled = _a.disabled;
    var _b = React.useState(pressedProp || false), pressed = _b[0], setPressed = _b[1];
    var togglePressed = function () {
        if (!disabled) {
            setPressed(!pressed);
        }
    };
    var handleItemClick = function () {
        if (!disabled) {
            setPressed(false);
        }
    };
    return (React.createElement("div", { className: "page-select ".concat(pressed ? 'pressed' : '') },
        React.createElement("div", { className: "target-select ".concat(pressed ? 'pressed' : '', " ").concat(disabled ? 'disabled' : ''), onClick: togglePressed },
            React.createElement("p", null, "25"),
            pressed === false && React.createElement(ChevronUpIcon, null),
            pressed === true && React.createElement(ChevronDownIcon, null)),
        pressed && (React.createElement("div", { className: "list-select ".concat(pressed ? 'pressed' : '', " ").concat(disabled ? 'disabled' : '') },
            React.createElement("p", { className: 'list-item', onClick: handleItemClick }, "25"),
            React.createElement("p", { className: 'list-item', onClick: handleItemClick }, "50"),
            React.createElement("p", { className: 'list-item', onClick: handleItemClick }, "100")))));
};

var css_248z$8 = ".pagination {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n\r\n    border-top: 1px solid var(--Gray-200, #EAECF0);\r\n\r\n    width: 782px;\r\n    height: 32px;\r\n    padding: 11px 24px 16px 24px;\r\n}\r\n\r\n.pagination-control {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    gap: 8px;\r\n}\r\n\r\n";
styleInject(css_248z$8);

var Pagination = function (_a) {
    var style = _a.style, _b = _a.label, label = _b === void 0 ? "Page 1 of 100" : _b;
    return (React.createElement("div", { className: "pagination ".concat(style) },
        React.createElement("p", null, label),
        React.createElement("div", { className: 'pagination-control' },
            React.createElement(PageSelect, null),
            React.createElement(PageControl, { style: 'left' }),
            React.createElement(PageControl, { style: 'page-number', number: 1 }),
            "  ",
            style === 'no-overflow' &&
                (React.createElement(React.Fragment, null,
                    React.createElement(PageControl, { style: 'page-number', number: 2 }),
                    React.createElement(PageControl, { style: 'page-number', number: 3 }),
                    React.createElement(PageControl, { style: 'page-number', number: 4 }),
                    React.createElement(PageControl, { style: 'page-number', number: 5 }))),
            style === 'overflow' &&
                (React.createElement(React.Fragment, null,
                    React.createElement(PageControl, { style: 'page-number', number: 2 }),
                    React.createElement(PageControl, { style: 'page-number', number: 3 }),
                    React.createElement(PageControl, { style: 'overflow' }),
                    React.createElement(PageControl, { style: 'page-number', number: 25 }))),
            React.createElement(PageControl, { style: 'right' }))));
};

var css_248z$7 = ".progressbar {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.pourcentage.none {\r\n    visibility: hidden;\r\n}\r\n\r\n.progressbar.right {\r\n    display: flex;\r\n    width: 320px;\r\n    align-items: center;\r\n    gap: 12px;\r\n}\r\n\r\n.progressbar.bottom {\r\n    display: flex;\r\n    width: 320px;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n    gap: 8px;\r\n}\r\n\r\n.background {\r\n    width: 278px;\r\n    height: 8px;\r\n    flex: 1 0 0;\r\n    border-radius: 4px;\r\n    background: var(--Primary-100, #FCE3ED);\r\n}\r\n\r\n.progress {\r\n    height: 8px;\r\n    flex-shrink: 0;\r\n    border-radius: 4px;\r\n    background: var(--Success-500, #12B76A);\r\n}\r\n\r\n.progress.zero {\r\n    width: 8.085px;\r\n}\r\n\r\n.progress.ten {\r\n    width: 28.203px;\r\n}\r\n\r\n.progress.twenty {\r\n    width: 56.006px;\r\n}\r\n\r\n.progress.thirty {\r\n    width: 84.009px;\r\n}\r\n.progress.fourty {\r\n    width: 112.015px;\r\n}\r\n.progress.fifty {\r\n    width: 140.015px;\r\n}\r\n.progress.sixty {\r\n    width: 168.018px;\r\n}\r\n.progress.seventy {\r\n    width: 196.72px;\r\n}\r\n.progress.eighty {\r\n    width: 224.023px;\r\n}\r\n\r\n.progress.ninety {\r\n    width: 252.026px;\r\n}\r\n\r\n.progress.hundred {\r\n    width: 277px;\r\n}";
styleInject(css_248z$7);

var Progressbar = function (_a) {
    var progress = _a.progress, labelPosition = _a.labelPosition;
    var getProgressPercentage = function () {
        switch (progress) {
            case 'zero':
                return '0%';
            case 'ten':
                return '10%';
            case 'twenty':
                return '20%';
            case 'thirty':
                return '30%';
            case 'fourty':
                return '40%';
            case 'fifty':
                return '50%';
            case 'sixty':
                return '60%';
            case 'seventy':
                return '70%';
            case 'eighty':
                return '80%';
            case 'ninety':
                return '90%';
            case 'hundred':
                return '100%';
            default:
                return '0%';
        }
    };
    return (React.createElement("div", { className: "progressbar ".concat(labelPosition) },
        React.createElement("div", { className: 'background' },
            React.createElement("div", { className: "progress ".concat(progress) })),
        React.createElement("div", { className: "pourcentage ".concat(labelPosition) }, getProgressPercentage())));
};

var css_248z$6 = ".switch, .switch.checked {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 36px;\r\n  height: 20px;\r\n  border-radius: 12px;\r\n}\r\n\r\n.switch.checked input[type=\"checkbox\"] {\r\n  display: none;\r\n}\r\n\r\n.switch {\r\n  background-color: #F2F4F7;\r\n}\r\n\r\n.switch.checked {\r\n  background-color: #EA287C;\r\n}\r\n\r\n/* hover state */\r\n.switch.checked:hover {\r\n  background-color: #8B0F44;\r\n}\r\n\r\n.switch:hover {\r\n  background-color: #EAECF0;\r\n}\r\n\r\n/* fcused state */\r\n.switch:focus {\r\n  box-shadow: 0 0 4px #F4EBFF;\r\n}\r\n\r\n/* disabled state */\r\n.switch:disabled {\r\n  background-color: #F2F4F7;\r\n}\r\n\r\n.switch input {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n/* SLIDER */\r\n.slider {\r\n  position: absolute;\r\n  left: 2px;\r\n}\r\n\r\n.slider, .slider.checked {\r\n  top: 2px;\r\n  right: 0;\r\n  bottom: 2px;\r\n  position: absolute;\r\n  cursor: pointer;\r\n  background-color: #FFF;\r\n  transition: 0.4;\r\n  width: 16px;\r\n  height: 16px;\r\n  border-radius: 50%;\r\n  transition: left 0.2s, background-color 0.4s, hover 0.4s;\r\n  filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.06)) drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.10));\r\n}\r\n\r\n.slider:disabled {\r\n  background-color: #F9FAFB;\r\n}\r\n\r\n.slider.checked.small {\r\n  left: calc(100% - 18px); /* 2px from the right edge */\r\n}\r\n\r\n.slider.checked.medium {\r\n  left: calc(100% - 22px); /* 2px from the right edge */\r\n}\r\n\r\n/* sizes */\r\n.switch.small {\r\n  width: 36px;\r\n  height: 20px;\r\n}\r\n.slider.small {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n.switch.medium {\r\n  width: 44px;\r\n  height: 24px;\r\n}\r\n.slider.medium {\r\n  width: 20px;\r\n  height: 20px;\r\n}";
styleInject(css_248z$6);

// Switch.tsx
var Switch = function (_a) {
    var checked = _a.checked, _b = _a.size, size = _b === void 0 ? "medium" : _b, onChange = _a.onChange;
    return (React.createElement("label", { className: "switch ".concat(checked ? 'checked' : '', " ").concat(size) },
        React.createElement("input", { type: "checkbox", checked: checked, onChange: onChange }),
        React.createElement("span", { className: "slider ".concat(checked ? 'checked' : '', " ").concat(size) })));
};

var css_248z$5 = ".toggle-container {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n    display: flex;\r\n    width: 344px;\r\n    padding: 12px 16px;\r\n    align-items: flex-start;\r\n    gap: 12px;\r\n    border-radius: 8px;\r\n  }\r\n  \r\n  .toggle-container.with-supporting-text {\r\n    background-color: #FFF6FA;\r\n  }\r\n  \r\n  .text-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    height: fit-content;\r\n    gap: 12px;\r\n    flex: 1 0 0;\r\n  }\r\n  \r\n  .label {\r\n    color: var(--Gray-700, #344054);\r\n    height: fit-content;\r\n    margin: 0px;\r\n    padding: 0px;\r\n  \r\n    /* Inter/Text/sm/Medium */\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    line-height: 20px; /* 142.857% */\r\n  }\r\n  \r\n  .supporting-text {\r\n    color: var(--Gray-500, #667085);\r\n    height: fit-content;\r\n    margin: 0px;\r\n  \r\n    /* Gotham/sm/Regular */\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 22px; /* 157.143% */\r\n    letter-spacing: -0.28px;\r\n  }\r\n  \r\n  ";
styleInject(css_248z$5);

var Toggle = function (_a) {
    var label = _a.label, supportingText = _a.supportingText; _a.disabled; var focused = _a.focused, _b = _a.addLabel, addLabel = _b === void 0 ? true : _b, _c = _a.addSupportingText, addSupportingText = _c === void 0 ? true : _c;
    // Conditionally set addSupportingText to false if addLabel is false
    if (!addLabel) {
        addSupportingText = false;
    }
    var inputRef = React.useRef(null);
    React.useEffect(function () {
        if (focused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [focused]);
    return (React.createElement("div", { className: "toggle-container ".concat(addSupportingText && supportingText ? 'with-supporting-text' : '') },
        React.createElement(Switch, { checked: false, onChange: function () { } }),
        React.createElement("div", { className: 'text-container' },
            addLabel && React.createElement("p", { className: 'label' }, label),
            addSupportingText && React.createElement("p", { className: 'supporting-text' }, supportingText))));
};

var css_248z$4 = ".table-cell {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n\r\n    display: flex;\r\n    width: 100%;\r\n    /* height: 28px; */\r\n    padding: 16px 24px;\r\n    align-items: center;\r\n    gap: 12px;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.text-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: center;\r\n    gap: 2px;\r\n    height: fit-content;\r\n    margin: 0%;\r\n    padding: 0%;\r\n    height: 28px;\r\n}\r\n\r\np {\r\n    margin: 0%;\r\n    padding: 0%;\r\n}\r\n\r\n.label {\r\n    color: var(--Gray-700, #344054);\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n}\r\n\r\n.supporting-text {\r\n    color: var(--Gray-500, #667085);\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.table-cell:hover {\r\n    background: var(--Gray-50, #F7F7FC);\r\n}";
styleInject(css_248z$4);

var TableCell = function (_a) {
    var style = _a.style, label = _a.label, addSupportingText = _a.addSupportingText, supportingText = _a.supportingText, disabled = _a.disabled, width = _a.width;
    var renderContent = function () {
        switch (style) {
            case 'lead-checkbox':
                return React.createElement(CheckboxBase, { size: 'small' });
            case 'lead-radio':
                return React.createElement(RadioBase, { size: 'small' });
            case 'lead-toggle':
                return React.createElement(Switch, { size: 'small', checked: false, onChange: function () { } });
            case 'lead-avatar':
                return React.createElement(Avatar, { background: 'icon', size: 'md' });
            case 'avatar-group':
                return React.createElement(GroupAvatar, { size: 'xxs', groupCount: 3 });
            case 'lead-avatar-checkbox':
                return (React.createElement(React.Fragment, null,
                    React.createElement(CheckboxBase, { size: 'small' }),
                    React.createElement(Avatar, { background: 'icon', size: 'md' })));
            case 'lead-avatar-radio':
                return (React.createElement(React.Fragment, null,
                    React.createElement(RadioBase, { size: 'small' }),
                    React.createElement(Avatar, { background: 'icon', size: 'md' })));
            case 'lead-avatar-toggle':
                return (React.createElement(React.Fragment, null,
                    React.createElement(Switch, { size: 'small', checked: false, onChange: function () { } }),
                    React.createElement(Avatar, { background: 'icon', size: 'md' })));
            case 'badge':
                return React.createElement(Badge, { state: 'success', rounded: false, label: 'Label' });
            // Add cases for other styles with respective components
            case 'trend':
                return (React.createElement(React.Fragment, null,
                    supportingText = "MAD 99,00",
                    React.createElement(ValueBadge, { theme: 'positive', value: '20%' })));
            case 'action-icon':
                return (React.createElement(React.Fragment, null,
                    addSupportingText && "MAD 99,00",
                    React.createElement(EditIcon, null)));
            case 'progress-bar':
                return React.createElement(Progressbar, { progress: 'twenty' });
            default:
                return null;
        }
    };
    // Styles that should include the text container
    var stylesWithTextContainer = [
        'lead-text',
        'lead-checkbox',
        'lead-radio',
        'lead-toggle',
        'lead-avatar',
        'lead-avatar-checkbox',
        'lead-avatar-radio',
        'lead-avatar-toggle',
        'payment-method'
    ];
    var includeTextContainer = stylesWithTextContainer.includes(style !== null && style !== void 0 ? style : '');
    return (React.createElement("div", { className: "table-cell ".concat(style, " ").concat(addSupportingText ? 'supporting-text' : '', " ").concat(disabled ? 'disabled' : ''), style: { width: width } },
        renderContent(),
        includeTextContainer && (React.createElement("div", { className: 'text-container' },
            React.createElement("p", { className: 'label' }, label),
            addSupportingText && supportingText && (React.createElement("div", { className: "supporting-text" }, supportingText))))));
};

var css_248z$3 = ".table-header-cell {\r\n    display: inline-flex;\r\n    width: 100%;\r\n    height: 44px;\r\n    padding: 12px 24px;\r\n    align-items: center;\r\n    gap: 12px;\r\n    flex-shrink: 0;\r\n    border: 0px solid;\r\n}\r\n\r\n.table-header-cell.checkbox:hover {\r\n    border: 0px solid grey;\r\n}\r\n\r\n\r\n.table-header-cell.white, .table-header-cell.white:hover {\r\n    background: var(--Base-White, #FFF);\r\n}\r\n\r\n.table-header-cell.gray, .table-header-cell.gray:hover {\r\n    background: var(--Gray-50, #F9FAFB);\r\n}";
styleInject(css_248z$3);

var css_248z$2 = ".table-header {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n\r\n    display: inline-flex;\r\n    align-items: center;\r\n    gap: 4px;\r\n    color: var(--Gray-500, #667085);\r\n    cursor: pointer;\r\n}\r\n\r\n.table-header:hover {\r\n    color: var(--Gray-700, #344054);\r\n}\r\n\r\n.table-header.disabled, .table-header.disabled:hover {\r\n    color: var(--Gray-300, #D0D5DD);\r\n}";
styleInject(css_248z$2);

var TableHeaderText = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'Company' : _b, helpIcon = _a.helpIcon, _c = _a.arrow, arrow = _c === void 0 ? 'none' : _c, disabled = _a.disabled, width = _a.width;
    return (React.createElement("div", { className: "table-header ".concat(disabled ? 'disabled' : ''), style: { width: width } },
        React.createElement("p", null, label),
        helpIcon && React.createElement(HelpCircleIcon, null),
        arrow === 'up' && React.createElement(UpArrowIcon, null),
        arrow === 'down' && React.createElement(DownArrowIcon, null)));
};

var TableHeaderCell = function (_a) {
    var addCheckbox = _a.addCheckbox, addText = _a.addText, color = _a.color, arrow = _a.arrow, disabled = _a.disabled, helpIcon = _a.helpIcon, label = _a.label, width = _a.width;
    return (React.createElement("div", { className: "table-header-cell ".concat(addCheckbox ? 'checkbox' : '', " ").concat(addText ? 'text' : '', " ").concat(color), style: { width: width } },
        addCheckbox && React.createElement(CheckboxBase, { size: 'small' }),
        addText && React.createElement(TableHeaderText, { arrow: arrow, helpIcon: helpIcon, label: label, disabled: disabled })));
};

var css_248z$1 = ".tab {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n\r\n    display: inline-flex;\r\n    padding: 18px 16px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10px;\r\n    border-bottom: 2px solid var(--Primary-200, #F9BED7);\r\n    background: var(--Base-White, #FFF);\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.tab.rounded {\r\n    border-radius: 8px;\r\n    cursor: pointer;\r\n}\r\n\r\n.tab:hover {\r\n    border-bottom: 2px solid var(--Primary-200, #F9BED7);\r\n    background: var(--Primary-50, #FFF6FA);\r\n    color: var(--Primary-400, #F173A9);\r\n}\r\n\r\n.tab.pressed {\r\n    border-bottom: 2px solid var(--Primary-500, #EA287C);\r\n    background: var(--Primary-100, #FCE3ED);\r\n    color: var(--Primary-500, #EA287C);\r\n}\r\n\r\n.tab.disabled {\r\n    border-bottom: 2px solid var(--Gray-300, #D0D5DD);\r\n    background: var(--Gray-50, #F7F7FC);\r\n    color: var(--Gray-300, #D0D5DD);\r\n}\r\n\r\np {\r\n    margin: 0%;\r\n    padding: 0%;\r\n}\r\n\r\n.badge {\r\n    padding: 6px;\r\n    border-radius: 100px;\r\n    background: var(--colors-shades-primary-cerise-red-lightest, #FEF4F8);\r\n    color: var(--Colors-Light-Primary-Cerise-Red, #EA297C);\r\n}           \r\n\r\n.tab:hover .badge {\r\n    color: var(--Colors-Light-Primary-Cerise-Red, #EA297C);\r\n    background: var(--Base-White, #FFF);\r\n}";
styleInject(css_248z$1);

var Tab = function (_a) {
    var _b = _a.name, name = _b === void 0 ? "Tab Name" : _b, _c = _a.addOn, addOn = _c === void 0 ? 'none' : _c, rounded = _a.rounded, disabled = _a.disabled;
    var _d = React.useState(false), pressed = _d[0], setPressed = _d[1];
    var handleClick = function () {
        if (!disabled) {
            setPressed(!pressed);
        }
    };
    return (React.createElement("div", { className: "tab ".concat(pressed ? 'pressed' : '', " ").concat(rounded ? 'rounded' : '', " ").concat(disabled ? 'disabled' : ''), onClick: handleClick },
        React.createElement("p", null, name),
        addOn === 'icon' && React.createElement(InfoIcon, null),
        addOn === 'badge' && React.createElement("p", { className: 'badge' }, "+99")));
};

var css_248z = "/* Tooltip.css */\r\n.tooltip-frame {\r\n    padding: 0%;\r\n    margin: 0%;\r\n    gap: 0px;\r\n}\r\n\r\n.tooltip-container, tooltip-container.none {\r\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n\r\n    display: flex;\r\n    padding: 8px 12px;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    align-self: stretch;\r\n    border-radius: 8px;\r\n\r\n    margin: 0%;\r\n    \r\n    /* Shadow/lg */\r\n    box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);\r\n}\r\n\r\n.tooltip-container.dark {\r\n    background: var(--Gray-700, #344054);\r\n    color: #FFFFFF;\r\n}\r\n\r\n.tooltip-container.light {\r\n    background: var(--Base-White, #FFF);\r\n    color: #344054; \r\n}\r\n\r\n.tooltip-text {\r\n    width: auto;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    /* padding: 5px 10px; */\r\n}\r\n\r\n\r\n.tooltip-arrow {\r\n    /* width: 16px;\r\n    height: 6px;\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    position: absolute;\r\n    top: 100%; /* Adjust as needed */\r\n    /* left: 50%; */\r\n    /* margin-left: -5px; */\r\n    /* padding: 0%; */\r\n\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 10px solid transparent;\r\n    border-right: 10px solid transparent;\r\n    /* border-top: 10px solid #344054; */\r\n}\r\n\r\n.tooltip-arrow.dark.bottom-left, \r\n.tooltip-arrow.dark.bottom-center, \r\n.tooltip-arrow.dark.bottom-right {\r\n    border-top: 10px solid #344054;\r\n}\r\n\r\n.tooltip-arrow.light.bottom-left, \r\n.tooltip-arrow.light.bottom-center, \r\n.tooltip-arrow.light.bottom-right {\r\n    border-top: 10px solid #FFF;\r\n}\r\n\r\n.tooltip-container.light .tooltip-arrow{\r\n    border-top: 5px solid #FFF;\r\n}\r\n\r\n.tooltip-container.top.center .tooltip-arrow {\r\n    bottom: -5px;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-top: none;\r\n}\r\n\r\n/* Add additional styles for other arrow positions and themes */\r\n";
styleInject(css_248z);

var Tooltip = function (_a) {
    var text = _a.text, addSupportText = _a.addSupportText, supportText = _a.supportText, arrow = _a.arrow, theme = _a.theme;
    return (React.createElement("div", { className: 'tooltip-frame' },
        React.createElement("div", { className: "tooltip-container ".concat(theme) },
            React.createElement("div", { className: "tooltip-text" }, text),
            addSupportText && React.createElement("div", { className: "tooltip-support-text" }, supportText)),
        React.createElement("div", { className: "tooltip-arrow ".concat(theme, " ").concat(arrow) })));
};

exports.Accordion = Accordion;
exports.AccordionButton = AccordionButton;
exports.Avatar = Avatar;
exports.AvatarBadge = AvatarBadge;
exports.Badge = Badge;
exports.Breadcrumbs = Breadcrumbs;
exports.Button = Button;
exports.CheckCircleBase = CheckCircleBase;
exports.Checkbox = Checkbox;
exports.CheckboxBase = CheckboxBase;
exports.CheckboxList = CheckboxList;
exports.Chip = Chip;
exports.ColorToast = ColorToast;
exports.DarkToast = DarkToast;
exports.DropdownBasic = DropdownBasic;
exports.FileUpload = FileUpload;
exports.GroupAvatar = GroupAvatar;
exports.Input = Input;
exports.OptionList = OptionList;
exports.PageControl = PageControl;
exports.PageSelect = PageSelect;
exports.Pagination = Pagination;
exports.Progressbar = Progressbar;
exports.RadioBase = RadioBase;
exports.RadioList = RadioList;
exports.Snackbar = Snackbar;
exports.Switch = Switch;
exports.Tab = Tab;
exports.TableCell = TableCell;
exports.TableHeaderCell = TableHeaderCell;
exports.TableHeaderText = TableHeaderText;
exports.Toggle = Toggle;
exports.Tooltip = Tooltip;
exports.UserList = UserList;
exports.ValueBadge = ValueBadge;
//# sourceMappingURL=index.js.map
