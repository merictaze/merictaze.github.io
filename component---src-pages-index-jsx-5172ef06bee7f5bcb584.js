(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{185:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});var r=a(0),n=a.n(r),o=a(191),i=a.n(o),s=a(192),l=a(203),c=a(194);var m=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=[],t=this.props.data.site.siteMetadata,a=t.title,r=t.subtitle;return this.props.data.allMarkdownRemark.edges.forEach(function(t){e.push(n.a.createElement(l.a,{data:t,key:t.node.fields.slug}))}),n.a.createElement(s.a,null,n.a.createElement("div",null,n.a.createElement(i.a,null,n.a.createElement("title",null,a),n.a.createElement("meta",{name:"description",content:r})),n.a.createElement(c.a,this.props),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"content__inner"},e))))},r}(n.a.Component);t.default=m;var p="2141319329"},192:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(191),i=a.n(o);a(195);var s=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.children;return n.a.createElement("div",{className:"layout"},n.a.createElement(i.a,{defaultTitle:"Blog by John Doe"}),e)},r}(n.a.Component);t.a=s},193:function(e,t,a){e.exports=a.p+"static/photo-e36eb1b14cd9b4408329e5ba823b9a22.jpg"},194:function(e,t,a){"use strict";a(34);var r=a(0),n=a.n(r),o=a(196),i=a.n(o),s=a(85);a(197);var l=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data,t=n.a.createElement("ul",{className:"menu__list"},e.map(function(e){return n.a.createElement("li",{className:"menu__list-item",key:e.path},n.a.createElement(s.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))}));return n.a.createElement("nav",{className:"menu"},t)},r}(n.a.Component);a(198),a(199);var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data,t={linkedin:e.linkedin,twitter:e.twitter,github:e.github,vk:e.vk,rss:e.rss,email:e.email};return n.a.createElement("div",{className:"links"},n.a.createElement("ul",{className:"links__list"},n.a.createElement("li",{className:"links__list-item"},n.a.createElement("a",{href:"https://www.linkedin.com/in/"+t.linkedin,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"icon-linkedin"}))),n.a.createElement("li",{className:"links__list-item"},n.a.createElement("a",{href:"mailto:"+t.email},n.a.createElement("i",{className:"icon-mail"}))),n.a.createElement("li",{className:"links__list-item"},n.a.createElement("a",{href:"https://www.github.com/"+t.github,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"icon-github"}))),n.a.createElement("li",{className:"links__list-item"},n.a.createElement("a",{href:t.rss},n.a.createElement("i",{className:"icon-rss"})))))},r}(n.a.Component),m=a(193),p=a.n(m);a(200);var u=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.location,t=this.props.data.site.siteMetadata,a=t.author,r=t.subtitle,o=t.copyright,m=t.menu,u="/"===i()(e,"pathname","/"),_=n.a.createElement("div",null,n.a.createElement(s.Link,{to:"/"},n.a.createElement("img",{src:p.a,className:"sidebar__author-photo",width:"75",height:"75",alt:a.name})),u?n.a.createElement("h1",{className:"sidebar__author-title"},n.a.createElement(s.Link,{className:"sidebar__author-title-link",to:"/"},a.name)):n.a.createElement("h2",{className:"sidebar__author-title"},n.a.createElement(s.Link,{className:"sidebar__author-title-link",to:"/"},a.name)),n.a.createElement("p",{className:"sidebar__author-subtitle"},r));return n.a.createElement("div",{className:"sidebar"},n.a.createElement("div",{className:"sidebar__inner"},n.a.createElement("div",{className:"sidebar__author"},_),n.a.createElement("div",null,n.a.createElement(l,{data:m}),n.a.createElement(c,{data:a}),n.a.createElement("p",{className:"sidebar__copyright"},o))))},r}(n.a.Component);t.a=u},203:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(85),i=a(201),s=a.n(i);a(211);var l=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,r=e.category,i=e.description,l=this.props.data.node.fields,c=l.slug,m=l.categorySlug;return n.a.createElement("div",{className:"post"},n.a.createElement("div",{className:"post__meta"},n.a.createElement("time",{className:"post__meta-time",dateTime:s()(a).format("MMMM D, YYYY")},s()(a).format("MMMM YYYY")),n.a.createElement("span",{className:"post__meta-divider"}),n.a.createElement("span",{className:"post__meta-category",key:m},n.a.createElement(o.Link,{to:m,className:"post__meta-category-link"},r))),n.a.createElement("h2",{className:"post__title"},n.a.createElement(o.Link,{className:"post__title-link",to:c},t)),n.a.createElement("p",{className:"post__description"},i),n.a.createElement(o.Link,{className:"post__readmore",to:c},"Read"))},r}(n.a.Component);t.a=l}}]);
//# sourceMappingURL=component---src-pages-index-jsx-5172ef06bee7f5bcb584.js.map