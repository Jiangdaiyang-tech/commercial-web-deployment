@echo off
chcp 65001
echo.
echo ========================================
echo     英思科研网站 GitHub 部署脚本
echo ========================================
echo.

:: 检查Git是否已安装
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [错误] 未检测到Git，请先安装Git
    echo 下载地址: https://git-scm.com/download/win
    pause
    exit /b 1
)

:: 初始化Git仓库（如果还没有）
if not exist .git (
    echo [步骤 1/6] 初始化Git仓库...
    git init
    echo Git仓库初始化完成
    echo.
) else (
    echo [步骤 1/6] Git仓库已存在，跳过初始化
    echo.
)

:: 添加所有文件
echo [步骤 2/6] 添加项目文件...
git add .
echo 文件添加完成
echo.

:: 提交更改
echo [步骤 3/6] 提交更改...
git commit -m "英思科研网站完整版本 - %date% %time%"
if %errorlevel% neq 0 (
    echo [警告] 没有新的更改需要提交，或提交失败
) else (
    echo 提交完成
)
echo.

:: 添加远程仓库
echo [步骤 4/6] 配置远程仓库...
git remote remove origin 2>nul
git remote add origin https://github.com/Jiangdaiyang-tech/commercial-web-deployment.git
echo 远程仓库配置完成
echo.

:: 设置主分支
echo [步骤 5/6] 设置主分支...
git branch -M main
echo 主分支设置完成
echo.

:: 推送到GitHub
echo [步骤 6/6] 推送到GitHub仓库...
echo 注意：首次推送时可能需要输入GitHub用户名和密码/Token
echo.
git push -u origin main --force
if %errorlevel% eq 0 (
    echo.
    echo ========================================
    echo          部署成功完成！
    echo ========================================
    echo.
    echo 网站已成功上传到GitHub仓库：
    echo https://github.com/Jiangdaiyang-tech/commercial-web-deployment
    echo.
    echo 如需启用GitHub Pages：
    echo 1. 访问仓库的Settings页面
    echo 2. 滚动到Pages部分
    echo 3. 在Source中选择"Deploy from a branch"
    echo 4. 选择main分支和根目录
    echo 5. 点击Save
    echo.
    echo 网站将在以下地址访问：
    echo https://jiangdaiyang-tech.github.io/commercial-web-deployment/
    echo.
) else (
    echo.
    echo [错误] 推送失败，可能的原因：
    echo 1. 网络连接问题
    echo 2. 需要GitHub认证（用户名/密码或Token）
    echo 3. 仓库权限问题
    echo.
    echo 解决方案：
    echo 1. 检查网络连接
    echo 2. 确保GitHub仓库存在且有写入权限
    echo 3. 配置Git用户信息：
    echo    git config --global user.name "您的用户名"
    echo    git config --global user.email "您的邮箱"
    echo.
)

echo 按任意键退出...
pause >nul
