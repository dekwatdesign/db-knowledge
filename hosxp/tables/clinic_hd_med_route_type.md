# `clinic_hd_med_route_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_med_route_type_id | int(11) | NO | PRI | 0 |  |  |
| clinic_hd_med_route_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinic_hd_med_route_type_name | clinic_hd_med_route_type_name | yes | 1 |
| PRIMARY | clinic_hd_med_route_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "clinic_hd_med_route_type_id": 1,
    "clinic_hd_med_route_type_name": "(sc)"
  },
  {
    "clinic_hd_med_route_type_id": 2,
    "clinic_hd_med_route_type_name": "(v)"
  }
]
```
