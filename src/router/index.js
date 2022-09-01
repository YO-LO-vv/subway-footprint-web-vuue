import {
	createRouter,
	createWebHashHistory
} from "vue-router"

const routes = [{ //登陆界面
		path: '/',
		name: 'login',
		component: () => import('@/page/login.vue')
	},

	{ //登陆界面
		path: '/QRcode',
		name: 'QRcode',
		component: () => import('@/page/qrCOde.vue')
	},

	{ //主界面
		path: '/index',
		name: 'index',
		component: () => import('@/page/index.vue'),
		redirect: '/toDo', //默认进入页面
		//二级路由
		children: [{ //代办事项
				path: '/toDo',
				name: 'toDo',
				component: () => import('@/page/toDo.vue'),
			},
			{ //奖池管理
				path: '/poolManage',
				name: 'poolManage',
				component: () => import('@/page/poolManage.vue'),
			},
			{ //商户认证
				path: '/verifyMerc',
				name: 'verifyMerc',
				component: () => import('@/page/verifyMerc.vue'),
			},
			{ //参数修改
				path: '/changePara',
				name: 'changePara',
				component: () => import('@/page/changePara.vue'),
			},
			{ //地铁图更新
				path: '/updateSub',
				name: 'updateSub',
				component: () => import('@/page/updateSub.vue'),
			},
			{ //宝箱概率修改
				path: '/changePro',
				name: 'changePro',
				component: () => import('@/page/changePro.vue'),
			},
			{ //谈积分修改
				path: '/changeCre',
				name: 'changeCre',
				component: () => import('@/page/changeCre.vue'),
			},
			{ //测试界面
				path: '/test',
				name: 'test',
				component: () => import('@/page/test.vue')
			},
		]

	},
]

const router = createRouter({

    history: createWebHashHistory(process.env.BASE_URL),
    routes, 
  })


export default router
