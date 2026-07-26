# `clinic_hd_o2_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_o2_type_id | int(11) | NO | PRI | 0 |  |  |
| clinic_hd_o2_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinic_hd_o2_type_name | clinic_hd_o2_type_name | yes | 1 |
| PRIMARY | clinic_hd_o2_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "clinic_hd_o2_type_id": 1,
    "clinic_hd_o2_type_name": "Room air"
  },
  {
    "clinic_hd_o2_type_id": 2,
    "clinic_hd_o2_type_name": "Cannula"
  },
  {
    "clinic_hd_o2_type_id": 3,
    "clinic_hd_o2_type_name": "Mask c' bag"
  },
  {
    "clinic_hd_o2_type_id": 4,
    "clinic_hd_o2_type_name": "ET c' T pice"
  },
  {
    "clinic_hd_o2_type_id": 5,
    "clinic_hd_o2_type_name": "ET c' Ventilator"
  }
]
```
