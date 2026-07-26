# `doctor_dep_dlg_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_dep_dlg_list_id | int(11) | NO | PRI | 0 |  |  |
| item_number | int(11) | YES |  | NULL |  |  |
| doctor | varchar(7) | YES | MUL | NULL |  |  |
| depcode | varchar(3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor | doctor | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | doctor_dep_dlg_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "doctor_dep_dlg_list_id": 22325,
    "item_number": 1,
    "doctor": "068",
    "depcode": "051",
    "hos_guid": null
  },
  {
    "doctor_dep_dlg_list_id": 22326,
    "item_number": 2,
    "doctor": "068",
    "depcode": "017",
    "hos_guid": null
  },
  {
    "doctor_dep_dlg_list_id": 22328,
    "item_number": 1,
    "doctor": "318",
    "depcode": "051",
    "hos_guid": null
  },
  {
    "doctor_dep_dlg_list_id": 22329,
    "item_number": 1,
    "doctor": "065",
    "depcode": "051",
    "hos_guid": null
  },
  {
    "doctor_dep_dlg_list_id": 22330,
    "item_number": 1,
    "doctor": "062",
    "depcode": "051",
    "hos_guid": null
  },
  {
    "doctor_dep_dlg_list_id": 22334,
    "item_number": 1,
    "doctor": "338",
    "depcode": "030",
    "hos_guid": null
  }
]
```
