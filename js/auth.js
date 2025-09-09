// 认证页面JavaScript功能
document.addEventListener('DOMContentLoaded', function() {
    // 初始化AOS动画
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

    // 密码显示/隐藏功能
    const togglePassword = (buttonId, inputId) => {
        const button = document.getElementById(buttonId);
        const input = document.getElementById(inputId);
        
        if (button && input) {
            button.addEventListener('click', function() {
                const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                input.setAttribute('type', type);
                
                const icon = this.querySelector('i');
                if (type === 'password') {
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                } else {
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                }
            });
        }
    };

    // 应用密码切换功能
    togglePassword('togglePassword', 'loginPassword');
    togglePassword('togglePassword1', 'password');
    togglePassword('togglePassword2', 'confirmPassword');

    // 密码强度检测
    const passwordInput = document.getElementById('password');
    const strengthFill = document.getElementById('strengthFill');
    const strengthText = document.getElementById('strengthText');
    
    if (passwordInput && strengthFill && strengthText) {
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            const strength = calculatePasswordStrength(password);
            updatePasswordStrength(strength, strengthFill, strengthText);
        });
    }

    // 表单验证
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
        
        // 实时验证
        const confirmPasswordInput = document.getElementById('confirmPassword');
        if (confirmPasswordInput && passwordInput) {
            confirmPasswordInput.addEventListener('input', function() {
                validatePasswordMatch(passwordInput.value, this.value, this);
            });
        }

        // 邮箱格式验证
        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.addEventListener('blur', function() {
                validateEmail(this.value, this);
            });
        }

        // 手机号验证
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function() {
                // 只允许输入数字
                this.value = this.value.replace(/\D/g, '');
                if (this.value.length > 11) {
                    this.value = this.value.slice(0, 11);
                }
            });

            phoneInput.addEventListener('blur', function() {
                validatePhone(this.value, this);
            });
        }
    }
});

// 密码强度计算
function calculatePasswordStrength(password) {
    let strength = 0;
    
    if (password.length >= 8) strength += 1;
    if (password.match(/[a-z]+/)) strength += 1;
    if (password.match(/[A-Z]+/)) strength += 1;
    if (password.match(/[0-9]+/)) strength += 1;
    if (password.match(/[$@#&!]+/)) strength += 1;
    
    return strength;
}

// 更新密码强度显示
function updatePasswordStrength(strength, fillElement, textElement) {
    const percentage = (strength / 5) * 100;
    fillElement.style.width = `${percentage}%`;
    
    const strengthTexts = ['很弱', '弱', '一般', '强', '很强'];
    const strengthColors = ['#dc3545', '#fd7e14', '#ffc107', '#20c997', '#28a745'];
    
    if (strength > 0) {
        textElement.textContent = `密码强度：${strengthTexts[strength - 1]}`;
        fillElement.style.background = strengthColors[strength - 1];
    } else {
        textElement.textContent = '密码强度：很弱';
        fillElement.style.background = '#dc3545';
    }
}

// 邮箱格式验证
function validateEmail(email, inputElement) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    
    if (email && !isValid) {
        showFieldError(inputElement, '请输入有效的邮箱地址');
    } else if (email && isValid) {
        showFieldSuccess(inputElement, '邮箱格式正确');
    } else {
        clearFieldValidation(inputElement);
    }
    
    return isValid;
}

// 手机号验证
function validatePhone(phone, inputElement) {
    const phoneRegex = /^1[3-9]\d{9}$/;
    const isValid = phoneRegex.test(phone);
    
    if (phone && !isValid) {
        showFieldError(inputElement, '请输入有效的手机号码');
    } else if (phone && isValid) {
        showFieldSuccess(inputElement, '手机号格式正确');
    } else {
        clearFieldValidation(inputElement);
    }
    
    return isValid;
}

// 密码匹配验证
function validatePasswordMatch(password, confirmPassword, inputElement) {
    if (confirmPassword && password !== confirmPassword) {
        showFieldError(inputElement, '两次输入的密码不一致');
        return false;
    } else if (confirmPassword && password === confirmPassword) {
        showFieldSuccess(inputElement, '密码匹配');
        return true;
    } else {
        clearFieldValidation(inputElement);
        return true;
    }
}

// 显示字段错误
function showFieldError(inputElement, message) {
    inputElement.classList.remove('is-valid');
    inputElement.classList.add('is-invalid');
    
    let feedback = inputElement.parentElement.parentElement.querySelector('.invalid-feedback');
    if (!feedback) {
        feedback = document.createElement('div');
        feedback.className = 'invalid-feedback';
        inputElement.parentElement.parentElement.appendChild(feedback);
    }
    feedback.textContent = message;
    
    // 移除成功反馈
    const validFeedback = inputElement.parentElement.parentElement.querySelector('.valid-feedback');
    if (validFeedback) {
        validFeedback.remove();
    }
}

// 显示字段成功
function showFieldSuccess(inputElement, message) {
    inputElement.classList.remove('is-invalid');
    inputElement.classList.add('is-valid');
    
    let feedback = inputElement.parentElement.parentElement.querySelector('.valid-feedback');
    if (!feedback) {
        feedback = document.createElement('div');
        feedback.className = 'valid-feedback';
        inputElement.parentElement.parentElement.appendChild(feedback);
    }
    feedback.textContent = message;
    
    // 移除错误反馈
    const invalidFeedback = inputElement.parentElement.parentElement.querySelector('.invalid-feedback');
    if (invalidFeedback) {
        invalidFeedback.remove();
    }
}

// 清除字段验证状态
function clearFieldValidation(inputElement) {
    inputElement.classList.remove('is-valid', 'is-invalid');
    
    const validFeedback = inputElement.parentElement.parentElement.querySelector('.valid-feedback');
    const invalidFeedback = inputElement.parentElement.parentElement.querySelector('.invalid-feedback');
    
    if (validFeedback) validFeedback.remove();
    if (invalidFeedback) invalidFeedback.remove();
}

// 处理登录表单提交
function handleLogin(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const loginData = {
        account: formData.get('loginAccount') || document.getElementById('loginAccount').value,
        password: formData.get('loginPassword') || document.getElementById('loginPassword').value,
        remember: document.getElementById('rememberMe').checked
    };

    // 表单验证
    let isValid = true;
    
    if (!loginData.account) {
        showFieldError(document.getElementById('loginAccount'), '请输入邮箱或用户名');
        isValid = false;
    }
    
    if (!loginData.password) {
        showFieldError(document.getElementById('loginPassword'), '请输入密码');
        isValid = false;
    }

    if (!isValid) return;

    // 显示加载状态
    const submitButton = document.getElementById('loginBtn');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>登录中...';
    submitButton.classList.add('btn-loading');
    submitButton.disabled = true;

    // 模拟登录请求
    setTimeout(() => {
        // 重置按钮状态
        submitButton.innerHTML = originalText;
        submitButton.classList.remove('btn-loading');
        submitButton.disabled = false;

        // 模拟登录成功
        showSuccess('登录成功！正在跳转到首页...');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }, 2000);
}

// 处理注册表单提交
function handleRegister(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const registerData = {
        firstName: formData.get('firstName') || document.getElementById('firstName').value,
        lastName: formData.get('lastName') || document.getElementById('lastName').value,
        email: formData.get('email') || document.getElementById('email').value,
        phone: formData.get('phone') || document.getElementById('phone').value,
        password: formData.get('password') || document.getElementById('password').value,
        confirmPassword: formData.get('confirmPassword') || document.getElementById('confirmPassword').value,
        institution: formData.get('institution') || document.getElementById('institution').value,
        researchField: formData.get('researchField') || document.getElementById('researchField').value,
        agreeTerms: document.getElementById('agreeTerms').checked,
        subscribeNews: document.getElementById('subscribeNews').checked
    };

    // 表单验证
    let isValid = true;
    
    if (!registerData.firstName) {
        showFieldError(document.getElementById('firstName'), '请输入姓氏');
        isValid = false;
    }
    
    if (!registerData.lastName) {
        showFieldError(document.getElementById('lastName'), '请输入名字');
        isValid = false;
    }
    
    if (!registerData.email || !validateEmail(registerData.email, document.getElementById('email'))) {
        if (!document.getElementById('email').classList.contains('is-invalid')) {
            showFieldError(document.getElementById('email'), '请输入有效的邮箱地址');
        }
        isValid = false;
    }
    
    if (!registerData.phone || !validatePhone(registerData.phone, document.getElementById('phone'))) {
        if (!document.getElementById('phone').classList.contains('is-invalid')) {
            showFieldError(document.getElementById('phone'), '请输入有效的手机号码');
        }
        isValid = false;
    }
    
    if (!registerData.password || calculatePasswordStrength(registerData.password) < 2) {
        showFieldError(document.getElementById('password'), '密码强度太弱，请设置更复杂的密码');
        isValid = false;
    }
    
    if (registerData.password !== registerData.confirmPassword) {
        showFieldError(document.getElementById('confirmPassword'), '两次输入的密码不一致');
        isValid = false;
    }
    
    if (!registerData.researchField) {
        showFieldError(document.getElementById('researchField'), '请选择您的研究领域');
        isValid = false;
    }
    
    if (!registerData.agreeTerms) {
        showError('请阅读并同意服务条款和隐私政策');
        isValid = false;
    }

    if (!isValid) return;

    // 显示加载状态
    const submitButton = document.getElementById('registerBtn');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>注册中...';
    submitButton.classList.add('btn-loading');
    submitButton.disabled = true;

    // 模拟注册请求
    setTimeout(() => {
        // 重置按钮状态
        submitButton.innerHTML = originalText;
        submitButton.classList.remove('btn-loading');
        submitButton.disabled = false;

        // 模拟注册成功
        showSuccess('注册成功！请查收验证邮件，验证后即可正常使用所有功能。');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2500);
    }, 2000);
}

// 显示成功消息
function showSuccess(message) {
    const alert = createAlert('success', message);
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.remove();
    }, 5000);
}

// 显示错误消息
function showError(message) {
    const alert = createAlert('danger', message);
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.remove();
    }, 5000);
}

// 创建警告框
function createAlert(type, message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    alertDiv.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
    alertDiv.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-triangle'} me-2"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // 添加动画
    setTimeout(() => {
        alertDiv.classList.add('show');
    }, 100);
    
    return alertDiv;
}

// 平滑滚动到错误字段
function scrollToError() {
    const firstError = document.querySelector('.is-invalid');
    if (firstError) {
        firstError.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        firstError.focus();
    }
}

// 字段实时验证辅助函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 添加实时验证事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 为所有必填字段添加实时验证
    const requiredFields = document.querySelectorAll('input[required], select[required]');
    
    requiredFields.forEach(field => {
        // 失去焦点时验证
        field.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                showFieldError(this, '此字段为必填项');
            } else {
                clearFieldValidation(this);
            }
        });
        
        // 输入时清除错误状态
        field.addEventListener('input', function() {
            if (this.classList.contains('is-invalid') && this.value.trim() !== '') {
                clearFieldValidation(this);
            }
        });
    });
});

// 社交登录处理
document.addEventListener('click', function(event) {
    if (event.target.closest('.social-login .btn')) {
        const button = event.target.closest('.btn');
        const provider = button.textContent.includes('Google') ? 'Google' : 'Microsoft';
        
        showSuccess(`正在跳转到 ${provider} 登录页面...`);
        
        // 模拟社交登录跳转
        setTimeout(() => {
            // 这里应该跳转到实际的OAuth URL
            console.log(`Redirect to ${provider} OAuth`);
        }, 1500);
    }
});

// 键盘事件处理
document.addEventListener('keydown', function(event) {
    // Enter键提交表单
    if (event.key === 'Enter' && event.target.matches('input')) {
        const form = event.target.closest('form');
        if (form) {
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton && !submitButton.disabled) {
                submitButton.click();
            }
        }
    }
});

// 页面离开前确认
window.addEventListener('beforeunload', function(event) {
    const forms = document.querySelectorAll('form');
    let hasUnsavedChanges = false;
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            if (input.value.trim() !== '' && input.type !== 'checkbox' && input.type !== 'radio') {
                hasUnsavedChanges = true;
            }
        });
    });
    
    if (hasUnsavedChanges) {
        event.preventDefault();
        event.returnValue = '您有未保存的更改，确定要离开此页面吗？';
        return event.returnValue;
    }
});
