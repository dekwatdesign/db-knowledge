# `company_business`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| business_type | int(11) | NO | PRI | 0 |  |  |
| business_type_name | varchar(250) | YES |  | NULL |  |  |
| pcode | char(2) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ix_pcode | pcode | no | 1 |
| PRIMARY | business_type | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "business_type": 1,
    "business_type_name": "บริษัทประกันชีวิต",
    "pcode": null,
    "hos_guid": null
  },
  {
    "business_type": 2,
    "business_type_name": "รัฐวิสาหกิจ",
    "pcode": null,
    "hos_guid": null
  },
  {
    "business_type": 3,
    "business_type_name": "บริษัทหรือห้างร้าน",
    "pcode": null,
    "hos_guid": null
  },
  {
    "business_type": 4,
    "business_type_name": "บริษัทสมาชิกกองกลางประกันภัย",
    "pcode": null,
    "hos_guid": null
  },
  {
    "business_type": 5,
    "business_type_name": "บริษัทที่ไม่ใช่สมาชิกกองกลางประกันภัย",
    "pcode": null,
    "hos_guid": null
  }
]
```
