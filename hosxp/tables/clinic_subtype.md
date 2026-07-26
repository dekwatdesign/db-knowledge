# `clinic_subtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_subtype_id | int(11) | NO | PRI | NULL | auto_increment |  |
| clinic | char(3) | YES | MUL | NULL |  |  |
| subtype | int(11) | YES | MUL | NULL |  |  |
| name | varchar(150) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| nhso_export_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinic | clinic | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | no | 1 |
| ix_subtype | subtype | no | 1 |
| ix_unique_clinic | clinic | yes | 1 |
| ix_unique_clinic | subtype | yes | 2 |
| PRIMARY | clinic_subtype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "clinic_subtype_id": 3,
    "clinic": "049",
    "subtype": 1,
    "name": "SMI-V 1",
    "hos_guid": null,
    "nhso_export_code": null
  },
  {
    "clinic_subtype_id": 4,
    "clinic": "049",
    "subtype": 2,
    "name": "SMI-V 2",
    "hos_guid": null,
    "nhso_export_code": null
  },
  {
    "clinic_subtype_id": 5,
    "clinic": "049",
    "subtype": 3,
    "name": "SMI-V 3",
    "hos_guid": null,
    "nhso_export_code": null
  },
  {
    "clinic_subtype_id": 6,
    "clinic": "049",
    "subtype": 4,
    "name": "SMI-V 4",
    "hos_guid": null,
    "nhso_export_code": null
  },
  {
    "clinic_subtype_id": 7,
    "clinic": "049",
    "subtype": 5,
    "name": "SMI-V 5",
    "hos_guid": null,
    "nhso_export_code": null
  },
  {
    "clinic_subtype_id": 8,
    "clinic": "001",
    "subtype": 1,
    "name": "DM Type I",
    "hos_guid": null,
    "nhso_export_code": null
  },
  {
    "clinic_subtype_id": 9,
    "clinic": "001",
    "subtype": 2,
    "name": "DM Type II",
    "hos_guid": null,
    "nhso_export_code": null
  }
]
```
