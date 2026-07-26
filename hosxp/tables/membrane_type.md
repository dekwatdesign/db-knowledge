# `membrane_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| membrane_type_id | int(11) | NO | PRI | 0 |  |  |
| membrane_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| dmis_export | int(11) | YES |  | NULL |  |  |
| hd_export | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_membrane_type_name | membrane_type_name | yes | 1 |
| PRIMARY | membrane_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "membrane_type_id": 1,
    "membrane_type_name": "Clear",
    "hos_guid": null,
    "dmis_export": null,
    "hd_export": null
  },
  {
    "membrane_type_id": 2,
    "membrane_type_name": "Mild",
    "hos_guid": null,
    "dmis_export": null,
    "hd_export": null
  },
  {
    "membrane_type_id": 3,
    "membrane_type_name": "Moderate",
    "hos_guid": null,
    "dmis_export": null,
    "hd_export": null
  },
  {
    "membrane_type_id": 4,
    "membrane_type_name": "Thick",
    "hos_guid": null,
    "dmis_export": null,
    "hd_export": null
  }
]
```
