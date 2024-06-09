"use strict";(self.webpackChunkdosimpact_blog=self.webpackChunkdosimpact_blog||[]).push([[3942],{3905:(e,o,t)=>{t.d(o,{Zo:()=>l,kt:()=>h});var r=t(67294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function n(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,r,a=function(e,o){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var o=r.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},l=function(e){var o=p(e.components);return r.createElement(c.Provider,{value:o},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},f=r.forwardRef((function(e,o){var t=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,h=u["".concat(c,".").concat(f)]||u[f]||k[f]||n;return t?r.createElement(h,s(s({ref:o},l),{},{components:t})):r.createElement(h,s({ref:o},l))}));function h(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var n=t.length,s=new Array(n);s[0]=f;var i={};for(var c in o)hasOwnProperty.call(o,c)&&(i[c]=o[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<n;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},62439:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const n={sidebar_position:4},s="\ucd08\ubcf4\uc790\ub97c \uc704\ud55c kafka-3 CLI",i={unversionedId:"g-be/kafka/ka004",id:"g-be/kafka/ka004",title:"\ucd08\ubcf4\uc790\ub97c \uc704\ud55c kafka-3 CLI",description:"https://github.com/conduktor/kafka-beginners-course",source:"@site/docs/g-be/3-kafka/ka004.md",sourceDirName:"g-be/3-kafka",slug:"/g-be/kafka/ka004",permalink:"/docs/g-be/kafka/ka004",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/g-be/3-kafka/ka004.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"backEnd",previous:{title:"kafka install with docker",permalink:"/docs/g-be/kafka/ka003"},next:{title:"kafka example with nestjs, python",permalink:"/docs/g-be/kafka/ka005"}},c={},p=[{value:"CLI",id:"cli",level:2},{value:"CLI",id:"cli-1",level:2},{value:"CLI",id:"cli-2",level:2},{value:"CLI",id:"cli-3",level:2},{value:"CLI",id:"cli-4",level:2},{value:"CLI",id:"cli-5",level:2}],l={toc:p},u="wrapper";function k(e){let{components:o,...t}=e;return(0,a.kt)(u,(0,r.Z)({},l,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ucd08\ubcf4\uc790\ub97c-\uc704\ud55c-kafka-3-cli"},"\ucd08\ubcf4\uc790\ub97c \uc704\ud55c kafka-3 CLI"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/conduktor/kafka-beginners-course"},"https://github.com/conduktor/kafka-beginners-course")),(0,a.kt)("h2",{id:"cli"},"CLI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"\nkafka-topics.sh \n\nkafka-topics.sh --bootstrap-server localhost:9092 --list \n\nkafka-topics.sh --bootstrap-server localhost:9092 --topic first_topic --create\n\nkafka-topics.sh --bootstrap-server localhost:9092 --topic second_topic --create --partitions 3\n\nkafka-topics.sh --bootstrap-server localhost:9092 --topic third_topic --create --partitions 3 --replication-factor 2\n\n# Create a topic (working)\nkafka-topics.sh --bootstrap-server localhost:9092 --topic third_topic --create --partitions 3 --replication-factor 1\n\n# List topics\nkafka-topics.sh --bootstrap-server localhost:9092 --list \n\n# Describe a topic\nkafka-topics.sh --bootstrap-server localhost:9092 --topic first_topic --describe\n\n# Delete a topic \nkafka-topics.sh --bootstrap-server localhost:9092 --topic first_topic --delete\n# (only works if delete.topic.enable=true)\n\n")),(0,a.kt)("h2",{id:"cli-1"},"CLI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"\nkafka-topics.sh --bootstrap-server localhost:9092 --topic first_topic --create --partitions 1\n\n# producing\nkafka-console-producer.sh --bootstrap-server localhost:9092 --topic first_topic \n> Hello World\n>My name is Conduktor\n>I love Kafka\n>^C  (<- Ctrl + C is used to exit the producer)\n\n\n# producing with properties\nkafka-console-producer.sh --bootstrap-server localhost:9092 --topic first_topic --producer-property acks=all\n> some message that is acked\n> just for fun\n> fun learning!\n\n\n# producing to a non existing topic\nkafka-console-producer.sh --bootstrap-server localhost:9092 --topic new_topic\n> hello world!\n\n# our new topic only has 1 partition\nkafka-topics.sh --bootstrap-server localhost:9092 --list\nkafka-topics.sh --bootstrap-server localhost:9092 --topic new_topic --describe\n\n\n# edit config/server.properties or config/kraft/server.properties\n# num.partitions=3\n\n# produce against a non existing topic again\nkafka-console-producer.sh --bootstrap-server localhost:9092 --topic new_topic_2\nhello again!\n\n# this time our topic has 3 partitions\nkafka-topics.sh --bootstrap-server localhost:9092 --list\nkafka-topics.sh --bootstrap-server localhost:9092 --topic new_topic_2 --describe\n\n# overall, please create topics with the appropriate number of partitions before producing to them!\n\n\n# produce with keys\nkafka-console-producer.sh --bootstrap-server localhost:9092 --topic first_topic --property parse.key=true --property key.separator=:\n>example key:example value\n>name:Stephane\n")),(0,a.kt)("h2",{id:"cli-2"},"CLI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# create a topic with 3 partitions\nkafka-topics.sh --bootstrap-server localhost:9092 --topic second_topic --create --partitions 3\n\n# consuming\nkafka-console-consumer.sh --bootstrap-server localhost:9092 --topic second_topic\n\n# other terminal\nkafka-console-producer.sh --bootstrap-server localhost:9092 --producer-property partitioner.class=org.apache.kafka.clients.producer.RoundRobinPartitioner --topic second_topic\n\n# consuming from beginning\nkafka-console-consumer.sh --bootstrap-server localhost:9092 --topic second_topic --from-beginning\n\n# display key, values and timestamp in consumer\nkafka-console-consumer.sh --bootstrap-server localhost:9092 --topic second_topic --formatter kafka.tools.DefaultMessageFormatter --property print.timestamp=true --property print.key=true --property print.value=true --property print.partition=true --from-beginning\n")),(0,a.kt)("h2",{id:"cli-3"},"CLI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# create a topic with 3 partitions\nkafka-topics.sh --bootstrap-server localhost:9092 --topic third_topic --create --partitions 3\n\n# start one consumer\nkafka-console-consumer.sh --bootstrap-server localhost:9092 --topic third_topic --group my-first-application\n\n# start one producer and start producing\nkafka-console-producer.sh --bootstrap-server localhost:9092 --producer-property partitioner.class=org.apache.kafka.clients.producer.RoundRobinPartitioner --topic third_topic\n\n# start another consumer part of the same group. See messages being spread\nkafka-console-consumer.sh --bootstrap-server localhost:9092 --topic third_topic --group my-first-application\n\n# start another consumer part of a different group from beginning\nkafka-console-consumer.sh --bootstrap-server localhost:9092 --topic third_topic --group my-second-application --from-beginning\n")),(0,a.kt)("h2",{id:"cli-4"},"CLI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"\n# documentation for the command \nkafka-consumer-groups.sh \n\n# list consumer groups\nkafka-consumer-groups.sh --bootstrap-server localhost:9092 --list\n \n# describe one specific group\nkafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group my-second-application\n\n# describe another group\nkafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group my-first-application\n\n# start a consumer\nkafka-console-consumer.sh --bootstrap-server localhost:9092 --topic first_topic --group my-first-application\n\n# describe the group now\nkafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group my-first-application\n\n# describe a console consumer group (change the end number)\nkafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group console-consumer-10592\n\n# start a console consumer\nkafka-console-consumer.sh --bootstrap-server localhost:9092 --topic first_topic --group my-first-application\n\n# describe the group again\nkafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group my-first-application\n")),(0,a.kt)("h2",{id:"cli-5"},"CLI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"\n# look at the documentation again\nkafka-consumer-groups.sh\n\n# describe the consumer group\nkafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group my-first-application\n\n# Dry Run: reset the offsets to the beginning of each partition\nkafka-consumer-groups.sh --bootstrap-server localhost:9092 --group my-first-application --reset-offsets --to-earliest --topic third_topic --dry-run\n\n# execute flag is needed\nkafka-consumer-groups.sh --bootstrap-server localhost:9092 --group my-first-application --reset-offsets --to-earliest --topic third_topic --execute\n\n# describe the consumer group again\nkafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group my-first-application\n\n# consume from where the offsets have been reset\nkafka-console-consumer.sh --bootstrap-server localhost:9092 --topic third_topic --group my-first-application\n\n# describe the group again\nkafka-consumer-groups.sh --bootstrap-server localhost:9092 --describe --group my-first-application\n")))}k.isMDXComponent=!0}}]);