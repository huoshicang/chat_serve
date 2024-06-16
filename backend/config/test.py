import yaml

with open("logging_config.yaml", 'r') as f:
    log_config = yaml.safe_load(f.read())
    print(log_config)
