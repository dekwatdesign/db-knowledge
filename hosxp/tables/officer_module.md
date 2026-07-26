# `officer_module`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| officer_module_id | int(11) | NO | PRI | 0 |  |  |
| officer_module_name | varchar(200) | YES | UNI | NULL |  |  |
| officer_module_code | varchar(100) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_officer_module_code | officer_module_code | no | 1 |
| ix_officer_module_name | officer_module_name | yes | 1 |
| PRIMARY | officer_module_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "officer_module_id": 1,
    "officer_module_name": "ทะเบียนผู้ป่วย",
    "officer_module_code": "REGISTRY"
  },
  {
    "officer_module_id": 2,
    "officer_module_name": "ซักประวัติ",
    "officer_module_code": "SCREEN"
  },
  {
    "officer_module_id": 3,
    "officer_module_name": "ห้องตรวจแพทย์",
    "officer_module_code": "DOCTOR"
  },
  {
    "officer_module_id": 4,
    "officer_module_name": "ทันตกรรม",
    "officer_module_code": "DENTAL"
  },
  {
    "officer_module_id": 5,
    "officer_module_name": "รังสีวินิจฉัย",
    "officer_module_code": "XRAY"
  },
  {
    "officer_module_id": 6,
    "officer_module_name": "ตรวจทางห้องปฏิบัติการ",
    "officer_module_code": "LAB"
  },
  {
    "officer_module_id": 7,
    "officer_module_name": "การเงิน",
    "officer_module_code": "FINANCE"
  },
  {
    "officer_module_id": 8,
    "officer_module_name": "ห้องฉุกเฉิน",
    "officer_module_code": "ER"
  }
]
```
