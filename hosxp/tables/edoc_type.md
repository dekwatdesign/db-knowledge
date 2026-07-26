# `edoc_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_type_id | int(11) | NO | PRI | 0 |  |  |
| edoc_type_name | varchar(250) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| edoc_send_type_id | int(11) | YES |  | NULL |  |  |
| edoc_type_temp | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| edoc_type_name | edoc_type_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | edoc_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "edoc_type_id": 1,
    "edoc_type_name": "หนังสือเข้า",
    "hos_guid": null,
    "edoc_send_type_id": null,
    "edoc_type_temp": null
  },
  {
    "edoc_type_id": 2,
    "edoc_type_name": "หนังสือออก",
    "hos_guid": null,
    "edoc_send_type_id": null,
    "edoc_type_temp": null
  },
  {
    "edoc_type_id": 3,
    "edoc_type_name": "บันทึกภายใน",
    "hos_guid": null,
    "edoc_send_type_id": null,
    "edoc_type_temp": null
  },
  {
    "edoc_type_id": 4,
    "edoc_type_name": "คำสั่งภายใน",
    "hos_guid": null,
    "edoc_send_type_id": null,
    "edoc_type_temp": null
  },
  {
    "edoc_type_id": 5,
    "edoc_type_name": "ประกาศ",
    "hos_guid": null,
    "edoc_send_type_id": null,
    "edoc_type_temp": null
  },
  {
    "edoc_type_id": 6,
    "edoc_type_name": "รายงานการประชุม",
    "hos_guid": null,
    "edoc_send_type_id": null,
    "edoc_type_temp": null
  },
  {
    "edoc_type_id": 7,
    "edoc_type_name": "อื่นๆ",
    "hos_guid": null,
    "edoc_send_type_id": null,
    "edoc_type_temp": null
  }
]
```
