package com.cocopay.redis.mapper;

import com.cocopay.payment.apicall.dto.res.UserCardBenefitInfoResponseDto;
import com.cocopay.payment.dto.req.OnlinePayPostDto;
import com.cocopay.payment.dto.res.PerformanceResponseDto;
import com.cocopay.redis.key.BenefitKey;
import com.cocopay.redis.key.OrderKey;
import com.cocopay.redis.key.PerformanceKey;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface RedisMapper {

    PerformanceKey toPerformanceKey(PerformanceResponseDto dto);

    List<PerformanceKey> toPerformanceKeyList(List<PerformanceResponseDto> dtoList);

    OrderKey toOrderKey(OnlinePayPostDto dto);

    BenefitKey toBenefitKey(UserCardBenefitInfoResponseDto dto);

    List<BenefitKey> toBenefitKeyList(List<UserCardBenefitInfoResponseDto> dtoList);
}