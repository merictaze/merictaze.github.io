(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{189:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(191),s=a.n(o),i=a(192),c=a(194),l=a(203);var p=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=[],t=this.props.pageContext.category;return this.props.data.allMarkdownRemark.edges.forEach(function(t){e.push(n.a.createElement(l.a,{data:t,key:t.node.fields.slug}))}),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"content__inner"},n.a.createElement("div",{className:"page"},n.a.createElement("h1",{className:"page__title"},t),n.a.createElement("div",{className:"page__body"},e))))},r}(n.a.Component);a.d(t,"pageQuery",function(){return u});var m=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pageContext.category;return n.a.createElement(i.a,null,n.a.createElement("div",null,n.a.createElement(s.a,{title:t+" - "+e}),n.a.createElement(c.a,this.props),n.a.createElement(p,this.props)))},r}(n.a.Component),u=(t.default=m,"3226531135")},192:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(191),s=a.n(o);a(195);var i=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.children;return n.a.createElement("div",{className:"layout"},n.a.createElement(s.a,{defaultTitle:"Blog by John Doe"}),e)},r}(n.a.Component);t.a=i},193:function(e,t,a){e.exports=a.p+"static/photo-e36eb1b14cd9b4408329e5ba823b9a22.jpg"},194:function(e,t,a){"use strict";a(34);var r=a(0),n=a.n(r),o=a(196),s=a.n(o),i=a(85);a(197);var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data,t=n.a.createElement("ul",{className:"menu__list"},e.map(function(e){return n.a.createElement("li",{className:"menu__list-item",key:e.path},n.a.createElement(i.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))}));return n.a.createElement("nav",{className:"menu"},t)},r}(n.a.Component);a(198),a(199);var l=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data,t={linkedin:e.linkedin,twitter:e.twitter,github:e.github,vk:e.vk,rss:e.rss,email:e.email};return n.a.createElement("div",{className:"links"},n.a.createElement("ul",{className:"links__list"},n.a.createElement("li",{className:"links__list-item"},n.a.createElement("a",{href:"https://www.linkedin.com/in/"+t.linkedin,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"icon-linkedin"}))),n.a.createElement("li",{className:"links__list-item"},n.a.createElement("a",{href:"mailto:"+t.email},n.a.createElement("i",{className:"icon-mail"}))),n.a.createElement("li",{className:"links__list-item"},n.a.createElement("a",{href:"https://www.github.com/"+t.github,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"icon-github"}))),n.a.createElement("li",{className:"links__list-item"},n.a.createElement("a",{href:t.rss},n.a.createElement("i",{className:"icon-rss"})))))},r}(n.a.Component),p=a(193),m=a.n(p);a(200);var u=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.location,t=this.props.data.site.siteMetadata,a=t.author,r=t.subtitle,o=t.copyright,p=t.menu,u="/"===s()(e,"pathname","/"),_=n.a.createElement("div",null,n.a.createElement(i.Link,{to:"/"},n.a.createElement("img",{src:m.a,className:"sidebar__author-photo",width:"75",height:"75",alt:a.name})),u?n.a.createElement("h1",{className:"sidebar__author-title"},n.a.createElement(i.Link,{className:"sidebar__author-title-link",to:"/"},a.name)):n.a.createElement("h2",{className:"sidebar__author-title"},n.a.createElement(i.Link,{className:"sidebar__author-title-link",to:"/"},a.name)),n.a.createElement("p",{className:"sidebar__author-subtitle"},r));return n.a.createElement("div",{className:"sidebar"},n.a.createElement("div",{className:"sidebar__inner"},n.a.createElement("div",{className:"sidebar__author"},_),n.a.createElement("div",null,n.a.createElement(c,{data:p}),n.a.createElement(l,{data:a}),n.a.createElement("p",{className:"sidebar__copyright"},o))))},r}(n.a.Component);t.a=u},203:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(85),s=a(201),i=a.n(s);a(211);var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,r=e.category,s=e.description,c=this.props.data.node.fields,l=c.slug,p=c.categorySlug;return n.a.createElement("div",{className:"post"},n.a.createElement("div",{className:"post__meta"},n.a.createElement("time",{className:"post__meta-time",dateTime:i()(a).format("MMMM D, YYYY")},i()(a).format("MMMM YYYY")),n.a.createElement("span",{className:"post__meta-divider"}),n.a.createElement("span",{className:"post__meta-category",key:p},n.a.createElement(o.Link,{to:p,className:"post__meta-category-link"},r))),n.a.createElement("h2",{className:"post__title"},n.a.createElement(o.Link,{className:"post__title-link",to:l},t)),n.a.createElement("p",{className:"post__description"},s),n.a.createElement(o.Link,{className:"post__readmore",to:l},"Read"))},r}(n.a.Component);t.a=c}}]);
//# sourceMappingURL=component---src-templates-category-template-jsx-b60d2d246997ccca06da.js.map