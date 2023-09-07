package com.bank.benefit.entity;

import com.bank.card.entity.Card;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "benefit")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Benefit {
    @Id
    @GeneratedValue
    @Column(name = "benefit_id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "card_id")
    private Card card;

    @Column(name = "category")
    private String category;

    @Column(name = "store_name")
    private String storeName;

    @Column(name = "discount")
    private Integer discount;

    @Column(name = "limit")
    private Integer limit;
}
