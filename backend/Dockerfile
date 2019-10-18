FROM golang:alpine
RUN apk add --update --no-cache ca-certificates git
RUN mkdir /app
ADD . /app/
WORKDIR /app
RUN go mod download
RUN go build -v
RUN ls
CMD ["/app/quick-chat"]
