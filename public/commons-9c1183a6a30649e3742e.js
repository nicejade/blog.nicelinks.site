/*! For license information please see commons-9c1183a6a30649e3742e.js.LICENSE.txt */
(self.webpackChunkblog_nicelinks_site=self.webpackChunkblog_nicelinks_site||[]).push([[351],{6047:function(e,t,r){var n,i;!function(){var s,a,o,l,u,c,h,d,p,f,m,y,g,v,x,w,k,E,b,Q,S,L,T,P,N,O,I=function e(t){var r=new e.Builder;return r.pipeline.add(e.trimmer,e.stopWordFilter,e.stemmer),r.searchPipeline.add(e.stemmer),t.call(r,r),r.build()};I.version="2.3.9",(I.utils={}).warn=(s=this,function(e){s.console&&console.warn&&console.warn(e)}),I.utils.asString=function(e){return null==e?"":e.toString()},I.utils.clone=function(e){if(null==e)return e;for(var t=Object.create(null),r=Object.keys(e),n=0;n<r.length;n++){var i=r[n],s=e[i];if(Array.isArray(s))t[i]=s.slice();else{if("string"!=typeof s&&"number"!=typeof s&&"boolean"!=typeof s)throw new TypeError("clone is not deep and does not support nested objects");t[i]=s}}return t},(I.FieldRef=function(e,t,r){this.docRef=e,this.fieldName=t,this._stringValue=r}).joiner="/",I.FieldRef.fromString=function(e){var t=e.indexOf(I.FieldRef.joiner);if(-1===t)throw"malformed field ref string";var r=e.slice(0,t),n=e.slice(t+1);return new I.FieldRef(n,r,e)},I.FieldRef.prototype.toString=function(){return null==this._stringValue&&(this._stringValue=this.fieldName+I.FieldRef.joiner+this.docRef),this._stringValue},(I.Set=function(e){if(this.elements=Object.create(null),e){this.length=e.length;for(var t=0;t<this.length;t++)this.elements[e[t]]=!0}else this.length=0}).complete={intersect:function(e){return e},union:function(){return this},contains:function(){return!0}},I.Set.empty={intersect:function(){return this},union:function(e){return e},contains:function(){return!1}},I.Set.prototype.contains=function(e){return!!this.elements[e]},I.Set.prototype.intersect=function(e){var t,r,n,i=[];if(e===I.Set.complete)return this;if(e===I.Set.empty)return e;this.length<e.length?(t=this,r=e):(t=e,r=this),n=Object.keys(t.elements);for(var s=0;s<n.length;s++){var a=n[s];a in r.elements&&i.push(a)}return new I.Set(i)},I.Set.prototype.union=function(e){return e===I.Set.complete?I.Set.complete:e===I.Set.empty?this:new I.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))},I.idf=function(e,t){var r=0;for(var n in e)"_index"!=n&&(r+=Object.keys(e[n]).length);var i=(t-r+.5)/(r+.5);return Math.log(1+Math.abs(i))},(I.Token=function(e,t){this.str=e||"",this.metadata=t||{}}).prototype.toString=function(){return this.str},I.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},I.Token.prototype.clone=function(e){return new I.Token((e=e||function(e){return e})(this.str,this.metadata),this.metadata)},(I.tokenizer=function(e,t){if(null==e||null==e)return[];if(Array.isArray(e))return e.map((function(e){return new I.Token(I.utils.asString(e).toLowerCase(),I.utils.clone(t))}));for(var r=e.toString().toLowerCase(),n=r.length,i=[],s=0,a=0;s<=n;s++){var o=s-a;if(r.charAt(s).match(I.tokenizer.separator)||s==n){if(o>0){var l=I.utils.clone(t)||{};l.position=[a,o],l.index=i.length,i.push(new I.Token(r.slice(a,s),l))}a=s+1}}return i}).separator=/[\s\-]+/,(I.Pipeline=function(){this._stack=[]}).registeredFunctions=Object.create(null),I.Pipeline.registerFunction=function(e,t){t in this.registeredFunctions&&I.utils.warn("Overwriting existing registered function: "+t),e.label=t,I.Pipeline.registeredFunctions[e.label]=e},I.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||I.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},I.Pipeline.load=function(e){var t=new I.Pipeline;return e.forEach((function(e){var r=I.Pipeline.registeredFunctions[e];if(!r)throw new Error("Cannot load unregistered function: "+e);t.add(r)})),t},I.Pipeline.prototype.add=function(){var e=Array.prototype.slice.call(arguments);e.forEach((function(e){I.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)}),this)},I.Pipeline.prototype.after=function(e,t){I.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");r+=1,this._stack.splice(r,0,t)},I.Pipeline.prototype.before=function(e,t){I.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");this._stack.splice(r,0,t)},I.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);-1!=t&&this._stack.splice(t,1)},I.Pipeline.prototype.run=function(e){for(var t=this._stack.length,r=0;r<t;r++){for(var n=this._stack[r],i=[],s=0;s<e.length;s++){var a=n(e[s],s,e);if(null!=a&&""!==a)if(Array.isArray(a))for(var o=0;o<a.length;o++)i.push(a[o]);else i.push(a)}e=i}return e},I.Pipeline.prototype.runString=function(e,t){var r=new I.Token(e,t);return this.run([r]).map((function(e){return e.toString()}))},I.Pipeline.prototype.reset=function(){this._stack=[]},I.Pipeline.prototype.toJSON=function(){return this._stack.map((function(e){return I.Pipeline.warnIfFunctionNotRegistered(e),e.label}))},(I.Vector=function(e){this._magnitude=0,this.elements=e||[]}).prototype.positionForIndex=function(e){if(0==this.elements.length)return 0;for(var t=0,r=this.elements.length/2,n=r-t,i=Math.floor(n/2),s=this.elements[2*i];n>1&&(s<e&&(t=i),s>e&&(r=i),s!=e);)n=r-t,i=t+Math.floor(n/2),s=this.elements[2*i];return s==e||s>e?2*i:s<e?2*(i+1):void 0},I.Vector.prototype.insert=function(e,t){this.upsert(e,t,(function(){throw"duplicate index"}))},I.Vector.prototype.upsert=function(e,t,r){this._magnitude=0;var n=this.positionForIndex(e);this.elements[n]==e?this.elements[n+1]=r(this.elements[n+1],t):this.elements.splice(n,0,e,t)},I.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e=0,t=this.elements.length,r=1;r<t;r+=2){var n=this.elements[r];e+=n*n}return this._magnitude=Math.sqrt(e)},I.Vector.prototype.dot=function(e){for(var t=0,r=this.elements,n=e.elements,i=r.length,s=n.length,a=0,o=0,l=0,u=0;l<i&&u<s;)(a=r[l])<(o=n[u])?l+=2:a>o?u+=2:a==o&&(t+=r[l+1]*n[u+1],l+=2,u+=2);return t},I.Vector.prototype.similarity=function(e){return this.dot(e)/this.magnitude()||0},I.Vector.prototype.toArray=function(){for(var e=new Array(this.elements.length/2),t=1,r=0;t<this.elements.length;t+=2,r++)e[r]=this.elements[t];return e},I.Vector.prototype.toJSON=function(){return this.elements},I.stemmer=(a={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},o={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},l="[aeiouy]",u="[^aeiou][^aeiouy]*",c=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),h=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),d=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),p=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),f=/^(.+?)(ss|i)es$/,m=/^(.+?)([^s])s$/,y=/^(.+?)eed$/,g=/^(.+?)(ed|ing)$/,v=/.$/,x=/(at|bl|iz)$/,w=new RegExp("([^aeiouylsz])\\1$"),k=new RegExp("^"+u+l+"[^aeiouwxy]$"),E=/^(.+?[^aeiou])y$/,b=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,Q=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,S=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,L=/^(.+?)(s|t)(ion)$/,T=/^(.+?)e$/,P=/ll$/,N=new RegExp("^"+u+l+"[^aeiouwxy]$"),O=function(e){var t,r,n,i,s,l,u;if(e.length<3)return e;if("y"==(n=e.substr(0,1))&&(e=n.toUpperCase()+e.substr(1)),s=m,(i=f).test(e)?e=e.replace(i,"$1$2"):s.test(e)&&(e=e.replace(s,"$1$2")),s=g,(i=y).test(e)){var O=i.exec(e);(i=c).test(O[1])&&(i=v,e=e.replace(i,""))}else s.test(e)&&(t=(O=s.exec(e))[1],(s=p).test(t)&&(l=w,u=k,(s=x).test(e=t)?e+="e":l.test(e)?(i=v,e=e.replace(i,"")):u.test(e)&&(e+="e")));return(i=E).test(e)&&(e=(t=(O=i.exec(e))[1])+"i"),(i=b).test(e)&&(t=(O=i.exec(e))[1],r=O[2],(i=c).test(t)&&(e=t+a[r])),(i=Q).test(e)&&(t=(O=i.exec(e))[1],r=O[2],(i=c).test(t)&&(e=t+o[r])),s=L,(i=S).test(e)?(t=(O=i.exec(e))[1],(i=h).test(t)&&(e=t)):s.test(e)&&(t=(O=s.exec(e))[1]+O[2],(s=h).test(t)&&(e=t)),(i=T).test(e)&&(t=(O=i.exec(e))[1],s=d,l=N,((i=h).test(t)||s.test(t)&&!l.test(t))&&(e=t)),s=h,(i=P).test(e)&&s.test(e)&&(i=v,e=e.replace(i,"")),"y"==n&&(e=n.toLowerCase()+e.substr(1)),e},function(e){return e.update(O)}),I.Pipeline.registerFunction(I.stemmer,"stemmer"),I.generateStopWordFilter=function(e){var t=e.reduce((function(e,t){return e[t]=t,e}),{});return function(e){if(e&&t[e.toString()]!==e.toString())return e}},I.stopWordFilter=I.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),I.Pipeline.registerFunction(I.stopWordFilter,"stopWordFilter"),I.trimmer=function(e){return e.update((function(e){return e.replace(/^\W+/,"").replace(/\W+$/,"")}))},I.Pipeline.registerFunction(I.trimmer,"trimmer"),(I.TokenSet=function(){this.final=!1,this.edges={},this.id=I.TokenSet._nextId,I.TokenSet._nextId+=1})._nextId=1,I.TokenSet.fromArray=function(e){for(var t=new I.TokenSet.Builder,r=0,n=e.length;r<n;r++)t.insert(e[r]);return t.finish(),t.root},I.TokenSet.fromClause=function(e){return"editDistance"in e?I.TokenSet.fromFuzzyString(e.term,e.editDistance):I.TokenSet.fromString(e.term)},I.TokenSet.fromFuzzyString=function(e,t){for(var r=new I.TokenSet,n=[{node:r,editsRemaining:t,str:e}];n.length;){var i=n.pop();if(i.str.length>0){var s,a=i.str.charAt(0);a in i.node.edges?s=i.node.edges[a]:(s=new I.TokenSet,i.node.edges[a]=s),1==i.str.length&&(s.final=!0),n.push({node:s,editsRemaining:i.editsRemaining,str:i.str.slice(1)})}if(0!=i.editsRemaining){if("*"in i.node.edges)var o=i.node.edges["*"];else{o=new I.TokenSet;i.node.edges["*"]=o}if(0==i.str.length&&(o.final=!0),n.push({node:o,editsRemaining:i.editsRemaining-1,str:i.str}),i.str.length>1&&n.push({node:i.node,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)}),1==i.str.length&&(i.node.final=!0),i.str.length>=1){if("*"in i.node.edges)var l=i.node.edges["*"];else{l=new I.TokenSet;i.node.edges["*"]=l}1==i.str.length&&(l.final=!0),n.push({node:l,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)})}if(i.str.length>1){var u,c=i.str.charAt(0),h=i.str.charAt(1);h in i.node.edges?u=i.node.edges[h]:(u=new I.TokenSet,i.node.edges[h]=u),1==i.str.length&&(u.final=!0),n.push({node:u,editsRemaining:i.editsRemaining-1,str:c+i.str.slice(2)})}}}return r},I.TokenSet.fromString=function(e){for(var t=new I.TokenSet,r=t,n=0,i=e.length;n<i;n++){var s=e[n],a=n==i-1;if("*"==s)t.edges[s]=t,t.final=a;else{var o=new I.TokenSet;o.final=a,t.edges[s]=o,t=o}}return r},I.TokenSet.prototype.toArray=function(){for(var e=[],t=[{prefix:"",node:this}];t.length;){var r=t.pop(),n=Object.keys(r.node.edges),i=n.length;r.node.final&&(r.prefix.charAt(0),e.push(r.prefix));for(var s=0;s<i;s++){var a=n[s];t.push({prefix:r.prefix.concat(a),node:r.node.edges[a]})}}return e},I.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var e=this.final?"1":"0",t=Object.keys(this.edges).sort(),r=t.length,n=0;n<r;n++){var i=t[n];e=e+i+this.edges[i].id}return e},I.TokenSet.prototype.intersect=function(e){for(var t=new I.TokenSet,r=void 0,n=[{qNode:e,output:t,node:this}];n.length;){r=n.pop();for(var i=Object.keys(r.qNode.edges),s=i.length,a=Object.keys(r.node.edges),o=a.length,l=0;l<s;l++)for(var u=i[l],c=0;c<o;c++){var h=a[c];if(h==u||"*"==u){var d=r.node.edges[h],p=r.qNode.edges[u],f=d.final&&p.final,m=void 0;h in r.output.edges?(m=r.output.edges[h]).final=m.final||f:((m=new I.TokenSet).final=f,r.output.edges[h]=m),n.push({qNode:p,output:m,node:d})}}}return t},I.TokenSet.Builder=function(){this.previousWord="",this.root=new I.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},I.TokenSet.Builder.prototype.insert=function(e){var t,r=0;if(e<this.previousWord)throw new Error("Out of order word insertion");for(var n=0;n<e.length&&n<this.previousWord.length&&e[n]==this.previousWord[n];n++)r++;this.minimize(r),t=0==this.uncheckedNodes.length?this.root:this.uncheckedNodes[this.uncheckedNodes.length-1].child;for(n=r;n<e.length;n++){var i=new I.TokenSet,s=e[n];t.edges[s]=i,this.uncheckedNodes.push({parent:t,char:s,child:i}),t=i}t.final=!0,this.previousWord=e},I.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},I.TokenSet.Builder.prototype.minimize=function(e){for(var t=this.uncheckedNodes.length-1;t>=e;t--){var r=this.uncheckedNodes[t],n=r.child.toString();n in this.minimizedNodes?r.parent.edges[r.char]=this.minimizedNodes[n]:(r.child._str=n,this.minimizedNodes[n]=r.child),this.uncheckedNodes.pop()}},(I.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline}).prototype.search=function(e){return this.query((function(t){new I.QueryParser(e,t).parse()}))},I.Index.prototype.query=function(e){for(var t=new I.Query(this.fields),r=Object.create(null),n=Object.create(null),i=Object.create(null),s=Object.create(null),a=Object.create(null),o=0;o<this.fields.length;o++)n[this.fields[o]]=new I.Vector;e.call(t,t);for(o=0;o<t.clauses.length;o++){var l=t.clauses[o],u=null,c=I.Set.empty;u=l.usePipeline?this.pipeline.runString(l.term,{fields:l.fields}):[l.term];for(var h=0;h<u.length;h++){var d=u[h];l.term=d;var p=I.TokenSet.fromClause(l),f=this.tokenSet.intersect(p).toArray();if(0===f.length&&l.presence===I.Query.presence.REQUIRED){for(var m=0;m<l.fields.length;m++){s[R=l.fields[m]]=I.Set.empty}break}for(var y=0;y<f.length;y++){var g=f[y],v=this.invertedIndex[g],x=v._index;for(m=0;m<l.fields.length;m++){var w=v[R=l.fields[m]],k=Object.keys(w),E=g+"/"+R,b=new I.Set(k);if(l.presence==I.Query.presence.REQUIRED&&(c=c.union(b),void 0===s[R]&&(s[R]=I.Set.complete)),l.presence!=I.Query.presence.PROHIBITED){if(n[R].upsert(x,l.boost,(function(e,t){return e+t})),!i[E]){for(var Q=0;Q<k.length;Q++){var S,L=k[Q],T=new I.FieldRef(L,R),P=w[L];void 0===(S=r[T])?r[T]=new I.MatchData(g,R,P):S.add(g,R,P)}i[E]=!0}}else void 0===a[R]&&(a[R]=I.Set.empty),a[R]=a[R].union(b)}}}if(l.presence===I.Query.presence.REQUIRED)for(m=0;m<l.fields.length;m++){s[R=l.fields[m]]=s[R].intersect(c)}}var N=I.Set.complete,O=I.Set.empty;for(o=0;o<this.fields.length;o++){var R;s[R=this.fields[o]]&&(N=N.intersect(s[R])),a[R]&&(O=O.union(a[R]))}var j=Object.keys(r),C=[],F=Object.create(null);if(t.isNegated()){j=Object.keys(this.fieldVectors);for(o=0;o<j.length;o++){T=j[o];var _=I.FieldRef.fromString(T);r[T]=new I.MatchData}}for(o=0;o<j.length;o++){var D=(_=I.FieldRef.fromString(j[o])).docRef;if(N.contains(D)&&!O.contains(D)){var A,B=this.fieldVectors[_],M=n[_.fieldName].similarity(B);if(void 0!==(A=F[D]))A.score+=M,A.matchData.combine(r[_]);else{var z={ref:D,score:M,matchData:r[_]};F[D]=z,C.push(z)}}}return C.sort((function(e,t){return t.score-e.score}))},I.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map((function(e){return[e,this.invertedIndex[e]]}),this),t=Object.keys(this.fieldVectors).map((function(e){return[e,this.fieldVectors[e].toJSON()]}),this);return{version:I.version,fields:this.fields,fieldVectors:t,invertedIndex:e,pipeline:this.pipeline.toJSON()}},I.Index.load=function(e){var t={},r={},n=e.fieldVectors,i=Object.create(null),s=e.invertedIndex,a=new I.TokenSet.Builder,o=I.Pipeline.load(e.pipeline);e.version!=I.version&&I.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+I.version+"' does not match serialized index '"+e.version+"'");for(var l=0;l<n.length;l++){var u=(h=n[l])[0],c=h[1];r[u]=new I.Vector(c)}for(l=0;l<s.length;l++){var h,d=(h=s[l])[0],p=h[1];a.insert(d),i[d]=p}return a.finish(),t.fields=e.fields,t.fieldVectors=r,t.invertedIndex=i,t.tokenSet=a.root,t.pipeline=o,new I.Index(t)},(I.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=I.tokenizer,this.pipeline=new I.Pipeline,this.searchPipeline=new I.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]}).prototype.ref=function(e){this._ref=e},I.Builder.prototype.field=function(e,t){if(/\//.test(e))throw new RangeError("Field '"+e+"' contains illegal character '/'");this._fields[e]=t||{}},I.Builder.prototype.b=function(e){this._b=e<0?0:e>1?1:e},I.Builder.prototype.k1=function(e){this._k1=e},I.Builder.prototype.add=function(e,t){var r=e[this._ref],n=Object.keys(this._fields);this._documents[r]=t||{},this.documentCount+=1;for(var i=0;i<n.length;i++){var s=n[i],a=this._fields[s].extractor,o=a?a(e):e[s],l=this.tokenizer(o,{fields:[s]}),u=this.pipeline.run(l),c=new I.FieldRef(r,s),h=Object.create(null);this.fieldTermFrequencies[c]=h,this.fieldLengths[c]=0,this.fieldLengths[c]+=u.length;for(var d=0;d<u.length;d++){var p=u[d];if(null==h[p]&&(h[p]=0),h[p]+=1,null==this.invertedIndex[p]){var f=Object.create(null);f._index=this.termIndex,this.termIndex+=1;for(var m=0;m<n.length;m++)f[n[m]]=Object.create(null);this.invertedIndex[p]=f}null==this.invertedIndex[p][s][r]&&(this.invertedIndex[p][s][r]=Object.create(null));for(var y=0;y<this.metadataWhitelist.length;y++){var g=this.metadataWhitelist[y],v=p.metadata[g];null==this.invertedIndex[p][s][r][g]&&(this.invertedIndex[p][s][r][g]=[]),this.invertedIndex[p][s][r][g].push(v)}}}},I.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),t=e.length,r={},n={},i=0;i<t;i++){var s=I.FieldRef.fromString(e[i]),a=s.fieldName;n[a]||(n[a]=0),n[a]+=1,r[a]||(r[a]=0),r[a]+=this.fieldLengths[s]}var o=Object.keys(this._fields);for(i=0;i<o.length;i++){var l=o[i];r[l]=r[l]/n[l]}this.averageFieldLength=r},I.Builder.prototype.createFieldVectors=function(){for(var e={},t=Object.keys(this.fieldTermFrequencies),r=t.length,n=Object.create(null),i=0;i<r;i++){for(var s=I.FieldRef.fromString(t[i]),a=s.fieldName,o=this.fieldLengths[s],l=new I.Vector,u=this.fieldTermFrequencies[s],c=Object.keys(u),h=c.length,d=this._fields[a].boost||1,p=this._documents[s.docRef].boost||1,f=0;f<h;f++){var m,y,g,v=c[f],x=u[v],w=this.invertedIndex[v]._index;void 0===n[v]?(m=I.idf(this.invertedIndex[v],this.documentCount),n[v]=m):m=n[v],y=m*((this._k1+1)*x)/(this._k1*(1-this._b+this._b*(o/this.averageFieldLength[a]))+x),y*=d,y*=p,g=Math.round(1e3*y)/1e3,l.insert(w,g)}e[s]=l}this.fieldVectors=e},I.Builder.prototype.createTokenSet=function(){this.tokenSet=I.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},I.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new I.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},I.Builder.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},(I.MatchData=function(e,t,r){for(var n=Object.create(null),i=Object.keys(r||{}),s=0;s<i.length;s++){var a=i[s];n[a]=r[a].slice()}this.metadata=Object.create(null),void 0!==e&&(this.metadata[e]=Object.create(null),this.metadata[e][t]=n)}).prototype.combine=function(e){for(var t=Object.keys(e.metadata),r=0;r<t.length;r++){var n=t[r],i=Object.keys(e.metadata[n]);null==this.metadata[n]&&(this.metadata[n]=Object.create(null));for(var s=0;s<i.length;s++){var a=i[s],o=Object.keys(e.metadata[n][a]);null==this.metadata[n][a]&&(this.metadata[n][a]=Object.create(null));for(var l=0;l<o.length;l++){var u=o[l];null==this.metadata[n][a][u]?this.metadata[n][a][u]=e.metadata[n][a][u]:this.metadata[n][a][u]=this.metadata[n][a][u].concat(e.metadata[n][a][u])}}}},I.MatchData.prototype.add=function(e,t,r){if(!(e in this.metadata))return this.metadata[e]=Object.create(null),void(this.metadata[e][t]=r);if(t in this.metadata[e])for(var n=Object.keys(r),i=0;i<n.length;i++){var s=n[i];s in this.metadata[e][t]?this.metadata[e][t][s]=this.metadata[e][t][s].concat(r[s]):this.metadata[e][t][s]=r[s]}else this.metadata[e][t]=r},(I.Query=function(e){this.clauses=[],this.allFields=e}).wildcard=new String("*"),I.Query.wildcard.NONE=0,I.Query.wildcard.LEADING=1,I.Query.wildcard.TRAILING=2,I.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},I.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),"wildcard"in e||(e.wildcard=I.Query.wildcard.NONE),e.wildcard&I.Query.wildcard.LEADING&&e.term.charAt(0)!=I.Query.wildcard&&(e.term="*"+e.term),e.wildcard&I.Query.wildcard.TRAILING&&e.term.slice(-1)!=I.Query.wildcard&&(e.term=e.term+"*"),"presence"in e||(e.presence=I.Query.presence.OPTIONAL),this.clauses.push(e),this},I.Query.prototype.isNegated=function(){for(var e=0;e<this.clauses.length;e++)if(this.clauses[e].presence!=I.Query.presence.PROHIBITED)return!1;return!0},I.Query.prototype.term=function(e,t){if(Array.isArray(e))return e.forEach((function(e){this.term(e,I.utils.clone(t))}),this),this;var r=t||{};return r.term=e.toString(),this.clause(r),this},(I.QueryParseError=function(e,t,r){this.name="QueryParseError",this.message=e,this.start=t,this.end=r}).prototype=new Error,(I.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]}).prototype.run=function(){for(var e=I.QueryLexer.lexText;e;)e=e(this)},I.QueryLexer.prototype.sliceString=function(){for(var e=[],t=this.start,r=this.pos,n=0;n<this.escapeCharPositions.length;n++)r=this.escapeCharPositions[n],e.push(this.str.slice(t,r)),t=r+1;return e.push(this.str.slice(t,this.pos)),this.escapeCharPositions.length=0,e.join("")},I.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},I.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},I.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return I.QueryLexer.EOS;var e=this.str.charAt(this.pos);return this.pos+=1,e},I.QueryLexer.prototype.width=function(){return this.pos-this.start},I.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},I.QueryLexer.prototype.backup=function(){this.pos-=1},I.QueryLexer.prototype.acceptDigitRun=function(){var e,t;do{t=(e=this.next()).charCodeAt(0)}while(t>47&&t<58);e!=I.QueryLexer.EOS&&this.backup()},I.QueryLexer.prototype.more=function(){return this.pos<this.length},I.QueryLexer.EOS="EOS",I.QueryLexer.FIELD="FIELD",I.QueryLexer.TERM="TERM",I.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",I.QueryLexer.BOOST="BOOST",I.QueryLexer.PRESENCE="PRESENCE",I.QueryLexer.lexField=function(e){return e.backup(),e.emit(I.QueryLexer.FIELD),e.ignore(),I.QueryLexer.lexText},I.QueryLexer.lexTerm=function(e){if(e.width()>1&&(e.backup(),e.emit(I.QueryLexer.TERM)),e.ignore(),e.more())return I.QueryLexer.lexText},I.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(I.QueryLexer.EDIT_DISTANCE),I.QueryLexer.lexText},I.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(I.QueryLexer.BOOST),I.QueryLexer.lexText},I.QueryLexer.lexEOS=function(e){e.width()>0&&e.emit(I.QueryLexer.TERM)},I.QueryLexer.termSeparator=I.tokenizer.separator,I.QueryLexer.lexText=function(e){for(;;){var t=e.next();if(t==I.QueryLexer.EOS)return I.QueryLexer.lexEOS;if(92!=t.charCodeAt(0)){if(":"==t)return I.QueryLexer.lexField;if("~"==t)return e.backup(),e.width()>0&&e.emit(I.QueryLexer.TERM),I.QueryLexer.lexEditDistance;if("^"==t)return e.backup(),e.width()>0&&e.emit(I.QueryLexer.TERM),I.QueryLexer.lexBoost;if("+"==t&&1===e.width())return e.emit(I.QueryLexer.PRESENCE),I.QueryLexer.lexText;if("-"==t&&1===e.width())return e.emit(I.QueryLexer.PRESENCE),I.QueryLexer.lexText;if(t.match(I.QueryLexer.termSeparator))return I.QueryLexer.lexTerm}else e.escapeCharacter()}},(I.QueryParser=function(e,t){this.lexer=new I.QueryLexer(e),this.query=t,this.currentClause={},this.lexemeIdx=0}).prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var e=I.QueryParser.parseClause;e;)e=e(this);return this.query},I.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},I.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme();return this.lexemeIdx+=1,e},I.QueryParser.prototype.nextClause=function(){var e=this.currentClause;this.query.clause(e),this.currentClause={}},I.QueryParser.parseClause=function(e){var t=e.peekLexeme();if(null!=t)switch(t.type){case I.QueryLexer.PRESENCE:return I.QueryParser.parsePresence;case I.QueryLexer.FIELD:return I.QueryParser.parseField;case I.QueryLexer.TERM:return I.QueryParser.parseTerm;default:var r="expected either a field or a term, found "+t.type;throw t.str.length>=1&&(r+=" with value '"+t.str+"'"),new I.QueryParseError(r,t.start,t.end)}},I.QueryParser.parsePresence=function(e){var t=e.consumeLexeme();if(null!=t){switch(t.str){case"-":e.currentClause.presence=I.Query.presence.PROHIBITED;break;case"+":e.currentClause.presence=I.Query.presence.REQUIRED;break;default:var r="unrecognised presence operator'"+t.str+"'";throw new I.QueryParseError(r,t.start,t.end)}var n=e.peekLexeme();if(null==n)throw new I.QueryParseError(r="expecting term or field, found nothing",t.start,t.end);switch(n.type){case I.QueryLexer.FIELD:return I.QueryParser.parseField;case I.QueryLexer.TERM:return I.QueryParser.parseTerm;default:r="expecting term or field, found '"+n.type+"'";throw new I.QueryParseError(r,n.start,n.end)}}},I.QueryParser.parseField=function(e){var t=e.consumeLexeme();if(null!=t){if(-1==e.query.allFields.indexOf(t.str)){var r=e.query.allFields.map((function(e){return"'"+e+"'"})).join(", "),n="unrecognised field '"+t.str+"', possible fields: "+r;throw new I.QueryParseError(n,t.start,t.end)}e.currentClause.fields=[t.str];var i=e.peekLexeme();if(null==i)throw new I.QueryParseError(n="expecting term, found nothing",t.start,t.end);if(i.type===I.QueryLexer.TERM)return I.QueryParser.parseTerm;n="expecting term, found '"+i.type+"'";throw new I.QueryParseError(n,i.start,i.end)}},I.QueryParser.parseTerm=function(e){var t=e.consumeLexeme();if(null!=t){e.currentClause.term=t.str.toLowerCase(),-1!=t.str.indexOf("*")&&(e.currentClause.usePipeline=!1);var r=e.peekLexeme();if(null!=r)switch(r.type){case I.QueryLexer.TERM:return e.nextClause(),I.QueryParser.parseTerm;case I.QueryLexer.FIELD:return e.nextClause(),I.QueryParser.parseField;case I.QueryLexer.EDIT_DISTANCE:return I.QueryParser.parseEditDistance;case I.QueryLexer.BOOST:return I.QueryParser.parseBoost;case I.QueryLexer.PRESENCE:return e.nextClause(),I.QueryParser.parsePresence;default:var n="Unexpected lexeme type '"+r.type+"'";throw new I.QueryParseError(n,r.start,r.end)}else e.nextClause()}},I.QueryParser.parseEditDistance=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r))throw new I.QueryParseError(i="edit distance must be numeric",t.start,t.end);e.currentClause.editDistance=r;var n=e.peekLexeme();if(null!=n)switch(n.type){case I.QueryLexer.TERM:return e.nextClause(),I.QueryParser.parseTerm;case I.QueryLexer.FIELD:return e.nextClause(),I.QueryParser.parseField;case I.QueryLexer.EDIT_DISTANCE:return I.QueryParser.parseEditDistance;case I.QueryLexer.BOOST:return I.QueryParser.parseBoost;case I.QueryLexer.PRESENCE:return e.nextClause(),I.QueryParser.parsePresence;default:var i="Unexpected lexeme type '"+n.type+"'";throw new I.QueryParseError(i,n.start,n.end)}else e.nextClause()}},I.QueryParser.parseBoost=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r))throw new I.QueryParseError(i="boost must be numeric",t.start,t.end);e.currentClause.boost=r;var n=e.peekLexeme();if(null!=n)switch(n.type){case I.QueryLexer.TERM:return e.nextClause(),I.QueryParser.parseTerm;case I.QueryLexer.FIELD:return e.nextClause(),I.QueryParser.parseField;case I.QueryLexer.EDIT_DISTANCE:return I.QueryParser.parseEditDistance;case I.QueryLexer.BOOST:return I.QueryParser.parseBoost;case I.QueryLexer.PRESENCE:return e.nextClause(),I.QueryParser.parsePresence;default:var i="Unexpected lexeme type '"+n.type+"'";throw new I.QueryParseError(i,n.start,n.end)}else e.nextClause()}},void 0===(i="function"==typeof(n=function(){return I})?n.call(t,r,t,e):n)||(e.exports=i)}()},872:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(7294),i=r(5444),s=r(6125),a=r(4942);function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=r(1721),u=r(6047);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var h=function(e){function t(t){var r;return(r=e.call(this,t)||this).getQueryResult=function(e){var t=r.props.lunrData,n=t.LunrIndex.store,i=u.Index.load(t.LunrIndex.index),s=[];try{return s=i.search(e).map((function(e){var t=e.ref;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({slug:t},n[t])})),s||[]}catch(o){return console.error("Something Error: "+o),s}},r.state={queryResultArr:[],isShowResults:!1},r.handleInputChange=r.handleInputChange.bind(o(r)),r.handleInputBlur=r.handleInputBlur.bind(o(r)),r.handleInputFocus=r.handleInputFocus.bind(o(r)),r.getQueryResult=r.getQueryResult.bind(o(r)),r}(0,l.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this,t=(new URLSearchParams(window.location.search.slice(1))||{}).get("q");this.highlightKeyword(t),setTimeout((function(){var t=document.querySelector("#layout .mark-highlight");t&&t.scrollIntoView({behavior:"smooth",block:"end"}),e.forceUpdate()}),100)},r.componentDidUpdate=function(){},r.highlightKeyword=function(e){var t=this;["a","code","li","p","span","h2","h3","h4","h5","strong"].forEach((function(r){var n=!1;if(!n){var i=document.querySelectorAll("#layout .wrapper "+r);Object.values(i).forEach((function(r){if(new RegExp(e,"ig").test(r.innerText))return n=!0,void(r.innerHTML=t.transformContent(r.innerText,e))}))}}))},r.sliceToAheadTarget=function(e,t,r){void 0===e&&(e=""),void 0===t&&(t=""),void 0===r&&(r=15);var n=e.indexOf(t);if(n<=r)return e;var i=n-r,s=e.length-i;return"..."+e.substr(i,s)},r.transformContent=function(e,t){return e.replace(new RegExp(t,"ig"),this.wrapKeywordWithMark(t))},r.wrapKeywordWithMark=function(e){return'<span class="mark-highlight">'+e+"</span>"},r.getContentMainPart=function(e){var t=this.sliceToAheadTarget(e,this.keywords);return this.transformContent(t,this.keywords)},r.handleSearch=function(e){var t;t=e?this.getQueryResult(e):[],this.keywords=e,this.setState({queryResultArr:t,isShowResults:t.length>0})},r.handleInputChange=function(e){var t=e.target.value;this.handleSearch(t)},r.handleInputBlur=function(){var e=this;setTimeout((function(){e.setState({queryResultArr:[],isShowResults:!1})}),100)},r.handleInputFocus=function(){this.handleSearch(this.keywords)},r.render=function(){var e=this;return n.createElement("div",{className:"search-area"},n.createElement("input",{className:"search-bar",placeholder:"搜索精彩内容",value:this.keywords||"",onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onChange:this.handleInputChange}),n.createElement("div",{className:"search-panel",style:{display:this.state.isShowResults?"block":"none"}},this.state.isShowResults?this.state.queryResultArr.map((function(t,r){var s=t.slug.replace("/blogs",""),a="优质网站同好者周刊（第 "+s.replace(/\//gi,"").split("-")[1]+" 期）- 倾城之链",o=e.getContentMainPart(t.content);return n.createElement(i.Link,{className:"jump-link",to:s+"?q="+e.keywords,key:r},n.createElement("li",{className:"item"},n.createElement("p",{className:"title"},a),n.createElement("p",{className:"desc",dangerouslySetInnerHTML:{__html:o}})))})):""))},t}(n.Component);h.defaultProps={lunrData:[]};var d=function(e){var t=e.siteTitle,a=(0,i.useStaticQuery)("428988115");return n.createElement("header",{className:"header"},n.createElement(i.Link,{className:"header-link",to:"/"},n.createElement(s.S,{src:"../images/logo.png",quality:95,className:"logo",formats:["auto","webp","avif"],alt:t,__imageData:r(5917)}),n.createElement("h1",{className:"title"},t)),n.createElement("nav",{className:"navbar"},n.createElement(i.Link,{className:"link",to:"https://nicelinks.site//explore/skill?sort=hottest"},"技术客栈"),n.createElement(i.Link,{className:"link",to:"https://nicelinks.site/explore/resource?sort=hottest"},"资源之家"),n.createElement(i.Link,{className:"link",to:"https://nicelinks.site/explore/life?sort=hottest"},"写意人生"),n.createElement(i.Link,{className:"link",to:"https://nicelinks.site/explore/info?sort=hottest"},"悠然宜想亭")),n.createElement("div",{className:"secondary"},n.createElement(h,{lunrData:a})))};d.defaultProps={siteTitle:""};var p=d,f=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={isExpandMenu:!1},r.handleToggleButton=r.handleToggleButton.bind(o(r)),r}(0,l.Z)(t,e);var a=t.prototype;return a.handleToggleButton=function(){this.setState({isExpandMenu:!this.state.isExpandMenu});var e=document.getElementById("layout");e.className=e.className.includes("menu-expand")?"":"menu-expand"},a.render=function(){return n.createElement("header",{className:"mheader"},n.createElement(i.Link,{className:"header-link",to:"/"},n.createElement(s.S,{src:"../images/logo.png",quality:95,className:"logo",formats:["auto","webp","avif"],alt:this.props.siteTitle,__imageData:r(5917)}),n.createElement("h1",{className:"title"},this.props.siteTitle)),n.createElement("div",{className:"secondary"},n.createElement("button",{className:"toggler-menu",onClick:this.handleToggleButton},this.state.isExpandMenu?n.createElement("span",{className:"gg-close"}):n.createElement("span",{className:"gg-menu-right"}))),n.createElement("div",{className:"side-nav"},n.createElement("strong",{className:"submenu-title"},"友情链接"),n.createElement("ul",{className:"friends"},n.createElement(i.Link,{className:"link",to:"https://nicelinks.site/"},"倾城之链"),n.createElement(i.Link,{className:"link",to:"https://read.lovejade.cn/"},"曼妙句子"),n.createElement(i.Link,{className:"link",to:"https://www.jeffjade.com/"},"晚晴幽草轩"),n.createElement(i.Link,{className:"link",to:"https://quickapp.lovejade.cn/"},"静轩之别苑"),n.createElement(i.Link,{className:"link",to:"https://forum.lovejade.cn/"},"悠然宜想亭"))))},t}(n.Component);f.defaultProps={siteTitle:""};var m=f,y=function(e){var t=e.siteTitle;return n.createElement("footer",{className:"footer"},n.createElement("div",{className:"friends"},n.createElement("strong",{className:"submenu-title"},"友情链接："),n.createElement(i.Link,{className:"link",to:"https://nicelinks.site/"},"倾城之链"),n.createElement(i.Link,{className:"link",to:"https://read.lovejade.cn/"},"曼妙句子"),n.createElement(i.Link,{className:"link",to:"https://www.jeffjade.com/"},"晚晴幽草轩"),n.createElement(i.Link,{className:"link",to:"https://quickapp.lovejade.cn/"},"静轩之别苑"),n.createElement(i.Link,{className:"link",to:"https://forum.lovejade.cn/"},"悠然宜想亭")),n.createElement("div",{className:"icp"},n.createElement("p",{className:"item"}," ",n.createElement(i.Link,{className:"link",to:"/"},t)," "," Copyright © ",(new Date).getFullYear()),n.createElement("p",{className:"item"},"基于"," ",n.createElement("a",{className:"link",target:"_blank",rel:"noreferrer",href:"https://nicelinks.site/post/5e0d4f3016bdad16b0f5b20e"},"GatsbyJS")," 而构建"),n.createElement("p",{className:"item"},n.createElement("a",{className:"link beian-link",href:"http://www.beian.miit.gov.cn/"},"粤ICP备17099767号-2"),n.createElement("img",{className:"zero",src:"https://lovejade.oss-cn-shenzhen.aliyuncs.com/zero.gif",alt:"深圳市市场监督管理局企业主体身份公示"}))))};y.defaultProps={siteTitle:""};var g=y,v=function(e){var t,r,s,a=e.children,o=e.title,l=e.pathname,u=(0,i.useStaticQuery)("3649515864");return n.createElement("div",{id:"layout"},n.createElement(p,{siteTitle:(null===(t=u.site.siteMetadata)||void 0===t?void 0:t.title)||""}),n.createElement(m,{siteTitle:(null===(r=u.site.siteMetadata)||void 0===r?void 0:r.title)||""}),n.createElement("section",{className:"wrapper"},n.createElement(i.Link,{className:"article-link",to:l},n.createElement("h1",{className:"article-title"},o)),n.createElement("article",{className:"markdown-body"},a)),n.createElement(g,{siteTitle:(null===(s=u.site.siteMetadata)||void 0===s?void 0:s.title)||""}))}},5917:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/0aedcc6d5f3e64c5ba74da50e133f50a/c0d5f/logo.png","srcSet":"/static/0aedcc6d5f3e64c5ba74da50e133f50a/1096c/logo.png 75w,\\n/static/0aedcc6d5f3e64c5ba74da50e133f50a/01986/logo.png 150w,\\n/static/0aedcc6d5f3e64c5ba74da50e133f50a/c0d5f/logo.png 300w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/static/0aedcc6d5f3e64c5ba74da50e133f50a/26941/logo.avif 75w,\\n/static/0aedcc6d5f3e64c5ba74da50e133f50a/95309/logo.avif 150w,\\n/static/0aedcc6d5f3e64c5ba74da50e133f50a/288e4/logo.avif 300w","type":"image/avif","sizes":"(min-width: 300px) 300px, 100vw"},{"srcSet":"/static/0aedcc6d5f3e64c5ba74da50e133f50a/a18cc/logo.webp 75w,\\n/static/0aedcc6d5f3e64c5ba74da50e133f50a/7ddcc/logo.webp 150w,\\n/static/0aedcc6d5f3e64c5ba74da50e133f50a/dd79f/logo.webp 300w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":300}')}}]);