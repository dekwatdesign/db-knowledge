# `edoc_command`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_command_id | int(11) | NO | PRI | 0 |  |  |
| edoc_command_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | edoc_command_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "edoc_command_id": 1,
    "edoc_command_name": "บันทึกงาน",
    "hos_guid": null
  },
  {
    "edoc_command_id": 2,
    "edoc_command_name": "อนุมัติ",
    "hos_guid": null
  },
  {
    "edoc_command_id": 3,
    "edoc_command_name": "ไม่อนุมัติ",
    "hos_guid": null
  },
  {
    "edoc_command_id": 4,
    "edoc_command_name": "สั่งการ",
    "hos_guid": null
  },
  {
    "edoc_command_id": 5,
    "edoc_command_name": "ขอรายละเอียดเพิ่มเติม",
    "hos_guid": null
  }
]
```
