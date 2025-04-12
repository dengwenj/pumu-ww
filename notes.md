### 在 pnpm 里，-C 属于命令行选项，其作用是指定项目的根目录
```bash
pnpm -C <path> <command>
```
- path：代表项目的根目录路径，它可以是绝对路径，也可以是相对路径。
- command：表示你要执行的 pnpm 命令，像 install、run 等。
- 比如：pnpm -C ./play dev
