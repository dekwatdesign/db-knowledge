# `ar_flag`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ar_flag_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ar_flag_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "ar_flag_id": 1,
    "name": "รอการตรวจสอบ",
    "hos_guid": null
  },
  {
    "ar_flag_id": 2,
    "name": "รอการแก้ไข",
    "hos_guid": null
  },
  {
    "ar_flag_id": 3,
    "name": "ส่งใบแจ้งหนี้แล้ว",
    "hos_guid": null
  },
  {
    "ar_flag_id": 4,
    "name": "ได้รับเงินแล้ว",
    "hos_guid": null
  },
  {
    "ar_flag_id": 5,
    "name": "ปิดบัญชี",
    "hos_guid": null
  }
]
```
