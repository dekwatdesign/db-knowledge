# `cancer_contraception_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_contraception_type_id | int(11) | NO | PRI | 0 |  |  |
| cancer_contraception_type_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_contraception_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "cancer_contraception_type_id": 1,
    "cancer_contraception_type_name": "ฉีดยาคุม",
    "hos_guid": null
  },
  {
    "cancer_contraception_type_id": 2,
    "cancer_contraception_type_name": "กินยาคุม",
    "hos_guid": null
  },
  {
    "cancer_contraception_type_id": 3,
    "cancer_contraception_type_name": "ใส่ห่วง",
    "hos_guid": null
  },
  {
    "cancer_contraception_type_id": 4,
    "cancer_contraception_type_name": "ถุงยางอนามัย",
    "hos_guid": null
  },
  {
    "cancer_contraception_type_id": 5,
    "cancer_contraception_type_name": "ทำหมัน",
    "hos_guid": null
  },
  {
    "cancer_contraception_type_id": 6,
    "cancer_contraception_type_name": "ฝังเข็ม",
    "hos_guid": null
  }
]
```
