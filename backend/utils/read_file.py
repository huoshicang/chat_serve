import yaml


def read_logging_file():
    with open("../config/logging_config.yaml", 'r') as f:
        return yaml.safe_load(f.read())



