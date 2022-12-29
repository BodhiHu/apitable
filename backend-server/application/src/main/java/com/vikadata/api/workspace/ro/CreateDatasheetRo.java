package com.vikadata.api.workspace.ro;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import cn.hutool.core.util.StrUtil;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Node Request Parameters
 */
@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@ApiModel("Node Request Parameters")
public class CreateDatasheetRo {

    @ApiModelProperty(value = "Name", example = "This is a node", position = 1, required = true)
    @Size(max = 100, message = "The name length cannot exceed 100 bits")
    private String name;

    @ApiModelProperty(value = "Parent Node Id", example = "nod10", position = 2)
    @NotBlank(message = "The parent node ID cannot be empty")
    private String folderId;

    @ApiModelProperty(value = "The previous node of the target position moves to the first position when it is empty", example = "nod10", position = 3)
    private String preNodeId;

    @ApiModelProperty(value = "Description", example = "This is a table", position = 4)
    private String description;

    public NodeOpRo tranferToNodeOpRo() {
        return NodeOpRo.builder()
                .nodeName(this.name)
                .type(2)
                .parentId(this.folderId)
                .preNodeId(this.preNodeId)
                .build();
    }

    public boolean needToInsertDesc() {
        return StrUtil.isNotBlank(this.description);
    }

}
