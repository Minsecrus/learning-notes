# RFC 9293 翻译脚本（2026-08-04）

翻译 [TCP 从入门到抓包](../../notes/2026/08/04/tcp-from-zero-to-diagnostics.md) 附录 G（RFC 9293 中文译文）时用过的一次性脚本，留作参考。

- `split_rfc.py`、`test_split.py`：按标题把长文档切成适合送进 API 的块
- `process.py`、`process_seq.py`：并发 / 顺序调用 API 处理各块
- `analyze_md.py`：统计 Markdown 结构
- `test_*.py`：测试 API 代理的连通性、并发、速度和 `max_tokens` 上限

脚本从环境变量读取 `ANTHROPIC_BASE_URL` 和 `ANTHROPIC_API_KEY`，部分脚本写死了本机的绝对路径，复用前需要改。
