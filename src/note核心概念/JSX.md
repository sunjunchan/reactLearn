# 使用脚手架搭建工程
官方：create-react-app
第三方：next.js,umijs
凡事使用jsx的文件，必须导入react(jsx是js的扩展语法)

# 开发工具
emmet配置：在js中快捷方式书写 :li*10、
文件-》首选项-》设置-》搜索emmet 在setting.json中编辑
"emmet.includeLanguages": {
        "wxml": "html",
        "javascript": "javascriptreact"
    }

```json
"javascript": "javascriptreact"
```

# VSCode插件安装
ESLint: 代码风格检查
ES7 React/Redux/GraphQL/React-Native snippets:快速代码编写

# Chrome 插件安装
React Developer Tools

# JSX
# 什么是JSX
- Facebook起草的JS扩展语法
- 本质是一个JS对象，会被babel编译，最终会被转换为React.createElement
- 每个JSX表达式，有且仅有一个根节点
- React.Fragment
- 每个JSX元素必须结束（XML规范）
# 在JSX中嵌套入表达式
- 注释使用js注释
  - 普通对象不可以作为表达式
  - 可以放置React元素对象
- 将表达式作为内容的一部分
- null和undefined,false不会显示
- 将表达式作为元素属性
- 属性使用小驼峰命名法
- 防止注入攻击
  - 自动编码
  - dangerouslySetInnerHTML
# 元素的不可变性
- 虽然JSX元素是一个对象，但是该对象中的所有属性不可更改
- Object.freeze()冻结对象
- 如果确实需要更改元素属性，需要重新创建JSX元素
{"{"}