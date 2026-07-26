# `state_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| state_item_id | int(11) | NO | PRI | 0 |  |  |
| state_item_name | varchar(200) | YES | UNI | NULL |  |  |
| state_item_code | varchar(20) | YES |  | NULL |  |  |
| claim_price | double(22,2) | YES |  | NULL |  |  |
| opd_claim | char(1) | YES |  | NULL |  |  |
| ipd_claim | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_state_item_name | state_item_name | yes | 1 |
| PRIMARY | state_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "state_item_id": 1,
    "state_item_name": "บริการรักษาภาวะความดันเลือดปอดสูงในทารกด้วยก๊าซไนตริกออกไซด์ (PPHN)",
    "state_item_code": "NBPPNH",
    "claim_price": 12000.0,
    "opd_claim": "N",
    "ipd_claim": "Y"
  },
  {
    "state_item_id": 2,
    "state_item_name": "บริการเด็กแรกเกิด น้ำหนักตัวน้อยกว่า 1,500 กรัม หรือเด็กแรกเกิดที่ป่วย",
    "state_item_code": "NBS01",
    "claim_price": 9000.0,
    "opd_claim": "N",
    "ipd_claim": "Y"
  },
  {
    "state_item_id": 3,
    "state_item_name": "บริการเด็กแรกเกิด ที่น้ำหนักน้อยกว่า 1,500 กรัม หรือ เด็กแรกเกิดที่ป่วย ที่ได้รับหัตถการเพื่อการรักษาที่จำเป็นและราคาแพงตามเงื่อนไข",
    "state_item_code": "NBS02",
    "claim_price": 12000.0,
    "opd_claim": "N",
    "ipd_claim": "Y"
  },
  {
    "state_item_id": 4,
    "state_item_name": "การรักษาด้วยเครื่องสลายนิ่ว (Extracorporeal Shock Wave Lithotripsy - ESWL) หน่วยบริการภาครัฐ",
    "state_item_code": "ESWL",
    "claim_price": 6500.0,
    "opd_claim": "N",
    "ipd_claim": "Y"
  },
  {
    "state_item_id": 5,
    "state_item_name": "ส่งต่อทางเรือ/แพขนานยนต์ ชนิดเรือเร็ว 51-100 กม.",
    "state_item_code": "S1803H",
    "claim_price": 10000.0,
    "opd_claim": "Y",
    "ipd_claim": "Y"
  },
  {
    "state_item_id": 6,
    "state_item_name": "ส่งต่อทางเรือ/แพขนานยนต์ ชนิดเรือเร็ว 101 กม. เป็นต้นไป",
    "state_item_code": "S1803J",
    "claim_price": 35000.0,
    "opd_claim": "Y",
    "ipd_claim": "Y"
  },
  {
    "state_item_id": 7,
    "state_item_name": "ส่งต่อทางเรือ/แพขนานยนต์ ชนิดเรือเร็ว 2 เครื่องยนต์ 51-100 กม.",
    "state_item_code": "S1803I",
    "claim_price": 35000.0,
    "opd_claim": "Y",
    "ipd_claim": "Y"
  },
  {
    "state_item_id": 8,
    "state_item_name": "ส่งต่อทางเรือ/แพขนานยนต์ ชนิดเรือเร็ว 2 เครื่องยนต์ 101 กม. เป็นต้นไป",
    "state_item_code": "S1803K",
    "claim_price": 35000.0,
    "opd_claim": "Y",
    "ipd_claim": "Y"
  }
]
```
