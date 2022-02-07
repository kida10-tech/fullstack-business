FROM amazoncorretto:11-alpine-jdk
MAINTAINER baeldung.com
COPY build/libs/demo-0.0.1-SNAPSHOT.war service.war
ENTRYPOINT ["java","-jar","/service.war"]