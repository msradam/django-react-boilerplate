# pull official base image
FROM python:3.7-alpine
RUN mkdir -p /srv/app/server
WORKDIR /srv/app/server
# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV DEBUG 0

COPY ./requirements.txt .
# install psycopg2
RUN apk update \
    && apk add --virtual build-deps gcc python3-dev musl-dev  libffi-dev  \
    && pip install -r requirements.txt \
    && apk del build-deps

# install dependencies


COPY . .

CMD gunicorn hello_django.wsgi:application --bind 0.0.0.0:$PORT