#! /usr/bin/python
import os
import subprocess

def convert_ipynb_to_html(input_dir, output_dir):
    for root, _, files in os.walk(input_dir):
        for file in files:
            if file.endswith(".ipynb"):
                input_file = os.path.join(root, file)
                relative_path = os.path.relpath(root, input_dir)
                output_path = os.path.join(output_dir, relative_path)
                os.makedirs(output_path, exist_ok=True)
                html = os.path.join(output_path, file.replace(".ipynb", ".html"))
                pdf = os.path.join(output_path, file.replace(".ipynb", ".pdf"))
                subprocess.run(["pandoc", input_file, "--defaults", "defaults.yaml", "-o", html])
                subprocess.run(["pandoc", input_file, "--defaults", "defaults.yaml", "-o", pdf])

input_directory = "docs"
output_directory = "out"

convert_ipynb_to_html(input_directory, output_directory)
