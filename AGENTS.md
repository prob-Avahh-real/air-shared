# air-shared

air-shared Shared modules for air-* instrument apps. breath-input.js Microphone RMS breath detector. Copy into each project's `mobile/src/` (or import path) when updating: cp breath-input.js ../air-harmonica/mobile/src/ cp breath-input.js ../air-suona/mobile/src/

## 用途与 Target 判定

air-* 共享模块库（breath-input 等），不是独立产品

- 移动端：不适用
- 智能硬件：不适用

## 目标平台

本目录**不是**需双 Target 交付的消费级 App（见用途）。按实际形态维护即可。

## 命令

```bash
# 见 README
```

## 助手约束

- Loop：先定可验证 Done 与停止条件；每切片过验证环；失败回灌；详见 docs/LOOP_ENGINEERING.md
- Harness：遵循根 AGENTS「Harness Engineering」；Guide=本文件，Sensor=测试/CI；同类失误二次须沉淀规则或测试（棘轮）。详见 docs/HARNESS_ENGINEERING.md
- 遵循仓库根 `AGENTS.md`：通用性/扩展性、分阶段里程碑、默认双 Target（**仅当用途适合**）
- 可选 Target 未做时可搁置；不要为不适用形态硬加 APK/穿戴
- 改动保持聚焦；公共逻辑抽到 shared/`tools/`，禁止静默失败
