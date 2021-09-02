# 自定义Hook
State HOOK: useState
Effect HOOK: useEffect
自定义Hook:将一些常用的，跨越多个组件的HOOK功能，抽离出去形成一个函数，该函数就是自定义HOOK
由于其内部需要使用HOOK功能，所以它本身也需要按照HOOK规则实现：
1. 函数名必须以use开头
2. 调用自定义HOOK函数时，应该放到顶层
例如：
1. 很多组件都需要在第一次加载完成之后，获取所有学生的数据
2. 很多组件都需要在第一次加赞完成后，启动一个计时器，然后在组件销毁时卸载

> 使用hook的时候，如果没有按照hook的规则进行，eslint的一个插件会报出警告，eslint-plugin-react-hooks插件
npmjs网站搜eslint-plugin-react-hooks规则