# `acc_bank_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| acc_bank_type_id | int(11) | NO | PRI | 0 |  |  |
| acc_bank_type_name | varchar(200) | YES | UNI | NULL |  |  |
| acc_bank_code | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_acc_bank_type_name | acc_bank_type_name | yes | 1 |
| PRIMARY | acc_bank_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "acc_bank_type_id": 1,
    "acc_bank_type_name": "ธนาคารกรุงเทพ",
    "acc_bank_code": "BBL"
  },
  {
    "acc_bank_type_id": 2,
    "acc_bank_type_name": "ธนาคารกสิกรไทย",
    "acc_bank_code": "KBANK"
  },
  {
    "acc_bank_type_id": 3,
    "acc_bank_type_name": "ธนาคารกรุงไทย",
    "acc_bank_code": "KTB"
  },
  {
    "acc_bank_type_id": 4,
    "acc_bank_type_name": "ธนาคารทหารไทย",
    "acc_bank_code": "TMB"
  },
  {
    "acc_bank_type_id": 5,
    "acc_bank_type_name": "ธนาคารไทยพาณิชย์",
    "acc_bank_code": "SCB"
  },
  {
    "acc_bank_type_id": 6,
    "acc_bank_type_name": "ธนาคารกรุงศรีอยุธยา",
    "acc_bank_code": "BAY"
  },
  {
    "acc_bank_type_id": 7,
    "acc_bank_type_name": "ธนาคารเกียรตินาคิน",
    "acc_bank_code": null
  },
  {
    "acc_bank_type_id": 8,
    "acc_bank_type_name": "ธนาคารซีไอเอ็มบีไทย",
    "acc_bank_code": null
  }
]
```
