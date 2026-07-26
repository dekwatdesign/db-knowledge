# `dental_care_area`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dental_care_area_id | int(11) | NO | PRI | 0 |  |  |
| dtarea_code | varchar(10) | YES |  | NULL |  |  |
| dental_care_area_problem | varchar(200) | YES |  | NULL |  |  |
| dental_care_area_sealant | int(11) | YES |  | NULL |  |  |
| dental_care_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdental_care1 | dental_care_id | no | 1 |
| PRIMARY | dental_care_area_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
