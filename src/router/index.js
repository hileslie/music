import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/views/recommend/recommend'
import Singer from '@/views/singer/singer'
import Rank from '@/views/rank/rank'
import Search from '@/views/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: '推荐',
      component: Recommend
    },
    {
      path: '/singer',
      name: '歌手',
      component: Singer
    },
    {
      path: '/rank',
      name: '排行',
      component: Rank
    },
    {
      path: '/search',
      name: '搜索',
      component: Search
    }
  ]
})
