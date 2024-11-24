FROM quay.io/jupyter/base-notebook AS devcore

EXPOSE 8888

RUN conda install -y conda-forge:deno &&\
    deno jupyter --install
