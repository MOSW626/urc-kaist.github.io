# URC-KAIST Website

KAIST University Rover Challenge (URC) 팀의 공식 웹사이트입니다. 이 사이트는 Hugo 정적 사이트 생성기와 Tailwind CSS를 사용하여 구축되었습니다.

## 📋 목차

- [시작하기](#시작하기)
- [프로젝트 구조](#프로젝트-구조)
- [개발 환경 설정](#개발-환경-설정)
- [서버 실행](#서버-실행)
- [콘텐츠 작성 가이드](#콘텐츠-작성-가이드)
- [디자인 시스템](#디자인-시스템)
- [페이지별 작성 방법](#페이지별-작성-방법)
- [배포](#배포)
- [기여 가이드](#기여-가이드)

## 🚀 시작하기

### 필수 요구사항

- **Node.js** (v16 이상)
- **Hugo** (v0.120.0 이상)
- **Git**

### Node.js 설치

```bash
# macOS (Homebrew 사용)
brew install node

# Windows
# https://nodejs.org 에서 다운로드

# Linux
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Hugo 설치

```bash
# macOS (Homebrew 사용)
brew install hugo

# Windows
# https://gohugo.io/installation/windows/ 에서 다운로드

# Linux
sudo apt-get install hugo
```

## 📁 프로젝트 구조

```
urc-kaist.github.io/
├── content/                 # 마크다운 콘텐츠 파일들
│   ├── about.md            # About 페이지
│   ├── members.md          # 팀원 소개
│   ├── rover/              # 로버 관련 페이지들
│   ├── projects/           # 프로젝트 페이지들
│   ├── docs/               # 문서 페이지들
│   ├── gallery/            # 갤러리 페이지
│   └── contact.md          # 연락처 페이지
├── layouts/                # 커스텀 레이아웃 템플릿
│   ├── shortcodes/         # Hugo shortcode들
│   └── _default/           # 기본 템플릿
├── static/                 # 정적 파일들 (이미지, CSS, JS)
│   └── img/                # 이미지 파일들
├── data/                   # 구조화된 데이터 (YAML/JSON)
├── themes/                 # Hugo 테마
│   └── tella/              # 사용 중인 테마
├── hugo.toml              # Hugo 설정 파일
├── tailwind.config.js     # Tailwind CSS 설정
└── package.json           # Node.js 의존성
```

## ⚙️ 개발 환경 설정

1. **저장소 클론**
```bash
git clone https://github.com/your-username/urc-kaist.github.io.git
cd urc-kaist.github.io
```

2. **의존성 설치**
```bash
npm install
```

3. **Git submodule 업데이트 (테마)**
```bash
git submodule update --init --recursive
```

## 🖥️ 서버 실행

### 개발 서버 시작

```bash
# 기본 개발 서버 (포트 1313)
hugo server

# 실시간 리로드와 함께
hugo server --disableFastRender

# 다른 포트로 실행
hugo server --port 8080

# 네트워크 접근 허용
hugo server --bind 0.0.0.0
```

### 빌드

```bash
# 프로덕션 빌드
hugo

# 미리보기 빌드
hugo --environment preview
```

## ✍️ 콘텐츠 작성 가이드

### 마크다운 기본 문법

```markdown
# 제목 1
## 제목 2
### 제목 3

**굵은 글씨**
*기울임체*
~~취소선~~

- 리스트 항목 1
- 리스트 항목 2
  - 중첩 리스트

1. 번호 리스트 1
2. 번호 리스트 2

[링크 텍스트](URL)

![이미지 설명](이미지경로)

> 인용문

`코드`

```코드블록
코드 내용
```
```

### Hugo Front Matter

모든 `.md` 파일의 맨 위에는 YAML 형식의 메타데이터가 필요합니다:

```yaml
+++
title = "페이지 제목"
description = "페이지 설명"
date = "2025-01-01"
draft = false
+++
```

## 🎨 디자인 시스템

### 색상 팔레트

- **Primary Blue**: `#2563eb` (링크, 버튼)
- **Secondary Green**: `#059669` (성공, 진행)
- **Accent Purple**: `#7c3aed` (강조)
- **Gray Scale**: `#f8fafc` ~ `#1e293b` (텍스트, 배경)

### 타이포그래피

- **제목**: `text-4xl md:text-5xl font-bold`
- **부제목**: `text-2xl md:text-3xl font-semibold`
- **본문**: `text-base md:text-lg`
- **작은 텍스트**: `text-sm text-gray-600`

### 컴포넌트 스타일

#### 카드 컴포넌트
```html
<div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
  <!-- 카드 내용 -->
</div>
```

#### 버튼 스타일
```html
<!-- Primary Button -->
<a href="#" class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300">
  버튼 텍스트
</a>

<!-- Secondary Button -->
<a href="#" class="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-300">
  버튼 텍스트
</a>
```

## 📄 페이지별 작성 방법

### 1. About 페이지 (`content/about.md`)

**단순한 마크다운 사용 권장:**

```markdown
+++
title = "About"
description = "About URC-KAIST"
date = "2025-01-01"
+++

# MR² KAIST Rover Team

## About Us

팀 소개 내용...

## Our Mission

미션 내용...

## Quick Links

- [Our Rover](/rover)
- [Team Members](/members)
- [Projects](/projects)
```

### 2. Rover 페이지 (`content/rover/_index.md`)

**복잡한 레이아웃이 필요한 경우 HTML 사용:**

```markdown
+++
title = "Rover"
description = "Our Mars Rover Development"
date = "2025-01-01"
+++

{{< section class="bg-gradient-to-br from-gray-50 to-white py-16" >}}
<div class="container mx-auto px-4">
    <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Mars Rover
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            설명 텍스트...
        </p>
    </div>

    <!-- 카드 섹션 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-2xl shadow-lg p-8">
            <h3 class="text-xl font-bold mb-4">Feature 1</h3>
            <p class="text-gray-600">설명...</p>
        </div>
        <!-- 추가 카드들... -->
    </div>
</div>
{{< /section >}}
```

### 3. Members 페이지 (`content/members.md`)

**데이터 파일과 마크다운 조합:**

1. `data/members.yaml` 파일에 멤버 정보 작성
2. 마크다운에서 데이터 참조

```yaml
# data/members.yaml
leadership:
  - name: "홍길동"
    role: "Team Captain"
    year: "2025"
    image: "/img/members/2025/hong.jpg"
    description: "기계공학과 4학년"
```

```markdown
+++
title = "Members"
description = "Our Team Members"
date = "2025-01-01"
+++

# Our Team

## Leadership Team

{{< section class="py-16" >}}
<div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {{ range .Site.Data.members.leadership }}
        <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
            <img src="{{ .image }}" alt="{{ .name }}" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover">
            <h3 class="text-xl font-bold mb-2">{{ .name }}</h3>
            <p class="text-blue-600 font-semibold mb-2">{{ .role }}</p>
            <p class="text-gray-600">{{ .description }}</p>
        </div>
        {{ end }}
    </div>
</div>
{{< /section >}}
```

### 4. Blog/News 페이지

**새로운 블로그 포스트 작성:**

```bash
# 새 포스트 생성
hugo new blog/my-new-post.md
```

```markdown
+++
title = "새로운 포스트 제목"
description = "포스트 설명"
date = "2025-01-01"
tags = ["news", "rover"]
categories = ["updates"]
+++

# 포스트 제목

포스트 내용...

## 섹션 제목

더 많은 내용...
```

## 🖼️ 이미지 관리

### 이미지 추가 방법

1. **이미지 파일을 `static/img/` 폴더에 업로드**
2. **마크다운에서 참조:**

```markdown
![로버 이미지](/img/projects/2025_rover.png)
```

### 이미지 최적화

- **권장 형식**: WebP, PNG, JPG
- **최대 크기**: 1920px 너비
- **파일 크기**: 500KB 이하 권장
- **이름 규칙**: `소문자_언더스코어_날짜.확장자`

### 이미지 폴더 구조

```
static/img/
├── logo/           # 로고 이미지
├── members/        # 팀원 사진
│   ├── 2025/      # 2025년 팀원
│   └── 2026/      # 2026년 팀원
├── projects/       # 프로젝트 이미지
├── slide/          # 슬라이드 이미지
└── sponsors/       # 스폰서 로고
```

## 🔧 Hugo Shortcode 사용법

### Section Shortcode

```markdown
{{< section class="bg-blue-50 py-16" >}}
<div class="container mx-auto px-4">
    <!-- 섹션 내용 -->
</div>
{{< /section >}}
```

### Custom Shortcode 만들기

`layouts/shortcodes/` 폴더에 새 파일 생성:

```html
<!-- layouts/shortcodes/feature-card.html -->
<div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
    <div class="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
        {{ .Get "icon" | safeHTML }}
    </div>
    <h3 class="text-xl font-bold text-gray-900 mb-4">{{ .Get "title" }}</h3>
    <p class="text-gray-600">{{ .Inner }}</p>
</div>
```

사용법:
```markdown
{{< feature-card title="Feature Title" icon="<svg>...</svg>" >}}
Feature description...
{{< /feature-card >}}
```

## 📊 데이터 파일 관리

### YAML 데이터 파일 구조

```yaml
# data/features.yaml
rover_features:
  - title: "Modular Design"
    description: "빠른 교체 가능한 과학 및 조작 모듈"
    icon: "puzzle"
    color: "blue"

  - title: "Advanced Navigation"
    description: "센티미터 수준의 정확도를 위한 이중 RTK GNSS"
    icon: "location"
    color: "green"
```

### 마크다운에서 데이터 사용

```markdown
{{< section class="py-16" >}}
<div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {{ range .Site.Data.features.rover_features }}
        <div class="bg-white rounded-2xl shadow-lg p-8">
            <h3 class="text-xl font-bold mb-4">{{ .title }}</h3>
            <p class="text-gray-600">{{ .description }}</p>
        </div>
        {{ end }}
    </div>
</div>
{{< /section >}}
```

## 🚀 배포

### GitHub Pages 배포

1. **GitHub 저장소 설정**
   - Settings > Pages
   - Source: GitHub Actions

2. **GitHub Actions 워크플로우 생성**
   - `.github/workflows/deploy.yml` 파일 생성

3. **자동 배포**
   - `main` 브랜치에 푸시하면 자동 배포

### 수동 배포

```bash
# 빌드
hugo

# public/ 폴더의 내용을 웹 서버에 업로드
```

## 🤝 기여 가이드

### 작업 흐름

1. **새 브랜치 생성**
```bash
git checkout -b feature/new-page
```

2. **변경사항 작업**

3. **커밋**
```bash
git add .
git commit -m "Add new page: About team structure"
```

4. **푸시 및 Pull Request**
```bash
git push origin feature/new-page
```

### 코딩 컨벤션

- **파일명**: `kebab-case` (예: `team-members.md`)
- **폴더명**: `snake_case` (예: `2025_rover`)
- **변수명**: `camelCase` (예: `teamMembers`)
- **CSS 클래스**: Tailwind CSS 클래스 사용

### 커밋 메시지 규칙

```
type(scope): description

feat: 새로운 기능
fix: 버그 수정
docs: 문서 수정
style: 코드 스타일 변경
refactor: 코드 리팩토링
test: 테스트 추가/수정
chore: 빌드 프로세스 또는 보조 도구 변경
```

## 🐛 문제 해결

### 일반적인 문제들

1. **Hugo 서버가 시작되지 않음**
   ```bash
   # Hugo 버전 확인
   hugo version

   # 의존성 재설치
   npm install
   ```

2. **이미지가 표시되지 않음**
   - 파일 경로 확인 (`static/img/` 폴더)
   - 파일명 대소문자 확인
   - 파일 확장자 확인

3. **스타일이 적용되지 않음**
   ```bash
   # Tailwind CSS 재빌드
   npm run build:css
   ```

4. **Shortcode 에러**
   - `layouts/shortcodes/` 폴더에 파일 존재 확인
   - 문법 오류 확인

### 디버깅 팁

- **Hugo 서버 로그 확인**
- **브라우저 개발자 도구 사용**
- **파일 경로와 이름 확인**

## 📞 지원

문제가 있거나 질문이 있으시면:

1. **GitHub Issues**에 이슈 생성
2. **팀 내 기술 담당자**에게 문의
3. **Hugo 공식 문서** 참조: https://gohugo.io/documentation/

---

**마지막 업데이트**: 2025년 1월

이 문서는 URC-KAIST 팀원들이 웹사이트를 쉽게 관리하고 업데이트할 수 있도록 작성되었습니다. 꾸준히 업데이트하여 최신 정보를 유지해주세요!
