# `pm25_retrospective`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(12) | NO | PRI |  |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| icd10_main | varchar(9) | YES |  | NULL |  |  |
| disease_group | varchar(15) | YES | MUL | NULL |  |  |
| exposure_suspected | char(1) | YES |  | NULL |  |  |
| hdc_reported | char(1) | YES |  | NULL |  |  |
| notes | varchar(500) | YES |  | NULL |  |  |
| staff | varchar(15) | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_disease_group | disease_group | no | 1 |
| ix_hn | hn | no | 1 |
| ix_vstdate | vstdate | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
