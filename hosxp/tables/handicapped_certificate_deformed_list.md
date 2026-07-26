# `handicapped_certificate_deformed_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_certificate_deformed_list_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_certificate_deformed_list_name | char(50) | YES |  | NULL |  |  |
| handicapped_certificate_deformed_list_group | char(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_certificate_deformed_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "handicapped_certificate_deformed_list_id": 1,
    "handicapped_certificate_deformed_list_name": "ตาบอด",
    "handicapped_certificate_deformed_list_group": "2",
    "hos_guid": null
  },
  {
    "handicapped_certificate_deformed_list_id": 2,
    "handicapped_certificate_deformed_list_name": "ตาเลือนราง",
    "handicapped_certificate_deformed_list_group": "2",
    "hos_guid": null
  },
  {
    "handicapped_certificate_deformed_list_id": 3,
    "handicapped_certificate_deformed_list_name": "หูหนวก",
    "handicapped_certificate_deformed_list_group": "4",
    "hos_guid": null
  },
  {
    "handicapped_certificate_deformed_list_id": 4,
    "handicapped_certificate_deformed_list_name": "หูตึง",
    "handicapped_certificate_deformed_list_group": "4",
    "hos_guid": null
  },
  {
    "handicapped_certificate_deformed_list_id": 5,
    "handicapped_certificate_deformed_list_name": "สื่อความหมาย",
    "handicapped_certificate_deformed_list_group": "4",
    "hos_guid": null
  },
  {
    "handicapped_certificate_deformed_list_id": 6,
    "handicapped_certificate_deformed_list_name": "การเคลื่อนไหว",
    "handicapped_certificate_deformed_list_group": "3",
    "hos_guid": null
  },
  {
    "handicapped_certificate_deformed_list_id": 7,
    "handicapped_certificate_deformed_list_name": "ขาด",
    "handicapped_certificate_deformed_list_group": "3",
    "hos_guid": null
  },
  {
    "handicapped_certificate_deformed_list_id": 8,
    "handicapped_certificate_deformed_list_name": "อ่อนแรง",
    "handicapped_certificate_deformed_list_group": "3",
    "hos_guid": null
  }
]
```
