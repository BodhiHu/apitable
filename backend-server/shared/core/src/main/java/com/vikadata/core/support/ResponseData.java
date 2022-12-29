package com.vikadata.core.support;

import java.io.Serializable;

import static com.vikadata.core.constants.ResponseExceptionConstants.DEFAULT_ERROR_CODE;
import static com.vikadata.core.constants.ResponseExceptionConstants.DEFAULT_ERROR_MESSAGE;
import static com.vikadata.core.constants.ResponseExceptionConstants.DEFAULT_SUCCESS_CODE;
import static com.vikadata.core.constants.ResponseExceptionConstants.DEFAULT_SUCCESS_MESSAGE;

/**
 * <p>
 *  response result wrapper
 * </p>
 *
 */
public class ResponseData<T> implements Serializable {

    private static final long serialVersionUID = 6941456238190558441L;

    /**
     * Is request successful?
     */
    private Boolean success;

    /**
     * response status code
     */
    private Integer code;

    /**
     * response status code's message
     */
    private String message;

    /**
     * response object
     */
    private T data;

    public ResponseData(Boolean success, Integer code, T data) {
        this.success = success;
        this.code = code;
        this.data = data;
    }

    public ResponseData(Boolean success, Integer code, String message, T data) {
        this.success = success;
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public static ResponseDataBuilder ok() {
        return status(true, DEFAULT_SUCCESS_CODE, DEFAULT_SUCCESS_MESSAGE);
    }

    public static <T> ResponseData<T> ok(T body) {
        return ok().data(body);
    }

    public static ResponseDataBuilder status(Boolean success, Integer code, String message) {
        return new DefaultResponseDataBuilder(success, code, message);
    }

    public static ResponseData<Void> success() {
        return status(true, DEFAULT_SUCCESS_CODE, DEFAULT_SUCCESS_MESSAGE).build();
    }

    public static <T> ResponseData<T> success(T body) {
        return ok().data(body);
    }

    public static ResponseData<Void> error() {
        return status(false, DEFAULT_ERROR_CODE, DEFAULT_ERROR_MESSAGE).build();
    }

    public static ResponseData<Void> error(String message) {
        return status(false, DEFAULT_ERROR_CODE, message).build();
    }

    public static ResponseData<Void> error(Integer code, String message) {
        return status(false, code, message).build();
    }

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
