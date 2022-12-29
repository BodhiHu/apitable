package com.apitable.starter.idaas.core.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * <p>
 * Get the user group under the application
 * </p>
 */
@Setter
@Getter
public class AppGroupsRequest {

    /**
     * start page number. start from 0
     */
    @JsonProperty("page_index")
    private Integer pageIndex;

    /**
     * page size
     */
    @JsonProperty("page_size")
    private Integer pageSize;

    /**
     * sort field, preceded by {@code _} indicates ascending order, otherwise descending order
     */
    @JsonProperty("order_by")
    private List<String> orderBy;

    /**
     * application type
     */
    @JsonProperty("app_instance_type")
    private String appInstanceType = "SSO";

}
