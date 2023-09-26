package com.cocopay.payment.dto.res;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PayAfterResDto {
    private String cardImage;
    private String cardName;
    private int remainingAmt;
    private String graphRate;
    private int nextPerLevel;

}
