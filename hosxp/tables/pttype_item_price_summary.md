# `pttype_item_price_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icode | varchar(7) | NO | PRI |  |  |  |
| has_pttype_item_price | char(1) | YES |  | NULL |  |  |
| group1_opd_price | double(15,3) | YES |  | NULL |  |  |
| group2_opd_price | double(15,3) | YES |  | NULL |  |  |
| group3_opd_price | double(15,3) | YES |  | NULL |  |  |
| group4_opd_price | double(15,3) | YES |  | NULL |  |  |
| group5_opd_price | double(15,3) | YES |  | NULL |  |  |
| group1_ipd_price | double(15,3) | YES |  | NULL |  |  |
| group2_ipd_price | double(15,3) | YES |  | NULL |  |  |
| group3_ipd_price | double(15,3) | YES |  | NULL |  |  |
| group4_ipd_price | double(15,3) | YES |  | NULL |  |  |
| group5_ipd_price | double(15,3) | YES |  | NULL |  |  |
| group1_opd_inc_price | double(15,3) | YES |  | NULL |  |  |
| group2_opd_inc_price | double(15,3) | YES |  | NULL |  |  |
| group3_opd_inc_price | double(15,3) | YES |  | NULL |  |  |
| group4_opd_inc_price | double(15,3) | YES |  | NULL |  |  |
| group5_opd_inc_price | double(15,3) | YES |  | NULL |  |  |
| group1_ipd_inc_price | double(15,3) | YES |  | NULL |  |  |
| group2_ipd_inc_price | double(15,3) | YES |  | NULL |  |  |
| group3_ipd_inc_price | double(15,3) | YES |  | NULL |  |  |
| group4_ipd_inc_price | double(15,3) | YES |  | NULL |  |  |
| group5_ipd_inc_price | double(15,3) | YES |  | NULL |  |  |
| pttype_opd_list | varchar(200) | YES |  | NULL |  |  |
| pttype_ipd_list | varchar(200) | YES |  | NULL |  |  |
| pttype_opd_gr_list | varchar(200) | YES |  | NULL |  |  |
| pttype_ipd_gr_list | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | icode | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "icode": "3002093",
    "has_pttype_item_price": "N",
    "group1_opd_price": 0.0,
    "group2_opd_price": 0.0,
    "group3_opd_price": 0.0,
    "group4_opd_price": 0.0,
    "group5_opd_price": 0.0,
    "group1_ipd_price": 0.0,
    "group2_ipd_price": 0.0,
    "group3_ipd_price": 0.0,
    "group4_ipd_price": 0.0,
    "group5_ipd_price": 0.0,
    "group1_opd_inc_price": 0.0,
    "group2_opd_inc_price": 0.0,
    "group3_opd_inc_price": 0.0,
    "group4_opd_inc_price": 0.0,
    "group5_opd_inc_price": 0.0,
    "group1_ipd_inc_price": 0.0,
    "group2_ipd_inc_price": 0.0,
    "group3_ipd_inc_price": 0.0,
    "group4_ipd_inc_price": 0.0,
    "group5_ipd_inc_price": 0.0,
    "pttype_opd_list": "",
    "pttype_ipd_list": "",
    "pttype_opd_gr_list": "",
    "pttype_ipd_gr_list": ""
  },
  {
    "icode": "3001510",
    "has_pttype_item_price": "N",
    "group1_opd_price": 0.0,
    "group2_opd_price": 0.0,
    "group3_opd_price": 0.0,
    "group4_opd_price": 0.0,
    "group5_opd_price": 0.0,
    "group1_ipd_price": 0.0,
    "group2_ipd_price": 0.0,
    "group3_ipd_price": 0.0,
    "group4_ipd_price": 0.0,
    "group5_ipd_price": 0.0,
    "group1_opd_inc_price": 0.0,
    "group2_opd_inc_price": 0.0,
    "group3_opd_inc_price": 0.0,
    "group4_opd_inc_price": 0.0,
    "group5_opd_inc_price": 0.0,
    "group1_ipd_inc_price": 0.0,
    "group2_ipd_inc_price": 0.0,
    "group3_ipd_inc_price": 0.0,
    "group4_ipd_inc_price": 0.0,
    "group5_ipd_inc_price": 0.0,
    "pttype_opd_list": "",
    "pttype_ipd_list": "",
    "pttype_opd_gr_list": "",
    "pttype_ipd_gr_list": ""
  },
  {
    "icode": "3002001",
    "has_pttype_item_price": "N",
    "group1_opd_price": 0.0,
    "group2_opd_price": 0.0,
    "group3_opd_price": 0.0,
    "group4_opd_price": 0.0,
    "group5_opd_price": 0.0,
    "group1_ipd_price": 0.0,
    "group2_ipd_price": 0.0,
    "group3_ipd_price": 0.0,
    "group4_ipd_price": 0.0,
    "group5_ipd_price": 0.0,
    "group1_opd_inc_price": 0.0,
    "group2_opd_inc_price": 0.0,
    "group3_opd_inc_price": 0.0,
    "group4_opd_inc_price": 0.0,
    "group5_opd_inc_price": 0.0,
    "group1_ipd_inc_price": 0.0,
    "group2_ipd_inc_price": 0.0,
    "group3_ipd_inc_price": 0.0,
    "group4_ipd_inc_price": 0.0,
    "group5_ipd_inc_price": 0.0,
    "pttype_opd_list": "",
    "pttype_ipd_list": "",
    "pttype_opd_gr_list": "",
    "pttype_ipd_gr_list": ""
  },
  {
    "icode": "3002002",
    "has_pttype_item_price": "N",
    "group1_opd_price": 0.0,
    "group2_opd_price": 0.0,
    "group3_opd_price": 0.0,
    "group4_opd_price": 0.0,
    "group5_opd_price": 0.0,
    "group1_ipd_price": 0.0,
    "group2_ipd_price": 0.0,
    "group3_ipd_price": 0.0,
    "group4_ipd_price": 0.0,
    "group5_ipd_price": 0.0,
    "group1_opd_inc_price": 0.0,
    "group2_opd_inc_price": 0.0,
    "group3_opd_inc_price": 0.0,
    "group4_opd_inc_price": 0.0,
    "group5_opd_inc_price": 0.0,
    "group1_ipd_inc_price": 0.0,
    "group2_ipd_inc_price": 0.0,
    "group3_ipd_inc_price": 0.0,
    "group4_ipd_inc_price": 0.0,
    "group5_ipd_inc_price": 0.0,
    "pttype_opd_list": "",
    "pttype_ipd_list": "",
    "pttype_opd_gr_list": "",
    "pttype_ipd_gr_list": ""
  },
  {
    "icode": "3002006",
    "has_pttype_item_price": "N",
    "group1_opd_price": 0.0,
    "group2_opd_price": 0.0,
    "group3_opd_price": 0.0,
    "group4_opd_price": 0.0,
    "group5_opd_price": 0.0,
    "group1_ipd_price": 0.0,
    "group2_ipd_price": 0.0,
    "group3_ipd_price": 0.0,
    "group4_ipd_price": 0.0,
    "group5_ipd_price": 0.0,
    "group1_opd_inc_price": 0.0,
    "group2_opd_inc_price": 0.0,
    "group3_opd_inc_price": 0.0,
    "group4_opd_inc_price": 0.0,
    "group5_opd_inc_price": 0.0,
    "group1_ipd_inc_price": 0.0,
    "group2_ipd_inc_price": 0.0,
    "group3_ipd_inc_price": 0.0,
    "group4_ipd_inc_price": 0.0,
    "group5_ipd_inc_price": 0.0,
    "pttype_opd_list": "",
    "pttype_ipd_list": "",
    "pttype_opd_gr_list": "",
    "pttype_ipd_gr_list": ""
  },
  {
    "icode": "3002003",
    "has_pttype_item_price": "N",
    "group1_opd_price": 0.0,
    "group2_opd_price": 0.0,
    "group3_opd_price": 0.0,
    "group4_opd_price": 0.0,
    "group5_opd_price": 0.0,
    "group1_ipd_price": 0.0,
    "group2_ipd_price": 0.0,
    "group3_ipd_price": 0.0,
    "group4_ipd_price": 0.0,
    "group5_ipd_price": 0.0,
    "group1_opd_inc_price": 0.0,
    "group2_opd_inc_price": 0.0,
    "group3_opd_inc_price": 0.0,
    "group4_opd_inc_price": 0.0,
    "group5_opd_inc_price": 0.0,
    "group1_ipd_inc_price": 0.0,
    "group2_ipd_inc_price": 0.0,
    "group3_ipd_inc_price": 0.0,
    "group4_ipd_inc_price": 0.0,
    "group5_ipd_inc_price": 0.0,
    "pttype_opd_list": "",
    "pttype_ipd_list": "",
    "pttype_opd_gr_list": "",
    "pttype_ipd_gr_list": ""
  },
  {
    "icode": "3002040",
    "has_pttype_item_price": "N",
    "group1_opd_price": 0.0,
    "group2_opd_price": 0.0,
    "group3_opd_price": 0.0,
    "group4_opd_price": 0.0,
    "group5_opd_price": 0.0,
    "group1_ipd_price": 0.0,
    "group2_ipd_price": 0.0,
    "group3_ipd_price": 0.0,
    "group4_ipd_price": 0.0,
    "group5_ipd_price": 0.0,
    "group1_opd_inc_price": 0.0,
    "group2_opd_inc_price": 0.0,
    "group3_opd_inc_price": 0.0,
    "group4_opd_inc_price": 0.0,
    "group5_opd_inc_price": 0.0,
    "group1_ipd_inc_price": 0.0,
    "group2_ipd_inc_price": 0.0,
    "group3_ipd_inc_price": 0.0,
    "group4_ipd_inc_price": 0.0,
    "group5_ipd_inc_price": 0.0,
    "pttype_opd_list": "",
    "pttype_ipd_list": "",
    "pttype_opd_gr_list": "",
    "pttype_ipd_gr_list": ""
  },
  {
    "icode": "3002004",
    "has_pttype_item_price": "N",
    "group1_opd_price": 0.0,
    "group2_opd_price": 0.0,
    "group3_opd_price": 0.0,
    "group4_opd_price": 0.0,
    "group5_opd_price": 0.0,
    "group1_ipd_price": 0.0,
    "group2_ipd_price": 0.0,
    "group3_ipd_price": 0.0,
    "group4_ipd_price": 0.0,
    "group5_ipd_price": 0.0,
    "group1_opd_inc_price": 0.0,
    "group2_opd_inc_price": 0.0,
    "group3_opd_inc_price": 0.0,
    "group4_opd_inc_price": 0.0,
    "group5_opd_inc_price": 0.0,
    "group1_ipd_inc_price": 0.0,
    "group2_ipd_inc_price": 0.0,
    "group3_ipd_inc_price": 0.0,
    "group4_ipd_inc_price": 0.0,
    "group5_ipd_inc_price": 0.0,
    "pttype_opd_list": "",
    "pttype_ipd_list": "",
    "pttype_opd_gr_list": "",
    "pttype_ipd_gr_list": ""
  }
]
```
