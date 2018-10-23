import showblog from './components/showblogs.vue'
import addblogc from './components/addblogabc.vue'
import singleblog from './components/singleblog.vue'
import editblog from './components/editblog.vue'


export default[
{path:"/show",component:showblog},
{path:"/write",component:addblogc},
{path:"/blog/:id",component:singleblog},
{path:"/editblog/:id",component:editblog}
]