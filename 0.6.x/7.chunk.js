(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{237:function(t,e){t.exports="# Tooltip\n\n<example />\n\n## API"},238:function(t,e){t.exports="# Tooltip *提示*\n\nTooltip 主要用来显示文字提示，如果需要显示更多内容，请使用 [Popover](#/components/Popover)\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| children | ReactElement | 必填 | 子元素只能为一个 ReactElement |\n| position | string | 'top' | 弹出层位置，可选值为 \\['left', 'top', 'right', 'bottom'] |\n| style | object | 无 | 最外层扩展样式 |\n| tip | string | 必填 | 弹出文字 | \n"},412:function(t,e){t.exports='/**\n * cn - 点击触发\n *    -- 默认触发事件为 hover，如果需要点击触发，可以设置 trigger 为 click\n * en - Click\n */\nimport React from \'react\'\nimport { Tooltip } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst fontStyle = { fontSize: 20, lineHeight: 1, margin: 4 }\n\nexport default function () {\n  return (\n    <div>\n      <Tooltip tip="Some text." trigger="click" position="left" style={{ marginRight: 12 }}>\n        <FontAwesome name="arrow-circle-o-left" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." trigger="click" position="top" style={{ marginRight: 12 }}>\n        <FontAwesome name="arrow-circle-o-up" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." trigger="click" position="bottom" style={{ marginRight: 12 }}>\n        <FontAwesome name="arrow-circle-o-down" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." trigger="click" position="right" style={{ marginRight: 12 }}>\n        <FontAwesome name="arrow-circle-o-right" style={fontStyle} />\n      </Tooltip>\n    </div>\n  )\n}\n'},413:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(1),l=n(9),a={fontSize:20,lineHeight:1,margin:4};e.default=function(){return i.a.createElement("div",null,i.a.createElement(r.D,{tip:"Some text.",trigger:"click",position:"left",style:{marginRight:12}},i.a.createElement(l.a,{name:"arrow-circle-o-left",style:a})),i.a.createElement(r.D,{tip:"Some text.",trigger:"click",position:"top",style:{marginRight:12}},i.a.createElement(l.a,{name:"arrow-circle-o-up",style:a})),i.a.createElement(r.D,{tip:"Some text.",trigger:"click",position:"bottom",style:{marginRight:12}},i.a.createElement(l.a,{name:"arrow-circle-o-down",style:a})),i.a.createElement(r.D,{tip:"Some text.",trigger:"click",position:"right",style:{marginRight:12}},i.a.createElement(l.a,{name:"arrow-circle-o-right",style:a})))}},414:function(t,e){t.exports='/**\n * cn - 基本用法\n * en - Base\n */\nimport React from \'react\'\nimport { Tooltip } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst fontStyle = { fontSize: 20, lineHeight: 1, margin: 4 }\n\nexport default function () {\n  return (\n    <div>\n      <Tooltip tip="Some text." position="left" style={{ marginRight: 12 }}>\n        <FontAwesome name="arrow-circle-o-left" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." position="top" style={{ marginRight: 12 }}>\n        <FontAwesome name="arrow-circle-o-up" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." position="bottom" style={{ marginRight: 12 }}>\n        <FontAwesome name="arrow-circle-o-down" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." position="right" style={{ marginRight: 12 }}>\n        <FontAwesome name="arrow-circle-o-right" style={fontStyle} />\n      </Tooltip>\n    </div>\n  )\n}\n'},415:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(1),l=n(9),a={fontSize:20,lineHeight:1,margin:4};e.default=function(){return i.a.createElement("div",null,i.a.createElement(r.D,{tip:"Some text.",position:"left",style:{marginRight:12}},i.a.createElement(l.a,{name:"arrow-circle-o-left",style:a})),i.a.createElement(r.D,{tip:"Some text.",position:"top",style:{marginRight:12}},i.a.createElement(l.a,{name:"arrow-circle-o-up",style:a})),i.a.createElement(r.D,{tip:"Some text.",position:"bottom",style:{marginRight:12}},i.a.createElement(l.a,{name:"arrow-circle-o-down",style:a})),i.a.createElement(r.D,{tip:"Some text.",position:"right",style:{marginRight:12}},i.a.createElement(l.a,{name:"arrow-circle-o-right",style:a})))}},9:function(t,e,n){"use strict";var o=n(1);e.a=Object(o.l)("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa")},990:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(7),l=n(6),a=n(2),c=n(238),m=n.n(c),s=n(237),p=n.n(s),g=Object(a.a)(m.a,p.a),f=[{name:"1-base",title:Object(a.a)("基本用法","Base"),component:n(415).default,rawText:n(414)},{name:"2-click",title:Object(a.a)("点击触发 \n 默认触发事件为 hover，如果需要点击触发，可以设置 trigger 为 click","Click"),component:n(413).default,rawText:n(412)}];e.default=Object(r.a)(function(t){return i.a.createElement(l.b,Object.assign({},t,{codes:void 0,source:g,examples:f}))})}}]);