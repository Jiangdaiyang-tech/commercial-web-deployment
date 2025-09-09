# 英思科研 - 专业科研服务平台

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://jiangdaiyang-tech.github.io/commercial-web-deployment/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

## 项目简介

英思科研是一个专业的科研服务平台，为研究人员提供全方位的科研支持服务。本网站采用现代化设计，响应式布局，提供云现场、测试服务、模拟计算、数据分析、科研绘图等多项专业服务。

## 🌟 主要特色

- **现代化设计**：采用渐变色彩和动画效果，提供优秀的用户体验
- **响应式布局**：完美适配桌面、平板和移动设备
- **全面服务**：涵盖科研全流程的专业服务
- **交互动画**：使用AOS库实现平滑的滚动动画效果
- **专业内容**：包含学术文章、期刊推荐等专业内容

## 📱 页面结构

### 主要页面
- **首页** (`index.html`) - 平台概览和核心服务展示
- **云现场** (`cloud-scene.html`) - 云端实验室服务
- **测试服务** (`test-service.html`) - 专业测试项目市场
- **模拟计算** (`simulation.html`) - 六大计算服务类别
- **数据分析** (`data-analysis.html`) - 数据处理和分析服务
- **科研绘图** (`research-drawing.html`) - 材料图、构象图、流程图制作
- **英思学术** (`academic.html`) - 学术资源和期刊推荐

### 认证页面
- **登录页面** (`login.html`) - 用户登录界面
- **注册页面** (`register.html`) - 用户注册界面

## 🛠️ 技术栈

### 前端框架
- **HTML5** - 语义化标记
- **CSS3** - 现代样式和动画
- **JavaScript ES6+** - 交互功能
- **Bootstrap 5.3.0** - 响应式框架

### 第三方库
- **Font Awesome 6.0.0** - 图标库
- **AOS 2.3.4** - 滚动动画库
- **Custom CSS** - 专属样式系统

### 设计特色
- **CSS Grid & Flexbox** - 现代布局系统
- **CSS自定义属性** - 主题颜色管理
- **渐变背景** - 视觉层次感
- **毛玻璃效果** - backdrop-filter
- **平滑动画** - transition和transform

## 📁 项目结构

```
英思科研网站设计/
├── index.html                 # 首页
├── cloud-scene.html          # 云现场页面
├── test-service.html         # 测试服务页面
├── simulation.html           # 模拟计算页面
├── data-analysis.html        # 数据分析页面
├── research-drawing.html     # 科研绘图页面
├── academic.html            # 英思学术页面
├── login.html               # 登录页面
├── register.html            # 注册页面
├── css/                     # 样式文件目录
│   ├── style.css           # 主样式文件
│   ├── cloud-scene.css     # 云现场页面样式
│   ├── test-service.css    # 测试服务页面样式
│   ├── simulation.css      # 模拟计算页面样式
│   ├── data-analysis.css   # 数据分析页面样式
│   ├── research-drawing.css # 科研绘图页面样式
│   ├── academic.css        # 英思学术页面样式
│   └── auth.css            # 认证页面样式
├── js/                      # JavaScript文件目录
│   ├── main.js             # 主脚本文件
│   └── auth.js             # 认证页面脚本
├── 网页素材/                 # 图片和资源文件
│   └── 网页素材/
│       ├── 网站图片素材/    # 网站图片
│       └── 网页模板/        # 设计模板
├── deploy-to-github.bat     # GitHub部署脚本
└── README.md               # 项目说明文档
```

## 🚀 快速开始

### 本地运行
1. 克隆项目到本地
```bash
git clone https://github.com/Jiangdaiyang-tech/commercial-web-deployment.git
cd commercial-web-deployment
```

2. 使用本地服务器运行（推荐使用Live Server扩展）
```bash
# 如果安装了Python
python -m http.server 8000

# 如果安装了Node.js
npx serve .
```

3. 在浏览器中访问 `http://localhost:8000`

### GitHub Pages部署
项目已配置为GitHub Pages自动部署：
- 访问地址：https://jiangdaiyang-tech.github.io/commercial-web-deployment/

## 📱 响应式设计

网站采用移动优先的响应式设计：

- **大屏幕** (≥1200px): 完整的多列布局
- **中等屏幕** (992px-1199px): 适配平板横屏
- **小屏幕** (768px-991px): 平板竖屏优化
- **超小屏幕** (<768px): 移动设备优化

## 🎨 设计系统

### 色彩方案
- **主色调**: 蓝色系 (#007bff, #0056b3)
- **辅助色**: 绿色系 (#28a745, #20c997)
- **警告色**: 黄色系 (#ffc107, #e0a800)
- **错误色**: 红色系 (#dc3545, #c82333)

### 字体系统
- **主字体**: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif
- **标题字体**: 较大字号，600-700字重
- **正文字体**: 16px基准，1.5行高

### 动画效果
- **页面载入**: fadeInUp动画
- **鼠标悬停**: 平滑的transform和阴影变化
- **滚动触发**: AOS库实现的视差效果

## 🔧 功能特色

### 交互功能
- **平滑滚动导航**
- **响应式菜单**
- **表单验证**
- **密码强度检测**
- **搜索和筛选**
- **图片懒加载**

### 用户体验
- **加载动画**
- **错误处理**
- **成功反馈**
- **无障碍设计**
- **键盘导航支持**

## 📊 性能优化

- **图片优化**: 合适的格式和尺寸
- **CSS压缩**: 生产环境压缩
- **JavaScript优化**: 事件委托和防抖处理
- **字体优化**: 本地字体回退
- **缓存策略**: 合理的缓存配置

## 🐛 问题反馈

如果您在使用过程中遇到问题，请通过以下方式反馈：

1. 在GitHub Issues中提交问题
2. 发送邮件至项目维护者
3. 在项目讨论区参与讨论

## 📄 许可证

本项目采用MIT许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🤝 贡献指南

欢迎提交Pull Request来改进这个项目：

1. Fork本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

## 👥 团队

- **项目负责人**: [Your Name]
- **设计师**: [Designer Name]
- **开发者**: [Developer Name]

## 📞 联系方式

- **网站**: https://jiangdaiyang-tech.github.io/commercial-web-deployment/
- **邮箱**: contact@yingsitech.com
- **GitHub**: https://github.com/Jiangdaiyang-tech

---

⭐ 如果这个项目对您有帮助，请给我们一个星标！
