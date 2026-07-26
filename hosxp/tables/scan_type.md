# `scan_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| scan_type_id | int(11) | NO | PRI | 0 |  |  |
| scan_type_name | varchar(200) | YES | UNI | NULL |  |  |
| unique_doc_per_vn | char(1) | YES |  | NULL |  |  |
| scan_group_id | int(11) | YES | MUL | NULL |  |  |
| protect_by_group | char(1) | YES |  | NULL |  |  |
| protect_by_user | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_scan_group_id | scan_group_id | no | 1 |
| ix_scan_type_name | scan_type_name | yes | 1 |
| PRIMARY | scan_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "scan_type_id": 1,
    "scan_type_name": "OPD Card",
    "unique_doc_per_vn": null,
    "scan_group_id": null,
    "protect_by_group": null,
    "protect_by_user": null
  },
  {
    "scan_type_id": 2,
    "scan_type_name": "CHART",
    "unique_doc_per_vn": null,
    "scan_group_id": null,
    "protect_by_group": null,
    "protect_by_user": null
  },
  {
    "scan_type_id": 3,
    "scan_type_name": "EKG",
    "unique_doc_per_vn": null,
    "scan_group_id": null,
    "protect_by_group": null,
    "protect_by_user": null
  },
  {
    "scan_type_id": 4,
    "scan_type_name": "PICTURE",
    "unique_doc_per_vn": null,
    "scan_group_id": null,
    "protect_by_group": null,
    "protect_by_user": null
  },
  {
    "scan_type_id": 5,
    "scan_type_name": "X-RAY",
    "unique_doc_per_vn": null,
    "scan_group_id": null,
    "protect_by_group": null,
    "protect_by_user": null
  },
  {
    "scan_type_id": 6,
    "scan_type_name": "LAB",
    "unique_doc_per_vn": null,
    "scan_group_id": null,
    "protect_by_group": null,
    "protect_by_user": null
  },
  {
    "scan_type_id": 7,
    "scan_type_name": "OR",
    "unique_doc_per_vn": null,
    "scan_group_id": null,
    "protect_by_group": null,
    "protect_by_user": null
  },
  {
    "scan_type_id": 8,
    "scan_type_name": "Patho",
    "unique_doc_per_vn": null,
    "scan_group_id": null,
    "protect_by_group": null,
    "protect_by_user": null
  }
]
```
