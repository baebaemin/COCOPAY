package com.bank.card_history.dto;

import com.bank.card_history.entity.Category;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryDto {
    private Category category;
    private int discountAmount;
    private Long price;
    private String pricePercent;
    private String discountPercent;

}
