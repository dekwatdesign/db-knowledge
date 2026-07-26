# `bms_risk_coso_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bms_risk_coso_type_id | int(11) | NO | PRI | 0 |  |  |
| bms_risk_coso_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bms_risk_coso_type_name | bms_risk_coso_type_name | yes | 1 |
| PRIMARY | bms_risk_coso_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "bms_risk_coso_type_id": 6,
    "bms_risk_coso_type_name": "กฎหมายหรือระเบียบ"
  },
  {
    "bms_risk_coso_type_id": 4,
    "bms_risk_coso_type_name": "การกระทำมิชอบของเจ้าหน้าที่"
  },
  {
    "bms_risk_coso_type_id": 5,
    "bms_risk_coso_type_name": "การกระทำหรือละเว้นโดยบุคคลที่สาม"
  },
  {
    "bms_risk_coso_type_id": 11,
    "bms_risk_coso_type_name": "การใช้เทคโนโลยี"
  },
  {
    "bms_risk_coso_type_id": 3,
    "bms_risk_coso_type_name": "การดำเนินงานทางการเงิน"
  },
  {
    "bms_risk_coso_type_id": 9,
    "bms_risk_coso_type_name": "การพึ่งพิงแหล่งเงินทุนและทรัพยากรจากภายนอก"
  },
  {
    "bms_risk_coso_type_id": 10,
    "bms_risk_coso_type_name": "การสูญเสียทางทรัพย์สิน"
  },
  {
    "bms_risk_coso_type_id": 8,
    "bms_risk_coso_type_name": "กิจกรรมและการให้บริการของรัฐ"
  }
]
```
