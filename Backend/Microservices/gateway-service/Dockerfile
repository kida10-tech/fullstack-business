FROM amazoncorretto:11-alpine-jdk
MAINTAINER baeldung.com
COPY target/awesome-app-api-gateway-1.0.0-SNAPSHOT.jar service.war
ENTRYPOINT ["java","-jar","/service.war"]