# `clinic_hd_med_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_med_type_id | int(11) | NO | PRI | 0 |  |  |
| clinic_hd_med_type_name | varchar(200) | YES | UNI | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| dmis_code | int(11) | YES |  | NULL |  |  |
| hd_code | int(11) | YES |  | NULL |  |  |
| dmis_name | varchar(255) | YES |  | NULL |  |  |
| hd_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinic_hd_med_type_name | clinic_hd_med_type_name | yes | 1 |
| PRIMARY | clinic_hd_med_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "clinic_hd_med_type_id": 1,
    "clinic_hd_med_type_name": "Eprex 5000 u",
    "icode": null,
    "dmis_code": null,
    "hd_code": null,
    "dmis_name": null,
    "hd_name": null
  },
  {
    "clinic_hd_med_type_id": 2,
    "clinic_hd_med_type_name": "Hemax 4000 u",
    "icode": null,
    "dmis_code": null,
    "hd_code": null,
    "dmis_name": null,
    "hd_name": null
  },
  {
    "clinic_hd_med_type_id": 3,
    "clinic_hd_med_type_name": "Recormon 2000 u",
    "icode": null,
    "dmis_code": null,
    "hd_code": null,
    "dmis_name": null,
    "hd_name": null
  },
  {
    "clinic_hd_med_type_id": 4,
    "clinic_hd_med_type_name": "Mircera",
    "icode": null,
    "dmis_code": null,
    "hd_code": null,
    "dmis_name": null,
    "hd_name": null
  },
  {
    "clinic_hd_med_type_id": 5,
    "clinic_hd_med_type_name": "Hypercrit 4000 u",
    "icode": null,
    "dmis_code": null,
    "hd_code": null,
    "dmis_name": null,
    "hd_name": null
  },
  {
    "clinic_hd_med_type_id": 6,
    "clinic_hd_med_type_name": "Epiao 4000 u",
    "icode": null,
    "dmis_code": null,
    "hd_code": null,
    "dmis_name": null,
    "hd_name": null
  },
  {
    "clinic_hd_med_type_id": 7,
    "clinic_hd_med_type_name": "Vit. C 500 mg.",
    "icode": null,
    "dmis_code": null,
    "hd_code": null,
    "dmis_name": null,
    "hd_name": null
  },
  {
    "clinic_hd_med_type_id": 8,
    "clinic_hd_med_type_name": "Other",
    "icode": null,
    "dmis_code": null,
    "hd_code": null,
    "dmis_name": null,
    "hd_name": null
  }
]
```
