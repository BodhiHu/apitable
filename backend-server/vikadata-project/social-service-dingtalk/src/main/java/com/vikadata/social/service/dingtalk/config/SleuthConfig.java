package com.vikadata.social.service.dingtalk.config;

import brave.http.HttpRequestParser;

import org.springframework.cloud.sleuth.instrument.web.HttpClientRequestParser;
import org.springframework.cloud.sleuth.instrument.web.HttpServerRequestParser;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * tracking configuration
 */
@Configuration(proxyBeanMethods = false)
public class SleuthConfig {

    @Bean(name = { HttpClientRequestParser.NAME, HttpServerRequestParser.NAME })
    HttpRequestParser sleuthHttpServerRequestParser() {
        return (req, context, span) -> {
            HttpRequestParser.DEFAULT.parse(req, context, span);
            String url = req.url();
            if (url != null) {
                span.tag("http.url", url);
            }
        };
    }
}
