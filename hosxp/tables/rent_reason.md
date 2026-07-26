# `rent_reason`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| is_auto | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "id": 1,
    "name": "ตรวจสอบ",
    "hos_guid": null,
    "is_auto": null
  },
  {
    "id": 2,
    "name": "ศึกษา",
    "hos_guid": null,
    "is_auto": null
  },
  {
    "id": 98,
    "name": "ยืมเข้าตึกพร้อม Chart",
    "hos_guid": null,
    "is_auto": null
  },
  {
    "id": 99,
    "name": "ส่งตรวจยืมอัตโนมัติ",
    "hos_guid": null,
    "is_auto": null
  }
]
```
