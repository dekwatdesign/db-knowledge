# `er_oper_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_oper_status_id | int(11) | NO | PRI | 0 |  |  |
| er_oper_status_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_er_oper_status_name | er_oper_status_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | er_oper_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "er_oper_status_id": 1,
    "er_oper_status_name": "รอทำหัตถการ",
    "hos_guid": null
  },
  {
    "er_oper_status_id": 2,
    "er_oper_status_name": "กำลังทำหัตถการ",
    "hos_guid": null
  },
  {
    "er_oper_status_id": 3,
    "er_oper_status_name": "ทำหัตถการแล้ว",
    "hos_guid": null
  },
  {
    "er_oper_status_id": 4,
    "er_oper_status_name": "ไม่สามารถทำได้",
    "hos_guid": null
  }
]
```
