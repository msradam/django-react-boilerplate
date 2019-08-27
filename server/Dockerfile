FROM python:3.7-alpine
RUN mkdir -p /srv/app/server
WORKDIR /srv/app/server

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV DEBUG 0

COPY ./requirements.txt . 

RUN apk update \
    && apk add --virtual build-deps gcc python3-dev musl-dev \
    && apk add postgresql-dev \
    && pip install -r requirements.txt \
    && apk del build-deps

COPY . .


RUN python manage.py makemigrations snippets && python manage.py migrate && python manage.py collectstatic --noinput
CMD gunicorn server.wsgi:application --bind 0.0.0.0:$PORT