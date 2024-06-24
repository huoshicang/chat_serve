from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from config.logging_config import setup_logger, get_logger

app = FastAPI()

setup_logger()

# 获取日志记录器
logger = get_logger(__name__)

# 跨域
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 允许的源
    allow_credentials=True,
    allow_methods=["*"],  # 允许的方法，如 GET, POST 等
    allow_headers=["*"],  # 允许的头
)


@app.get("/")
async def read_root():
    logger.info("Root endpoint was called")
    return {"Hello": "World"}


if __name__ == '__main__':
    import uvicorn

    # 启动应用，开启热更新
    uvicorn.run(
        "main:app",
        host='127.0.0.1',
        port=8000,
        log_level="debug",
        reload=True)


# pip install -r requirements.txt