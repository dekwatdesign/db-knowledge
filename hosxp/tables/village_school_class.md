# `village_school_class`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_school_class_id | int(11) | NO | PRI | 0 |  |  |
| village_school_class_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| export_code | varchar(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_school_class_name | village_school_class_name | yes | 1 |
| PRIMARY | village_school_class_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "village_school_class_id": 1,
    "village_school_class_name": "อนุบาล1",
    "hos_guid": null,
    "export_code": null
  },
  {
    "village_school_class_id": 2,
    "village_school_class_name": "อนุบาล2",
    "hos_guid": null,
    "export_code": null
  },
  {
    "village_school_class_id": 3,
    "village_school_class_name": "อนุบาล3",
    "hos_guid": null,
    "export_code": null
  },
  {
    "village_school_class_id": 4,
    "village_school_class_name": "ประถม1",
    "hos_guid": null,
    "export_code": null
  },
  {
    "village_school_class_id": 5,
    "village_school_class_name": "ประถม2",
    "hos_guid": null,
    "export_code": null
  },
  {
    "village_school_class_id": 6,
    "village_school_class_name": "ประถม3",
    "hos_guid": null,
    "export_code": null
  },
  {
    "village_school_class_id": 7,
    "village_school_class_name": "ประถม4",
    "hos_guid": null,
    "export_code": null
  },
  {
    "village_school_class_id": 8,
    "village_school_class_name": "ประถม5",
    "hos_guid": null,
    "export_code": null
  }
]
```
