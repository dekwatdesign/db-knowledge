# `finance_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| finance_status | int(11) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | finance_status | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "finance_status": 1,
    "name": "Open",
    "hos_guid": null
  },
  {
    "finance_status": 2,
    "name": "รอตรวจสอบค่าใช้จ่าย",
    "hos_guid": null
  },
  {
    "finance_status": 3,
    "name": "ปิดยอดการเงิน",
    "hos_guid": null
  },
  {
    "finance_status": 4,
    "name": "รายการตีกลับ",
    "hos_guid": null
  },
  {
    "finance_status": 5,
    "name": "Clearing แล้ว",
    "hos_guid": null
  },
  {
    "finance_status": 9,
    "name": "Transaction Closed",
    "hos_guid": null
  }
]
```
