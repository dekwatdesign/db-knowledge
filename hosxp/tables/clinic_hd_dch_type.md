# `clinic_hd_dch_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_dch_type_id | int(11) | NO | PRI | 0 |  |  |
| clinic_hd_dch_type_name | varchar(200) | YES | UNI | NULL |  |  |
| dmis_code | int(11) | YES |  | NULL |  |  |
| hd_code | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinic_hd_dch_type_name | clinic_hd_dch_type_name | yes | 1 |
| PRIMARY | clinic_hd_dch_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "clinic_hd_dch_type_id": 1,
    "clinic_hd_dch_type_name": "เดินกลับบ้าน",
    "dmis_code": null,
    "hd_code": null
  },
  {
    "clinic_hd_dch_type_id": 2,
    "clinic_hd_dch_type_name": "นั่งรถกลับบ้าน",
    "dmis_code": null,
    "hd_code": null
  },
  {
    "clinic_hd_dch_type_id": 3,
    "clinic_hd_dch_type_name": "เปลนอนกลับบ้าน",
    "dmis_code": null,
    "hd_code": null
  },
  {
    "clinic_hd_dch_type_id": 4,
    "clinic_hd_dch_type_name": "Admit",
    "dmis_code": null,
    "hd_code": null
  }
]
```
