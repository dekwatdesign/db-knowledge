# `ipd_do_schedule_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_do_schedule_type_id | int(11) | NO | PRI | 0 |  |  |
| ipd_do_schedule_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_do_schedule_type_name | ipd_do_schedule_type_name | yes | 1 |
| PRIMARY | ipd_do_schedule_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "ipd_do_schedule_type_id": 1,
    "ipd_do_schedule_type_name": "ทุกวัน"
  },
  {
    "ipd_do_schedule_type_id": 2,
    "ipd_do_schedule_type_name": "วันเว้นวัน"
  },
  {
    "ipd_do_schedule_type_id": 3,
    "ipd_do_schedule_type_name": "ระบุวันในสัปดาห์"
  },
  {
    "ipd_do_schedule_type_id": 4,
    "ipd_do_schedule_type_name": "ระบุวันที่"
  }
]
```
