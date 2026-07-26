# `report506status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(1) | NO | PRI |  |  |  |
| name | varchar(100) | YES |  | NULL |  |  |
| export_code | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "code": "1",
    "name": "ไม่ระบุ",
    "export_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "2",
    "name": "หาย",
    "export_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "3",
    "name": "ตาย",
    "export_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "4",
    "name": "ยังรักษาอยู่",
    "export_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "5",
    "name": "ไม่ทราบ",
    "export_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
