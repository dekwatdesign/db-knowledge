# `patient_house`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_house_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | UNI | NULL |  |  |
| census_id | varchar(20) | YES |  | NULL |  |  |
| latitude | varchar(100) | YES |  | NULL |  |  |
| longitude | varchar(100) | YES |  | NULL |  |  |
| house_type_id | int(11) | YES |  | NULL |  |  |
| house_subtype_id | int(11) | YES |  | NULL |  |  |
| house_condo_roomno | varchar(10) | YES |  | NULL |  |  |
| house_condo_name | varchar(50) | YES |  | NULL |  |  |
| house_housing_development_name | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique_hn | hn | yes | 1 |
| PRIMARY | patient_house_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
