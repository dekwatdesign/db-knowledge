# `addiction_ecigarette_care`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| addiction_ecigarette_care_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| doctorcode | varchar(7) | YES |  | NULL |  |  |
| ecigarette_care_date | date | YES | MUL | NULL |  |  |
| ecigarette_care_time | time | YES | MUL | NULL |  |  |
| ecigarette_care_status | char(2) | YES |  | NULL |  |  |
| dw_chronic_number | varchar(30) | YES |  | NULL |  |  |
| icd10 | varchar(255) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ecigarette_care_date | ecigarette_care_date | no | 1 |
| ix_ecigarette_care_time | ecigarette_care_time | no | 1 |
| ix_hn | hn | no | 1 |
| ix_icd10 | icd10 | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | addiction_ecigarette_care_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
