import{d as a}from"../chunks/index.BMPXHWBw.js";import{a as e,t}from"../chunks/disclose-version.DTJswJl7.js";import"../chunks/legacy.CcfQg36L.js";import{aC as r}from"../chunks/runtime.Db9iSkkl.js";import{h as c}from"../chunks/svelte-head.530wIRfY.js";const l=a,m=!0,v=Object.freeze(Object.defineProperty({__proto__:null,csr:l,prerender:m},Symbol.toStringTag,{value:"Module"}));var p=t('<meta name="description" content="Mïmis: Collaborative Filesystem">'),h=t(`<section class="svelte-1cnc2mf"><h1>About Mïmis</h1> <p class="svelte-1cnc2mf">Mïmis is a collaborative filesystem. It functions by publishing <a href="https://ipld.io/docs/codecs/known/dag-pb">ProtoBuf-DAG</a> UnixFS file systems describing context trees to <a href="https://ipfs.io">IPFS</a> where they are picked up & cached in a <a href="https://neo4j.org">Neo4j</a> instance using content-addressing to deduplicate across versions in a manner reminiscent of <code>git</code>.</p> <img src="architecture.svg" alt="Mïmis Architecture" class="svelte-1cnc2mf"> <p class="svelte-1cnc2mf">Each user has their own tree, and it is possible to browse and subscribe to sections of other users' trees. These subscriptions can be "union mounted" into a composite tree beginning with the user's tree, and merging mounted nodes into it.</p> <p class="svelte-1cnc2mf">When a context path is ambiguous, the system can be requested to return the highest-priority answer or an ordered list of possible candidate resources.</p> <p class="svelte-1cnc2mf">One function of that these ordered lists will enable is a content recommender. Users can create ordered lists at different context points, and they're combined & collated to generate a likely list of the consensus opinion.</p> <p class="svelte-1cnc2mf">Structurally, the context tree differs from a traditional filesystem in that files don't have names, per se. Their "name" is simply the file type. <em>(Oftentimes, this is duplicated, like <code inert="">svg.svg</code> because a variety of softwares rely on there being an extension.)</em> Because there is no context information in the filename, it is possible to create multiple routes to a file without the fear that the filename relies on context in the leading path.</p> <p class="svelte-1cnc2mf">The goal is that the tree should contain a variety of paths describing a resource rather than a single fixed point.</p> <p class="svelte-1cnc2mf"></p></section>`);function y(s){var i=h();c(o=>{var n=p();r.title="About Mïmis",e(o,n)}),e(s,i)}export{y as component,v as universal};