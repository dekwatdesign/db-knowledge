# `supplies_purchase`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| PURCHASE_ID | int | NO | PRI | NULL |  |  |
| PURCHASE_LEADER_ID | int | YES |  | NULL |  |  |
| PURCHASE_OFFICER_ID | int | YES |  | NULL |  |  |
| PURCHASE_HEAD_ID | int | YES |  | NULL |  |  |
| PURCHASE_GOV | varchar(255) | YES |  | NULL |  |  |
| PURCHASE_SUBROGATE | varchar(255) | YES |  | NULL |  |  |
| PURCHASE_CMD_PROVINCE | varchar(255) | YES |  | NULL |  |  |
| PURCHASE_NOTIFY | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | PURCHASE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "PURCHASE_ID": 1,
    "PURCHASE_LEADER_ID": 203,
    "PURCHASE_OFFICER_ID": 52,
    "PURCHASE_HEAD_ID": 225,
    "PURCHASE_GOV": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "PURCHASE_SUBROGATE": "ปฏิบัติการแทน",
    "PURCHASE_CMD_PROVINCE": "1256253523",
    "PURCHASE_NOTIFY": "ผู้อำนวยการโรงพยาบาล",
    "updated_at": "2024-10-16 04:13:09",
    "created_at": null
  }
]
```
