# `bed_status_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bed_status_type_id | int(11) | NO | PRI | 0 |  |  |
| bed_status_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| is_available | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bed_status_type_name | bed_status_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bed_status_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "bed_status_type_id": 1,
    "bed_status_type_name": "เตียงว่าง",
    "hos_guid": null,
    "is_available": null
  },
  {
    "bed_status_type_id": 2,
    "bed_status_type_name": "จ่ายเตียง",
    "hos_guid": null,
    "is_available": null
  },
  {
    "bed_status_type_id": 3,
    "bed_status_type_name": "ปิดเตียง",
    "hos_guid": null,
    "is_available": null
  },
  {
    "bed_status_type_id": 4,
    "bed_status_type_name": "ซ่อมแซม",
    "hos_guid": null,
    "is_available": null
  }
]
```
