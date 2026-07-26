# `opd_qs_location_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_qs_location_type_id | int(11) | NO | PRI | 0 |  |  |
| opd_qs_location_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opd_qs_location_type_name | opd_qs_location_type_name | yes | 1 |
| PRIMARY | opd_qs_location_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "opd_qs_location_type_id": 1,
    "opd_qs_location_type_name": "จุดซักประวัติ"
  },
  {
    "opd_qs_location_type_id": 2,
    "opd_qs_location_type_name": "ห้องตรวจแพทย์"
  },
  {
    "opd_qs_location_type_id": 3,
    "opd_qs_location_type_name": "ห้องจ่ายยา"
  },
  {
    "opd_qs_location_type_id": 4,
    "opd_qs_location_type_name": "ห้องตรวจปฏิบัติการ"
  }
]
```
