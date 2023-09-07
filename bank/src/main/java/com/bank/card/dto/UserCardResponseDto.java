package com.bank.card.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.*;

@Getter
@NoArgsConstructor
public class UserCardResponseDto {
    private Integer cardUuid;
    private Integer accountId;
    private Integer cardId;
    private String cardNickName;
    private Integer serialNumber;
    private Integer userPerformance;
    private Integer isPerformanced;

    @QueryProjection
    public UserCardResponseDto(Integer cardUuid, Integer accountId, Integer cardId, String cardNickName, Integer serialNumber, Integer userPerformance, Integer isPerformanced) {
        this.cardUuid = cardUuid;
        this.accountId = accountId;
        this.cardId = cardId;
        this.cardNickName = cardNickName;
        this.serialNumber = serialNumber;
        this.userPerformance = userPerformance;
        this.isPerformanced = isPerformanced;
    }
}
