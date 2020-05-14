(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{128:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),i=n(25),l=n.n(i),c=(n(66),n(45)),o=n(23),s=n(11),m=n(12),u=n(14),d=n(13),h=n(57),b=n.n(h),p=(n(67),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(e,t){console.log("input: handleSubmit",e),e.preventDefault(),t()},e.handleChange=function(e,t){var n=e.currentTarget,a=n.name,r=n.value;e.currentTarget&&t(a,r)},e.handleDateChange=function(e,t){console.log("Change Date: ",e),t("due",e)},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.item,a=t.onChange,i=t.onSubmit;return r.a.createElement("div",{className:"card card-body my-3"},r.a.createElement("form",{className:"form-group",onSubmit:function(t){return e.handleSubmit(t,i)}},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text bg-primary text-white"},r.a.createElement("i",{className:"fas fa-book"}))),r.a.createElement("input",{type:"text",name:"task",className:"form-control mx-2",placeholder:"Add a task",value:n?n.task:"",onChange:function(t){return e.handleChange(t,a)}}),r.a.createElement("input",{type:"number",name:"priority",className:"form-control mx-2",placeholder:"Add priority",value:n?n.priority:"",onChange:function(t){return e.handleChange(t,a)}}),r.a.createElement(b.a,{type:"text",name:"due",selected:n?n.due:"",onChange:function(t){return e.handleDateChange(t,a)}})),r.a.createElement("button",{className:n&&n._id?"btn btn-block btn-success mt-3":"btn btn-block btn-primary mt-3",type:"submit"},n&&n._id?"Edit":"Add")))}}]),n}(a.Component)),f=(n(55),n(56),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.onEdit,a=e.onDelete;return r.a.createElement("li",{className:"list-group-item d-flex justify-content-between my-2"},r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox"}),r.a.createElement("b",{className:"mx-5"},t.priority),r.a.createElement("a",{className:"mx-2"},t&&t.date?t.date.toDateString():""),r.a.createElement("i",{className:"mx-2"},t&&t.due?t.due.toDateString():"")),r.a.createElement("h6",null,t.task),r.a.createElement("div",null,r.a.createElement("span",{className:"mx-2 text-success"},r.a.createElement("i",{className:"fas fa-pen",onClick:function(){return n(t)}})),r.a.createElement("span",{className:"mx-2 text-danger"},r.a.createElement("i",{className:"fas fa-trash",onClick:function(){return a(t)}}))))}}]),n}(a.Component)),E=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.items,n=e.onEdit,a=e.onSort,i=e.onDelete,l=e.onDeleteAll;return r.a.createElement("ul",{className:"list-group my-3"},r.a.createElement("h3",{className:"text-center"},"Todo List"),t.map((function(e){return r.a.createElement(f,{key:e._id,data:e,onEdit:n,onDelete:i})})),r.a.createElement("div",{className:"d-flex"},r.a.createElement("button",{type:"button",className:"btn btn-block btn-primary mt-3 mr-2",onClick:function(){return a("task")}},"Sort Alpha"),r.a.createElement("button",{type:"button",className:"btn btn-block btn-primary mt-3 mr-2",onClick:function(){return a("priority")}},"Sort Prio"),r.a.createElement("button",{type:"button",className:"btn btn-block btn-primary mt-3 mr-2",onClick:function(){return a("due")}},"Sort Due"),r.a.createElement("button",{type:"button",className:"btn btn-block btn-danger mt-3 ml-2",onClick:l},"Delete All")))}}]),n}(a.Component),v=(n(128),n(60)),g=n.n(v),y=n(44),k=n.n(y),N=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={items:[],item:null,error:{}},e.schema={_id:k.a.string(),task:k.a.string().required().label("Task")},e.handleChange=function(t,n){var a=Object(o.a)({},e.state.item);console.log("handle cange: ",t,n),a[t]=n,e.setState({item:a})},e.handleSubmit=function(){var t=Object(o.a)({},e.state.item),n=Object(c.a)(e.state.items);if(t._id){var a=n.findIndex((function(e,n){if(e._id===t._id)return!0}));-1!==a?n[a]=t:n.push(t)}else t._id=g()(),t.date=new Date,n.push(t);e.setState({items:n,item:null})},e.handleEdit=function(t){console.log("handle edit",t),e.setState({item:t})},e.handleSort=function(t){var n=Object(c.a)(e.state.items);n.sort((function(e,n){return e[t]<n[t]?-1:1})),"priority"===t&&n.reverse(),e.setState({items:n})},e.handleDelete=function(t){var n=e.state.items.filter((function(e){return e._id!==t._id}));if(e.setState({items:n}),e.state.item===t){var a=Object(o.a)({},e.state.item);a._id=null,e.setState({item:a})}},e.handleDeleteAll=function(){if(e.setState({items:[]}),e.state.item){var t=Object(o.a)({},e.state.item);t._id=null,e.setState({item:t})}},e}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("main",{className:"container"},r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",{className:"text-center"},"TODO"),r.a.createElement(p,{item:this.state.item,onChange:this.handleChange,onSubmit:this.handleSubmit}),r.a.createElement(E,{items:this.state.items,onEdit:this.handleEdit,onSort:this.handleSort,onDelete:this.handleDelete,onDeleteAll:this.handleDeleteAll})))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,t,n){e.exports=n(130)},66:function(e,t,n){}},[[61,1,2]]]);
//# sourceMappingURL=main.41ef2fb1.chunk.js.map