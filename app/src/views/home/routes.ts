const routes: RouteConfig[] = [
  {
    key: 'Home',
    path: '/home',
    windowOptions: {
      title: '视频号助手',
      width: 1200,
      height: 800,
      minWidth: 800,
      minHeight: 600,
    },
    createConfig: {
      // single: false,
      showSidebar: false,
      showTitlebar: false,
      saveWindowBounds: true,
      openDevTools: true,
    },
  },
]

export default routes
