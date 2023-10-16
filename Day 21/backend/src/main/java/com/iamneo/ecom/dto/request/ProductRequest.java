package com.iamneo.ecom.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductRequest {
    private String productName;
    private float productPrice;
    private Long productQuantity;
    private String productImage;
    private String productDesc;
    private Long cid;
}
