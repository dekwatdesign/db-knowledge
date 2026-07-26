# `clinic_hd_nmgm_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_nmgm_type_id | int(11) | NO | PRI | 0 |  |  |
| clinic_hd_nmgm_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinic_hd_nmgm_type_name | clinic_hd_nmgm_type_name | yes | 1 |
| PRIMARY | clinic_hd_nmgm_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "clinic_hd_nmgm_type_id": 1,
    "clinic_hd_nmgm_type_name": "Psychosupport"
  },
  {
    "clinic_hd_nmgm_type_id": 2,
    "clinic_hd_nmgm_type_name": "Trenderlenburg position"
  },
  {
    "clinic_hd_nmgm_type_id": 3,
    "clinic_hd_nmgm_type_name": "Monitor V/S"
  },
  {
    "clinic_hd_nmgm_type_id": 4,
    "clinic_hd_nmgm_type_name": "Pause UF"
  },
  {
    "clinic_hd_nmgm_type_id": 5,
    "clinic_hd_nmgm_type_name": "Hypertonic solution"
  },
  {
    "clinic_hd_nmgm_type_id": 6,
    "clinic_hd_nmgm_type_name": "Oxygen therapy"
  },
  {
    "clinic_hd_nmgm_type_id": 7,
    "clinic_hd_nmgm_type_name": "Decrease Dialysate Temp"
  },
  {
    "clinic_hd_nmgm_type_id": 8,
    "clinic_hd_nmgm_type_name": "Hot compress"
  }
]
```
